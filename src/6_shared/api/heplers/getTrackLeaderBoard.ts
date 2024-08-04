import {TrackRatingDto} from "../generated/game";

export const getTrackLeaderBoard = (trackId: string, data: TrackRatingDto[]) => {
    const filteredDataFaker = data.filter(item => item.trackPublicId === trackId);
    console.log("Data: ", data, 'Filtered data: ',  filteredDataFaker);
    return filteredDataFaker;
}