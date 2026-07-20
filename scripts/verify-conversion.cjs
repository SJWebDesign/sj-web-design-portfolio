const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');
const { chromium } = require('playwright');

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

(async () => {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const launchOptions = { headless: true };
  if (fs.existsSync(edgePath)) launchOptions.executablePath = edgePath;
  const browser = await chromium.launch(launchOptions);
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));

  const pageUrl = pathToFileURL(path.resolve(__dirname, '..', 'index.html')).href;
  await page.goto(pageUrl, { waitUntil: 'domcontentloaded' });

  assert(await page.title() === 'S&J Web Design | Websites From $49.99/Month With Real Agent Support', 'SEO title changed unexpectedly');
  assert(await page.locator('h1').count() === 1, 'The page must have exactly one H1');
  assert((await page.locator('h1').textContent()).includes('$49.99/month'), 'Hero must show the starting price');

  for (const id of ['difference', 'services', 'print', 'pricing', 'about', 'owner', 'faq', 'contact']) {
    assert(await page.locator(`#${id}`).count() === 1, `Missing #${id} section`);
  }

  assert(await page.locator('.trust-point').count() === 4, 'Verified-facts trust strip is incomplete');
  assert(await page.locator('.comparison-wrap, .comparison-table').count() === 0, 'Competitor comparison section must remain removed');
  assert(!(await page.locator('body').innerText()).includes('Jottful'), 'Jottful must not appear in visible page content');
  assert(await page.locator('#contact-form input, #contact-form textarea').count() === 5, 'Inquiry form must contain only five fields');
  assert(await page.locator('#faq details').count() === 10, 'FAQ objection coverage is incomplete');
  assert(await page.locator('.mobile-cta').evaluate(element => getComputedStyle(element).display) === 'none', 'Mobile CTA must be hidden on desktop');

  await page.locator('#comparison-monthly').fill('100');
  await page.locator('#comparison-setup').fill('200');
  assert((await page.locator('#savings-result').textContent()).includes('$800.12'), 'Savings calculator returned the wrong amount');

  const desktopOverflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  assert(desktopOverflow <= 1, `Desktop layout overflows by ${desktopOverflow}px`);

  await page.setViewportSize({ width: 390, height: 844 });
  assert(await page.locator('.mobile-cta').evaluate(element => getComputedStyle(element).display) === 'flex', 'Mobile CTA is not visible');
  await page.locator('.menu-button').click();
  assert(await page.locator('.menu-button').getAttribute('aria-expanded') === 'true', 'Mobile menu did not expose its open state');
  assert(await page.locator('#main-nav').evaluate(element => getComputedStyle(element).display) === 'grid', 'Mobile menu did not open');

  const mobileOverflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  const overflowContext = mobileOverflow > 1
    ? await page.evaluate(() => {
      const prism = document.querySelector('.prism-stage');
      const comparison = document.querySelector('.comparison-wrap');
      return {
        htmlScrollWidth: document.documentElement.scrollWidth,
        bodyScrollWidth: document.body.scrollWidth,
        prismOverflow: getComputedStyle(prism).overflow,
        prismRect: prism.getBoundingClientRect().toJSON(),
        comparisonRect: comparison.getBoundingClientRect().toJSON(),
        comparisonClientWidth: comparison.clientWidth,
        comparisonScrollWidth: comparison.scrollWidth
      };
    })
    : {};
  const overflowingElements = mobileOverflow > 1
    ? await page.evaluate(() => [...document.querySelectorAll('body *')]
      .map(element => ({
        element: `${element.tagName.toLowerCase()}${element.id ? `#${element.id}` : ''}${element.className && typeof element.className === 'string' ? `.${element.className.trim().replace(/\s+/g, '.')}` : ''}`,
        left: Math.round(element.getBoundingClientRect().left),
        right: Math.round(element.getBoundingClientRect().right)
      }))
      .filter(item => item.left < -1 || item.right > window.innerWidth + 1)
      .slice(0, 12))
    : [];
  assert(mobileOverflow <= 1, `Mobile layout overflows by ${mobileOverflow}px: ${JSON.stringify({ overflowContext, overflowingElements })}`);

  await page.emulateMedia({ reducedMotion: 'reduce' });
  const revealOpacity = await page.locator('.reveal').first().evaluate(element => getComputedStyle(element).opacity);
  assert(revealOpacity === '1', 'Reduced-motion content must remain visible');
  assert(pageErrors.length === 0, `Browser errors: ${pageErrors.join('; ')}`);

  await browser.close();
  console.log('Conversion psychology verification passed: desktop, mobile, calculator, navigation, form structure, and reduced motion.');
})().catch(error => {
  console.error(error.message);
  process.exit(1);
});
