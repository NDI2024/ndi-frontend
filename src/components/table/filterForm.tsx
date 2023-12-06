import {InputWithLabel} from "components/form/inputs/inputWithLabel";
import {Column} from "@tanstack/react-table";
import {FieldValues} from "react-hook-form";

interface Props {
    filters?: Array<Filter>
    columns: Array<Column<FieldValues>>
    getColumnHeaderByAccessor: (accessor: string) => string
}

export interface Filter {
    accessor: string;
    type: FilterType;
    values?: Array<string>;
}

export enum FilterType {
    Text = 'text',
    Date = 'date',
    Number = 'number'
}


export const FilterForm = ({filters = [], getColumnHeaderByAccessor}: Props) => {

    return (
        <div>
            {
                filters?.map((filter: Filter, index: number) => {
                    const label = getColumnHeaderByAccessor(filter.accessor)
                    const name = filter.accessor

                    return <InputWithLabel key={index} type={filter.type} label={label} name={name}/>
                })
            }
        </div>
    )
}