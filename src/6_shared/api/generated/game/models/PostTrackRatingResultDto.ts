/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PostTrackRatingResultDto = {
  /**
   * Предыдущий результат заезда, вернется если новый результат лучше предыдущего
   */
  prevResult: Record<string, any> | null;
  /**
   * Новый результат заезда, вернется всегда и при создании и при обновлении
   */
  nextResult: Record<string, any> | null;
};
