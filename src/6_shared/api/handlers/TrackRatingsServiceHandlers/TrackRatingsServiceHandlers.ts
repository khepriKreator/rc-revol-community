import {HttpResponse, http} from 'msw';
import {faker} from "@faker-js/faker";
import {PaginationLeaderBoardDtoFaker} from "../../faker/PaginationLeaderBoardDtoFaker.ts";
import {TrackRatingDtoFaker} from "../../faker/TrackRatingDtoFaker.ts";
import {PageInfoMetaDto, TrackRatingDto} from "../../generated/game";
import {domenURL} from "../../domen.ts";

type CreateFilterPredicate<D> = (search: string) => (item: D, index: number) => boolean;

const sliceDataForPagination = <D>(url: string, data: D[], createFilterPredicate: CreateFilterPredicate<D>): {items: D[], meta: PageInfoMetaDto} => {
    const urlObj = new URL(url);
    const searchParams = new URLSearchParams(urlObj.search);

    const page = Number(searchParams.get('page'));
    const search = searchParams.get('search');
    const itemsPerPage = Number(searchParams.get('limit'));
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const getCurrentSlice = () => {
        if (search) {
            const filterBySearchData = data.filter(createFilterPredicate(search));
            return filterBySearchData.slice(startIndex, endIndex);
        }
        return data.slice(startIndex, endIndex)
    };
    const currentSlice = getCurrentSlice();

    const meta: PageInfoMetaDto = {
        totalItems: data.length,
        totalPages: data.length / itemsPerPage,
        currentPage: page,
        itemCount: currentSlice.length,
        itemsPerPage,
    }

    return {
        meta,
        items: currentSlice,
    };
}

const dataFaker = Array.from({length: 150}, TrackRatingDtoFaker);

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
        return http.get(`${domenURL}/stats/public/account-leaderboard/:accountId`, () => {
            return HttpResponse.json(PaginationLeaderBoardDtoFaker())
        })
    },
    statsControllerGetTrackLeaderBoardHandler: () => {
        return http.get(`${domenURL}/stats/public/leaderboard/:trackId`, () => {
            return HttpResponse.json(PaginationLeaderBoardDtoFaker())
        })
    },
    statsControllerGetGlobalLeaderBoardHandler: () => {
        return http.get(`${domenURL}/stats/public/leaderboard`, ({request}) => {
            const {url} = request;
            const createFilterPredicate: CreateFilterPredicate<TrackRatingDto> = (search) => ((item) => item.accountUsername.includes(search))
            const data = sliceDataForPagination<TrackRatingDto>(url, dataFaker, createFilterPredicate)
            console.log(data);
            return HttpResponse.json(data);
        })
    },
}