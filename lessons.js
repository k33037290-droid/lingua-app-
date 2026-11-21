var RAW_CURRICULUM = [
  // A1 (5 юнитов)
  { lvl:"A1", vip:false, t:"Приветствия и знакомство", pairs:[["Hello","Привет"],["Good morning","Доброе утро"],["Thank you","Спасибо"],["Please","Пожалуйста"],["Friend","Друг"],["Name","Имя"],["Welcome","Добро пожаловать"],["Goodbye","До свидания"]] },
  { lvl:"A1", vip:false, t:"Семья и люди", pairs:[["Mother","Мама"],["Father","Папа"],["Brother","Брат"],["Sister","Сестра"],["Family","Семья"],["Child","Ребёнок"],["Parents","Родители"],["Neighbour","Сосед"]] },
  { lvl:"A1", vip:false, t:"Еда и напитки", pairs:[["Apple","Яблоко"],["Water","Вода"],["Bread","Хлеб"],["Coffee","Кофе"],["Tea","Чай"],["Breakfast","Завтрак"],["Delicious","Вкусный"],["Hungry","Голодный"]] },
  { lvl:"A1", vip:false, t:"Дом и вещи", pairs:[["House","Дом"],["Room","Комната"],["Kitchen","Кухня"],["Window","Окно"],["Table","Стол"],["Key","Ключ"],["Phone","Телефон"],["Book","Книга"]] },
  { lvl:"A1", vip:false, t:"Числа и время", pairs:[["Today","Сегодня"],["Tomorrow","Завтра"],["Yesterday","Вчера"],["Morning","Утро"],["Night","Ночь"],["Week","Неделя"],["Hour","Час"],["Always","Всегда"]] },

  // A2 (5 юнитов)
  { lvl:"A2", vip:false, t:"Путешествия и аэропорт", pairs:[["Passport","Паспорт"],["Ticket","Билет"],["Luggage","Багаж"],["Exit","Выход"],["Flight","Рейс"],["Hotel","Отель"],["Map","Карта"],["Journey","Путешествие"]] },
  { lvl:"A2", vip:false, t:"Город и транспорт", pairs:[["Street","Улица"],["Station","Станция"],["Subway","Метро"],["Bridge","Мост"],["Square","Площадь"],["Traffic","Пробки"],["Corner","Угол"],["Crosswalk","Переход"]] },
  { lvl:"A2", vip:false, t:"Покупки и деньги", pairs:[["Price","Цена"],["Discount","Скидка"],["Cash","Наличные"],["Receipt","Чек"],["Expensive","Дорогой"],["Cheap","Дешёвый"],["Wallet","Кошелёк"],["Customer","Покупатель"]] },
  { lvl:"A2", vip:false, t:"Здоровье и спорт", pairs:[["Doctor","Врач"],["Health","Здоровье"],["Medicine","Лекарство"],["Strong","Сильный"],["Training","Тренировка"],["Victory","Победа"],["Team","Команда"],["Champion","Чемпион"]] },
  { lvl:"A2", vip:false, t:"Погода и природа", pairs:[["Weather","Погода"],["Sunny","Солнечно"],["Rain","Дождь"],["Snow","Снег"],["Wind","Ветер"],["Forest","Лес"],["River","Река"],["Mountain","Гора"]] },

  // B1 (5 юнитов)
  { lvl:"B1", vip:false, t:"Работа и карьера", pairs:[["Experience","Опыт"],["Salary","Зарплата"],["Interview","Собеседование"],["Colleague","Коллега"],["Schedule","Расписание"],["Project","Проект"],["Success","Успех"],["Goal","Цель"]] },
  { lvl:"B1", vip:false, t:"Технологии и интернет", pairs:[["Device","Устройство"],["Password","Пароль"],["Security","Безопасность"],["Network","Сеть"],["Download","Скачать"],["Update","Обновление"],["Screen","Экран"],["Battery","Батарея"]] },
  { lvl:"B1", vip:false, t:"Эмоции и характер", pairs:[["Confident","Уверенный"],["Honest","Честный"],["Brave","Храбрый"],["Curious","Любопытный"],["Patient","Терпеливый"],["Generous","Щедрый"],["Calm","Спокойный"],["Proud","Гордый"]] },
  { lvl:"B1", vip:false, t:"Образование и наука", pairs:[["Knowledge","Знания"],["University","Университет"],["Exam","Экзамен"],["Research","Исследование"],["Mistake","Ошибка"],["Solution","Решение"],["Subject","Предмет"],["Degree","Степень"]] },
  { lvl:"B1", vip:false, t:"Живые идиомы B1", pairs:[["Piece of cake","Пара пустяков"],["Break a leg","Ни пуха ни пера"],["Once in a blue moon","Очень редко"],["Under the weather","Нездоровится"],["Cost an arm and a leg","Стоить целое состояние"],["Hit the sack","Пойти спать"],["Call it a day","Закончить на сегодня"],["So far so good","Пока всё идёт отлично"]] },
  // B2 VIP (5 юнитов)
  { lvl:"B2", vip:true, t:"Бизнес и переговоры", pairs:[["Deadline","Крайний срок"],["Agreement","Соглашение"],["Profit","Прибыль"],["Investment","Инвестиция"],["Strategy","Стратегия"],["Negotiate","Вести переговоры"],["Contract","Контракт"],["Partnership","Партнёрство"]] },
  { lvl:"B2", vip:true, t:"Финансы и экономика", pairs:[["Currency","Валюта"],["Inflation","Инфляция"],["Revenue","Выручка"],["Budget","Бюджет"],["Asset","Актив"],["Risk","Риск"],["Market","Рынок"],["Exchange","Обмен"]] },
  { lvl:"B2", vip:true, t:"Психология и лидерство", pairs:[["Motivation","Мотивация"],["Decision","Решение"],["Influence","Влияние"],["Responsibility","Ответственность"],["Mindset","Мышление"],["Habit","Привычка"],["Focus","Фокус"],["Leadership","Лидерство"]] },
  { lvl:"B2", vip:true, t:"Публичные выступления", pairs:[["Audience","Аудитория"],["Confidence","Уверенность"],["Argument","Аргумент"],["Persuade","Убеждать"],["Attention","Внимание"],["Summary","Итог"],["Feedback","Обратная связь"],["Clarity","Ясность"]] },
  { lvl:"B2", vip:true, t:"Продвинутая лексика B2", pairs:[["Crucial","Критически важный"],["Achievement","Достижение"],["Challenge","Вызов / задача"],["Opportunity","Возможность"],["Efficient","Эффективный"],["Reliable","Надёжный"],["Flexible","Гибкий"],["Ambitious","Амбициозный"]] },

  // C1 VIP (5 юнитов)
  { lvl:"C1", vip:true, t:"Идиомы профи уровня C1", pairs:[["Hit the nail on the head","Попасть в самую точку"],["Bite the bullet","Стиснуть зубы и решиться"],["Burn the midnight oil","Работать до глубокой ночи"],["Think outside the box","Мыслить нестандартно"],["Cut corners","Срезать углы / халтурить"],["The ball is in your court","Теперь твой ход"],["Beat around the bush","Ходить вокруг да около"],["Pull someone's leg","Подшучивать над кем-то"]] },
  { lvl:"C1", vip:true, t:"Искусственный интеллект и IT", pairs:[["Algorithm","Алгоритм"],["Encryption","Шифрование"],["Vulnerability","Уязвимость"],["Scalability","Масштабируемость"],["Automation","Автоматизация"],["Architecture","Архитектура"],["Deployment","Развёртывание"],["Optimization","Оптимизация"]] },
  { lvl:"C1", vip:true, t:"Дипломатия и право", pairs:[["Jurisdiction","Юрисдикция"],["Consensus","Консенсус"],["Liability","Ответственность"],["Precedent","Прецедент"],["Compliance","Соблюдение правил"],["Clause","Пункт договора"],["Arbitration","Арбитраж"],["Sovereignty","Суверенитет"]] },
  { lvl:"C1", vip:true, t:"Академический английский", pairs:[["Hypothesis","Гипотеза"],["Methodology","Методология"],["Phenomenon","Феномен"],["Implication","Последствие / вывод"],["Discrepancy","Расхождение"],["Comprehensive","Всесторонний"],["Substantial","Существенный"],["Ambiguous","Двусмысленный"]] },
  { lvl:"C1", vip:true, t:"Мастерство речи C1", pairs:[["Serendipity","Счастливая случайность"],["Resilience","Стойкость"],["Eloquent","Красноречивый"],["Inevitable","Неизбежный"],["Profound","Глубокий"],["Flawless","Безупречный"],["Breakthrough","Прорыв"],["Legacy","Наследие"]] }
];

var UNITS = RAW_CURRICULUM.map(function(u, idx) {
  var steps = [];
  for (var s = 0; s < 8; s++) {
    var qs = [];
    for (var q = 0; q < 4; q++) {
      var pIdx = (s + q) % u.pairs.length;
      var pair = u.pairs[pIdx];
      var rev = ((s + q) % 2 === 1);
      var quest = rev ? pair[1] : pair[0];
      var right = rev ? pair[0] : pair[1];
      var opts = [right];
      for (var k = 1; opts.length < 4 && k < u.pairs.length; k++) {
        var cand = u.pairs[(pIdx + k) % u.pairs.length][rev ? 0 : 1];
        if (opts.indexOf(cand) === -1) opts.push(cand);
      }
      var ans = (s + q) % opts.length;
      var tmp = opts[0]; opts[0] = opts[ans]; opts[ans] = tmp;
      qs.push({
        h: rev ? "Выбери английский перевод" : "Выбери русский перевод",
        q: quest,
        o: opts,
        a: ans
      });
    }
    steps.push({ name: "Этап " + (s + 1), qs: qs });
  }
  return {
    id: "u" + (idx + 1),
    lvl: u.lvl,
    vip: u.vip,
    title: "Юнит " + ((idx % 5) + 1) + ": " + u.t,
    steps: steps
  };
});
