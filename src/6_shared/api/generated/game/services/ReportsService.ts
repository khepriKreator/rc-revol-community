/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateReportDto } from '../models/CreateReportDto';
import type { ReportDto } from '../models/ReportDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReportsService {
  /**
   * Создание жалобы
   * Возвращает данные созданой жалобы
   * @param requestBody
   * @returns ReportDto Жалоба успешно создана
   * @throws ApiError
   */
  public static reportControllerCreateReport(
    requestBody: CreateReportDto,
  ): CancelablePromise<ReportDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/report',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Некорректный запрос`,
        401: `Не авторизированный запрос`,
        409: `The report has already been sent`,
      },
    });
  }
}
