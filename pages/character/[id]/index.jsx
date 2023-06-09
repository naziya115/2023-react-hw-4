import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { baseUrl } from "@/utils/fetchApi";
import axios from "axios";
import Link from "next/link";

export const getServerSideProps = async ({ query }) => {
  const { id } = query;

  const response = await axios.get(baseUrl + "/api/v2/Characters/" + id);

  return {
    props: {
      character: response.data,
    },
  };
};

export default function Character({ character }) {
  return (
    <div className="flex items-center flex-col">
      <div className="flex items-center justify-center">
        <div className="p-4 text-center">
          <h1 className="text-3xl font-bold mb-4">{character.fullName}</h1>
          <p className="text-lg mb-2">Title: {character.title}</p>
          <p className="text-lg mb-2">Family: {character.family}</p>
          <div className="w-64 h-64 mx-auto">
            <img
              src={character.imageUrl}
              alt={character.fullName}
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      <Link href="/" passHref legacyBehavior>
        <a className="bg-white text-black px-4 py-2 rounded-lg mt-4 hover:bg-black hover:text-white">
          Back
        </a>
      </Link>
    </div>
  );
}
