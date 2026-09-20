'use client'

import Image from 'next/image'
import React from 'react'
import { Product, categoryLabels } from '@/data/products'

const ProductModal: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <article
      className={
        product.image
          ? 'grid gap-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]'
          : 'grid gap-0'
      }
    >
      {product.image ? (
        <div className="relative h-56 w-full sm:h-full sm:min-h-[22rem]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, 420px"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="flex flex-col gap-5 p-6 sm:p-8">
        <div>
          <p className="text-sm text-muted">
            {categoryLabels[product.category]}
            {product.volumeMl ? `, ${product.volumeMl} мл` : null}
          </p>
          <h2 className="heading mt-1 text-3xl">{product.name}</h2>
        </div>

        <p className="text-[15px] leading-relaxed text-muted">{product.description}</p>

        <div>
          <p className="text-sm font-semibold">Во вкусе слышно</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {product.notes.map(note => (
              <li
                key={note}
                className="rounded-full bg-marble px-3 py-1 text-[13px] text-ink"
              >
                {note}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-auto flex items-baseline gap-2 border-t border-line pt-5">
          <span className="font-display text-3xl">{product.price} ₽</span>
          {product.volumeMl ? (
            <span className="text-sm text-muted">за порцию {product.volumeMl} мл</span>
          ) : null}
        </p>
      </div>
    </article>
  )
}

export default ProductModal
