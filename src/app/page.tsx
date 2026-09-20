import Image from 'next/image'
import Link from 'next/link'
import SteamCanvas from '@/components/Hero/SteamCanvas'
import { contacts } from '@/data/site'
import { getSignatureProducts } from '@/lib/products'
import { categoryLabels } from '@/data/products'

const promises = [
  {
    title: 'Зерно свежей обжарки',
    text: 'Берём обжарку не старше двух недель у небольшого ростера. Мешок заканчивается за четыре дня, поэтому лежалого кофе у нас просто не бывает.',
  },
  {
    title: 'Бариста, который объяснит',
    text: 'Спросите, чем флэт уайт отличается от латте, — расскажем без снобизма и нальём попробовать, если сомневаетесь в выборе.',
  },
  {
    title: 'Переделаем без вопросов',
    text: 'Если напиток вышел не таким, как вы ждали, скажите — сделаем новый. Без чеков, объяснений и неловких пауз.',
  },
]

export default function Home() {
  const signature = getSignatureProducts()

  return (
    <main>
      <section className="relative isolate flex min-h-[32rem] items-end overflow-hidden bg-ink text-paper sm:min-h-[38rem]">
        <Image
          src="/main-background.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/80 to-ink/30"
        />
        <SteamCanvas className="pointer-events-none absolute inset-0 h-full w-full" />

        <div className="section relative z-10 pb-14 pt-24 sm:pb-20">
          <p className="text-sm text-crema">Вымышленная кофейня, учебный проект</p>

          <h1 className="heading mt-5 text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95]">
            Чай
            <span className="mx-3 hidden h-[3px] w-12 translate-y-[-0.35em] bg-crema align-middle sm:inline-block sm:w-20" />
            <br className="sm:hidden" />
            Кофский
          </h1>

          <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-paper/80">
            Название придумали в шутку, а кофе варим всерьёз. Пять кофейных напитков, два
            чая и еда к ним — короткое меню, которое мы делаем хорошо.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/menu" className="btn bg-crema text-ink hover:bg-paper">
              Посмотреть меню
            </Link>
            <Link href="/contact" className="btn-light">
              Как нас найти
            </Link>
          </div>

          <p className="mt-8 text-sm text-paper/60">
            {contacts.weekdays} · {contacts.weekend}
          </p>
        </div>
      </section>

      <section className="section py-20 sm:py-24">
        <h2 className="heading max-w-[18ch] text-[clamp(1.75rem,4vw,2.75rem)] leading-tight">
          Три вещи, за которые мы отвечаем
        </h2>

        <ul className="mt-10 border-t border-line">
          {promises.map(item => (
            <li
              key={item.title}
              className="grid gap-3 border-b border-line py-7 sm:grid-cols-[18rem_minmax(0,1fr)] sm:items-start sm:gap-10"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-marble py-20 sm:py-24">
        <div className="section">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="heading text-[clamp(1.75rem,4vw,2.75rem)] leading-tight">
              С чего начать
            </h2>
            <Link href="/menu" className="text-sm font-semibold text-brass hover:text-ink">
              Всё меню и цены
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {signature.map(product => (
              <article key={product.id} className="overflow-hidden rounded-2xl bg-paper">
                <div className="relative h-52 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 360px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <p className="text-xs text-muted">{categoryLabels[product.category]}</p>
                  <h3 className="heading text-xl">{product.name}</h3>
                  <p className="text-sm leading-relaxed text-muted">{product.summary}</p>
                  <p className="mt-2 font-semibold">{product.price} ₽</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <h2 className="heading text-[clamp(1.75rem,4vw,2.75rem)] leading-tight">
              Заходите
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              Кофейня занимает второй этаж старого дома с кофейным запахом на весь двор.
              Столиков шестнадцать, розетки есть у каждого второго.
            </p>

            <dl className="mt-8 flex flex-col gap-4 border-t border-line pt-6 text-[15px]">
              <div>
                <dt className="text-muted">Адрес</dt>
                <dd className="mt-1 font-medium">
                  {contacts.city}, {contacts.address}
                </dd>
              </div>
              <div>
                <dt className="text-muted">Часы</dt>
                <dd className="mt-1 font-medium">
                  {contacts.weekdays}
                  <br />
                  {contacts.weekend}
                </dd>
              </div>
              <div>
                <dt className="text-muted">Телефон</dt>
                <dd className="mt-1 font-medium">
                  <a href={contacts.phoneHref} className="hover:text-brass">
                    {contacts.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl bg-marble p-8">
            <h3 className="heading text-2xl">Ориентиры</h3>
            <ul className="flex flex-col gap-3 text-[15px]">
              {contacts.landmarks.map(landmark => (
                <li key={landmark} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                  {landmark}
                </li>
              ))}
            </ul>
            <p className="mt-2 border-t border-line pt-4 text-sm text-muted">
              Адрес и телефон вымышленные: это учебный проект, а не работающая кофейня.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
