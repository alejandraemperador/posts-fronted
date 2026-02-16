export default function LoadingState({ message = "Cargando animes..." }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
            <span className="loading loading-spinner loading-lg text-red-500"></span>
            <p className="mt-4 text-lg font-semibold text-gray-600 animate-pulse">
                {message}
            </p>
        </div>
    );
}
