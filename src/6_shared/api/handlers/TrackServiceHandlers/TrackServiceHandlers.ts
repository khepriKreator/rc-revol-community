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
    trackControllerCreateHandler: () => {
        return http.post(`${domenURL}/track`, async ({request}) => {
            const info = await request.formData()
            console.log(info);
        })
    },
    trackControllerFindHandler: () => {
        return http.get(`${domenURL}/track/{publicId}`, () => {
            return HttpResponse.json(TrackDtoFaker())
        })
    },
    trackControllerUpdateHandler: () => {
        http.patch(`${domenURL}/track/{publicId}`, async ({ request, params }) => {
            const orderUpdates = await request.json()
            console.log(
                params,
                orderUpdates
            )
        })
    },
}