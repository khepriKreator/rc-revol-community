import {HttpResponse, http} from "msw";
import {faker} from "@faker-js/faker";
import {domenURL} from "../../domen.ts";

export const VotesServiceHandlers = {
    voteControllerGetCountByTrackHandler: () => {
        return http.get(`${domenURL}/vote/{trackId}`, () => {
            return HttpResponse.json(faker.number.int({max: 1000}))
        })
    },
    voteControllerPostVoteHandler: () => {
        return http.post(`${domenURL}/vote/{trackId}`, async ({request}) => {
            const info = await request.formData()
            console.log(info);
        })
    },
}