/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTrackDto } from '../models/CreateTrackDto';
import type { PaginateTrackDto } from '../models/PaginateTrackDto';
import type { TrackDto } from '../models/TrackDto';
import type { UpdateTrackDto } from '../models/UpdateTrackDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TracksService {
  /**
   * Получить список треков с переключателем страниц
   * Возвращает список треков с данными для переключателя страниц
   * @param page
   * @param limit
   * @param sortBy Сортировать по полю
   * @param sortDirection Направление сортировки
   * @param filterByType Фильтровать по типу
   * @param filterByUser Фильтровать по пользователю
   * @param filterByTags Фильтровать по тегам
   * @param filterByCategory Фильтровать по категории
   * @returns PaginateTrackDto
   * @throws ApiError
   */
  public static trackControllerPaginate(
    page: number = 1,
    limit: number = 10,
    sortBy: 'votes' | 'races' | null = null,
    sortDirection: 'ASC' | 'DESC' | null = null,
    filterByType: 'custom' | 'default' | null = null,
    filterByUser: number | null = null,
    filterByTags: Array<number> | null = null,
    filterByCategory: number | null = null,
  ): CancelablePromise<PaginateTrackDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/track',
      query: {
        page: page,
        limit: limit,
        sort_by: sortBy,
        sort_direction: sortDirection,
        filter_by_type: filterByType,
        filter_by_user: filterByUser,
        filter_by_tags: filterByTags,
        filter_by_category: filterByCategory,
      },
    });
  }

  /**
   * Создаёт новый трек
   * Возвращает данные созданого трека
   * @param requestBody
   * @returns TrackDto
   * @throws ApiError
   */
  public static trackControllerCreate(
    requestBody: CreateTrackDto,
  ): CancelablePromise<TrackDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/track',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Получить трек по его публичному ID
   * Возвращает данные трека по его публичному ID
   * @param publicId Публичный ID трека
   * @returns TrackDto
   * @throws ApiError
   */
  public static trackControllerFind(
    publicId: string,
  ): CancelablePromise<TrackDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/track/{publicId}',
      path: {
        publicId: publicId,
      },
    });
  }

  /**
   * Обновить данные трека
   * Возвращает обновленные данные трека
   * @param publicId
   * @param requestBody
   * @returns TrackDto
   * @throws ApiError
   */
  public static trackControllerUpdate(
    publicId: string,
    requestBody: UpdateTrackDto,
  ): CancelablePromise<TrackDto> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/track/{publicId}',
      path: {
        publicId: publicId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
