import { useState } from "react";
import { Link } from "react-router-dom";
import { articles, categories } from "../../data/articles";

function Articles() {
  const [activeCategory, setActiveCategory] = useState("Всі");

  const filtered =
    activeCategory === "Всі"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-900 mb-4">📚 Статті</h2>

      {/* Фільтр категорій */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["Всі", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-amber-700 text-white"
                : "bg-amber-100 text-amber-800 hover:bg-amber-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Список статей */}
      <div className="flex flex-col gap-3">
        {filtered.map((article) => (
          <Link
            key={article.id}
            to={`/articles/${article.id}`}
            className="bg-white border border-amber-200 rounded-xl p-4 hover:bg-amber-50 transition-colors"
          >
            <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">
              {article.category}
            </span>
            <h3 className="text-base font-bold text-amber-900 mt-2 mb-1">
              {article.title}
            </h3>
            <p className="text-sm text-amber-700">{article.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Articles;
