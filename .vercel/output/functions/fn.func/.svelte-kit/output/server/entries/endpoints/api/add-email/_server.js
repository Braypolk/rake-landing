import { j as json } from "../../../../chunks/index.js";
import mailchimp from "@mailchimp/mailchimp_marketing";
import dotenv from "dotenv";
dotenv.config();
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API,
  server: "us21"
});
async function POST({ request }) {
  const data = await request.json();
  const email = data["email"];
  try {
    const response = await mailchimp.lists.addListMember("e441224583", {
      email_address: email,
      status: "subscribed"
    });
    return json({
      status: 200,
      body: "Successfully added contact"
    });
  } catch (error) {
    return json({
      status: 500,
      body: "Failed to add email"
    });
  }
}
export {
  POST
};
