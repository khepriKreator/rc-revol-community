import Pagination from 'react-bootstrap/Pagination';
import {useState} from "react";
import {PageInfoMetaDto} from "../../api/generated/game";

export type PaginationProps = {
    onClFirst: () => void;
    onClLast: () => void;
    onClNext: () => void;
    onClPrev: () => void;
    pageInfo: PageInfoMetaDto;
}

export const CustomPagination = ({pageInfo, onClLast, onClNext, onClPrev, onClFirst}: PaginationProps) => {
    const {totalPages, itemsPerPage, currentPage} = pageInfo;

    const ShortPagination = () => Array(totalPages - 1).fill(null).map((_, index) => <><Pagination.Item key={index} onClick={() => index + 1}>{index + 1}</Pagination.Item></>)
    const LongPagination = () => {
        const [offset, setOffset] = useState('');
        
        return (
            <>
                <Pagination.Item>1</Pagination.Item>
                {currentPage > 5 && <Pagination.Ellipsis/>}
                
                {currentPage < totalPages - 4 && <Pagination.Ellipsis/>}
                <Pagination.Item>{totalPages}</Pagination.Item>
            </>
        )
    }

    return (
        <Pagination>
            <Pagination.First/>
            <Pagination.Prev/>
            {
                totalPages < 10 ? <ShortPagination/> : <LongPagination/>
            }
            <Pagination.Next/>
            <Pagination.Last/>
        </Pagination>
    )
};