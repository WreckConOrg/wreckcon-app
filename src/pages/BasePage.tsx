import { Hamburger } from "../components/hamburger/hamburger";
import { Navbar } from "../components/navbar/NavBar";
import { NAVBARCONFIG } from "../components/navbar/NavBarConfig";
import { NavBarItemEnum } from "../components/navbar/NavBarItem";
import { BrowserView, MobileView } from "../utils/BrowserUtils";

export interface BasePageProps {
  selectedItem: NavBarItemEnum;
  mobileSelectedItem?: NavBarItemEnum;
  children: JSX.Element;
  dropdownSelect?: string;
}
export const BasePage = (props: BasePageProps): JSX.Element => {
  return (
    <div className="bg-[#2e2f31] min-h-screen w-full flex flex-col">
      <header className="sticky top-0 z-[100] w-full">
        <div className="hidden md:block">
          <Navbar
            items={NAVBARCONFIG}
            selectedItem={props.selectedItem}
            dropdownSelect={props.dropdownSelect}
          />
        </div>
      </header>
      <div className="md:hidden">
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
