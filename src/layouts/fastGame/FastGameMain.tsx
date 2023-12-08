import {FastGameAnswer} from "layouts/fastGame/FastGameAnswer";
import {Button} from "components/generic/button";

export const FastGameMain = ({questions, index, setIndex, score, setScore}: any) => {

    function nextQuestion(isCorrect: boolean) {

        if (isCorrect) {
            setScore(score + 1);
        }

        setIndex(index + 1);
    }

    if (index >= questions.length) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-full h-screen justify-center items-center">
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
            </div>
        )
    } else {
        return (<>
                <div
                    className={"justify-center items-center text-center text-3xl mb-4"}>{questions[index]?.question}</div>
                <div className={"w-4/5 mx-auto"}>
                    {questions[index].answers.map((answer: any, index: any) => (
                        <FastGameAnswer key={index} answer={answer} nextQuestion={nextQuestion}/>
                    ))}
                </div>
            </>
        )
    }
}