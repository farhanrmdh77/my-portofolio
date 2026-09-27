import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export async function GET() {
  try {
    const messages = await redis.lrange('guestbook', 0, -1);
    return NextResponse.json(messages || []);
  } catch (error) {
    console.error("KV GET Error:", error);
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, sender, text, timestamp, userName } = body;

    const newMessage = {
      id,
      sender,
      text,
      timestamp,
      userName,
    };

    // Push to the end of the list
    await redis.rpush('guestbook', newMessage);
    
    // Keep only the latest 150 messages
    await redis.ltrim('guestbook', -150, -1);

    return NextResponse.json(newMessage);
  } catch (error) {
    console.error("KV POST Error:", error);
    return NextResponse.json({ error: 'Failed to post message' }, { status: 500 });
  }
}
