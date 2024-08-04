import _ from 'lodash';
import {TrackRatingDto, AccountDto, TrackDto} from "../generated/game";
import {TrackRatingDtoFaker} from "../faker/TrackRatingDtoFaker.ts";

export const createTrackRatingDB = (accounts: AccountDto[], tracks: TrackDto[]): TrackRatingDto[] => Array.from({length: accounts.length * 10}, TrackRatingDtoFaker)
    .reduce<TrackRatingDto[]>((acc, currentValue) => {
        const randomUser = _.sample(accounts);
        const randomTrack = _.sample(tracks);
        const {accountUsername, accountId, accountAvatar, trackPublicId, ...rest} = currentValue;
        const newValue = {
            accountId: randomUser?.id ?? accountId,
            accountAvatar: randomUser?.avatar ?? accountAvatar,
            accountUsername: randomUser?.username ?? accountUsername,
            trackPublicId: randomTrack?.publicId ?? trackPublicId,
            ...rest,
        }
        return [...acc, newValue];
    }, [])



    /*(accounts: AccountDto[]): TrackRatingDto[] => {
    const initialTrackRatingArray = Array.from({length: accounts.length * 10}, TrackRatingDtoFaker);
    const modifyTrackRatingArray: TrackRatingDto[] = initialTrackRatingArray.map((value) => {
        const randomUser = _.sample(accounts);
        const {accountUsername, accountId, accountAvatar, ...rest} = value;
        const newValue = {
            accountId: randomUser?.id ?? accountId,
            accountAvatar: randomUser?.avatar ?? accountAvatar,
            accountUsername: randomUser?.username ?? accountUsername,
            ...rest,
        }
        return newValue
    })
}*/



