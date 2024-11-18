import React from 'react';

const ContactPage = () => {
    return (
        <main className='bg-white h-[48.5rem]'>
            <h1 className="text-4xl text-center">Контакты</h1>
            <section className='p-16 flex flex-col gap-4'>
                <p>Если у вас есть вопросы или предложения, не стесняйтесь обращаться к нам. Мы всегда рады помочь и ответить на все ваши запросы.</p>
                <p><span className='font-bold'>Наш адрес: </span>ул. Примерная, д. 123</p>
                <p><span className='font-bold'>Телефон: </span>5-555-5555-55</p>
                <p><span className='font-bold'>Электронная почта: </span> info@coffeeshop.com</p>
                <p>Следите за нашими новостями и акциями на нашем сайте и в социальных сетях. Мы всегда рады видеть вас в нашей кофейне!</p>
            </section>
        </main>
    );
};

export default ContactPage;