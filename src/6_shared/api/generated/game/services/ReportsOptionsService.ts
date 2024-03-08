/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReportOptionDto } from '../models/ReportOptionDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReportsOptionsService {
  /**
   * Получить все опции по типу
   * Возвращает список данных опций по типу
   * @param type
   * @returns ReportOptionDto
   * @throws ApiError
   */
  public static reportOptionControllerGetAll(
    type?: 'track' | 'account',
  ): CancelablePromise<ReportOptionDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/report-option',
      query: {
        type: type,
      },
    });
  }
}
