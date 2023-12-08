import {FastGameAnswer} from "layouts/fastGame/FastGameAnswer";
import {Button} from "components/generic/button";
import {useEffect, useState} from "react";
import {QuestionData} from "types/global";
import {GetQuestions} from "services/questions";
import {LoadingSpinnerAnimation} from "components/loading/loadingSpinnerAnimation";

export const FastGameMain = ({index, setIndex, score, setScore}: any) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [questions, setQuestions] = useState<QuestionData[]>([])

    const fetchQuestions = async () => {
        setLoading(true)
        try {
            const req = await GetQuestions()
            const questionsReq = req.data
            const questionsReqShuffled = questionsReq.sort(() => Math.random() - 0.5)
            setQuestions(questionsReqShuffled.map((question: QuestionData, index: number) => {
                return {...question, index}
            }))
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        Promise.all([fetchQuestions()]).catch(e => console.log(e))
    }, [])

    function nextQuestion(isCorrect: boolean) {

        if (isCorrect) {
            setScore(score + 1);
        }

        setIndex(index + 1);
    }

    if (loading) {
        return <LoadingSpinnerAnimation/>
    } else if (questions.length === 0) {
        return (
            <>

                <div className="justify-center items-center text-center">
                    <div className="text-4xl">
                        Erreur d'appel aux questions, essayez de relancer
                    </div>
                </div>

                <div className={"flex justify-center items-center mt-8 w-2/5 mx-auto"}>
                    <Button type={"button"} onClick={() => {
                        setIndex(0);
                        setScore(0);
                    }}>Recommencer
                    </Button>
                </div>
            </>
        )
    } else if (index >= questions.length) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-full h-screen justify-center items-center">
                    <div className="bg-gray-100 p-4 mx-auto ml-6 mr-6">
                        <div className="justify-center items-center text-center">
                            <div className="text-4xl">
                                Votre score est de
                            </div>
                            <div className="text-7xl font-bold text-primary-500">
                                {score} ({Math.round(score / questions.length * 100)}%)
                            </div>
                        </div>

                        <div className={"flex justify-center items-center mt-8 w-2/5 mx-auto"}>
                            <Button type={"button"} onClick={() => {
                                setIndex(0);
                                setScore(0);
                            }}>Recommencer
                            </Button>
                        </div>
                    </div>

                    <div className="justify-center items-center text-center text-4xl mt-6">
                        Réponses attendues :
                    </div>

                    <div className={"flex flex-col justify-center items-center mt-8 w-full mx-auto"}>
                        {questions.map((question: any, index: any) => (
                            <div key={index} className="flex flex-col sm:flex-row w-full items-center px-4 lg:pl-8">
                                <div className="border flex-none p-4 mb-4 sm:mb-0 sm:mr-4">
                                    <div className="text-3xl">
                                        {question.questionLabel}
                                    </div>
                                </div>
                                <div className="border flex-auto p-4">
                                    <div className="text-3xl font-bold text-primary-500 text-center sm:text-right">
                                        {question.reponses.filter((answer: any) => answer.isCorrect)[0].reponseLabel}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    } else {
        return (<>
                <div
                    className={"justify-center items-center text-center text-3xl mb-4"}>{questions[index]?.questionLabel}</div>
                <div className={"w-4/5 mx-auto"}>
                    {questions[index].reponses.map((answer: any, index: any) => (
                        <FastGameAnswer key={index} answer={answer} nextQuestion={nextQuestion}/>
                    ))}
                </div>
            </>
        )
    }
}