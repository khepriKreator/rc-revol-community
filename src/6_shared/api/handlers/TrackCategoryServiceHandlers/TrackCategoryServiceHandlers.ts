import {HttpResponse, http} from 'msw'
import {TrackCategoryDtoFaker} from "../../faker/TrackCategoryDtoFaker.ts";
import {domenURL} from "../../domen.ts";

export const TrackCategoryServiceHandlers = {
    trackCategoryControllerGetAllCategoriesHandler: () => {
        return http.get(`${domenURL}/track-category`, () => {
            return HttpResponse.json(TrackCategoryDtoFaker())
        })
    }
}