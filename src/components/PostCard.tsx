import type { Post } from "../types/Post";

export default function PostCard ({post, onDelete}:{post: Post, onDelete: (id:string)=> void}){
    return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
        <img src={post.imageUrl} className="w-full h-48 object-cover"/>
        <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">
                {post.title}
            </h3>
            <p className="text-gray-600 mb-4">
                {post.description}
            </p>
            <button onClick={()=> onDelete(post.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                Eliminar
            </button>
        </div>
    </div>
    )
}
