import _ from 'lodash';
import {TrackTagDto} from "../generated/game";
export const getRandomTagsList = (tagsList: TrackTagDto[]): TrackTagDto[] => {
    const result: TrackTagDto[] = [];
    const randomFinalIndex = _.random(1, tagsList.length - 1);
    for (let i = 0; i < randomFinalIndex; i++) {
        const randomTag  = _.sample(tagsList);
        if (randomTag && result.indexOf((randomTag)) !== -1) {
            result.push(randomTag);
        }
    }
    return result;
}