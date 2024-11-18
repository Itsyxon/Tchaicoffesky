export interface IData {
  id: number
  name: string
  image: string
  description: string
  price: number
}

const data: IData[] = [
  {
    id: 1,
    name: 'Эспрессо',
    image: '/t1.JPG',
    description:
      'Крепкий черный кофе, приготовленный в специально разработанном для этого устройстве: полуавтоматической кофемашине или кофеварке.',
    price: 200,
  },
  {
    id: 2,
    name: 'Капучино',
    image: '/t2.jpg',
    description:
      'Кофейный напиток итальянской кухни на основе эспрессо с добавлением в него подогретого до 65 градусов вспененного молока.',
    price: 250,
  },
  {
    id: 3,
    name: 'Флэт уайт',
    image: '/t3.jpeg',
    description:
      'Напиток на основе эспрессо и горячего молока, с тонким слоем шелковистой пенки. Для его приготовления берут двойную порцию эспрессо и молоко, идеально дополняющее выразительный кофейный вкус.',
    price: 350,
  },
  {
    id: 4,
    name: 'Латте',
    image: '/t4.jpg',
    description:
      'Кофейный напиток на основе молока, представляющий собой трёхслойную смесь из молочной пены, молока (latte) и кофе эспрессо.',
    price: 300,
  },
  {
    id: 5,
    name: 'Моккачино',
    image: '/t5.jpg',
    description:
      'Моккачино является разновидностью капучино с добавлением белого, черного или молочного шоколада.',
    price: 300,
  },
  {
    id: 6,
    name: 'Чёрный чай',
    image: '/t6.jpg',
    description: 'Классический чёрный чай.',
    price: 100,
  },
  {
    id: 7,
    name: 'Зелёный чай',
    image: '/t7.jpg',
    description: 'Классический зелёный чай.',
    price: 100,
  },
]

export default data
