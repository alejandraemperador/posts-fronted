export type Anime= {
    mal_id: number;
    title: string;
    synopsis: string;
    images:{
        jpg: {
            large_image_url: string;
        } 
    }
};