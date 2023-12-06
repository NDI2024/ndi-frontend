// todo: add types
export const findInputError = (errors: any, name: string) => {
    return errors ? errors[name] : []
}