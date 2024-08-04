import {HttpResponse, http} from 'msw';
import {faker} from "@faker-js/faker";
import type {CreateFilterPredicate} from "../../heplers";
import {sliceDataForPagination, getAccountLeaderBoard} from "../../heplers";
import {getTrackLeaderBoard} from "../../heplers/getTrackLeaderBoard.ts";
import {TrackRatingDtoFaker} from "../../faker/TrackRatingDtoFaker.ts";
import { TrackRatingDto } from "../../generated/game";
import {trackRatingDB} from "../../fakerDB.ts";
import {domenURL} from "../../domen.ts";

export const TrackRatingsServiceHandlers = {
    statsControllerGetResultsHandler: () => {
        return http.get(`${domenURL}/stats/tracks-results-table/:trackId`, () => {
            return HttpResponse.json(TrackRatingDtoFaker())
        })
    },
    statsControllerGetTrackPointsResultHandler: () => {
        return http.get(`${domenURL}/stats/tracks-trick-points-result-table/:trackId`, () => {
            return HttpResponse.json(TrackRatingDtoFaker())
        })
    },
    statsControllerGetAllUserResultHandler: () => {
        return http.get(`${domenURL}/stats/tracks-all-user-results`, () => {
            return HttpResponse.json(faker.helpers.uniqueArray(() => TrackRatingDtoFaker(), faker.number.int({max: 100})))
        })
    },
    statsControllerGetAccountLeaderBoardHandler: () => {
        return http.get(`${domenURL}/stats/public/account-leaderboard/:accountId`, ({request, params}) => {
            const {url} = request;
            const {accountId} = params;
            const createFilterPredicate: CreateFilterPredicate<TrackRatingDto> = (search) => ((item) => item.accountUsername.includes(search))
            const data = sliceDataForPagination<TrackRatingDto>(url, getAccountLeaderBoard(accountId as string, trackRatingDB), createFilterPredicate)
            return HttpResponse.json(data);
        })
    },
    statsControllerGetTrackLeaderBoardHandler: () => {
        return http.get(`${domenURL}/stats/public/leaderboard/:trackId`, ({request, params}) => {
            const {url} = request;
            const {trackId} = params;
            const createFilterPredicate: CreateFilterPredicate<TrackRatingDto> = (search) => ((item) => item.accountUsername.includes(search))
            const data = sliceDataForPagination<TrackRatingDto>(url, getTrackLeaderBoard(trackId as string, trackRatingDB), createFilterPredicate)
            return HttpResponse.json(data);
        })
    },
    statsControllerGetGlobalLeaderBoardHandler: () => {
        return http.get(`${domenURL}/stats/public/leaderboard`, ({request}) => {
            const {url} = request;
            const createFilterPredicate: CreateFilterPredicate<TrackRatingDto> = (search) => ((item) => item.accountUsername.includes(search))
            const data = sliceDataForPagination<TrackRatingDto>(url, trackRatingDB, createFilterPredicate)
            return HttpResponse.json(data);
        })
    },
}