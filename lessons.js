var UNITS = [
  {
    id: "u1", lvl: "A1", vip: false,
    title: "Модуль 1: Первые шаги и приветствия",
    guide: "Базовые слова, глагол to be (am/is/are) и простые фразы для общения.",
    steps: [
      {
        type: "lesson", name: "Приветствия", stepsTotal: 3,
        qs: [
          { t: "c", h: "Переведи слово", q: "Apple", s: "Apple", o: ["Яблоко", "Груша", "Банан", "Апельсин"], a: 0 },
          { t: "c", h: "Переведи фразу", q: "Good morning", s: "Good morning", o: ["Спокойной ночи", "Доброе утро", "Добрый вечер", "Пока"], a: 1 },
          { t: "b", h: "Собери: «Я студент»", q: "I am a student", s: "I am a student", w: ["student", "I", "a", "am", "is"], ans: ["I", "am", "a", "student"] },
          { t: "c", h: "Что означает?", q: "Water", s: "Water", o: ["Молоко", "Сок", "Вода", "Чай"], a: 2 },
          { t: "b", h: "Собери: «Как дела?»", q: "How are you", s: "How are you", w: ["you", "How", "is", "are"], ans: ["How", "are", "you"] }
        ]
      },
      {
        type: "lesson", name: "Семья и дом", stepsTotal: 3,
        qs: [
          { t: "c", h: "Переведи", q: "Brother", s: "Brother", o: ["Отец", "Дядя", "Брат", "Сын"], a: 2 },
          { t: "b", h: "Собери: «Она моя сестра»", q: "She is my sister", s: "She is my sister", w: ["my", "She", "sister", "is", "are"], ans: ["She", "is", "my", "sister"] },
          { t: "c", h: "Заполни пропуск", q: "We ___ happy", s: "We are happy", o: ["am", "is", "are", "be"], a: 2 },
          { t: "b", h: "Собери: «У меня есть собака»", q: "I have a dog", s: "I have a dog", w: ["dog", "have", "I", "a", "has"], ans: ["I", "have", "a", "dog"] },
          { t: "c", h: "Что означает?", q: "Kitchen", s: "Kitchen", o: ["Спальня", "Кухня", "Ванная", "Балкон"], a: 1 }
        ]
      },
      {
        type: "chest", name: "Сундук Фокси", xpBonus: 40, foodBonus: 3
      },
      {
        type: "lesson", name: "Кафе и еда", stepsTotal: 3,
        qs: [
          { t: "c", h: "Переведи", q: "I need a cup of coffee", s: "I need a cup of coffee", o: ["Хочу чай", "Мне нужна чашка кофе", "Кофе холодный", "Купил кофе"], a: 1 },
          { t: "c", h: "Как спросить цену?", q: "How much is it?", s: "How much is it?", o: ["Где это?", "Сколько это стоит?", "Кто это?", "Что это?"], a: 1 },
          { t: "b", h: "Собери: «Счет, пожалуйста»", q: "The bill please", s: "The bill please", w: ["please", "The", "menu", "bill"], ans: ["The", "bill", "please"] },
          { t: "c", h: "Что означает?", q: "Delicious", s: "Delicious", o: ["Острый", "Сладкий", "Очень вкусный", "Горький"], a: 2 },
          { t: "b", h: "Собери: «Я хочу воды»", q: "I want some water", s: "I want some water", w: ["water", "want", "I", "some"], ans: ["I", "want", "some", "water"] }
        ]
      }
    ]
  },
  {
    id: "u2", lvl: "A2–B1", vip: true,
    title: "Модуль 2: Путешествия и сленг США",
    guide: "Прошедшее время, аэропорт, фразовые глаголы и живой разговорный сленг.",
    steps: [
      {
        type: "lesson", name: "Путешествия", stepsTotal: 3,
        qs: [
          { t: "c", h: "Выбери форму", q: "Yesterday I ___ to the cinema", s: "Yesterday I went to the cinema", o: ["go", "went", "gone", "going"], a: 1 },
          { t: "b", h: "Собери: «Где вокзал?»", q: "Where is the train station", s: "Where is the train station", w: ["train", "Where", "station", "is", "the"], ans: ["Where", "is", "the", "train", "station"] },
          { t: "c", h: "Что означает?", q: "Boarding pass", s: "Boarding pass", o: ["Паспорт", "Посадочный талон", "Багаж", "Таможня"], a: 1 },
          { t: "c", h: "Переведи", q: "Flight delayed", s: "Flight delayed", o: ["Рейс отменен", "Рейс задерживается", "Посадка окончена", "Прямой рейс"], a: 1 },
          { t: "b", h: "Собери: «Она работает из дома»", q: "She works from home", s: "She works from home", w: ["from", "She", "home", "works", "at"], ans: ["She", "works", "from", "home"] }
        ]
      },
      {
        type: "chest", name: "VIP Сундук", xpBonus: 80, foodBonus: 5
      },
      {
        type: "lesson", name: "Живой сленг", stepsTotal: 3,
        qs: [
          { t: "c", h: "Что значит?", q: "No cap", s: "That was amazing, no cap", o: ["Без кепки", "Без вранья / реально", "Нет денег", "Не понимаю"], a: 1 },
          { t: "c", h: "Что означает?", q: "Ghosting", s: "He is ghosting me", o: ["Ужастики", "Внезапно пропасть и перестать отвечать", "Притворяться", "Ночью"], a: 1 },
          { t: "c", h: "Переведи сленг", q: "You nailed it!", s: "You nailed it!", o: ["Прибил", "Ты сделал идеально / затащил!", "Сломал", "Забудь"], a: 1 },
          { t: "c", h: "Что значит?", q: "Red flag", s: "That is a red flag", o: ["Тревожный звоночек / плохой признак", "Судья", "Отличный знак", "Свидание"], a: 0 },
          { t: "b", h: "Собери сленг", q: "Good vibes only", s: "Good vibes only", w: ["only", "Good", "vibes"], ans: ["Good", "vibes", "only"] }
        ]
      }
    ]
  }
];
