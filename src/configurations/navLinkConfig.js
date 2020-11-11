export const navList  = [
    {
        type: 'about',
        id: 1,
        to: '/about',
        text: 'О Нас',
        isIcon: true,
        isDrop: true,
        drop: [
            {
                id: 1,
                to: '/personal',
                text: 'Наша Команда'
            },
            {
                id: 2,
                to: '/documents',
                text: 'Правовая Информация'
            },
            {
                id: 3,
                to: '/contacts',
                text: 'Контакты'
            },
            {
                id: 4,
                to: '/questions',
                text: 'Часто Задоваемые Вопросы'
            }
        ]
    },
    {
        type: 'libraries',
        id: 2,
        to: '/libraries',
        text: 'Библиотеки',
        isIcon: true,
        isDrop: true,
        drop: [
            {
                id: 6,
                to: '/libreries/pahraLib',
                text: 'Краснопахорская библиотека'
            },
            {
                id: 7,
                to: '/libreries/pahraKidsLib',
                text: 'Краснопахорская Детская'
            },
            {
                id: 8,
                to: '/libreries/bilovoLib',
                text: 'Быловская Библиотека'
            },
            {
                id: 9,
                to: '/libreries/minzagLib',
                text: 'Библиотка Минзаг'
            }
        ]
    },
    {
        type: 'events',
        id: 3,
        to: '/events',
        text: 'События',
        isIcon: false,
        isDrop: false,
        drop: []
    },
    {
        type: 'clubs',
        id: 4,
        to: '/clubs',
        text: 'Клубные Формирования',
        isIcon: true,
        isDrop: true,
        drop: [
            {
                id: 10,
                to: '/dance',
                text: 'Танцы'
            },
            {
                id: 11,
                to: '/art',
                text: 'Арт'
            },
            {
                id: 12,
                to: '/music',
                text: 'Музыка'
            },
            {
                id: 13,
                to: '/theatre',
                text: 'Театр'
            },
            {
                id: 14,
                to: '/circ',
                text: 'Оригинальный Жанр'
            },
            {
                id: 15,
                to: '/youngers',
                text: 'Раннее Развитие'
            },
            {
                id: 16,
                to: '/moscow-longevity',
                text: 'Московское Долголетие'
            }
        ]
    },
    {
        type: 'services',
        id: 5,
        to: '/services',
        text: 'Услуги',
        isIcon: true,
        isDrop: true,
        drop: [
            {
                id: 10,
                to: '/',
                text: 'Аренда Зала'
            },
            {
                id: 11,
                to: '/',
                text: 'Студия Звукозаписи'
            },
            {
                id: 12,
                to: '/',
                text: 'Проведение Мероприятий'
            }
        ]
    },
    {
        type: 'festivals',
        id: 6,
        to: '/festivals',
        text: 'Фестивали',
        isIcon: false,
        isDrop: false,
        drop: []
    }
]