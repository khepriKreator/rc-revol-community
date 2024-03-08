/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OtpCodeDto } from '../models/OtpCodeDto';
import type { OtpEmailDto } from '../models/OtpEmailDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OtpService {
  /**
   * Отправка одноразового кода на email
   * Отправит письмо на email с одноразовым кодом
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static otpControllerSendEmailCode(
    requestBody: OtpEmailDto,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/otp/sign-in/email',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Получение JWT-токена по OTP коду
   * Получает JWT-токен на основе валидного OTP кода
   * @param requestBody
   * @returns string
   * @throws ApiError
   */
  public static otpControllerGetToken(
    requestBody: OtpCodeDto,
  ): CancelablePromise<string> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/otp/token',
      body: requestBody,
      mediaType: 'application/json',
      responseHeader: 'Authorization',
    });
  }
}
