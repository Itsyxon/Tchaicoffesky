import { headers } from 'next/headers'
import React from 'react'
import MenuBrowser from '@/components/Menu/MenuBrowser'
import { Product } from '@/data/products'
import { getProducts } from '@/lib/products'

export const metadata = {
  title: 'Меню',
  description:
    'Кофе и чай в кофейне «ЧайКофский»: эспрессо, капучино, флэт уайт, латте, моккачино и листовой чай с ценами.',
}

async function loadProducts(): Promise<Product[]> {
  const headerList = await headers()
  const host = headerList.get('host')
  const protocol = headerList.get('x-forwarded-proto') ?? 'http'

  try {
    const response = await fetch(`${protocol}://${host}/api/products`, {
      cache: 'no-store',
    })

    if (!response.ok) throw new Error('Меню недоступно')

    const data = (await response.json()) as { items: Product[] }
    return data.items
  } catch {
    return getProducts().items
  }
}

export default async function MenuPage() {
  const items = await loadProducts()

  return (
    <main className="section py-16 sm:py-20">
      <header className="max-w-prose">
        <h1 className="heading text-[clamp(2rem,5vw,3.25rem)] leading-tight">Меню</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">
          Пять кофейных напитков, два чая и еда к ним. Молоко меняем на овсяное или
          безлактозное бесплатно, сиропы — на выбор. Нажмите на позицию, чтобы прочитать
          состав и вкусовые ноты.
        </p>
      </header>

      <div className="mt-10">
        <MenuBrowser initialItems={items} />
      </div>
    </main>
  )
}
