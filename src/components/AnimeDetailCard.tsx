import { useNavigate } from "react-router-dom";
import type { AnimeDetail } from "../types/AnimeDetail";

export default function AnimeDetailCard({ anime }: { anime: AnimeDetail }) {
    const navigate = useNavigate();

    return (
        <div className="card bg-base-100 shadow-2xl max-w-5xl mx-auto p-6">

            <div className="grid md:grid-cols-2 gap-10">

                {/* IZQUIERDA */}
                <div className="flex flex-col">

                    <figure className="h-125 not-[]:overflow-hidden rounded-xl">
                        <img
                            src={anime.images.jpg.large_image_url}
                            alt={anime.titles[0]?.title}
                            className="w-full h-full object-cover"
                        />
                    </figure>

                    {/* START / END debajo de la imagen */}
                    <div className="bg-base-200 p-4 rounded-xl mt-4 space-y-2">
                        <p>
                            <span className="font-semibold text-red-500">Started:</span>{" "}
                            {anime.aired.from?.slice(0, 10)}
                        </p>
                        <p>
                            <span className="font-semibold text-red-500">Ended:</span>{" "}
                            {anime.aired.to?.slice(0, 10) || "—"}
                        </p>
                    </div>

                </div>

                {/* DERECHA */}
                <div className="flex flex-col justify-between">

                    <div>
                        <h2 className="text-3xl font-bold text-red-600 mb-6 leading-tight">
                            {anime.titles.map((t) => t.title).join(" / ")}
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            {anime.synopsis}
                        </p>
                    </div>

                    {/* BOTÓN VOLVER */}
                    <div className="mt-8">
                        <button
                            onClick={() => navigate("/")}
                            className="btn bg-red-500 hover:bg-red-600 text-white rounded-full px-8 shadow-md transition duration-300"
                        >
                            Regresar al inicio
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}
