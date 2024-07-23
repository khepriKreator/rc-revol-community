import {HttpResponse, http} from 'msw';
import {TrackTagDtoFaker} from "../../faker/TrackTagDtoFaker.ts";
import {domenURL} from "../../domen.ts";

export const TrackTagsServiceHandlers = {
    trackTagControllerFindAllHandler: () => {
        return http.get(`${domenURL}/track-tag`, () => {
            return HttpResponse.json(TrackTagDtoFaker())
        })
    }
}