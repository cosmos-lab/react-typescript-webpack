import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("contains the welcome text", async () => {
    await page.goto("http://localhost:4000");
    await page.waitForFunction(
      'document.querySelector("body").innerText.includes("React and TypeScript")'
    );
  });

  afterAll(() => browser.close());
});
