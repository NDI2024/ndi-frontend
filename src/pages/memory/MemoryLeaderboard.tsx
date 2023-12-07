import {UserDashboardLayout} from "layouts/dashboard/userDashboardLayout";
import Table from "components/table/table";
import {useTranslation} from "react-i18next";
import {FaTrophy} from "react-icons/fa";

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

    const podium = data.sort((a, b) => a.rank - b.rank).slice(0, 3)

    return (
        <UserDashboardLayout>
            <div className="p-4 pt-2 bg-primary-100 w-full h-full">
                <h2 className="text-2xl font-bold text-left mb-3 sticky top-0 pt-6 bg-primary-100">
                    {t('Label.Classment')}
                    <hr className="my-2" />
                </h2>

                <div className="flex items-center justify-center mb-8">
                    <div className="flex flex-col items-center mr-8">
                        <div className="flex justify-center items-center bg-white rounded-full p-2">
                            <FaTrophy className="text-gray-500 text-2xl" />
                        </div>
                        <p className="text-center text-gray-500 font-bold text-lg">
                            {podium[1].username}
                            <br />
                            <span className="text-gray-500 text-md">
                                {podium[1].score}
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col items-center mr-8">
                        <div className="flex justify-center items-center bg-white rounded-full p-2">
                            <FaTrophy className="text-yellow-500 text-3xl" />
                        </div>
                        <p className="text-center text-yellow-500 font-bold text-2xl">
                            {podium[0].username}
                            <br />
                            <span className="text-gray-500 text-xl">
                                {podium[0].score}
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex justify-center items-center bg-white rounded-full p-2">
                            <FaTrophy className="text-yellow-900 text-2xl" />
                        </div>
                        <p className="text-center text-yellow-900 font-bold">
                            {podium[2].username}
                            <br />
                            <span className="text-xs text-gray-500">
                                {podium[2].score}
                            </span>
                        </p>
                    </div>
                </div>

                <div className="fade-in-up">
                    <Table data={myData.concat(data.sort((a, b) => a.rank - b.rank))} columns={columns}/>
                </div>
            </div>
        </UserDashboardLayout>
    )
}