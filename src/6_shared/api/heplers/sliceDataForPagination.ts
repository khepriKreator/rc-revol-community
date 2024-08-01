import {PageInfoMetaDto} from "../generated/game";

export type CreateFilterPredicate<D> = (search: string) => (item: D, index: number) => boolean;

export const sliceDataForPagination = <D>(url: string, data: D[], createFilterPredicate: CreateFilterPredicate<D>): {items: D[], meta: PageInfoMetaDto} => {
    const urlObj = new URL(url);
    const searchParams = new URLSearchParams(urlObj.search);

    const page = Number(searchParams.get('page'));
    const search = searchParams.get('search');
    const itemsPerPage = Number(searchParams.get('limit'));
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const getCurrentSlice = () => {
        if (search) {
            const filterBySearchData = data.filter(createFilterPredicate(search));
            return filterBySearchData.slice(startIndex, endIndex);
        }
        return data.slice(startIndex, endIndex)
    };
    const currentSlice = getCurrentSlice();

    const meta: PageInfoMetaDto = {
        totalItems: data.length,
        totalPages: data.length / itemsPerPage,
        currentPage: page,
        itemCount: currentSlice.length,
        itemsPerPage,
    }

    return {
        meta,
        items: currentSlice,
    };
}
