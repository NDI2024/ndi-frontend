interface Props {
    value: number | string | null
}

export const HyphenCell = ({value}: Props) => {
    return (
        value ?
            <span>{value}</span> :
            <span className={'text-lg'}>-</span>
    )
}