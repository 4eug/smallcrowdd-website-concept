import { createRequire } from 'node:module';
import fs from 'node:fs/promises';
import path from 'node:path';

const require = createRequire('/Users/eugene/.npm/_npx/31e32ef8478fbf80/node_modules/playwright/package.json');
const { chromium } = require('playwright');

const outDir = '/Users/eugene/Desktop/Develop/Nextjs/smallcrowdd-concept/output/playwright';
await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath:
    '/Users/eugene/Library/Caches/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-mac-arm64/chrome-headless-shell',
});

const viewports = [
  { name: 'mobile', width: 393, height: 852 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'smallDesktop', width: 1024, height: 900 },
  { name: 'desktop', width: 1440, height: 1000 },
];

const pages = [
  { name: 'home', url: 'http://127.0.0.1:3056/' },
  { name: 'test', url: 'http://127.0.0.1:3056/test' },
];

const results = [];

for (const pageDef of pages) {
  for (const vp of viewports) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });

    await page.goto(pageDef.url, { waitUntil: 'networkidle', timeout: 45000 });
    await page.addStyleTag({
      content: '[aria-label="Loading Smallcrowdd"] { display: none !important; }',
    });
    await page.waitForTimeout(800);

    const metrics = await page.evaluate(() => {
      const doc = document.documentElement;
      const body = document.body;
      const vw = window.innerWidth;
      const all = [...document.querySelectorAll('body *')];
      const overflow = all
        .filter((el) => !el.closest('[aria-label="Loading Smallcrowdd"], aside[aria-hidden="true"]'))
        .map((el) => {
          const r = el.getBoundingClientRect();
          return {
            tag: el.tagName,
            cls: String(el.getAttribute('class') || '').slice(0, 140),
            left: Math.round(r.left),
            right: Math.round(r.right),
            width: Math.round(r.width),
            text: (el.textContent || '').trim().slice(0, 80),
          };
        })
        .filter((x) => x.width > 0 && (x.left < -1 || x.right > vw + 1))
        .slice(0, 12);

      const badButtons = [...document.querySelectorAll('button, a')]
        .filter((el) => !el.closest('[aria-label="Loading Smallcrowdd"], aside[aria-hidden="true"]'))
        .map((el) => {
          const r = el.getBoundingClientRect();
          return {
            text: (el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 60),
            width: Math.round(r.width),
            scrollWidth: el.scrollWidth,
            height: Math.round(r.height),
            scrollHeight: el.scrollHeight,
          };
        })
        .filter((x) => x.scrollWidth > Math.ceil(x.width) + 2 || x.scrollHeight > Math.ceil(x.height) + 2)
        .slice(0, 12);

      return {
        viewport: `${vw}x${window.innerHeight}`,
        scrollWidth: doc.scrollWidth,
        bodyScrollWidth: body.scrollWidth,
        overflowCount: overflow.length,
        overflow,
        badButtons,
        bodyHeight: body.scrollHeight,
      };
    });

    const screenshot = path.join(outDir, `${pageDef.name}-${vp.name}.png`);
    await page.screenshot({ path: screenshot, fullPage: false });
    results.push({ page: pageDef.name, viewport: vp.name, screenshot, ...metrics });
    await page.close();
  }
}

const scrolledShots = [
  { name: 'home-mobile-work', url: 'http://127.0.0.1:3056/', width: 393, height: 852, selector: '#selected-work' },
  { name: 'home-mobile-tests', url: 'http://127.0.0.1:3056/', width: 393, height: 852, selector: '#tests-section' },
  { name: 'home-mobile-footer', url: 'http://127.0.0.1:3056/', width: 393, height: 852, selector: '#the-rising-times' },
  { name: 'test-mobile-cards', url: 'http://127.0.0.1:3056/test', width: 393, height: 852, selector: 'article' },
  { name: 'test-mobile-footer', url: 'http://127.0.0.1:3056/test', width: 393, height: 852, selector: 'footer' },
  { name: 'home-tablet-work', url: 'http://127.0.0.1:3056/', width: 768, height: 1024, selector: '#selected-work' },
  { name: 'test-tablet-featured', url: 'http://127.0.0.1:3056/test', width: 768, height: 1024, selector: 'text=Mirrors' },
];

for (const shot of scrolledShots) {
  const page = await browser.newPage({
    viewport: { width: shot.width, height: shot.height },
    deviceScaleFactor: 1,
  });

  await page.goto(shot.url, { waitUntil: 'networkidle', timeout: 45000 });
  await page.addStyleTag({
    content: '[aria-label="Loading Smallcrowdd"] { display: none !important; }',
  });
  await page.locator(shot.selector).first().scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);

  const screenshot = path.join(outDir, `${shot.name}.png`);
  await page.screenshot({ path: screenshot, fullPage: false });
  results.push({ page: shot.name, viewport: `${shot.width}x${shot.height}`, screenshot });
  await page.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
