import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { contacts } from '@/data/site'

export const metadata = {
  title: 'О кофейне',
  description:
    'Как устроена кофейня «ЧайКофский»: откуда зерно, кто варит и почему мы держим меню коротким.',
}

const steps = [
  {
    title: 'Взвешиваем',
    text: 'На каждую порцию — 18 граммов зерна. Весы стоят рядом с кофемолкой, а не «на глаз», поэтому вкус не гуляет от смены к смене.',
  },
  {
    title: 'Настраиваем помол',
    text: 'Утром бариста варит пробный шот и подкручивает помол под влажность и свежесть мешка. Первая чашка дня уходит в раковину — это нормально.',
  },
  {
    title: 'Наливаем',
    text: 'Эспрессо отдаём в течение десяти секунд после пролива, молоко взбиваем под конкретный напиток. Кофе, который постоял, не подаём.',
  },
]

export default function AboutPage() {
  return (
    <main>
      <section className="section py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-16">
          <div>
            <h1 className="heading text-[clamp(2rem,5vw,3.25rem)] leading-tight">
              Кофейня, где помнят ваш заказ
            </h1>

            <div className="mt-6 flex max-w-prose flex-col gap-4 text-[15px] leading-relaxed text-muted">
              <p>
                «ЧайКофский» начался в 2019 году с одной кофемашины и спора о том, как
                писать название. Победил вариант с шуткой — и с тех пор нас находят именно
                по ней.
              </p>
              <p>
                Мы держим короткое меню: пять кофейных напитков, два чая и пять позиций
                еды. Это осознанно. Чем меньше позиций, тем лучше каждая — бариста не
                разрывается между двадцатью рецептами, а мы точно знаем, что закончится к
                пятнице.
              </p>
              <p>
                Зерно привозит небольшой ростер, обжарка не старше двух недель. Чай берём
                листовой, в пакетиках не подаём принципиально. Молоко фермерское, овсяное и
                безлактозное всегда есть.
              </p>
              <p>
                По утрам у нас тихо и можно работать, после шести собирается компания и
                становится шумно. Если вам нужно первое — приходите до полудня, если
                второе — после.
              </p>
            </div>

            <Link href="/menu" className="btn-primary mt-8">
              Смотреть меню
            </Link>
          </div>

          <figure className="overflow-hidden rounded-2xl">
            <Image
              src="/t2.jpg"
              width={640}
              height={800}
              alt="Капучино на стойке кофейни"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </section>

      <section className="bg-marble py-16 sm:py-20">
        <div className="section">
          <h2 className="heading text-[clamp(1.75rem,4vw,2.5rem)] leading-tight">
            Как получается чашка
          </h2>

          <ol className="mt-10 grid gap-8 sm:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t border-ink/15 pt-5">
                <span className="font-display text-sm text-brass">{index + 1}</span>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section py-16 sm:py-20">
        <div className="rounded-2xl bg-ink px-6 py-12 text-paper sm:px-12">
          <h2 className="heading max-w-[20ch] text-[clamp(1.5rem,3.5vw,2.25rem)] leading-tight">
            Приходите с утра, пока свежий хлеб от пекарни напротив
          </h2>
          <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-paper/70">
            {contacts.city}, {contacts.address}. {contacts.weekdays}, {contacts.weekend}.
          </p>
          <Link href="/contact" className="btn-light mt-7">
            Контакты и часы
          </Link>
        </div>
      </section>
    </main>
  )
}
