import { connectToDB } from "@utils/database";
import User from "@models/User";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const prompts = await User.findById(params.id);
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (err) {
    return new Response("Failed to fetch user", { status: 500 });
  }
};
