'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Product, categoryLabels } from '@/data/products'
import { useModal } from '@/context/ModalContext'
import ProductModal from '@/components/Modals/ProductModal'

type Filter = 'all' | 'coffee' | 'tea' | 'food'

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Всё меню' },
  { value: 'coffee', label: categoryLabels.coffee },
  { value: 'tea', label: categoryLabels.tea },
  { value: 'food', label: categoryLabels.food },
]

type Props = {
  initialItems: Product[]
}

const MenuBrowser: React.FC<Props> = ({ initialItems }) => {
  const { openModal } = useModal()
  const [category, setCategory] = useState<Filter>('all')
  const [search, setSearch] = useState('')
  const [items, setItems] = useState(initialItems)
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const isFirstRender = useRef(true)
  const drinks = items.filter(item => item.image)
  const food = items.filter(item => !item.image)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const controller = new AbortController()
    const timer = setTimeout(async () => {
      setStatus('loading')

      const params = new URLSearchParams({ category })
      if (search.trim()) params.set('q', search.trim())

      try {
        const response = await fetch(`/api/products?${params}`, {
          signal: controller.signal,
        })

        if (!response.ok) throw new Error('Не удалось загрузить меню')

        const data = (await response.json()) as { items: Product[] }
        setItems(data.items)
        setStatus('idle')
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          setStatus('error')
        }
      }
    }, 250)

    return () => {
      controller.abort()
      clearTimeout(timer)
    }
  }, [category, search])

  return (
    <>
      <div className="flex flex-col gap-4 border-y border-line py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Категории">
          {filters.map(filter => (
            <button
              key={filter.value}
              type="button"
              aria-pressed={category === filter.value}
              onClick={() => setCategory(filter.value)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                category === filter.value
                  ? 'border-ink bg-ink text-paper'
                  : 'border-line text-ink hover:border-ink'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 rounded-full border border-line px-4 py-2 sm:w-72">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
            <path d="m11 11 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            value={search}
            onChange={event => setSearch(event.target.value)}
            placeholder="Найти по вкусу или названию"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
          />
        </label>
      </div>

      {status === 'error' ? (
        <p className="py-16 text-center text-[15px] text-muted">
          Меню не загрузилось. Обновите страницу или позвоните нам — продиктуем всё голосом.
        </p>
      ) : items.length === 0 ? (
        <p className="py-16 text-center text-[15px] text-muted">
          Ничего не нашлось. Попробуйте «латте», «чай» или сбросьте фильтр.
        </p>
      ) : (
        <div
          className={`transition-opacity ${status === 'loading' ? 'opacity-60' : 'opacity-100'}`}
        >
          {drinks.length ? (
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {drinks.map(product => (
                <li key={product.id}>
                  <button
                    type="button"
                    onClick={() =>
                      openModal(<ProductModal product={product} />, { label: product.name })
                    }
                    className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-paper text-left transition-colors hover:border-ink"
                  >
                    <span className="relative block h-56 w-full overflow-hidden">
                      <Image
                        src={product.image as string}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                        className="object-cover"
                      />
                    </span>

                    <span className="flex flex-1 flex-col gap-2 p-5">
                      <span className="text-xs text-muted">
                        {categoryLabels[product.category]}
                        {product.volumeMl ? `, ${product.volumeMl} мл` : null}
                      </span>
                      <span className="heading text-xl">{product.name}</span>
                      <span className="text-sm leading-relaxed text-muted">
                        {product.summary}
                      </span>
                      <span className="mt-3 flex items-center justify-between border-t border-line pt-3">
                        <span className="font-semibold">{product.price} ₽</span>
                        <span className="text-sm text-brass group-hover:text-ink">
                          Подробнее
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : null}

          {food.length ? (
            <section className={drinks.length ? 'mt-16' : 'mt-10'}>
              <h2 className="heading text-2xl">К напиткам</h2>
              <p className="mt-2 max-w-prose text-sm text-muted">
                Готовим на месте, кроме выпечки — её привозят к семи утра.
              </p>

              <ul className="mt-6 border-t border-line">
                {food.map(product => (
                  <li key={product.id}>
                    <button
                      type="button"
                      onClick={() =>
                        openModal(<ProductModal product={product} />, { label: product.name })
                      }
                      className="group flex w-full items-baseline gap-4 border-b border-line py-5 text-left"
                    >
                      <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                        <span className="heading text-lg group-hover:text-brass">
                          {product.name}
                        </span>
                        <span className="text-sm text-muted">{product.summary}</span>
                      </span>
                      <span
                        aria-hidden
                        className="mx-2 hidden h-px flex-1 self-center bg-line sm:block"
                      />
                      <span className="ml-auto whitespace-nowrap font-semibold sm:ml-0">
                        {product.price} ₽
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      )}
    </>
  )
}

export default MenuBrowser
