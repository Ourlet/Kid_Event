import { NextApiRequest, NextApiResponse } from "next";
import schedule from "node-schedule";
import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const job = schedule.scheduleJob("40 09 * * *", function () {
    const msg = {
      to: "lavigne.xavier@gmail.com",
      from: "lavigne.xavier@gmail.com",
      subject: "Cheers to a new day!",
      text: "Hope your day has been well!",
    };

    mail
      .send(msg)
      .then(() => {
        console.log("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  });

  res.status(200).json({ message: "Email scheduled successfully!" });
}
