/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TrackCategoryDto } from '../models/TrackCategoryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TracksCategoryService {

    /**
     * Получение списка тегов
     * Возвращает список тегов
     * @returns TrackCategoryDto Возвращает список категорий
     * @throws ApiError
     */
    public static trackCategoryControllerGetAllCategories(): CancelablePromise<Array<TrackCategoryDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/track-category',
        });
    }

}
