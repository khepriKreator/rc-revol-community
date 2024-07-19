import {HttpResponse, http} from 'msw';

export const TrackTagsServiceHandlers = {
    trackTagControllerFindAllHandler: () => {
        return http.get('', () => {
            return HttpResponse.json({

            })
        })
    }
}