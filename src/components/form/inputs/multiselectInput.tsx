import {useFormContext} from "react-hook-form";
import {Chips} from "components/display/chips";
import {ChipsGroup} from "components/display/chipsGroup";
import React, {useEffect, useState} from "react";
import {initFlowbite} from "flowbite";
import {IoIosArrowDown} from "react-icons/io";
import {Button} from "components/generic/button";
import {IoSearchOutline} from "react-icons/io5";
import {useTranslation} from "react-i18next";
import {CheckButton} from "components/buttons/checkButton";

interface Props {
    name: string
    label: string
    values: MultiselectValue[]
    defaultValues?: string[]
    className?: string
}

export interface MultiselectValue {
    label: string
    value: string | number

}

export const MultiselectInput = ({name, label, values, defaultValues, className}: Props) => {
        const {setValue} = useFormContext()

        const {t} = useTranslation()

        const [inputsValues, setInputsValues] = useState<string[]>(defaultValues ? defaultValues : [])
        const [inputsValuesLabels, setInputsValuesLabels] = useState<string[]>([])
        const [inputsFilter, setInputsFilter] = useState<string>('')
        const [filteredValues, setFilteredValues] = useState<MultiselectValue[]>(values)

        useEffect(() => {
            initFlowbite()
        }, [])

        useEffect(() => {
            setFilteredValues(values.filter((value) => value.label.toLowerCase().includes(inputsFilter.toLowerCase())))
            setInputsValuesLabels(inputsValues.map((inputValue) => {
                const value = values.find((value) => value.value.toString() === inputValue)
                return value ? value.label : ''
            }))
        }, [inputsFilter, values])

        useEffect(() => {
            setValue(name, inputsValues)
        }, [inputsValues, setValue, name])

        const handleInputsChange = (e: React.MouseEvent<HTMLButtonElement>) => {
            const {textContent, dataset} = e.currentTarget
            const value = dataset.value
            if (value) {
                if (inputsValues.includes(value)) {
                    setInputsValues(inputsValues.filter((inputValue) => inputValue !== value))
                    setInputsValuesLabels(inputsValuesLabels.filter((inputValue) => inputValue !== textContent))
                } else {
                    setInputsValues([...inputsValues, value])
                    setInputsValuesLabels([...inputsValuesLabels, textContent as string])
                }
            }
        }

        const closeDropdown = () => {
            const dropdown = document.getElementById('dropdownSearchButton')
            if (dropdown) {
                dropdown.click()
            }
        }

        return (
            <div className={`${className}`}>
                <span className={'block mb-2 text-sm font-medium text-gray-900 dark:text-white'}>{label}</span>
                <ChipsGroup>
                    <div className={'flex-1 flex flex-wrap'}>
                        {
                            inputsValuesLabels.map((inputValue, index) => {
                                return (
                                    <Chips key={index} value={inputValue}/>
                                )
                            })
                        }
                    </div>
                    <div className={'flex items-center justify-end w-full h-full'}>
                        <button id="dropdownSearchButton" data-dropdown-toggle={`dropdownSearch-${name}`}
                                data-dropdown-placement="bottom"
                                className={'w-full flex items-center justify-center'}
                                type="button"><IoIosArrowDown className={'w-5 h-5'}/>
                        </button>

                        <div id={`dropdownSearch-${name}`}
                             className="z-10 hidden bg-white rounded-lg shadow mr-2 dark:bg-gray-700 w-full">
                            <div className="p-3">
                                <label htmlFor="input-group-search" className="sr-only">Search</label>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <IoSearchOutline className={'w-4 h-4 text-gray-500 dark:text-gray-400'}/>
                                    </div>
                                    <input type="text" id="input-group-search" onChange={(e) => {
                                        setInputsFilter(e.target.value)
                                    }}
                                           className={`block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                           placeholder={t('Label.Research')}/>
                                </div>
                            </div>
                            <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby={`dropdownSearchButton-${name}`}>
                                {
                                    filteredValues.map((value, index) => {
                                        return (
                                            <li key={index}>
                                                <div
                                                    className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                                    <CheckButton checked={inputsValues.includes(value.value.toString())}
                                                                 onClick={(e) => handleInputsChange(e)} value={value.value}>
                                                        {value.label}
                                                    </CheckButton>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <Button type={'button'} className={'rounded-t-none'} onClick={closeDropdown}>
                                OK
                            </Button>
                        </div>
                    </div>
                </ChipsGroup>
            </div>
        )
    }
;