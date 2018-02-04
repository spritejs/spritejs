const puppeteer = require('puppeteer');

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.tracing.start({path: './trace.json'});
  await page.goto('http://localhost:9090/test.html');
  await sleep(5000);
  await page.tracing.stop();

  await page.screenshot({path: 'test.png'});

  await browser.close();
})();
