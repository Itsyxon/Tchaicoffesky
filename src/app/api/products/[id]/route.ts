import { NextResponse } from 'next/server'
import { getProductById } from '@/lib/products'

type Context = {
  params: Promise<{ id: string }>
}

export async function GET(_request: Request, { params }: Context) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    return NextResponse.json(
      {
        error: 'Напиток не найден',
        message: `В меню нет позиции с идентификатором «${id}».`,
      },
      { status: 404 },
    )
  }

  return NextResponse.json(product)
}
