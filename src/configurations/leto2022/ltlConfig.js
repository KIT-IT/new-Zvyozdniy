///LtlConfig.js
export const ltlConfig = [
  {
    id: 1,
    time: '10:00 – 10:15',
    title: 'Сбор детей',
    description: 'Если вы вынуждены привести ребенка раньше этого времени, например, в 08:00, вы можете его оставить в холле дома культуры, однако ответственность за это время мы не несем.'
  },
  {
    id: 2,
    time: '10:15 – 10:30',
    title: 'Информационное собрание',
    description: 'Рассказываем, что сегодня в программе дня.'
  },
  {
    id: 3,
    time: '10:30 - 10:50',
    title: 'Танцевальная зарядка',
    description: 'Отличный вариант физической активности на свежем воздухе.'
  },
  {
    id: 4,
    time: '11:00 - 13:00',
    title: 'Тематический блок',
    description: 'Занятие по теме дня /создание личного проекта /практическое задание на закрепление материала.'
  },
  {
    id: 5,
    time: '13:00 - 14:00',
    title: 'Перерыв на обед / прогулка на свежем воздухе',
    description: 'Питание не входит в стоимость. Вы сами решаете уводить ребенка на обед домой или дать еду с собой.'
  },
  {
    id: 6,
    time: '14:00 – 16:00',
    title: 'Тематический блок',
    description: 'Занятие по теме дня /создание общего проекта /практическое задание на закрепление материала.'
  },
  {
    id: 7,
    time: '16:00 – 16:30',
    title: 'Перерыв / прогулка на свежем воздухе',
    description: 'Выходим на детскую площадку и корт со спортивным инвентарем.'
  },
  {
    id: 8,
    time: '16:30 – 18:00',
    title: 'Тематический блок',
    description: 'Подвижные игры на улице /квесты /квизы /просмотр фильма по теме дня'
  },
  {
    id: 9,
    time: '18:00',
    title: ' Завершение дня',
    description: 'Дом культуры открыт с 8.00 и до 22.00. До начала или после завершения занятий ваш ребенок может находиться в здании, однако ответственность за это время мы не несем. Родитель может разрешить ребенку приходить и уходить самостоятельно. Мы не несем ответственности в этом случае за вашего ребенка перед приходом и после его ухода из ДК.'
  }
]

export const ltlClubConfig = [
  {
    id: 1,
    title: '"Стражи Галактики"',
    description: 'Программа направлена на знакомство детей с основами английского языка и космоса ',
    date: '26 июня – 7 июля',
    age: '7 - 11 лет',
    duration: '10 дней',
    shedule: '10:00-18:00',
    maxNum: '20 участников',
    price: '8000 рублей',
    href: 'https://forms.gle/bnBnfR4VRPbDUMid9',
    icon: [
      {
        id: 1,
        src: require('../../assets/images/leto/ltlClubs/big-ben.png'),
        size: '200px',
        className: 'ltl-club-images__body_image-1 _icon-ltl'
      },
      {
        id: 2,
        src: require('../../assets/images/leto/ltlClubs/united-kingdom.png'),
        size: '100px',
        className: 'ltl-club-images__body_image-2 _icon-ltl'
      },
      {
        id: 3,
        src: require('../../assets/images/leto/ltlClubs/subway.png'),
        size: '150px',
        className: 'ltl-club-images__body_image-3 _icon-ltl'
      }
    ],
    daysOff: '01 июля и 02 июля – выходные дни',
    group: 'Две группы по 10 человек, распределенных по возрастному признаку',
    leaders: 'Куракова Любовь Васильевна, Матвеева Алика Владимировна',
    extra: false
  },
  {
    id: 2,
    title: '"У родных истоков"',
    description: 'Участники смены отправятся в увлекательное путешествие по знаменитым датам в истории России',
    date: '10 июля – 21 июля',
    age: '7 - 11 лет',
    duration: '10 дней',
    shedule: '10:00-18:00',
    maxNum: '20 участников',
    price: '8000 рублей',
    href: 'https://forms.gle/bnBnfR4VRPbDUMid9',
    icon: [
      {
        id: 1,
        src: require('../../assets/images/leto/ltlClubs/travel.png'),
        size: '200px',
        className: 'ltl-club-images__body_image-1 _icon-ltl'
      },
      {
        id: 2,
        src: require('../../assets/images/leto/ltlClubs/map.png'),
        size: '100px',
        className: 'ltl-club-images__body_image-2 _icon-ltl'
      },
      {
        id: 3,
        src: require('../../assets/images/leto/ltlClubs/travel-luggage.png'),
        size: '150px',
        className: 'ltl-club-images__body_image-3 _icon-ltl'
      }
    ],
    daysOff: '15 июля и 15 июля – выходные дни',
    leaders: 'Куракова Любовь Васильевна, Матвеева Алика Владимировна',
    extra: false
  },
  {
    id: 3,
    title: '"Очень умелые ручки"',
    description: 'Во время смены дети приобщаются к творчеству и рукоделию с использованием вторсырья - аппликации, роспись, поделки.',
    date: '24 июля – 04 августа',
    age: '7 - 11 лет',
    duration: '10 дней',
    shedule: '10:00-18:00',
    maxNum: '20 участников',
    price: '8000 рублей',
    href: 'https://forms.gle/bnBnfR4VRPbDUMid9',
    icon: [
      {
        id: 1,
        src: require('../../assets/images/leto/ltlClubs/rocket-launch.png'),
        size: '200px',
        className: 'ltl-club-images__body_image-1 _icon-ltl'
      },
      {
        id: 2,
        src: require('../../assets/images/leto/ltlClubs/periodic-table.png'),
        size: '100px',
        className: 'ltl-club-images__body_image-2 _icon-ltl'
      },
      {
        id: 3,
        src: require('../../assets/images/leto/ltlClubs/flask.png'),
        size: '150px',
        className: 'ltl-club-images__body_image-3 _icon-ltl'
      }
    ],
    daysOff: '29 июля и 30 июля – выходные дни',
    leaders: 'Куракова Любовь Васильевна, Матвеева Алика Владимировна',
    extra: false
  },
]