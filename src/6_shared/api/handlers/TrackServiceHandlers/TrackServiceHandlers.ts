import {HttpResponse, http} from 'msw';
import {sliceDataForPagination, CreateFilterPredicate} from "../../heplers";
import {TrackDtoFaker} from "../../faker/TrackDtoFaker.ts";
import {TrackDto} from "../../generated/game";
import {trackListDB} from "../../fakerDB.ts";
import {domenURL} from "../../domen.ts";

export const TrackServiceHandlers = {
    trackControllerPaginateHandler: () => {
        return http.get(`${domenURL}/track`, ({request}) => {
            const {url} = request
            const createFilterPredicate: CreateFilterPredicate<TrackDto> = (filterByTags) => (({tags}) => {
                const dataTagsIds = tags.map(tag => tag.id);
                const filterTagsIds = (filterByTags.split(',')).map(tag => Number(tag));
                return filterTagsIds.every(id => dataTagsIds.includes(id));
            })
            return HttpResponse.json(sliceDataForPagination<TrackDto>(url, trackListDB, createFilterPredicate))
        })
    },
    trackControllerFindHandler: () => {
        return http.get(`${domenURL}/track/:publicId`, () => {
            return HttpResponse.json(TrackDtoFaker())
        })
    },
}