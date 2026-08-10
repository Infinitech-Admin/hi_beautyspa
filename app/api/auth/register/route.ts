import { NextRequest, NextResponse } from 'next/server'
import { RegisterSchema } from '@/lib/schemas'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate request body
    const result = RegisterSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', errors: result.error.flatten() },
        { status: 400 }
      )
    }

    const { firstName, lastName, email, phone, password } = result.data

    // TODO: In production, this would:
    // 1. Check if email exists in database
    // 2. Hash password with bcrypt
    // 3. Create user record
    // 4. Send confirmation email
    // 5. Create session/JWT

    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      firstName,
      lastName,
      email,
      phone,
      membership: 'bronze',
      createdAt: new Date().toISOString(),
    }

    return NextResponse.json(
      { success: true, user: newUser, message: 'Account created successfully' },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
