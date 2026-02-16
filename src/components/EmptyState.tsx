import { useNavigate } from "react-router-dom";

type Props = {
    message: string;
};

export default function EmptyState({ message }: Props) {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-6">
            <div className="flex flex-col items-center gap-4">

                <div role="alert" className="alert alert-warning shadow-lg max-w-md">
                    <span>{message}</span>
                </div>

                <button onClick={() => navigate("/")} className="btn bg-yellow-500 hover:bg-yellow-600 text-white rounded-full px-8 shadow-md">
                    Volver al inicio
                </button>
                
            </div>
        </div>
    );
}
