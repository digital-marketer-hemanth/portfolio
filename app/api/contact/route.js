import axios from 'axios';
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();

  const msg = `📩 New Contact\n\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`;

  // TELEGRAM
  await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    chat_id: process.env.TELEGRAM_CHAT_ID,
    text: msg
  });

  // WHATSAPP (CallMeBot)
  await axios.get(`https://api.callmebot.com/whatsapp.php`, {
    params:{
      phone: process.env.WHATSAPP_NUMBER,
      apikey: process.env.WHATSAPP_API_KEY,
      text: msg
    }
  });

  return NextResponse.json({ success:true });
}
