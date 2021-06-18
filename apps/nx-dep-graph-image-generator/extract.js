const http = require('http');
const fs = require('fs');
const handler = require('serve-handler');
const { chromium } = require('playwright');

const port = 3000;
const screenshot_name = 'dep-graph.png';

const server = http.createServer((request, response) =>
  handler(request, response, {
    public: './dep-graph-page',
  }),
);
server.listen(port, async () => {
  const browser = await chromium.launch();

  const page = await browser.newPage();
  await page.goto(`http://localhost:${port}`);

  const elementHandle = await page.$('#graph-container');

  if (fs.existsSync(screenshot_name)) fs.rmSync(screenshot_name);

  await elementHandle.screenshot({ path: screenshot_name });

  await browser.close();

  server.close();
});
