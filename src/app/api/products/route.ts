import { NextRequest, NextResponse } from 'next/server'
import { getProducts, isCategory } from '@/lib/products'

export function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const category = searchParams.get('category')

  if (category && category !== 'all' && !isCategory(category)) {
    return NextResponse.json(
      {
        error: 'Неизвестная категория',
        message: `Категория «${category}» не существует. Доступны: coffee, tea, food.`,
      },
      { status: 400 },
    )
  }

  const result = getProducts({
    category,
    q: searchParams.get('q'),
    limit: searchParams.get('limit'),
  })

  return NextResponse.json(result)
}
