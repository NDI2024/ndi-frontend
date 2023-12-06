import {useTranslation} from "react-i18next";

interface Props {
    tenants: { tenant_id: string, tenant_name: string }[]
    setTenantFn: (tenant_id: string) => void
}

export const TenantList = ({tenants, setTenantFn}: Props) => {

    const {t} = useTranslation()

    return (
        <>
            <div className={'w-screen h-screen p-4 shadow rounded z-[10] absolute top-0 left-0'}>
            </div>
            <div
                className={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[20] md:w-1/5'}>
                <div
                    className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-4 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{t('Label.Client account')}</h5>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            {
                                tenants.map((tenant, index) => {
                                    return (
                                        <li className="py-3 sm:py-4 hov" key={index}>
                                            <button className="flex items-center w-full py-3 px-4 hover:bg-gray-100"
                                                    onClick={() => setTenantFn(tenant.tenant_id)}>
                                                <div className="flex-1 min-w-0 text-left">
                                                    <p className="text-sm text-gray-900 font-bold truncate dark:text-white">
                                                        {tenant.tenant_name}
                                                    </p>
                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                        {tenant.tenant_id}
                                                    </p>
                                                </div>
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}