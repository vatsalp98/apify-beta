"use client"

import { useState } from "react";
import CustomNavLink from "./CustomNavLinks";
import NavDesktopIcons from "./CustomNavIcons";
import { TbApiApp } from "react-icons/tb";

type Props = {
    className: string;
}

export default function SiteNavbar(props: Props) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <header className={`w-full px-32 py-8 font-medium flex items-center justify-between bg-light relative z-10 lg:px-16 sm:px-12 xs:px-8 dark:bg-dark ${props.className}`}>
            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomNavLink href={"/"} title={"Home"} className={"mr-4"}/>
                    <CustomNavLink href={"/about"} title={"About"} className={"mx-4"}/>
                    <CustomNavLink href={"/team"} title={"Team"} className={"mx-4"}/>
                    <CustomNavLink href={"/projects"} title={"Projects"} className={"ml-4"}/>
                </nav>

                <nav className="flex items-center justify-center flex-wrap">
                    <NavDesktopIcons />
                </nav>
            </div>

            <div className="absolute left-[50%] top-2 translate-x-[50%] cursor-pointer">
                <div className="flex items-center justify-center mt-2 hover:scale-110 duration-75">
                    <a className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold dark:text-light hover:bg-primary hover:text-dark duration-75 shadow-lg"> 
                        <TbApiApp className="text-[40px]"/>
                    </a>
                </div>
            </div>
        </header>
    );
}