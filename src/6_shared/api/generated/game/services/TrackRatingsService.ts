/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostTrackRatingDto } from '../models/PostTrackRatingDto';
import type { PostTrackRatingResultDto } from '../models/PostTrackRatingResultDto';
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
                'trackId': trackId,
            },
            query: {
                'isDemo': isDemo,
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
                'trackId': trackId,
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
    public static statsControllerGetAllUserResult(): CancelablePromise<Array<TrackRatingDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stats/tracks-all-user-results',
            errors: {
                401: `Не авторизированный запрос`,
            },
        });
    }

    /**
     * Получить статистику игрока по трассам
     * @param accountId ID аккаунта
     * @param page 
     * @param limit 
     * @param isDemo Показывать данные только для demo игры
     * @returns TrackRatingDto Результаты трека
     * @throws ApiError
     */
    public static statsControllerAccountLeaderBoard(
accountId: number,
page: number = 1,
limit: number = 10,
isDemo: boolean = false,
): CancelablePromise<Array<TrackRatingDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stats/account-leaderboard/{accountId}',
            path: {
                'accountId': accountId,
            },
            query: {
                'page': page,
                'limit': limit,
                'isDemo': isDemo,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизированный запрос`,
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
     * @returns TrackRatingDto Результаты трека по аккаунтам
     * @throws ApiError
     */
    public static statsControllerTrackLeaderBoard(
trackId: string,
page: number = 1,
limit: number = 10,
isDemo: boolean = false,
search?: string,
): CancelablePromise<Array<TrackRatingDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stats/leaderboard/{trackId}',
            path: {
                'trackId': trackId,
            },
            query: {
                'page': page,
                'limit': limit,
                'isDemo': isDemo,
                'search': search,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизированный запрос`,
            },
        });
    }

    /**
     * Получить глобальную статистику
     * @param page 
     * @param limit 
     * @param isDemo Показывать данные только для demo игры
     * @param search Поиск по аккаунтам (username)
     * @returns TrackRatingDto Результаты трека по аккаунтам
     * @throws ApiError
     */
    public static statsControllerGlobalLeaderBoard(
page: number = 1,
limit: number = 10,
isDemo: boolean = false,
search?: string,
): CancelablePromise<Array<TrackRatingDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stats/leaderboard',
            query: {
                'page': page,
                'limit': limit,
                'isDemo': isDemo,
                'search': search,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизированный запрос`,
            },
        });
    }
}
