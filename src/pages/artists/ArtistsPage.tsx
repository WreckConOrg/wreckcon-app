import { NavBarItemEnum } from "../../components/navbar/NavBarItem";
import { BasePage } from "../BasePage";
import { ArtistInfo, ArtistInfoProps } from "./ArtistInfo";
import artistConfig from "./artists.json";
import React from "react";

export const ArtistsPage = (): JSX.Element => {
  const artists = artistConfig.map((item: ArtistInfoProps, index) => {
    return <ArtistInfo {...item} index={index} />;
  });

  return (
    <BasePage
      selectedItem={NavBarItemEnum.EVENT_INFO}
      mobileSelectedItem={NavBarItemEnum.ARTISTS}
      dropdownSelect="artists"
    >
      <div className="flex flex-col justify-center items-center mb-[3vw] ">
        <div className="h-[10vw] md:h-[6vw] font-coolvetica text-white text-[6vw] md:text-[4vw] text-center">
          Artists Alley

        </div>
        <div className="flex pr-4 py-100 font-inter font-thin text-xl md:text-2xl text-white content-center h-dvh">
          Check out our Artists from 2026!
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 pt-2">
          { artists }
        </div>
      </div>
    </BasePage>
  );
};
