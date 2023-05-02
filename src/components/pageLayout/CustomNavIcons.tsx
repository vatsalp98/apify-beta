import { CgTwitter } from "react-icons/cg";
import { TfiFacebook, TfiHelp, TfiLinkedin } from "react-icons/tfi";

export default function NavDesktopIcons() {
    return (
        <>
            <a className="w-6 mr-3 hover:-translate-y-1 duration-75 hover:scale-105" title="Twitter" href="" target="_blank">
                <CgTwitter className="text-dark dark:text-light text-[22px]"/>
            </a>
            <a className="w-6 mr-3 hover:-translate-y-1 duration-75 hover:scale-105" title="LinkedIn" href="" target="_blank">
                <TfiLinkedin className="text-dark dark:text-light text-[22px]"/>
            </a>
            <a className="w-6 mr-3 hover:-translate-y-1 duration-75 hover:scale-105" title="Facebook" href="" target="_blank">
                <TfiFacebook className="text-dark dark:text-light text-[22px]"/>
            </a>
            {/* <a className="w-6 mr-3 hover:-translate-y-1 duration-75 hover:scale-105" title="Help" href="" target="_blank">
                <TfiHelp className="text-dark dark:text-light text-[22px]"/>
            </a> */}
        </>
    );
}