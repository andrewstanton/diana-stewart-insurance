import { NextResponse } from "next/server"

import axios from "axios"

// Environment Variables
const { NEXT_PUBLIC_WORDPRESS } = process.env

// eslint-disable-next-line import/prefer-default-export
export async function POST(req: any, res: any) {
  const { id } = res.params
  const body = await req.json()
  const data = body

  // No Form ID provided
  if (!id) throw new Error("No Form ID provided")

  try {
    await axios({
      method: "post",
      url: `${NEXT_PUBLIC_WORDPRESS}/wp-json/gf/v2/forms/${id}/submissions`,
      data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })

    return NextResponse.json(
      { status: "message sent" },
      {
        status: 200,
      }
    )
  } catch (e: any) {
    console.error({
      error: e.response.data,
    })

    console.error({ response: e.response.data.validation_messages })

    return NextResponse.json(
      { error: e.response.data.validation_messages },
      {
        status: 500,
      }
    )
  }
}
