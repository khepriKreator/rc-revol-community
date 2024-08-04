import {TrackRatingDto} from "../generated/game";

export const getAccountLeaderBoard = (accountId: string, data: TrackRatingDto[]) => {
    const filteredDataFaker = data.filter(item => item.accountId === Number(accountId))
    return filteredDataFaker;
}