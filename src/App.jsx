// App.jsx
import React, { useState, useEffect } from "react";
import { SearchForm } from "./components/SearchForm";
import { Card } from "./components/Card";

function App() {
  const [query, setQuery] = useState("");
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = async (searchQuery = "") => {
    setLoading(true);
    try {
      const url = "https://rickandmortyapi.com/api/character";
      const res = await fetch(url);
      if (!res.ok) throw new Error("Gagal fetch");
      const data = await res.json();

      // bikin fungsi delay 3 detik
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (searchQuery) {
        const filtered = data.results.filter((char) =>
          char.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setCharacters(filtered);
      } else {
        setCharacters(data.results);
      }
    } catch (err) {
      console.warn("Fetch error:", err.message);
      setCharacters([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchCharacters(query);
  };

  return (
    <div className="bg-[aquamarine] min-h-screen py-6">
      <div className="container max-w-5xl mx-auto px-4">
        <SearchForm
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onSubmit={handleSearch}
        />
        <Card characters={characters} loading={loading} />
      </div>
    </div>
  );
}

export default App;
