import Pagination from 'react-bootstrap/Pagination';
import {useState} from "react";


export type PaginationProps = {
    totalPages: number;
}

export const CustomPagination = ({totalPages}: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const initialState = [1, 2, 3, 4, 5, 6, 7];
    const finalState = [114, 115, 116, 117, 118,119, 120]
    const [btnsSet, setBtnsSet] = useState(initialState);
    const changeBtnsSet = (currentPage: number) => {
        if (currentPage > 4 && currentPage < totalPages - 4) {
            setBtnsSet([(currentPage -3), (currentPage - 2), (currentPage - 1), currentPage, (currentPage + 1), (currentPage + 2), (currentPage + 3)]);
        }
        if (currentPage > totalPages - 5) {
            setBtnsSet(finalState);
        }
    }
    const ShortPagination = () => Array(totalPages - 1).fill(null).map((_, index) => <>
        <Pagination.Item
            key={index}
            onClick={() => setCurrentPage(index + 1)}
        >
            {index + 1}</Pagination.Item>
    </>)
    const LongPagination = () => {
        return (
            <>
                {currentPage > 4 &&
                    <>
                        <Pagination.Item 
                            onClick={() => {
                                    setCurrentPage(1)
                                    setBtnsSet(initialState)
                                }
                            }
                        >
                            1
                        </Pagination.Item>
                        <Pagination.Ellipsis/>
                    </>
                    }
                {
                    btnsSet.map((btn, index) => 
                        <Pagination.Item 
                            onClick={() => {
                                setCurrentPage(btn)
                                changeBtnsSet(btn)
                            }} 
                            active={btn === currentPage}
                            key={index}
                        >
                            {btn}
                        </Pagination.Item>
                    )
                }
                {currentPage < totalPages - 4 &&
                    <>
                        <Pagination.Ellipsis/>
                        <Pagination.Item
                            onClick={() => {
                                setCurrentPage(totalPages)
                                changeBtnsSet(currentPage);
                            }}
                        >   
                            {totalPages}
                        </Pagination.Item>
                    </>
                }
            </>
        )
    }
    console.log(currentPage, totalPages)
    return (
        <Pagination>
            <Pagination.First 
                onClick={() => {
                    setCurrentPage(1)
                    setBtnsSet(initialState)
                }}
                disabled={currentPage === 1}
            />
            <Pagination.Prev 
                onClick={() => {
                    setCurrentPage(currentPage - 1);
                    changeBtnsSet(currentPage);
                }}
                disabled={currentPage === 1}
            />
            {
                totalPages < 10 ? <ShortPagination/> : <LongPagination/>
            }
            <Pagination.Next 
                onClick={() => {
                    setCurrentPage(currentPage + 1);
                    changeBtnsSet(currentPage);
                }}
                disabled={currentPage === totalPages}
            />
            <Pagination.Last 
                onClick={() => {
                    setCurrentPage(totalPages);
                    changeBtnsSet(currentPage);
                }}
                disabled={currentPage === totalPages}
            />
        </Pagination>
    )
};