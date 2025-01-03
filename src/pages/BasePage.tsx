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
    <div className="bg-[#2e2f31] h-screen">
      <div className="h-fit overflow-hidden bg-[#2e2f31]">
        <BrowserView>
          <Navbar
            items={NAVBARCONFIG}
            selectedItem={props.selectedItem}
            dropdownSelect={props.dropdownSelect}
          />
        </BrowserView>
        <MobileView>
          <Hamburger
            selectedItem={props.mobileSelectedItem ?? props.selectedItem}
          />
        </MobileView>
        {props.children}
      </div>
    </div>
  );
};
