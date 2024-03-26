import { Link } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Searchbar } from "./searchbar"
import NavItems from "./navitems"
import SvgComponent from "./searchlogo"
import { Button } from "./ui/button"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Roboto_Flex} from "next/font/google";
import Cart from "./cart"

const Navbar = () => {
    return(
        <div className="sticky z-50 top-0 inset-x-0 border-b border-gray-200">
            <header className="relative">
                <MaxWidthWrapper className="md:px-0 px-0">
                    <div>
                        <div className="flex h-16 2xl:h-[4.2vw] items-center justify-between">
                            <div className="hidden lg:flex ml-4 ">
                                <Link >
                                    <a href="/" className="opacity-100">
                                        {/*Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" fill="black"/></svg>
                                    </a>
                                </Link>
                            </div>
                            
                            <div className="ml-0 lg:ml-[15vw] xl:ml-80 pr-0 flex items-center z-50 lg:px-10">
                                <NavItems name={"PRODUCT"} repo={"product"} />
                                <NavItems name={"ABOUT US"} repo={"about-us"} />
                                <NavItems name={"CONTACT"} repo={"contact"} />
                                
                            </div>
                            <div className="flex pr-0 items-center justify-between">
                                <Searchbar/>
                                <div className="flex h-16 2xl:h-[4.2vw]  border-l border-gray-200 items-center px-3">
                                    <Button type="submit" className="w-[4.5vh] h-[4.4vh] sm:h-11 sm:w-11" size="default">
                                        {/*Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" fill="white"/></svg>
                                    </Button>
                                </div>
                                <div className="flex h-16 2xl:h-[4.2vw]  border-l border-gray-200 items-center pr-3 pl-3">
                                    <Cart />
                                    {/*<div className="w-[4.5vh] h-[4.4vh] sm:h-11 sm:w-16 bg-black hover:bg-gray-800 hover:cursor-pointer rounded-md items-center justify-center align-middle">
                                        
    </div>*/}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Navbar