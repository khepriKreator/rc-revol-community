/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TrackTagDto } from '../models/TrackTagDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TracksTagsService {
  /**
   * Получение списка тегов
   * Возвращает список тегов
   * @returns TrackTagDto Возвращает список тегов
   * @throws ApiError
   */
  public static trackTagControllerFindAll(): CancelablePromise<
    Array<TrackTagDto>
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/track-tag',
    });
  }
}
