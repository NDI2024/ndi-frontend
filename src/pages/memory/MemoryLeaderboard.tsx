import {UserDashboardLayout} from "layouts/dashboard/userDashboardLayout";
import Table from "components/table/table";
import {useTranslation} from "react-i18next";

const data = [
    {
        username: "John Doe",
        score: 10,
        rank: 50,
    },
    {
        username: "Jane Doe",
        score: 20,
        rank: 10,
    },
    {
        username: "John Doe",
        score: 50,
        rank: 55,
    },
    {
        username: "Jane Doe",
        score: 22,
        rank: 35,
    },
    {
        username: "John Doe",
        score: 154,
        rank: 18,
    },
    {
        username: "Jane Doe",
        score: 27,
        rank: 37,
    },
    {
        username: "John Doe",
        score: 18,
        rank: 19,
    },
    {
        username: "Jane Doe",
        score: 46,
        rank: 63,
    },
]

const myData = [
    {
        username: "You",
        score: 30,
        rank: 30,
    }
]

export const MemoryLeaderboard = () => {
    const {t} = useTranslation()

    const columns = [
        {
            Header: t('Label.Rank'),
            accessor: "rank"
        },
        {
            Header: t("Label.Username"),
            accessor: "username"
        },
        {
            Header: "Score",
            accessor: "score"
        },
    ]

    return (
        <UserDashboardLayout>
            <div className="p-4 pt-8 bg-blue-100 w-full h-full">
                <h2 className="text-2xl font-bold text-left mb-3">{t('Label.Classment')}</h2>

                <Table data={myData.concat(data.sort((a, b) => a.rank - b.rank))} columns={columns}/>
            </div>
        </UserDashboardLayout>
    )
}