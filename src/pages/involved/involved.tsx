import { Navbar } from "../../components/navbar/NavBar";
import { Link } from "react-router-dom";
import { NAVBARCONFIG } from "../../components/navbar/NavBarConfig";
import { NavBarItem, NavBarItemEnum } from "../../components/navbar/NavBarItem";

export const Involved = (): JSX.Element => {
    return (
        <div className="h-screen bg-[#2e2f31]">
            <Navbar
                items={NAVBARCONFIG}
                selectedItem={NavBarItemEnum.GET_INVOLVED}
                dropdownSelect="vendors, volunteers, panelists"
            />
            <div className="flex flex-col justify-center items-center">
                <div className="h-[6vw] font-coolvetica text-white text-[4vw]">
                    Panelists/Vendors/Volunteers
                </div>
                <div className="w-[70vw] font-inter text-[1.7vw] mb-[4vw] mt-[3vw] text-white text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="flex items-center justify-center space-x-[5vw]">
                    <div className="h-[20vw] w-[22vw] bg-white flex flex-col items-center rounded-lg">
                        <div className="h-[5vw] w-[100%] bg-[#FF7F41] text-center rounded-t-lg">
                            <p className="mt-[0.5vw] font-coolvetica text-[3vw]"> Vendors </p>
                        </div>
                        <div className="font-inter font-white mt-[2vw] text-[1.5vw]">
                            test me whooo perks!
                        </div>
                        <Link to={'/sponsors'} className="flex flex-col justify-center h-[20vw] bg-[#FF7F41] w-fit h-[3vw] rounded absolute translate-y-[15vw]">
                            <p className="font-inter font-white w-fit mx-[1vw] items-center text-[1.5vw]"> Sign Up </p>
                        </Link>
                    </div>
                    <div className="h-[20vw] w-[22vw] bg-white flex flex-col items-center rounded-lg">
                        <div className="h-[5vw] w-[100%] bg-[#FFC42D] text-center rounded-t-lg">
                            <p className="mt-[0.5vw] font-coolvetica text-[3vw]"> Volunteers </p>
                        </div>
                        <div className="font-inter font-white mt-[2vw] text-[1.5vw]">
                            test me whooo perks!
                        </div>
                        <Link to={'/sponsors'} className="flex flex-col justify-center h-[20vw] bg-[#FFC42D] w-fit h-[3vw] rounded absolute translate-y-[15vw]">
                            <p className="font-inter font-white w-fit mx-[1vw] items-center text-[1.5vw]"> Sign Up </p>
                        </Link>
                    </div>
                    <div className="h-[20vw] w-[22vw] bg-white flex flex-col items-center rounded-lg">
                        <div className="h-[5vw] w-[100%] bg-[#F04924] text-center rounded-t-lg">
                            <p className="mt-[0.5vw] font-coolvetica text-[3vw]"> Panelists </p>
                        </div>
                        <div className="font-inter font-white mt-[2vw] text-[1.5vw]">
                            test me whooo perks!
                        </div>
                        <Link to={'/sponsors'} className="flex flex-col justify-center h-[20vw] bg-[#F04924] w-fit h-[3vw] rounded absolute translate-y-[15vw]">
                            <p className="font-inter font-white w-fit mx-[1vw] items-center text-[1.5vw]"> Sign Up </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}