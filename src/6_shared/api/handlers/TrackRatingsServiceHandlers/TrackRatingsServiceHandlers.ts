import {HttpResponse, http} from 'msw';
import {faker} from "@faker-js/faker";
import {PaginationLeaderBoardDtoFaker} from "../../faker/PaginationLeaderBoardDtoFaker.ts";
import {TrackRatingDtoFaker} from "../../faker/TrackRatingDtoFaker.ts";

export const TrackRatingsServiceHandlers = {
    statsControllerGetResultsHandler: () => {
        return http.get('/stats/tracks-results-table/{trackId}', () => {
            return HttpResponse.json(TrackRatingDtoFaker())
        })
    },
    statsControllerPostResultHandler: () => {
        return http.post('/stats/tracks-results-table/{trackId}', async ({request}) => {
            const info = await request.formData()
            console.log(info);
        })
    },
    statsControllerGetTrackPointsResultHandler: () => {
        return http.get('/stats/tracks-trick-points-result-table/{trackId}', () => {
            return HttpResponse.json(TrackRatingDtoFaker())
        })
    },
    statsControllerSaveTrackPointsResultHandler: () => {
        return http.post('/stats/tracks-trick-points-result-table/{trackId}', async ({request}) => {
            const info = await request.formData()
            console.log(info);
        })
    },
    statsControllerGetAllUserResultHandler: () => {
        return http.get('/stats/tracks-all-user-results', () => {
            return HttpResponse.json(faker.helpers.uniqueArray(() => TrackRatingDtoFaker(), faker.number.int({max: 100})))
        })
    },
    statsControllerGetAccountLeaderBoardHandler: () => {
        return http.get('/stats/public/account-leaderboard/{accountId}', () => {
            return HttpResponse.json(PaginationLeaderBoardDtoFaker())
        })
    },
    statsControllerGetTrackLeaderBoardHandler: () => {
        return http.get('/stats/public/leaderboard/{trackId}', () => {
            return HttpResponse.json(PaginationLeaderBoardDtoFaker())
        })
    },
    statsControllerGetGlobalLeaderBoardHandler: () => {
        return http.get('/stats/public/leaderboard', () => {
            return HttpResponse.json(PaginationLeaderBoardDtoFaker())
        })
    },
}