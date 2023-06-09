import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { fetchAllCharacters } from "@/utils/fetchApi";
import { useEffect, useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchAllCharacters()
      .then((data) => {
        setCharacters(data);
      })
      .catch((error) => {
        console.log("Error fetching characters: ", error);
      });
  }, []);

  return (
    <main>
      <h1 className="m-4 text-3xl font-bold text-center">Game of Thrones</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {characters.map((character) => (
          <Link href={`/character/${character.id}`} key={character.id}>
            <div className="p-4 bg-gray-100 rounded-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <h2 className="text-xl font-bold text-black">
                {character.fullName}
              </h2>
              <h3 className="text-lg text-black">{character.title}</h3>
              <h4 className="text-md text-black">{character.family}</h4>
              <img
                src={character.imageUrl}
                alt={character.fullName}
                width={300}
                height={100}
                className="rounded-md"
              />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
