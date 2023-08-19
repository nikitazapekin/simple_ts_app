import { Movie } from "../types"


export const isMovie = (user: any): user is Movie => { // проверяем ответ на длину резулст. Если она есть то возвращаем тру указывая что ответ верный
    return "results" in user && user.results.length > 0;
};
