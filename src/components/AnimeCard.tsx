import { useNavigate } from 'react-router-dom';
import type { Anime } from '../types/Anime';

export default function AnimeCard({ anime }: { anime: Anime }) {
    const navigate = useNavigate();

    return (
        <div className='card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 hover:-translate-y-2 cursor-pointer'>
            <figure className='h-72 overflow-hidden'>
                <img src={anime.images.jpg.large_image_url} alt={anime.title}
                className='w-full h-full object-cover'/>
            </figure>

            <div className='card-body p-4'>
                <h2 className='card-title text-lg font-bold text-red-700 line-clamp-2 text-center '>{anime.title}</h2>
                <p className='text-sm text-gray-500 line-clamp-3'>{anime.synopsis?.slice(0, 150)}... </p>

                <div className='card-actions justify-center mt-3'>
                    <button className='btn btn-sm bg-red-500 hover:bg-red-600 text-white rounded-full
                    border-none px-10 py-2 shadow-md hover:shadow-lg transition duration-300'
                    onClick={() => navigate(`/detail/${anime.mal_id}`)}> Ver más</button>
                </div>
            </div>
        </div>);
}
