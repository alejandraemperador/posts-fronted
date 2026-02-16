import type { Anime } from "../types/Anime";
import type { AnimeDetail } from '../types/AnimeDetail';

type AnimeResponse = {
    data: Anime[];
};

type AnimeDetailResponse = {
    data: AnimeDetail;
};

// Devuelve una Promesa que cuando se resuelve contiene un arreglo de Anime[].
const getAnimes = async (): Promise<Anime[]> => {
    const res = await fetch("https://api.jikan.moe/v4/anime");

    if (!res.ok) {
        throw new Error("Error fetching animes");
    }

    const data: AnimeResponse = await res.json();

    return data.data // devuelve Anime[]
};

const getAnimeById = async (id: string): Promise<AnimeDetail | null> => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

    if (res.status === 404) {
        return null;
    }

    if (!res.ok) {
        throw new Error("Server error");
    }

    const data: AnimeDetailResponse = await res.json();

    return data.data;
};
export { getAnimes, getAnimeById };
