'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { contacts, navLinks } from '@/data/site'

const Header = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const linkClass = (href: string) =>
    `text-sm transition-colors hover:text-brass ${
      pathname === href ? 'text-brass' : 'text-ink'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="section flex h-[72px] items-center justify-between gap-4">
        <Link href="/" aria-label="ЧайКофский, на главную" className="flex items-center gap-3">
          <Image src="/logo.svg" width={44} height={44} alt="" priority />
          <span className="heading text-lg leading-none">ЧайКофский</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href={contacts.phoneHref} className="text-sm font-semibold hover:text-brass">
            {contacts.phone}
          </a>
          <Link href="/contact" className="btn-primary px-5 py-2.5">
            Как пройти
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setOpen(value => !value)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M15 5 5 15M5 5l10 10"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <nav
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-paper md:hidden"
      >
        <ul className="section flex flex-col py-2">
          {navLinks.map(link => (
            <li key={link.href} className="border-b border-line last:border-0">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[15px]"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="py-3">
            <a href={contacts.phoneHref} className="text-[15px] font-semibold">
              {contacts.phone}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
