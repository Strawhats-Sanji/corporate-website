export interface GenericInterface {
    title: string,
    text?: string,
    image?: any,
    children?: React.ReactNode,
    customClass?: any,
    reverse?: boolean,
    button?: boolean,
    buttonText?: string,
    buttonFn?: () => void,
}