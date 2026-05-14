import { Link } from "react-router-dom";

const sections = [
  {
    path: "/articles",
    icon: "📚",
    title: "Статті",
    desc: "Корисні матеріали про догляд за бджолами, збір меду та основи бджільництва",
    color: "bg-orange-100 border-orange-300 hover:bg-orange-200",
  },
  {
    path: "/calendar",
    icon: "📅",
    title: "Календар бджоляра",
    desc: "Що робити на пасіці кожного місяця — від січня до грудня",
    color: "bg-yellow-100 border-yellow-300 hover:bg-yellow-200",
  },
  {
    path: "/diseases",
    icon: "🔬",
    title: "Хвороби та лікування",
    desc: "Довідник хвороб бджіл, симптоми та методи лікування",
    color: "bg-red-100 border-red-300 hover:bg-red-200",
  },
  {
    path: "/equipment",
    icon: "🛠️",
    title: "Обладнання",
    desc: "Огляд вуликів, інструментів та обладнання для пасіки",
    color: "bg-amber-100 border-amber-300 hover:bg-amber-200",
  },
  {
    path: "/forum",
    icon: "💬",
    title: "Форум",
    desc: "Спілкуйся з іншими бджолярами, ділись досвідом та задавай питання",
    color: "bg-green-100 border-green-300 hover:bg-green-200",
  },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-amber-700 text-white rounded-2xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-2">Ласкаво просимо! 🐝</h2>
        <p className="text-amber-100 text-lg">
          Повна платформа для бджолярів — від початківця до професіонала
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {sections.map((s) => (
          <Link
            key={s.path}
            to={s.path}
            className={`border rounded-xl p-5 transition-colors ${s.color}`}
          >
            <div className="text-4xl mb-3">{s.icon}</div>
            <h3 className="text-lg font-bold text-amber-900 mb-1">{s.title}</h3>
            <p className="text-sm text-amber-800">{s.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
