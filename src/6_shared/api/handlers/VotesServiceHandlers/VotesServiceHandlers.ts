import {HttpResponse, http} from "msw";
import {faker} from "@faker-js/faker";


export const VotesServiceHandlers = {
    voteControllerGetCountByTrackHandler: () => {
        return http.get('/vote/{trackId}', () => {
            return HttpResponse.json(faker.number.int({max: 1000}))
        })
    },
    voteControllerPostVoteHandler: () => {
        return http.post('/vote/{trackId}', async ({request}) => {
            const info = await request.formData()
            console.log(info);
        })
    },
}