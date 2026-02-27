
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ ok: true, service: 'Threat Zero Analytics', time: new Date().toISOString() })
}
