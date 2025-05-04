import {axiosClient} from "./axiosClient.ts";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY as string;

export const getBooksByCategory = async (category: string) => {
    try {
        const response = await axiosClient.get('volumes', {
            params: {
                q: `subject:${category}`,
                maxResults: 12,
                orderBy: 'relevance',
                key: API_KEY,
            },
        });
        return response.data.items;
    } catch (e) {
        console.error(e);
        return [];
    }
};


export const searchBooks = async (query: string) => {
    try {
        const response = await axiosClient.get('volumes', {
            params: {
                q: query,
                maxResults: 12,
                orderBy: 'relevance',
                key: API_KEY,
            },
        });
        return response.data.items;
    } catch (e) {
        console.error(e)
        return [];
    }
}

