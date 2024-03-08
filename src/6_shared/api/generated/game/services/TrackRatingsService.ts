/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginationLeaderBoardDto } from '../models/PaginationLeaderBoardDto';
import type { PostTrackRatingDto } from '../models/PostTrackRatingDto';
import type { PostTrackRatingResultDto } from '../models/PostTrackRatingResultDto';
import type { SaveTrackTrickPointsDto } from '../models/SaveTrackTrickPointsDto';
import type { TrackRatingDto } from '../models/TrackRatingDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TrackRatingsService {
  /**
   * Получить результаты трека
   * @param trackId ID трека
   * @param isDemo Показывать данные только для demo игры
   * @returns TrackRatingDto Результаты трека
   * @throws ApiError
   */
  public static statsControllerGetResults(
    trackId: string,
    isDemo: boolean = false,
  ): CancelablePromise<Array<TrackRatingDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/stats/tracks-results-table/{trackId}',
      path: {
        trackId: trackId,
      },
      query: {
        isDemo: isDemo,
      },
      errors: {
        401: `Не авторизированный запрос`,
      },
    });
  }

  /**
   * Добавить результат заезда
   * @param trackId ID трека
   * @param requestBody
   * @returns PostTrackRatingResultDto Добавленный результат заезда
   * @throws ApiError
   */
  public static statsControllerPostResult(
    trackId: string,
    requestBody: PostTrackRatingDto,
  ): CancelablePromise<PostTrackRatingResultDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/stats/tracks-results-table/{trackId}',
      path: {
        trackId: trackId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Некорректный запрос`,
        401: `Не авторизированный запрос`,
      },
    });
  }

  /**
   * Получить результаты трека
   * @param trackId ID трека
   * @param isDemo Показывать данные только для demo игры
   * @returns TrackRatingDto Результаты трека
   * @throws ApiError
   */
  public static statsControllerGetTrickPointsResult(
    trackId: string,
    isDemo: boolean = false,
  ): CancelablePromise<Array<TrackRatingDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/stats/tracks-trick-points-result-table/{trackId}',
      path: {
        trackId: trackId,
      },
      query: {
        isDemo: isDemo,
      },
      errors: {
        401: `Не авторизированный запрос`,
      },
    });
  }

  /**
   * Добавить результат заезда в виде очков трюков
   * @param trackId ID трека
   * @param requestBody
   * @returns SaveTrackTrickPointsDto Добавленный результат заезда
   * @throws ApiError
   */
  public static statsControllerSaveTrickPointsResult(
    trackId: string,
    requestBody: SaveTrackTrickPointsDto,
  ): CancelablePromise<SaveTrackTrickPointsDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/stats/tracks-trick-points-result-table/{trackId}',
      path: {
        trackId: trackId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Некорректный запрос`,
        401: `Не авторизированный запрос`,
      },
    });
  }

  /**
   * Метод вернет все результаты игрока для всех треков
   * @returns TrackRatingDto Результаты трека
   * @throws ApiError
   */
  public static statsControllerGetAllUserResult(): CancelablePromise<
    Array<TrackRatingDto>
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/stats/tracks-all-user-results',
    });
  }

  /**
   * Получить статистику игрока по трассам
   * @param accountId ID аккаунта
   * @param page
   * @param limit
   * @param isDemo Показывать данные только для demo игры
   * @returns PaginationLeaderBoardDto Результаты трека
   * @throws ApiError
   */
  public static statsControllerGetAccountLeaderBoard(
    accountId: number,
    page: number = 1,
    limit: number = 10,
    isDemo: boolean = false,
  ): CancelablePromise<PaginationLeaderBoardDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/stats/public/account-leaderboard/{accountId}',
      path: {
        accountId: accountId,
      },
      query: {
        page: page,
        limit: limit,
        isDemo: isDemo,
      },
      errors: {
        400: `Некорректный запрос`,
      },
    });
  }

  /**
   * Получить статистику трассы по игрокам
   * @param trackId ID трека
   * @param page
   * @param limit
   * @param isDemo Показывать данные только для demo игры
   * @param search Поисковая строка по аккаунтам
   * @returns PaginationLeaderBoardDto Результаты трека по аккаунтам
   * @throws ApiError
   */
  public static statsControllerGetTrackLeaderBoard(
    trackId: string,
    page: number = 1,
    limit: number = 10,
    isDemo: boolean = false,
    search?: string,
  ): CancelablePromise<PaginationLeaderBoardDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/stats/public/leaderboard/{trackId}',
      path: {
        trackId: trackId,
      },
      query: {
        page: page,
        limit: limit,
        isDemo: isDemo,
        search: search,
      },
      errors: {
        400: `Некорректный запрос`,
      },
    });
  }

  /**
   * Получить глобальную статистику
   * @param page
   * @param limit
   * @param isDemo Показывать данные только для demo игры
   * @param search Поиск по аккаунтам (username)
   * @returns PaginationLeaderBoardDto Результаты трека по аккаунтам
   * @throws ApiError
   */
  public static statsControllerGetGlobalLeaderBoard(
    page: number = 1,
    limit: number = 10,
    isDemo: boolean = false,
    search?: string,
  ): CancelablePromise<PaginationLeaderBoardDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/stats/public/leaderboard',
      query: {
        page: page,
        limit: limit,
        isDemo: isDemo,
        search: search,
      },
      errors: {
        400: `Некорректный запрос`,
      },
    });
  }
}
