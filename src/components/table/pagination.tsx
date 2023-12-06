import {Pagination as FlowPagination} from "flowbite-react";
import {Dispatch} from "react";

interface Props {
    currentPage: number
    setCurrentPage: Dispatch<number>
    totalPages: number,
    previousLabel?: string,
    nextLabel?: string
}

export const Pagination = ({currentPage, setCurrentPage, totalPages, previousLabel = '', nextLabel = ''}: Props) => {
    return (
        <FlowPagination currentPage={currentPage + 1} totalPages={totalPages} showIcons={true}
                        previousLabel={previousLabel}
                        nextLabel={nextLabel}
                        onPageChange={(page) => {
                            setCurrentPage(page)
                        }}
        />
    )
}