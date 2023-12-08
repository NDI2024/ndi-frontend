import {UserDashboardLayout} from "layouts/dashboard/userDashboardLayout";
import {Tabs} from "flowbite-react";
import {useTranslation} from "react-i18next";
import {GiCardRandom} from "react-icons/gi";
import {FastGameMain} from "layouts/fastGame/FastGameMain";
import {useState} from "react";
import {MemoryMainPage} from "pages/memory/MemoryMainPage";

const questions = [
    {
        question: 'Question1',
        answers: [
            {
                answer: 'Faux',
                isCorrect: false,
            },
            {
                answer: 'Faux',
                isCorrect: false,
            },
            {
                answer: 'Vrai',
                isCorrect: true,
            },
        ]
    },
    {
        question: 'Quest',
        answers: [
            {
                answer: 'Faux',
                isCorrect: false,
            },
            {
                answer: 'Vrai',
                isCorrect: true,
            },
            {
                answer: 'Faux',
                isCorrect: false,
            },
        ]
    },
    {
        question: 'Question3',
        answers: [
            {
                answer: 'Vrai',
                isCorrect: true,
            },
            {
                answer: 'Faux',
                isCorrect: false,
            },
            {
                answer: 'Faux',
                isCorrect: false,
            },
        ]
    },
]


export const UserDashboard = () => {
    const {t} = useTranslation()

    const [index, setIndex] = useState(0);

    const [score, setScore] = useState(0);

    return (
        <UserDashboardLayout>
            <Tabs aria-label="Full width tabs" style="fullWidth" className={'z-[0]'}>
                <Tabs.Item title={t('Label.Memory game')} icon={GiCardRandom}>
                    <MemoryMainPage/>
                </Tabs.Item>
                <Tabs.Item title={t('Label.Fast game')} icon={GiCardRandom}>
                    <FastGameMain questions={questions} index={index} setIndex={setIndex} score={score}
                                  setScore={setScore}
                    />
                </Tabs.Item>
            </Tabs>
        </UserDashboardLayout>
    )
}