import { useEffect, useState } from "react";
import AnimeDetailCard from "../../components/AnimeDetailCard";
import EmptyState from "../../components/EmptyState";
import ErrorState from "../../components/ErrorState";
import LoadingState from "../../components/LoadingState";
import { getAnimeById } from "../../services/ProductServices";
import type { AnimeDetail } from "../../types/AnimeDetail";
import { useParams } from "react-router-dom";

export default function Detail() {
    const { id } = useParams();

    const [anime, setAnime] = useState<AnimeDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAnime = async () => {
            try {
                if (!id) return;

                const data = await getAnimeById(id);
                setAnime(data);

            } catch {
                setError("Ocurrió un error al cargar el anime");
            } finally {
                setLoading(false);
            }
        };

        fetchAnime();
    }, [id]);

    if (loading) {
        return <LoadingState />;
    }

    if (error) {
        return ( <ErrorState message={error} showBackButton />);
    }

    if (!anime) {
        return ( <EmptyState message="No se encontró el anime solicitado." />);
    }

    return (
        <div className="min-h-screen bg-base-200 p-10">
            <AnimeDetailCard anime={anime} />
        </div>
    );
}
