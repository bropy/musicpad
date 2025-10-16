import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { dbService } from '@/app/entites/db'

const createCommentSchema = z.object({
  userName: z.string().min(1).max(100),
  title: z.string().min(1).max(200),
  content: z.string().min(1),
})

export const revalidate = 30 // Revalidate every 30 seconds

export async function GET() {
  try {
    const comments = await dbService.comments.findAll()
    return NextResponse.json(comments, {
      headers: {
        'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=59',
      },
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = createCommentSchema.parse(body)

    const comment = await dbService.comments.create(validatedData)
    return NextResponse.json(comment, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 })
    }
    return NextResponse.json({ error: 'Failed to create comment' }, { status: 500 })
  }
}

