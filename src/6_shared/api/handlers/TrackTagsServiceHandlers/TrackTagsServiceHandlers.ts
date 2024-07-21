import {HttpResponse, http} from 'msw';
import {TrackTagDtoFaker} from "../../faker/TrackTagDtoFaker.ts";

export const TrackTagsServiceHandlers = {
    trackTagControllerFindAllHandler: () => {
        return http.get('/track-tag', () => {
            return HttpResponse.json(TrackTagDtoFaker())
        })
    }
}