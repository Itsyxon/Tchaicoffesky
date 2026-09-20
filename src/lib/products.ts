import products, { Category, Product } from '@/data/products'

export type ProductQuery = {
  category?: string | null
  q?: string | null
  limit?: string | null
}

export type ProductListResult = {
  items: Product[]
  total: number
  category: Category | 'all'
  query: string
}

const categories: Category[] = ['coffee', 'tea', 'food']

export const isCategory = (value: unknown): value is Category =>
  typeof value === 'string' && categories.includes(value as Category)

export function getProducts({ category, q, limit }: ProductQuery = {}): ProductListResult {
  const search = (q ?? '').trim().toLowerCase()
  const activeCategory = isCategory(category) ? category : 'all'

  let items = products

  if (activeCategory !== 'all') {
    items = items.filter(item => item.category === activeCategory)
  }

  if (search) {
    items = items.filter(item =>
      [item.name, item.summary, ...item.notes]
        .join(' ')
        .toLowerCase()
        .includes(search),
    )
  }

  const total = items.length
  const parsedLimit = Number(limit)

  if (Number.isInteger(parsedLimit) && parsedLimit > 0) {
    items = items.slice(0, parsedLimit)
  }

  return { items, total, category: activeCategory, query: search }
}

export function getProductById(id: string): Product | undefined {
  return products.find(item => String(item.id) === id || item.slug === id)
}

export function getSignatureProducts(): Product[] {
  const signature = products.filter(item => item.signature)
  return signature.length ? signature : products.slice(0, 3)
}
