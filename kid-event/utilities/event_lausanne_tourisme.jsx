
import axios from 'axios';
import cheerio from 'cheerio';

const fetchEventsLausanneTourisme = async (startDate, endDate) => {
  try {
    const response = await axios.get(
      `https://www.lausanne-tourisme.ch/wp/wp-admin/admin-ajax.php?action=filter_events&lang=fr&starting_date=${startDate}&ending_date=${endDate}&text_search=&tags%5B%5D=36`
    );
    const json = response.data;
    const html = json.html;
    const $ = cheerio.load(html);
    let events = [];
    let i = 0;

    $(".teaser").each((index, el) => {
      const title = $(el).find(".teaser__title").text().trim();
      const link = $(el).find("a").attr("href");
      const date = $(el).find(".date__date").text();
      const location = $(el).find(".teaser__subtitle").text().trim();
      const image = $(el).find(".teaser__image").attr('data-src');
      const id = i++;

      const event = {
        id: id,
        title: title,
        link: link,
        date: date,
        location: location,
        image: image,
      };
      console.log(event)
      events.push(event);
    });

    return events;
  } catch (err) {
    console.error(err);
  }
};

fetchEventsLausanneTourisme().then((events) => console.log(events));

export default fetchEventsLausanneTourisme