import puppeteer from 'puppeteer';

const startDate = '01.05.2023'
const endDate = '10.05.2023'


  const fetchEventsTempsLibre = async (startDate, endDate) => {
    let browser;
    try {
      browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
      });

      // Open a new page
      const page = await browser.newPage();

      // On this new page:
      await page.goto(
        `https://www.tempslibre.ch/recherche/#dateFrom=${startDate}&dateTo=${endDate}&touscantons=-1`
      );

      const eventData = await page.evaluate(() => {
        const events = document.querySelectorAll(".container-link");
        const data = [];

        events.forEach((event) => {
          const title = event.getAttribute("title");
          const image = event.querySelector("img")?.getAttribute("src");
          const link = event.getAttribute("href");
          const date = event
            .querySelector("div.exergue.date div.dark")
            ?.textContent.trim();
          const location = event.querySelector(".place").textContent.trim();

          data.push({
            title,
            image,
            link,
            date,
            location,
          });
        });

        return data;
      });

      console.log(eventData);
      return eventData;

    } catch (e) {
      console.error('scrape failed', e)
    }
    finally {
      // Close the browser
      await browser?.close();
    }

  };

fetchEventsTempsLibre().then((eventData) => console.log(eventData));

export default fetchEventsTempsLibre