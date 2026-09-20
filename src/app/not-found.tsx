import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Страница не найдена',
}

export default function NotFoundPage() {
  return (
    <main className="section flex min-h-[60vh] flex-col items-start justify-center py-20">
      <Image src="/coffee.svg" width={48} height={48} alt="" className="opacity-70" />

      <h1 className="heading mt-6 text-[clamp(2rem,5vw,3rem)] leading-tight">
        Такой страницы у нас нет
      </h1>

      <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-muted">
        Возможно, ссылка устарела или в адресе опечатка. Меню и контакты на месте — начните
        с них.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/menu" className="btn-primary">
          Открыть меню
        </Link>
        <Link href="/" className="btn-ghost">
          На главную
        </Link>
      </div>
    </main>
  )
}
