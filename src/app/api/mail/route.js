import { sendMail } from "@/lib/mailer"

export const POST=async (req)=>{
    const {message,email}=await req.json()

  await   sendMail(email,message)
  return Response.json({
    message:"sucess"
  }, {status:200})
}