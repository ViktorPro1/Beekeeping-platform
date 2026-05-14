import { useParams, Link } from "react-router-dom";
import { articles } from "../../data/articles";

function ArticlePage() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="text-center py-12">
        <p className="text-amber-700 text-lg">Статтю не знайдено</p>
        <Link to="/articles" className="text-amber-600 underline mt-2 block">
          ← Повернутись до статей
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link
        to="/articles"
        className="text-amber-600 text-sm flex items-center gap-1 mb-4 hover:underline"
      >
        ← Назад до статей
      </Link>

      <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">
        {article.category}
      </span>

      <h2 className="text-2xl font-bold text-amber-900 mt-3 mb-2">
        {article.title}
      </h2>
      <p className="text-amber-600 mb-6">{article.summary}</p>

      <div className="bg-white border border-amber-200 rounded-xl p-5">
        {article.content.split("\n\n").map((block, i) => {
          if (block.startsWith("**") && block.endsWith("**")) {
            return (
              <h3 key={i} className="font-bold text-amber-900 mt-4 mb-1">
                {block.replace(/\*\*/g, "")}
              </h3>
            );
          }
          if (block.startsWith("**")) {
            const parts = block.split("\n");
            return (
              <div key={i} className="mt-4">
                {parts.map((line, j) => {
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return (
                      <h3 key={j} className="font-bold text-amber-900 mb-1">
                        {line.replace(/\*\*/g, "")}
                      </h3>
                    );
                  }
                  if (line.startsWith("-")) {
                    return (
                      <li
                        key={j}
                        className="text-amber-800 ml-4 list-disc text-sm"
                      >
                        {line.slice(2)}
                      </li>
                    );
                  }
                  if (/^\d\./.test(line)) {
                    return (
                      <li
                        key={j}
                        className="text-amber-800 ml-4 list-decimal text-sm"
                      >
                        {line.slice(3)}
                      </li>
                    );
                  }
                  return (
                    <p
                      key={j}
                      className="text-amber-800 text-sm leading-relaxed"
                    >
                      {line}
                    </p>
                  );
                })}
              </div>
            );
          }
          return (
            <p key={i} className="text-amber-800 text-sm leading-relaxed mt-2">
              {block}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default ArticlePage;
