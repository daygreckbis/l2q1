import { Link } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Searchbar } from "./searchbar"
import NavItems from "./navitems"
import SvgComponent from "./searchlogo"
import { Button } from "./ui/button"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return(
        <div className="sticky z-50 top-0 inset-x-0 h-16 border-b border-gray-200">
            <header className="relative">
                <MaxWidthWrapper className="px-0">
                    <div>
                        <div className="flex h-16 items-center  justify-between">
                            <div className="flex ml-4 ">
                                <Link href='/'>
                                    
                                </Link>
                            </div>
                            <div className="ml-64 pr-0 flex items-center z-50 px-10">
                                <NavItems name={"PRODUCT"} repo={"product"} />
                                <NavItems name={"ABOUT US"} repo={"about-us"} />
                                <NavItems name={"CONTACT"} repo={"contact"} />
                                
                            </div>
                            <div className="flex mr-4 items-center justify-between">
                                <Searchbar/>
                                <div className="flex h-16 border-l border-gray-200 items-center px-2.5">
                                    <Button type="submit"><i className="fa-solid fa-magnifying-glass"></i></Button>
                                </div>
                                <Link className="h-16 w-10 pl-2.5 border-l border-gray-200"href='/'>
                                    <SvgComponent/>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Navbar