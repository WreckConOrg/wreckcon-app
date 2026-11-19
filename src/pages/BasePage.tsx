import { Hamburger } from "../components/hamburger/hamburger";
import { Navbar } from "../components/navbar/NavBar";
import { NAVBARCONFIG } from "../components/navbar/NavBarConfig";
import { NavBarItemEnum } from "../components/navbar/NavBarItem";
import { BrowserView, MobileView } from "../utils/BrowserUtils";

export interface BasePageProps {
  selectedItem: NavBarItemEnum | null;
  mobileSelectedItem?: NavBarItemEnum | null;
  children: JSX.Element;
  dropdownSelect?: string;
}

/*
// Experimenting with a Nav Bar that becomes more transparent as you scroll
window.onscroll = function(){

    var B = document.body; 
    var D = document.documentElement;
    D = (D.clientHeight)? D: B;
    
    let navBar = document.getElementById("nav-bar");
    if (D.scrollTop == 0){
      
      navBar?.setAttribute("style", "background: rgba(0, 0, 0, 0.5);");
      
    } else {
      navBar?.setAttribute("style", "background: rgba(0, 0, 0, 0.25); ");
    }
}; */

export const BasePage = (props: BasePageProps): JSX.Element => {
  return (
    <div className="bg-[#2e2f31] selection:bg-[#ffc42d] selection:text-black min-h-[100dvh] w-full flex flex-col">
      <header className="sticky top-0 z-[100] w-full transition delay-10 duration-300 ease-in-out" style={{background: "#28282A"}} id="nav-bar" >
        <div className="hidden md:block">
          <Navbar
            items={NAVBARCONFIG}
            selectedItem={props.selectedItem}
            dropdownSelect={props.dropdownSelect}
          />
        </div>
      </header>
      <div className="sticky top-0 z-[100] md:hidden bg-[#28282A]">
        <Hamburger
          selectedItem={props.mobileSelectedItem ?? props.selectedItem}
        />
      </div>
      <main className="flex-1 w-full max-w-10xl relative z-0">
        {props.children}
      </main>
    </div>
  );
};
