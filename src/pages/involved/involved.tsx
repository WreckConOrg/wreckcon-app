import { Navbar } from "../../components/navbar/NavBar";
import { Link } from "react-router-dom";
import { NAVBARCONFIG } from "../../components/navbar/NavBarConfig";
import { NavBarItem, NavBarItemEnum } from "../../components/navbar/NavBarItem";
import { BrowserView, MobileView } from "react-device-detect";
import { Hamburger } from "../../components/hamburger/hamburger";

export const Involved = (): JSX.Element => {
    return (
        <div className="bg-[#2e2f31] h-screen">
            <div className="h-fit overflow-hidden bg-[#2e2f31]">
                <BrowserView>
                    <Navbar
                        items={NAVBARCONFIG}
                        selectedItem={NavBarItemEnum.GET_INVOLVED}
                        dropdownSelect="vendors, volunteers, panelists"
                    />
                </BrowserView>
                <MobileView>
                    <Hamburger/>
                </MobileView>
                <div className="flex flex-col justify-center items-center mb-[3vw]">
                    <div className="h-[6vw] font-coolvetica text-white text-[4vw]">
                        Panelists/Vendors/Volunteers
                    </div>
                    <div className="w-[75vw] font-inter text-[1.7vw] mb-[4vw] mt-[2vw] text-white text-center">
                        WreckCon wouldn't be possible without the involvement of countless people, and we're currently looking
                       for <b>artists</b>, <b>vendors</b>, <b>volunteers</b>, and <b>panelists</b> to make WreckCon 2024 the best it can be. If you're interested, 
                        check out the tabs below. Perks include free tabling space/paneling spots, and free meals and merch!
                    </div>
                    <div className="flex items-center justify-center space-x-[2vw]">
                        <div className="h-[20vw] w-[22vw] bg-white flex flex-col items-center rounded-lg">
                            <div className="h-[5vw] w-[100%] bg-[#659470] text-center rounded-t-lg">
                                <p className="mt-[0.5vw] font-coolvetica text-[3vw]"> Artists </p>
                            </div>
                            <div className="font-inter font-white mt-[1.5vw] mx-[2vw] text-[1.1vw]">
                                Sign up below if you would like to sell at WreckCon 2024, but you do <b>not</b> have a business license. Tabling space is 
                                totally free, but unfortunately not guaranteed.
                            </div>
                            <Link to={'https://forms.gle/zq8Ebas1sor5iqqJ6'} className="flex flex-col justify-center h-[20vw] bg-[#659470] w-fit h-[3vw] rounded absolute translate-y-[16vw]">
                                <p className="font-inter w-fit mx-[1vw] items-center text-[1.5vw]"> Artist Interest </p>
                            </Link>
                        </div>
                        <div className="h-[20vw] w-[22vw] bg-white flex flex-col items-center rounded-lg">
                            <div className="h-[5vw] w-[100%] bg-[#FF7F41] text-center rounded-t-lg">
                                <p className="mt-[0.5vw] font-coolvetica text-[3vw]"> Vendors </p>
                            </div>
                            <div className="font-inter mt-[1.5vw] mx-[2vw] text-[1.1vw]">
                                If you are a seller interested in WreckCon 2024 <b>with</b> a business license, please fill out the form below! All other sellers
                                should use the Artists signup form.
                            </div>
                            <Link to={'https://forms.gle/TT3ENSjcoVVw1hmo7'} className="flex flex-col justify-center h-[20vw] bg-[#FF7F41] w-fit h-[3vw] rounded absolute translate-y-[16vw]">
                                <p className="font-inter font-white w-fit mx-[1vw] items-center text-[1.5vw]"> Vendor Interest </p>
                            </Link>
                        </div>
                        <div className="h-[20vw] w-[22vw] bg-white flex flex-col items-center rounded-lg">
                            <div className="h-[5vw] w-[100%] bg-[#FFC42D] text-center rounded-t-lg">
                                <p className="mt-[0.5vw] font-coolvetica text-[3vw]"> Volunteers </p>
                            </div>
                            <div className="font-inter mt-[1.5vw] mx-[2vw] text-[1.1vw]">
                                We're always looking for help managing WreckCon. Volunteering can either be 
                                involvement in organizing the event beforehand, or day-of convention help. 
                            </div>
                            <Link to={'https://forms.gle/L9cK8FpicDh1WxZF6'} className="flex flex-col justify-center h-[20vw] bg-[#FFC42D] w-fit h-[3vw] rounded absolute translate-y-[16vw]">
                                <p className="font-inter font-white w-fit mx-[1vw] items-center text-[1.5vw]"> Volunteer Interest </p>
                            </Link>
                        </div>
                        <div className="h-[20vw] w-[22vw] bg-white flex flex-col items-center rounded-lg">
                            <div className="h-[5vw] w-[100%] bg-[#F04924] text-center rounded-t-lg">
                                <p className="mt-[0.5vw] font-coolvetica text-[3vw]"> Panelists </p>
                            </div>
                            <div className="font-inter mt-[1.5vw] text-[1.1vw] mx-[2vw]">
                                Have an idea or topic you're dying to share at WreckCon? Paneling space is completely free,
                                but highly in-demand, so sign up as soon as you can!
                            </div>
                            <Link to={'https://forms.gle/6jV8xcb8LvtWmiVW9'} className="flex flex-col justify-center h-[20vw] bg-[#F04924] w-fit h-[3vw] rounded absolute translate-y-[16vw]">
                                <p className="font-inter font-white w-fit mx-[1vw] items-center text-[1.5vw]"> Panelist Interest </p>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}