import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = "aquamarine";

    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (!res.ok) throw new Error("Failed to fetch character");
        const data = await res.json();
        setCharacter(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-600">
        Loading character detail...
      </p>
    );

  if (error)
    return (
      <div className="text-center mt-10 text-red-600 px-4">
        <p className="mb-4">{error}</p>
        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Back to Home
        </Link>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto bg-[lightblue] rounded-lg shadow-lg p-6 mt-10 flex flex-col md:flex-row gap-6">
      <div className="md:flex-shrink-0">
        <img
          src={character.image}
          alt={character.name}
          className="rounded-lg w-full md:w-64 object-cover shadow-md"
        />
      </div>

      <div className="flex flex-col justify-between">
        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-fit"
        >
          &larr; Back to Home
        </Link>

        <h2 className="text-3xl font-bold mb-4">{character.name}</h2>

        <div className="space-y-2 text-gray-700 text-lg">
          <p>
            <span className="font-semibold">Status:</span> {character.status}
          </p>
          <p>
            <span className="font-semibold">Species:</span> {character.species}
          </p>
          <p>
            <span className="font-semibold">Gender:</span> {character.gender}
          </p>
          <p>
            <span className="font-semibold">Origin:</span>{" "}
            {character.origin?.name}
          </p>
          <p>
            <span className="font-semibold">Location:</span>{" "}
            {character.location?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
