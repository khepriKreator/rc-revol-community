import {PageInfoMetaDto} from "../generated/game";

export type CreateFilterPredicate<D> = (params: string) => (item: D, index: number) => boolean;

export const sliceDataForPagination = <D>(url: string, data: D[], createFilterPredicate: CreateFilterPredicate<D>): {items: D[], meta: PageInfoMetaDto} => {
    const urlObj = new URL(url);
    const searchParams = new URLSearchParams(urlObj.search);

    const page = Number(searchParams.get('page'));
    const search = searchParams.get('search');
    const filterByTags: string | null = searchParams.getAll('filter_by_tags').join(',');
    const itemsPerPage = Number(searchParams.get('limit'));
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const getCurrentSlice = () => {
        if (search || filterByTags) {
            const params = search ?? filterByTags;
            const filterData = data.filter(createFilterPredicate(params));
            console.log(filterData)
            return filterData.slice(startIndex, endIndex);
        }
        return data.slice(startIndex, endIndex)
    };
    const currentSlice = getCurrentSlice();

    const meta: PageInfoMetaDto = {
        totalItems: data.length,
        totalPages: Math.ceil(data.length / itemsPerPage),
        currentPage: page,
        itemCount: currentSlice.length,
        itemsPerPage,
    }

    return {
        meta,
        items: currentSlice,
    };
}