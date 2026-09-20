import React from 'react'
import { contacts } from '@/data/site'

export const metadata = {
  title: 'Контакты',
  description:
    'Контакты вымышленной кофейни «ЧайКофский»: часы работы, телефон и почта. Учебный проект.',
}

const details = [
  {
    label: 'Адрес',
    value: `${contacts.city}, ${contacts.address}`,
    note: contacts.addressNote,
  },
  {
    label: 'Часы работы',
    value: contacts.weekdays,
    note: contacts.weekend,
  },
  {
    label: 'Телефон',
    value: contacts.phone,
    href: contacts.phoneHref,
    note: 'Звоните, если нужно занять большой стол',
  },
  {
    label: 'Почта',
    value: contacts.email,
    href: `mailto:${contacts.email}`,
    note: 'Пишите про сотрудничество и аренду зала',
  },
]

export default function ContactPage() {
  return (
    <main className="section py-16 sm:py-20">
      <header className="max-w-prose">
        <h1 className="heading text-[clamp(2rem,5vw,3.25rem)] leading-tight">Контакты</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">
          Столик заранее не держим: приходите, место найдётся почти всегда. Если вас больше
          шести человек, лучше позвонить — соберём длинный стол у окна.
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-[24rem_minmax(0,1fr)] lg:gap-16">
        <dl className="border-t border-line">
          {details.map(item => (
            <div key={item.label} className="border-b border-line py-5">
              <dt className="text-sm text-muted">{item.label}</dt>
              <dd className="mt-1 text-lg font-medium">
                {item.href ? (
                  <a href={item.href} className="hover:text-brass">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
              {item.note ? <p className="mt-1 text-sm text-muted">{item.note}</p> : null}
            </div>
          ))}
        </dl>

        <div className="flex flex-col gap-6 rounded-2xl bg-marble p-8">
          <div>
            <h2 className="heading text-2xl">Как нас найти</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Кофейня выдуманная — это учебный проект, поэтому карты здесь нет. Ориентиры
              оставляем для полноты картины.
            </p>
          </div>

          <ul className="flex flex-col gap-3 border-t border-line pt-6 text-[15px]">
            {contacts.landmarks.map(landmark => (
              <li key={landmark} className="flex gap-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                {landmark}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
