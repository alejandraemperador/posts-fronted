import { useState, type FormEvent } from "react"
import type { CreatePostDTO } from "../types/Post"

export default function CreatePostForm({ onCreate }: { onCreate: (post: CreatePostDTO) => void }) {
    const [imageUrl, setImageUrl] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onCreate({
            imageUrl,
            title,
            description
        })
        setImageUrl("")
        setTitle("")
        setDescription("")
    }
    return (
        <form onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl p-6 space-y-4"
        >
            <h2 className="text-xl font-semibold">
                Crea tu post
            </h2>
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600 mb-2">Imagen</label>
                <input type="text" placeholder="URL de la imagen"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="w-full border p-2 rounded-lg">
                </input>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600 mb-2"> Título </label>
                <input type="text" placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border p-2 rounded-lg">
                </input>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600 mb-2"> Descripción </label>
                <textarea placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border p-2 rounded-lg">
                </textarea>
            </div>


            <button type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
                Crear post
            </button>
        </form>
    )
}
