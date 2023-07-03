import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    try {
      const response = await axios.put(
        "https://api.sendgrid.com/v3/marketing/contacts",
        {
          contacts: [{ email: `${req.body.email}` }],
          list_ids: [process.env.SENDGRID_MAILING_ID],
        },
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          },
        }
      );

      res.status(200).send({
        message:
          "Your email has been successfully added to the mailing list. Welcome 👋",
      });
    } catch (error) {
      console.error("Error adding email to the mailing list:", error);
      res.status(500).send({
        message:
          "Oops, there was a problem with your subscription. Please try again or contact us.",
        error: error.message, // Include the error message in the response
      });
    }
  } else {
    res.status(400).send({
      message: "Invalid request method. Only PUT requests are allowed.",
    });
  }
}
