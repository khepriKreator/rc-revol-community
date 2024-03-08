/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReportOptionDto } from './ReportOptionDto';

export type ReportDto = {
  /**
   * ID автора жалобы
   */
  id: number;
  /**
   * ID автора жалобы
   */
  authorId: number;
  /**
   * ID объекта, на который пожаловались
   */
  reportableId: string;
  /**
   * Тип объекта, на который пожаловались
   */
  reportableType: string;
  /**
   * Текст жалобы
   */
  text: string;
  /**
   * Флаг указывающий на решение жалобы
   */
  resolved: boolean;
  /**
   * Опции жалобы
   */
  option: ReportOptionDto | null;
};
