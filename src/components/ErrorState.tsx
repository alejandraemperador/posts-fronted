import { useNavigate } from "react-router-dom";

type Props = {
    message: string;
    showBackButton?: boolean;
    onRetry?: () => void;
};

export default function ErrorState({ message, showBackButton, onRetry }: Props) {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-6">
            <div className="flex flex-col items-center gap-4">

                <div role="alert" className="alert alert-error shadow-lg max-w-md">
                    <span>{message}</span>
                </div>

                {showBackButton && (
                    <button onClick={() => navigate("/")} className="btn bg-red-500 hover:bg-red-600 text-white rounded-full px-8 shadow-md">
                        Volver al inicio
                    </button>
                )}

                {onRetry && (
                    <button onClick={onRetry} className="btn bg-red-500 hover:bg-red-600 text-white rounded-full px-8 shadow-md" >
                        Reintentar
                    </button>
                )}

            </div>
        </div>
    );
}
