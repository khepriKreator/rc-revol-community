/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TrackRatingDto } from './TrackRatingDto';

export type PostTrackRatingResultDto = {
    /**
     * Предыдущий результат заезда, вернется если новый результат лучше предыдущего
     */
    prevResult: TrackRatingDto | null;
    /**
     * Новый результат заезда, вернется всегда и при создании и при обновлении
     */
    nextResult: TrackRatingDto | null;
};
