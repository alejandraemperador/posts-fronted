import { useEffect, useState } from "react";
import type { Anime } from "../../types/Anime";
import { getAnimes } from "../../services/ProductServices";
import AnimeCard from "../../components/AnimeCard";

import LoadingState from "../../components/LoadingState";
import ErrorState from "../../components/ErrorState";
import EmptyState from "../../components/EmptyState";

export default function Landing() {
    const [animes, setAnimes] = useState<Anime[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await getAnimes();
            setAnimes(data);

        } catch {
            setError("Ocurrió un error al cargar los animes");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <LoadingState />;
    }

    if (error) {
        return (
            <ErrorState message={error} onRetry={fetchData} />
        );
    }

    if (animes.length === 0) {
        return ( <EmptyState message="No se encontraron animes disponibles." /> );
    }

    return (
        <div id="landing-page" className="min-h-screen bg-base-200 p-10">
            <h1 className="text-4xl font-bold text-center mb-10 text-red-900">
                🎌 Listado de animes 🎌
            </h1>

            <div
                id="animes-container" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {animes.map((anime) => (
                    <AnimeCard key={anime.mal_id} anime={anime} />
                ))}
            </div>
        </div>
    );
}
