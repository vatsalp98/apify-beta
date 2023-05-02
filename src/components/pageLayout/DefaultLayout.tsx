import { ReactNode } from "react"

type Props = {
    children: ReactNode;
    className: String;
}

export default function Layout(props: Props) {
    return (
        <div className={`w-full h-full inline-block z-0 bg-light p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 dark:bg-dark ${props.className}`}> 
            {props.children}
        </div>
    );
}