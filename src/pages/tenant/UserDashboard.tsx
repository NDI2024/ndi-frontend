import {UserDashboardLayout} from "layouts/dashboard/userDashboardLayout";
import {Tabs} from "flowbite-react";
import {useTranslation} from "react-i18next";
import {GiCardRandom} from "react-icons/gi";


export const UserDashboard = () => {
    const {t} = useTranslation()

    return (
        <UserDashboardLayout>
            <Tabs aria-label="Full width tabs" style="fullWidth">
                <Tabs.Item title={t('Label.Memory game')} icon={GiCardRandom}>
                    Test
                </Tabs.Item>
                <Tabs.Item title={t('Label.Fast game')} icon={GiCardRandom}>
                    Fast game
                </Tabs.Item>
            </Tabs>
        </UserDashboardLayout>
    )
}