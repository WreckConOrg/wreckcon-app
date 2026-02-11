import classNames from "classnames";
import { NavBarItemEnum } from "../../components/navbar/NavBarItem";
import { BasePage } from "../BasePage";
import { isMobile } from "../../utils/BrowserUtils";

export const Brochure = (): JSX.Element => {
  return (
    <BasePage selectedItem={NavBarItemEnum.BROCHURE}> 
      <>
        <div
          className={classNames(
            "flex flex-row items-center justify-center font-coolvetica text-white",
            { "h-[6vw] text-[4vw]": !isMobile },
            { "mt-[2vh] text-[9vw] mb-[-1vh]": isMobile }
          )}
        >
          WreckCon Brochure
        </div>
      </>
    </BasePage>
  );
};
