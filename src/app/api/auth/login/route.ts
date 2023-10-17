import dotenv from "dotenv";
import mongoose from "mongoose";
import Validation from "@/util/Validation";

dotenv.config();
mongoose.connect(process.env.MONGO_URI!);

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const emailValidation = Validation.email(email);
  const passwordValidation = Validation.password(password);

  if (emailValidation.code !== 200) return Response.json(emailValidation);
  if (passwordValidation.code !== 200) return Response.json(passwordValidation);

  return Response.json({ token: "test" });
}
