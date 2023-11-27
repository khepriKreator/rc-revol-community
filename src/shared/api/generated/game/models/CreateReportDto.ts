/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReportOptionType } from './ReportOptionType';

export type CreateReportDto = {
    /**
     * ID объекта, на который пожаловались
     */
    reportableId: string;
    /**
     * Тип объекта, на который пожаловались
     */
    reportableType: ReportOptionType;
    /**
     * Текст жалобы
     */
    text: string;
    /**
     * ID опции жалобы
     */
    optionId: number;
};
