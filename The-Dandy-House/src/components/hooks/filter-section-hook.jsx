import { useMemo } from "react";

function useFilteredArticles(
  articles,
  { filterAuth, filterCategory, searchTerm, sortOrder }
) {
  return useMemo(() => {
    return [...articles]
      .filter((article) => filterAuth === "" || article.author === filterAuth)
      .filter(
        (article) =>
          filterCategory === "" || article.category === filterCategory
      )
      .filter(
        (article) =>
          searchTerm === "" ||
          article.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        return sortOrder === "newest"
          ? new Date(b.date) - new Date(a.date)
          : new Date(a.date) - new Date(b.date);
      });
  }, [articles, filterAuth, filterCategory, searchTerm, sortOrder]);
}

export default useFilteredArticles;
