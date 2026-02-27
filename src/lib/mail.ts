
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY!)
const to = process.env.CONTACT_TO_EMAIL!
const from = process.env.CONTACT_FROM_EMAIL! // e.g., no-reply@threatzeroanalytics.io

export async function sendMail({ subject, text }: { subject: string; text: string }) {
  await resend.emails.send({ from, to, subject, text })
}
