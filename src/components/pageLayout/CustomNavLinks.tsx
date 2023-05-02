import Link from "next/link";
import {usePathname} from "next/navigation";


type Props = {
    href: string;
    title: String;
    className?: String;
}

export default function CustomNavLink(props: Props) {
    const pathname = usePathname();

    return (
        <Link href={props.href} className={`${props.className} relative group font-semibold text-dark dark:text-light`}>
            {props.title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${pathname === props.href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    );
}