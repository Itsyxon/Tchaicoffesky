import Link from 'next/link'
import React from 'react'
import { contacts, navLinks } from '@/data/site'

const Footer = () => {
  return (
    <footer className="mt-24 bg-ink text-paper">
      <div className="section grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="heading text-xl">ЧайКофский</p>
          <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-paper/70">
            Вымышленная кофейня из учебного проекта. Варим с 2019 года, закрываемся
            последними.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Страницы</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-paper/70">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-crema">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Где мы</p>
          <p className="mt-3 text-sm leading-relaxed text-paper/70">
            {contacts.city}
            <br />
            {contacts.address}
            <br />
            {contacts.weekdays}
            <br />
            {contacts.weekend}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Связаться</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-paper/70">
            <li>
              <a href={contacts.phoneHref} className="hover:text-crema">
                {contacts.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contacts.email}`} className="hover:text-crema">
                {contacts.email}
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Itsyxon"
                target="_blank"
                rel="noreferrer"
                className="hover:text-crema"
              >
                GitHub автора
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="section flex flex-col gap-2 py-5 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Кофейня «ЧайКофский»</span>
          <span>Учебный проект, Daniil Itsyxon</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
