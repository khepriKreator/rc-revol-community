import Pagination from "react-bootstrap/Pagination";

export type PaginationProps = {
    onClFirst: () => void;
    onClLast: () => void;
    onClNext: () => void;
    onClPrev: () => void;
    page: number;
    totalPages: number
}

export const CustomPagination = ({page, onClLast, onClNext, onClPrev, onClFirst, totalPages}: PaginationProps) => {
    return (
        <Pagination>
            <Pagination.First onClick={onClFirst}/>
            <Pagination.Prev onClick={onClPrev}/>
            <Pagination.Item>{page}</Pagination.Item>
            {
               page < totalPages &&
                <>
                    {page < totalPages - 1 && <Pagination.Ellipsis/>}
                    <Pagination.Item>{totalPages}</Pagination.Item>
                </>
            }
            <Pagination.Next onClick={onClNext}/>
            <Pagination.Last onClick={onClLast}/>
        </Pagination>
    );
};