/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VotesService {
  /**
   * Получить кол-во голосов по треку
   * Возвращает кол-во голосов по треку
   * @param trackId Идентификатор трека
   * @returns number
   * @throws ApiError
   */
  public static voteControllerGetCountByTrack(
    trackId: any,
  ): CancelablePromise<number> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/vote/{trackId}',
      path: {
        trackId: trackId,
      },
    });
  }

  /**
   * Добавить или убрать голос
   * Если голос уже существует повторный запрос удаляет этот голос
   * @param trackId Идентификатор трека
   * @returns number
   * @throws ApiError
   */
  public static voteControllerPostVote(
    trackId: any,
  ): CancelablePromise<number> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/vote/{trackId}',
      path: {
        trackId: trackId,
      },
    });
  }
}
