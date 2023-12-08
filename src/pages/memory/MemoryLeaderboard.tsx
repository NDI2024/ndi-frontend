import {UserDashboardLayout} from "layouts/dashboard/userDashboardLayout";
import Table from "components/table/table";
import {useTranslation} from "react-i18next";
import {FaTrophy} from "react-icons/fa";
import {useState} from "react";
import {GetLeaderboard, GetMyLeaderboard} from "services/leaderboard/leaderboard";

export const MemoryLeaderboard = () => {
    const {t} = useTranslation()
    const [leaderboard, setLeaderboard] = useState<any>([])
    const [myLeaderboard, setMyLeaderboard] = useState<any>([])
    const [podium, setPodium] = useState<any>([])

    const fetchLeaderboard = async () => {
        try {
            const req = await GetLeaderboard()
            const reqMe = await GetMyLeaderboard()
            setLeaderboard(req.data.sort((a: { rank: number; }, b: { rank: number; }) => a?.rank - b?.rank))
            setMyLeaderboard(reqMe.data)
            setPodium(req.data.sort((a: { rank: number; }, b: { rank: number; }) => a?.rank - b?.rank).slice(0, 3))
        } catch (e) {
            console.log(e)
        }
    }

    useState(() => {
        fetchLeaderboard()
    })

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
            accessor: "points"
        },
    ]

    return (
        <UserDashboardLayout>
            <div className="pl-20 pt-2 bg-primary-100 w-full h-full">
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
                            {podium[1]?.username}
                            <br />
                            <span className="text-gray-500 text-md">
                                {podium[1]?.points}
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col items-center mr-8">
                        <div className="flex justify-center items-center bg-white rounded-full p-2">
                            <FaTrophy className="text-yellow-500 text-3xl" />
                        </div>
                        <p className="text-center text-yellow-500 font-bold text-2xl">
                            {podium[0]?.username}
                            <br />
                            <span className="text-gray-500 text-xl">
                                {podium[0]?.points}
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex justify-center items-center bg-white rounded-full p-2">
                            <FaTrophy className="text-yellow-900 text-2xl" />
                        </div>
                        <p className="text-center text-yellow-900 font-bold">
                            {podium[2]?.username}
                            <br />
                            <span className="text-xs text-gray-500">
                                {podium[2]?.points}
                            </span>
                        </p>
                    </div>
                </div>

                <div className="fade-in-up">
                    <Table data={myLeaderboard.concat(leaderboard)} columns={columns}/>
                </div>
            </div>
        </UserDashboardLayout>
    )
}