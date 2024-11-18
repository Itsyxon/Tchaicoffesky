"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  const goToMenuHandler = () => {
    router.push('/menu')
  }

  return (
    <main className="bg-white">
      <section className="py-2 bg-[url('/main-background.jpg')] h-[35rem] bg-cover text-white flex justify-center items-center flex-col gap-5">
        <h1 className="text-4xl">ЧайКоффский</h1>
        <p>Самый ароматный кофе и натуральный чай</p>
        <button onClick={goToMenuHandler} className="p-2 border-white border-2 transition hover:bg-orange-800">Наше меню</button>
      </section>
      <section>
        <div className="flex p-24 gap-6">
          <div className="flex-1 flex items-center justify-center flex-col text-center gap-6">
            <div className="text-xl">Натуральные ингредиенты</div>
            <Image src='/coffee.svg' width={50} height={50} alt="coffee-icon" />
            <p>В наших напитках содержатся только натуральные ингредиенты. Мы тщательно подбираем поставщиков и контролируем качество.</p>
          </div>
          <div className="flex-1 flex items-center justify-center flex-col text-center gap-6">
            <div className="text-xl">Квалифицированный персонал</div>
            <Image src='/staff.svg' width={50} height={50} alt="coffee-icon" />
            <p>Наши бариста обладают высоким профессионализмом и всегда готовы порадовать вас вкусным напитком, сделанным с любовью и умением.</p>
          </div>
          <div className="flex-1 flex items-center justify-center flex-col text-center gap-6">
            <div className="text-xl">Обратная связь</div>
            <Image src='/message.svg' width={50} height={50} alt="coffee-icon" />
            <p>Мы ценим каждого нашего гостя и стремимся создать приятный опыт для каждого. Поэтому мы с радостью ответим на ваши вопросы в любом формате.</p>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center p-4">
          <h2 className="text-4xl my-3">Ближайшая кофейня</h2>
          <p className="text-2xl">Найдите нас на картах!</p>
          <iframe className="mt-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2130720.9441586593!2d152.25578009107556!3d-33.801030131136145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2z0KHQuNC00L3QtdC5INCd0L7Qsi4g0K7Qti4g0KPRjdC70YzRgSwg0JDQstGB0YLRgNCw0LvQuNGP!5e1!3m2!1sru!2sru!4v1731950052972!5m2!1sru!2sru" width="100%" height="650" loading="lazy"></iframe>
        </div>
      </section>
    </main>
  );
}
