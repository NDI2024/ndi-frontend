// @ts-ignore
import {useFilters, useGlobalFilter, usePageSize, usePagination, useSortBy, useTable} from "react-table";
import {ClassAttributes, HTMLAttributes, useState} from "react";
import {JSX} from "react/jsx-runtime";
import {useTranslation} from "react-i18next";
import {IoIosArrowRoundUp, IoIosSearch} from "react-icons/io";
import {Pagination} from "components/table/pagination";
import Drawer from "components/display/drawer";
import {findSlotOfType} from "utils/components";
import {FaFilter} from "react-icons/fa";
import {Form} from "components/form/form";
import {Button} from "components/generic/button";
import {FieldValues} from "react-hook-form";
import {Filter, FilterForm} from "components/table/filterForm";
import {RowData} from "@tanstack/react-table";

interface Props {
    columns: Array<any>;
    data: Array<RowData>;
    initialState?: InitialState;
    filters?: Array<Filter>;
    children?: JSX.Element
}


interface InitialState {
    pageSize: number;
    pageIndex: number;
}

const Table = ({columns, data, initialState = {pageSize: 10, pageIndex: 0}, filters, children}: Props) => {
    const {t} = useTranslation()

    const [, setFilterInput] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [filterDrawerOpened, setFilterDrawerOpened] = useState(false);

    const headerContent = findSlotOfType(children, HeaderContent)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        pageCount,
        gotoPage,
        setPageSize,
        pageOptions,
        setGlobalFilter,
        setFilter
    } = useTable(
        {
            columns,
            data,
            initialState
        },
        useGlobalFilter,
        useFilters,
        useSortBy,
        usePagination
    );

    const handleFilterChange = (e: { target: { value: string; }; }) => {
        const value = e.target.value;
        setGlobalFilter(value);
        setFilterInput(value);
    };

    const changeCurrentPage = (page: number) => {
        setCurrentPage(page - 1)
        gotoPage(page - 1)
    }

    const getColumnHeaderByAccessor = (accessor: string) => {
        const header = headerGroups[0].headers.find((header: { id: string; }) => header.id === accessor)
        return header?.render('Header')
    }

    const handleSubmitForm = (data: FieldValues) => {
        Object.entries(data).forEach(([key, value]) => {
            setFilter(key, value)
        })
        setFilterDrawerOpened(false)
    }

    return (
        <div className="bg-white dark:bg-gray-800 shadow-md sm:rounded-lg">
            <div
                className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div className="w-full md:w-1/2">
                    <div className="flex items-center">
                        <label htmlFor="simple-search" className="sr-only">{t('Label.Research')}</label>
                        <div className="relative w-full">
                            <div
                                className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <IoIosSearch/>
                            </div>
                            <input type="text" id="table-search" onChange={handleFilterChange}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   placeholder={t('Label.Research')}/>
                        </div>
                    </div>
                </div>
                <div
                    className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    {
                        headerContent
                    }
                    {
                        filters &&
                        <div className="flex items-center space-x-3 w-full md:w-auto">
                            <Form submitFn={handleSubmitForm}>
                                <Drawer headerTitle={t('Label.Filters')} customOpened={filterDrawerOpened}
                                        setCustomOpened={setFilterDrawerOpened}>
                                    <Drawer.ToggleButton>
                                        <button id="filterButton"
                                                className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                                type="button">
                                            <FaFilter className="h-4 w-4 mr-2 text-gray-400"/>
                                            {t('Label.Filters')}
                                        </button>
                                    </Drawer.ToggleButton>
                                    <Drawer.Body>
                                        <>
                                            <FilterForm filters={filters} columns={columns}
                                                        getColumnHeaderByAccessor={getColumnHeaderByAccessor}/>
                                        </>
                                    </Drawer.Body>
                                    <Drawer.Footer>
                                        <Button type={'submit'}>
                                            {t('Label.Apply')}
                                        </Button>
                                    </Drawer.Footer>
                                </Drawer>
                            </Form>
                        </div>
                    }
                </div>
            </div>
            <div className="overflow-x-auto">
                <table
                    className="w-full text-sm text-left h-min-1/2 text-gray-500 dark:text-gray-400" {...getTableProps()}>
                    <thead
                        className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    {headerGroups.map((headerGroup: { getHeaderGroupProps: () => JSX.IntrinsicAttributes & ClassAttributes<HTMLTableRowElement> & HTMLAttributes<HTMLTableRowElement>; headers: any[]; }) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th scope="col" {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className={`px-4 py-3 ${column.isSorted ? 'sort-desc' : 'sort-asc'}`} {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                    {
                                        column.isSorted &&
                                        <IoIosArrowRoundUp
                                            className={`inline-block ml-1 text-base ${column.isSortedDesc ? '' : 'rotate-180'}`}/>
                                    }
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {page.map((row: { getRowProps: () => JSX.IntrinsicAttributes & ClassAttributes<HTMLTableRowElement> & HTMLAttributes<HTMLTableRowElement>; cells: any[]; }, i: any) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className="border-b even:bg-gray-50 dark:border-gray-700">
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}
                                               className="px-4 py-3">{cell.render("Cell")}</td>;
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
            <nav
                className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                aria-label="Table navigation">
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    {t('Label.Page')}
                    <span
                        className="font-semibold ml-1 text-gray-900 dark:text-white">{currentPage + 1}</span> {t('Label.of')}
                    <span
                        className="font-semibold text-gray-900 dark:text-white ml-1">{Math.max(pageOptions.length, 1)}</span>
                </span>
                <Pagination currentPage={currentPage} totalPages={pageCount}
                            setCurrentPage={changeCurrentPage}/>
            </nav>
        </div>
    )
}

interface PropsChildren {
    children: JSX.Element
}

const HeaderContent = ({children}: PropsChildren) => {
    return children
}

export default Object.assign(Table, {HeaderContent})