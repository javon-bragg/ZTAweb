
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { sendMail } from '@/lib/mail'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = schema.parse(body)
    await sendMail({
      subject: `New Inquiry from ${data.name}`,
      text: `Email: ${data.email}

${data.message}`,
    })
    return NextResponse.json({ ok: true })
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 400 })
  }
}
