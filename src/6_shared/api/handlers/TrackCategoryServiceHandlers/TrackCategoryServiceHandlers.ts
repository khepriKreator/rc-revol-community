import {HttpResponse, http} from 'msw'
import {TrackCategoryDtoFaker} from "../../faker/TrackCategoryDtoFaker.ts";

export const TrackCategoryServiceHandlers = {
    trackCategoryControllerGetAllCategoriesHandler: () => {
        return http.get('/track-category', () => {
            return HttpResponse.json(TrackCategoryDtoFaker())
        })
    }
}