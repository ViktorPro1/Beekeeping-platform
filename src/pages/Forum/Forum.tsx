const topics = [
  {
    id: 1,
    category: "Початківцям",
    emoji: "🌱",
    title: "З чого починати — перший вулик та перші кроки",
    author: "Василь К.",
    date: "12 травня 2025",
    replies: 24,
    content:
      "Вирішив завести бджіл цієї весни. Купив один вулик Дадан, придбав пакет бджіл. Перший огляд — страшно, але цікаво. Поділіться досвідом — на що звертати увагу в перший рік?",
    answers: [
      {
        author: "Михайло П.",
        text: "Головне — не панікувати при перших укусах. Звикаєш швидко. Перший рік просто спостерігай і вчись читати сім'ю.",
      },
      {
        author: "Ольга Т.",
        text: "Обов'язково заведи журнал пасічника — записуй стан кожної сім'ї після огляду. Через рік будеш дякувати собі.",
      },
      {
        author: "Іван Д.",
        text: "Не пропусти обробку від варроа восени — це найважливіше для зимівлі першокурсника.",
      },
    ],
  },
  {
    id: 2,
    category: "Хвороби",
    emoji: "🔬",
    title: "Знайшов кліщів на бджолах — що робити терміново?",
    author: "Андрій М.",
    date: "3 травня 2025",
    replies: 18,
    content:
      "При огляді помітив коричневі цятки на бджолах. Схоже на варроа. Сезон в розпалі, мед у надставках. Чим можна обробити зараз не зачіпаючи мед?",
    answers: [
      {
        author: "Петро С.",
        text: "Мурашина кислота — можна застосовувати під час взятку. Випарювач MAQS або самодільний. Ефективно і безпечно для меду.",
      },
      {
        author: "Надія В.",
        text: "Я використовую щавлеву кислоту у вигляді аерозолю. Знімаю надставки, обприскую, через 30 хвилин ставлю назад.",
      },
      {
        author: "Сергій Л.",
        text: "Обов'язково порахуй природний підмор — поклади білий аркуш під сітчасте дно на 3 дні. Більше 10 кліщів на добу — серйозна проблема.",
      },
    ],
  },
  {
    id: 3,
    category: "Медозбір",
    emoji: "🍯",
    title: "Коли качати акацієвий мед — як не прогадати з термінами?",
    author: "Тетяна Р.",
    date: "28 квітня 2025",
    replies: 31,
    content:
      "Акація вже відцвітає. Частина рамок запечатана, частина ще ні. Чекати повного запечатування чи качати вже зараз? Боюся що перестоїть.",
    answers: [
      {
        author: "Дмитро Г.",
        text: "Качай коли запечатано 2/3 рамки. Не чекай повного запечатування — втратиш час і бджоли почнуть переробляти.",
      },
      {
        author: "Лариса Ф.",
        text: "Перевір на зрілість — похитай рамку горизонтально. Якщо мед не тече — зрілий, можна качати навіть незапечатаний.",
      },
      {
        author: "Борис К.",
        text: "Акацієвий довго не кристалізується тому не поспішай. Краще дочекатись більшого відсотку запечатування — якість буде краща.",
      },
    ],
  },
  {
    id: 4,
    category: "Роїння",
    emoji: "🐝",
    title: "Рій сів на паркан сусіда — як зняти і не посваритись?",
    author: "Григорій П.",
    date: "20 травня 2025",
    replies: 15,
    content:
      "Вийшов рій і сів на паркані між нашими ділянками. Сусід нервується. Як правильно зняти рій і заспокоїти сусіда?",
    answers: [
      {
        author: "Марія О.",
        text: "Рій в першу добу дуже спокійний — без диму і без захисту підстав ящик під клубок і струси. Займе 5 хвилин.",
      },
      {
        author: "Федір Т.",
        text: "Сусіду поясни що рій не агресивний — у них немає вулика для захисту. І пообіцяй баночку меду — всі питання знімуться.",
      },
      {
        author: "Катерина В.",
        text: "Якщо рій висить більше доби — починай хвилюватись. Свіжий рій береться легко, головне не затягувати.",
      },
    ],
  },
  {
    id: 5,
    category: "Зимівля",
    emoji: "❄️",
    title: "Скільки меду залишати на зиму — реальні цифри",
    author: "Степан Н.",
    date: "15 серпня 2025",
    replies: 27,
    content:
      "Скрізь пишуть по-різному — від 18 до 35 кг. Що реально потрібно для нормальної зимівлі в умовах центральної України?",
    answers: [
      {
        author: "Олексій Ж.",
        text: "В нас (Полтавщина) залишаю 25 кг на сильну сім'ю — вистачає з запасом до квітня. Краще більше ніж менше.",
      },
      {
        author: "Ганна С.",
        text: "Важливо не тільки кількість але й якість. Падевий мед на зиму не лишають — кристалізується і бджоли гинуть від проносу.",
      },
      {
        author: "Роман Б.",
        text: "Якщо меду мало — краще догодувати цукровим сиропом 2:1 в серпні. Осінній сироп бджоли переробляють добре.",
      },
    ],
  },
];

const categoryColors: Record<string, string> = {
  Початківцям: "bg-green-100 text-green-800",
  Хвороби: "bg-red-100 text-red-800",
  Медозбір: "bg-yellow-100 text-yellow-800",
  Роїння: "bg-orange-100 text-orange-800",
  Зимівля: "bg-blue-100 text-blue-800",
};

import { useState } from "react";

function Forum() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-900 mb-2">
        💬 Форум бджолярів
      </h2>
      <p className="text-amber-700 text-sm mb-6">
        Питання та відповіді досвідчених пасічників
      </p>

      <div className="flex flex-col gap-3">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="bg-white border border-amber-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenId(openId === topic.id ? null : topic.id)}
              className="w-full text-left p-4"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[topic.category]}`}
                    >
                      {topic.emoji} {topic.category}
                    </span>
                    <span className="text-xs text-amber-500">{topic.date}</span>
                  </div>
                  <h3 className="text-sm font-bold text-amber-900 mb-1">
                    {topic.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-amber-600">
                    <span>👤 {topic.author}</span>
                    <span>💬 {topic.replies} відповідей</span>
                  </div>
                </div>
                <span className="text-amber-400 text-lg shrink-0">
                  {openId === topic.id ? "▲" : "▼"}
                </span>
              </div>
            </button>

            {openId === topic.id && (
              <div className="border-t border-amber-100 px-4 pb-4">
                <p className="text-sm text-amber-800 py-3 border-b border-amber-100">
                  {topic.content}
                </p>
                <div className="flex flex-col gap-3 mt-3">
                  {topic.answers.map((ans, i) => (
                    <div key={i} className="bg-amber-50 rounded-lg p-3">
                      <p className="text-xs font-bold text-amber-700 mb-1">
                        👤 {ans.author}
                      </p>
                      <p className="text-sm text-amber-800">{ans.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forum;
