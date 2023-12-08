import {Button} from "components/generic/button";

export const FastGameAnswer = ({answer, nextQuestion}: any) => {
    return (
        <>
            <Button type={"button"} onClick={() => {
                nextQuestion(answer.isCorrect)
            }} className={"mt-2 mb-2"}>
                {answer.reponseLabel}
            </Button>
        </>);
}