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
  },
    {
    id: "u3", lvl: "B1", vip: true,
    title: "Модуль 3: Работа, карьера и фразовые глаголы",
    guide: "Деловая лексика, собеседования, Present Perfect и популярные фразовые глаголы.",
    steps: [
      {
        type: "lesson", name: "Фразовые глаголы", stepsTotal: 3,
        qs: [
          { t: "c", h: "Что означает?", q: "Never give up", s: "Never give up", o: ["Не дари", "Никогда не сдавайся", "Не спи", "Продолжай"], a: 1 },
          { t: "b", h: "Собери: «Зависит от погоды»", q: "It depends on the weather", s: "It depends on the weather", w: ["weather", "depends", "It", "the", "on"], ans: ["It", "depends", "on", "the", "weather"] },
          { t: "c", h: "Переведи", q: "Look forward to", s: "I look forward to seeing you", o: ["Смотреть вперед", "С нетерпением ждать", "Оглядываться", "Искать выход"], a: 1 },
          { t: "c", h: "Переведи", q: "To figure out", s: "I will figure it out", o: ["Забыть", "Разобраться / понять", "Посчитать", "Отказаться"], a: 1 },
          { t: "b", h: "Собери: «Не могу терпеть»", q: "I cannot put up with it", s: "I cannot put up with it", w: ["with", "put", "I", "it", "cannot", "up"], ans: ["I", "cannot", "put", "up", "with", "it"] }
        ]
      },
      {
        type: "chest", name: "Карьерный сундук", xpBonus: 100, foodBonus: 5
      },
      {
        type: "lesson", name: "Офис и проекты", stepsTotal: 3,
        qs: [
          { t: "c", h: "Переведи термин", q: "Deadline", s: "We met the deadline", o: ["Крайний срок сдачи", "Начало проекта", "Отпуск", "Зарплата"], a: 0 },
          { t: "c", h: "Переведи фразу", q: "He got promoted last month", s: "He got promoted last month", o: ["Его уволили", "Его повысили в прошлом месяце", "Ушел в отпуск", "Нашел работу"], a: 1 },
          { t: "c", h: "Что означает?", q: "Remote work", s: "Remote work", o: ["Работа в офисе", "Удаленная работа", "Ночная смена", "Стажировка"], a: 1 },
          { t: "b", h: "Собери: «С моей точки зрения»", q: "In my point of view", s: "In my point of view", w: ["of", "my", "In", "view", "point"], ans: ["In", "my", "point", "of", "view"] },
          { t: "c", h: "Что означает?", q: "Reliable partner", s: "Reliable partner", o: ["Странный", "Надежный партнер", "Богатый", "Новый"], a: 1 }
        ]
      }
    ]
  },
  {
    id: "u4", lvl: "B2–C1", vip: true,
    title: "Модуль 4: Идиомы носителей и бизнес",
    guide: "Выражения, которые каждый день используют американцы и британцы в живой речи.",
    steps: [
      {
        type: "lesson", name: "Идиомы США", stepsTotal: 3,
        qs: [
          { t: "c", h: "Что означает?", q: "Piece of cake", s: "It is a piece of cake", o: ["Кусок торта", "Пара пустяков / очень легко", "Сложная задача", "Обед"], a: 1 },
          { t: "c", h: "Переведи", q: "Let's call it a day", s: "Let's call it a day", o: ["Удачный день", "На сегодня хватит / закругляемся", "Позвоним днем", "Заново"], a: 1 },
          { t: "c", h: "Что значит?", q: "Under the weather", s: "I feel under the weather", o: ["Под дождем", "Приболеть / плохо себя чувствовать", "В восторге", "Прогноз"], a: 1 },
          { t: "b", h: "Собери: «На одной волне»", q: "We are on the same page", s: "We are on the same page", w: ["same", "We", "page", "on", "are", "the"], ans: ["We", "are", "on", "the", "same", "page"] },
          { t: "c", h: "Переведи", q: "To spill the beans", s: "Who spilled the beans?", o: ["Просыпать фасоль", "Проболтаться / выдать секрет", "Ужин", "Беспорядок"], a: 1 }
        ]
      },
      {
        type: "chest", name: "Сундук Мастера", xpBonus: 150, foodBonus: 7
      },
      {
        type: "lesson", name: "Сложная грамматика", stepsTotal: 3,
        qs: [
          { t: "c", h: "Выбери форму", q: "Had I known, I ___ differently", s: "Had I known, I would have acted differently", o: ["will act", "would act", "would have acted", "acted"], a: 2 },
          { t: "c", h: "Вставь глагол", q: "I wish I ___ more free time", s: "I wish I had more free time", o: ["have", "had", "will have", "having"], a: 1 },
          { t: "b", h: "Собери с инверсией", q: "Never have I seen this", s: "Never have I seen this", w: ["I", "seen", "Never", "this", "have"], ans: ["Never", "have", "I", "seen", "this"] },
          { t: "c", h: "Что означает?", q: "Albeit", s: "He accepted, albeit reluctantly", o: ["Хотя / пусть и", "Потому что", "Вместо", "Напротив"], a: 0 },
          { t: "c", h: "Переведи", q: "Ambiguous", s: "Ambiguous", o: ["Амбициозный", "Двусмысленный / неоднозначный", "Очевидный", "Огромный"], a: 1 }
        ]
      }
    ]
  }

];
