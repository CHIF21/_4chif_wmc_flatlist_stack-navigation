import axios from "axios";
import {IPost} from "../interfaces/post.interface";

export const BASE_URL : string = 'https://jsonplaceholder.typicode.com/';

export class PostService {

    static async getPosts() : Promise<IPost[]> {
        const response = await axios.get(BASE_URL + '/posts');

        if(response.status !== 200) {
            throw new Error(response.statusText);
        }

        // In axios braucht man kein .json() -> es wird direkt von axios über .data gehandelt
        return response.data;
    }
}