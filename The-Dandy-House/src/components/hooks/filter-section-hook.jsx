import { useMemo } from "react";

//Hook personalizzato per filtrare e ordinare articoli.
function useFilteredArticles(
  articles,
  { filterAuth, filterCategory, searchTerm, sortOrder }
) {
  return useMemo(() => {
    return (
      [...articles] //Crea una copia dell'array degli articoli per non mutarlo direttamente.
        //Filtro per autore, se non c'è un filtro, include tutti gli autori.
        .filter((article) => filterAuth === "" || article.author === filterAuth)
        //Filtro per categoria, se non c'è un filtro, include tutte le categorie.
        .filter(
          (article) =>
            filterCategory === "" || article.category === filterCategory
        )
        //Filtro per termine di ricerca, se non c'è un termine, include tutti i titoli.
        .filter(
          (article) =>
            searchTerm === "" ||
            article.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        //Ordinamento in base alla data, "newest" ordina dal più recente.
        .sort((a, b) => {
          return sortOrder === "newest"
            ? new Date(b.date) - new Date(a.date)
            : new Date(a.date) - new Date(b.date);
        })
    );
  }, [articles, filterAuth, filterCategory, searchTerm, sortOrder]);
}

export default useFilteredArticles;
