import { useEffect, useState } from "react"
import type { CreatePostDTO, Post } from "../../types/Post"
import { createPost, deletePost, getPosts } from "../../services/postServices"
import PostCard from "../../components/PostCard";
import CreatePostForm from "../../components/CreatePostForm";

export default function Home () {
    const [posts, setPosts] = useState <Post[]> ([])

    const loadPosts = async () => {
        try {
            const data = await getPosts();
            setPosts(data);
        } catch (error) {
            console.log("No conectó con el server", error)
        }
    };

    useEffect (()=> {
        loadPosts()
    }, [])

    const handleCreate= async (post: CreatePostDTO) => {
        await createPost(post)
        loadPosts ()
    }

    const handleDelete = async (id:string) => {
        await deletePost(id)
        loadPosts()
    }
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-6xl mx-auto p-10">
                <h1 className="text-4xl font-bold text-center mb-10">Posts</h1>
                <CreatePostForm onCreate = {handleCreate} />
                <div className="grid md:grid-cols-3 gap-6 mt-10">
                    {posts.map((post)=>(<PostCard key={post.id} post={post} onDelete={handleDelete} />))}
                </div>
            </div>
        </div>
    )
}
