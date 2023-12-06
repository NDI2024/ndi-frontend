import {FieldValues, FormProvider, useForm} from "react-hook-form";
import {UseFormReset} from "react-hook-form/dist/types/form";
import {useEffect} from "react";

interface ChildrenProps {
    children: JSX.Element
    className?: string
    submitFn?: (data: FieldValues, reset: UseFormReset<FieldValues>) => void,
    defaultValues?: FieldValues
}

export const Form = ({children, className, submitFn, defaultValues}: ChildrenProps) => {
    const methods = useForm({
        defaultValues
    });

    const onSubmit = methods.handleSubmit((data) => {
        submitFn && submitFn(data, methods.reset)
    })

    useEffect(() => {
        methods.reset(defaultValues)
    }, [defaultValues])

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={
                    (e) => {
                        onSubmit()
                        e.preventDefault()
                    }
                }
                className={className}
                noValidate>
                {children}
            </form>
        </FormProvider>
    )
}