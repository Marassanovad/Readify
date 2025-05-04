export type Book = {
    id: string;
    volumeInfo: volumeInfo;
}

export type volumeInfo = {
    authors: string[];
    category: string[];
    description: string;
    title: string;
    pageCount: number;
    imageLinks: {
        smallThumbnail: string;
        thumbnail: string;
    };
    language: string;
    publishedDate: string;
    infoLink: string;
}
