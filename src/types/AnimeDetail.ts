export type AnimeDetail = {
    mal_id: number;
    titles:{
        type: string;
        title: string;
    } []
    synopsis: string;
    images:{
        jpg:{
            large_image_url: string;
        }
    }
    aired:{
        from: string;
        to: string;
    }
};
