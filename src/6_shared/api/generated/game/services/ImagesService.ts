/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemImageDto } from '../models/ItemImageDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ImagesService {
  /**
   * Загрузка изображения
   * Возвращает данные сущности загруженного изображения
   * @param formData
   * @returns ItemImageDto
   * @throws ApiError
   */
  public static imageControllerUploadImage(formData: {
    file?: Blob;
  }): CancelablePromise<ItemImageDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/image/upload',
      formData: formData,
      mediaType: 'multipart/form-data',
    });
  }
}
