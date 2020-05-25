import puppeteer from 'puppeteer';
import schedule from 'node-schedule';
import { DataCache } from './cache';

async function initCrawler() {
  console.log(`[${new Date()}] starting scraper`);
}

export function startScraper() {
  schedule.scheduleJob('*/1 * * * *', () => {
    initCrawler();
  });
}

async function crawlUrl(page, pageObject) {
  try {
    // /* Blocking images
    await page.setRequestInterception(true);
    page.on('request', (request) => {
      if (request.resourceType === 'image') request.abort();
      else request.continue();
    });

    const response = await page.goto(pageObject.url, {
      waitUntil: 'networkidle',
    });
  } finally {
    await releasePage(page);
  }
}

async function releasePage(page) {
  if (page) {
    await page.close();
  }
}
