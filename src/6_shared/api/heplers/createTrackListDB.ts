import _ from 'lodash';
import {TrackTagDto, AccountDto, TrackDto} from "../generated/game";
import {TrackDtoFaker} from "../faker/TrackDtoFaker.ts";

export const createTrackListDB = (accounts: AccountDto[], tags: TrackTagDto[]): TrackDto[] => Array.from({length: accounts.length * 3}, TrackDtoFaker)
.reduce<TrackDto[]>((acc, currentValue) => {
    const {author, tags: initTags, ...rest} = currentValue;
    const randomTags = _.sampleSize(tags, _.random(0, tags.length));
    const randomAccount = _.sample(accounts);
    const newValue: TrackDto = {
        tags: randomTags ?? initTags,
        author: randomAccount ?? author,
        ...rest,
    }
    return [...acc, newValue]
}, [])