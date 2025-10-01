// components/Card.jsx
import React from "react";
import { Link } from "react-router-dom";

/**
 * Komponen kartu karakter.
 *
 * @param {{ characters: Array<{ id: number, name: string, image: string }>, loading: boolean }} props
 * @returns {JSX.Element}
 */
export const Card = ({ characters, loading }) => {
  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (characters.length === 0) {
    return <p className="text-center text-gray-600">No results found.</p>;
  }

  return (
    <div
      id="cards-container"
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {characters.map((char) => (
        <Link
          to={`/character/${char.id}`}
          key={char.id}
          className="bg-[lightblue] max-w-[180px] h-[250px] rounded-lg shadow-md flex flex-col items-center px-4 py-3 hover:shadow-lg transition-shadow"
        >
          <div className="relative w-full h-[180px] rounded-md overflow-hidden cursor-pointer">
            <img
              src={char.image}
              alt={char.name}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center font-semibold mt-3 text-sm">{char.name}</p>
        </Link>
      ))}
    </div>
  );
};
