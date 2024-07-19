import {HttpResponse, http} from 'msw'

export const TrackCategoryServiceHandlers = {
    trackCategoryControllerGetAllCategoriesHandler: () => {
        return http.get('/track-category', () => {
            return HttpResponse.json({
                id: 1,
                name: '',
            })
        })
    }
}