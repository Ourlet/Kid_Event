const mail = require("@sendgrid/mail");
import Email_template from "../../components/Email_template";
import Email_template_list from "../../components/Email_template_list.jsx";
import ReactDOMServer from "react-dom/server";

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    const body = JSON.parse(req.body);
    console.log({ body });

    const url =
      "https://kid-event.vercel.app/api/hello?startDate=06-06-2023&endDate=09-06-2023";
    console.log("Call API ", url);

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const emailHtml = ReactDOMServer.renderToString(
      <Email_template_list name={body.name} email={body.email} events={data} />
    );

    const message = `
      Name: ${body.name}\r\n
      Email: ${body.email}\r\n
    `;

    await mail.send({
      to: `${body.email}`,
      from: "lavigne.xavier@gmail.com",
      subject: "New Message!",
      text: message,
      html: emailHtml,
    });

    res.status(200).json({ status: "Ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};
