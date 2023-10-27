import dotenv from "dotenv";
dotenv.config();
const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const password = data.get("password");
    if (password == process.env.PASS) {
      return { success: true };
    }
    return { success: false };
  }
};
export {
  actions
};
