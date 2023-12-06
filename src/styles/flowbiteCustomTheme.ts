import {CustomFlowbiteTheme} from "flowbite-react";

export const FlowbiteCustomTheme: CustomFlowbiteTheme = {
    tab: {
        tablist: {
            tabitem: {
                base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:outline-none",
                styles: {
                    underline: {
                        active: {
                            on: "text-primary-600 rounded-t-lg border-b-2 border-primary-600 active dark:text-cyan-500 dark:border-cyan-500"
                        }
                    },
                }
            }
        }
    }
}