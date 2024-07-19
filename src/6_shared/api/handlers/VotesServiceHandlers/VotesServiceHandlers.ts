import {HttpResponse, http} from "msw";


export const VotesServiceHandlers = {
    voteControllerGetCountByTrackHandler: () => {
        return http.get('', () => {
            return HttpResponse.json({

            })
        })
    },
    voteControllerPostVoteHandler: () => {
        return http.post('', async ({request}) => {
            const info = await request.formData()
            console.log(info);
        })
    },
}