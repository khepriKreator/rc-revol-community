/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTrackDto = {
    /**
     * В формате JSON
     */
    data: Record<string, any>;
    title: string;
    published: boolean;
    previewId?: number | null;
    tagsIds: Array<number>;
    categoryId: number;
};
