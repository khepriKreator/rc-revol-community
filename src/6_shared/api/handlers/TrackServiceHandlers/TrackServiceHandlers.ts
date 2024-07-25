import {HttpResponse, http} from 'msw';
import {PaginateTrackDtoFaker} from "../../faker/PaginateTrackDtoFaker.ts";
import {TrackDtoFaker} from "../../faker/TrackDtoFaker.ts";
import {domenURL} from "../../domen.ts";

export const TrackServiceHandlers = {
    trackControllerPaginateHandler: () => {
        return http.get(`${domenURL}/track`, () => {
            return HttpResponse.json(PaginateTrackDtoFaker())
        })
    },
    trackControllerFindHandler: () => {
        return http.get(`${domenURL}/track/:publicId`, () => {
            return HttpResponse.json(TrackDtoFaker())
        })
    },
}