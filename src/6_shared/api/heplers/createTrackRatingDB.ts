import _ from 'lodash';
import {TrackRatingDtoFaker} from "../faker/TrackRatingDtoFaker.ts";
import {TrackRatingDto, AccountDto} from "../generated/game";

export const createTrackRatingDB = (accounts: AccountDto[]): TrackRatingDto[] => Array.from({length: accounts.length * 10}, TrackRatingDtoFaker)
    .reduce<TrackRatingDto[]>((acc, currentValue) => {
        const randomUser = _.sample(accounts);
        const {accountUsername, accountId, accountAvatar, ...rest} = currentValue;
        const newValue = {
            accountId: randomUser?.id ?? accountId,
            accountAvatar: randomUser?.avatar ?? accountAvatar,
            accountUsername: randomUser?.username ?? accountUsername,
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



