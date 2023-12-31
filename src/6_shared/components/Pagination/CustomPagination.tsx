import Pagination from "react-bootstrap/Pagination";

export type PaginationProps = {
    onClick: () => void;
    page: number;
}

export const CustomPagination = ({page, onClick}: PaginationProps) => {
    return (
        <Pagination>
            <Pagination.First onClick={onClick}/>
            <Pagination.Prev onClick={onClick}/>
            <Pagination.Item>{page}</Pagination.Item>
            <Pagination.Next onClick={onClick}/>
            <Pagination.Last onClick={onClick}/>
        </Pagination>
    );
};