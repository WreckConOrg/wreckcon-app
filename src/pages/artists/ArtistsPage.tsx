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
      selectedItem={NavBarItemEnum.EVENTS}
      mobileSelectedItem={NavBarItemEnum.EVENTS}
    >
      <div className="flex flex-col justify-center items-center mb-[3vw] ">
        <div className="h-[10vw] md:h-[6vw] font-coolvetica text-white text-[6vw] md:text-[4vw]">
          Artists Alley
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {artists}
        </div>
      </div>
    </BasePage>
  );
};
