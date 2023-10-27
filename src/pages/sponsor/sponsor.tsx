import React from "react"
import { Navbar } from "../../components/navbar/NavBar";
import { NAVBARCONFIG } from "../../components/navbar/NavBarConfig";
import { NavBarItem, NavBarItemEnum } from "../../components/navbar/NavBarItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';

import boardgames from './../../assets/club_logos/board games logo.png'
import sga from './../../assets/club_logos/sga logo.png'

import SponsorLogo from "./sponsorlogo";

import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade';

const perksBronze = ["perk 1", "perk 2", "perk 3", "death :("]

export const Sponsor = (): JSX.Element => {
    return (
        <div className="h-fill bg-[#2e2f31]">
            <Navbar
                items={NAVBARCONFIG}
                selectedItem={NavBarItemEnum.GET_INVOLVED}
                dropdownSelect="sponsors"
            />
            <div className="flex flex-col justify-center items-center">
                <div className="h-[6vw] font-coolvetica text-white text-[4vw]">
                    Sponsors
                </div>
                <div className="w-[70vw] font-inter text-[1.7vw] mb-[4vw] mt-[3vw] text-white text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
            <div className="flex flex-row items-center justify-center mb-[1vw] mt-[1vw] mx-[10vw]">
                <Swiper
                    modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={100}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={false}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper:any) => console.log(swiper)}
                    navigation={true}
                    observer={true}
                    observeParents={true}
                    parallax={true}
                    pagination={{el:'.swiper-pagination', clickable: true }}
                    effect={'coverflow'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2,
                        slideShadows: true,
                    } }
                    className="swiper-controller"
                    // effect="coverflow"
                >
                    <div className="mx-[10vw]">
                        <SwiperSlide><SponsorLogo logo={boardgames} tier="Bronze" cost="500" perks={perksBronze}/></SwiperSlide>
                        <SwiperSlide><img src={boardgames} alt="Logo" /></SwiperSlide>
                        <SwiperSlide><img src={boardgames} alt="Logo" /></SwiperSlide>
                        <SwiperSlide><img src={boardgames} alt="Logo" /></SwiperSlide>
                        <SwiperSlide><img src={boardgames} alt="Logo" /></SwiperSlide>
                    </div>

                    {/* <div className="position-[relative] bottom-[2vw]">
                        <div className="swiper-button-prev slider-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="112" viewBox="0 0 64 112" fill="none">
                                <path d="M2.6967 61.3033C-0.232233 58.3744 -0.232233 53.6256 2.6967 50.6967L50.4264 2.96699C53.3553 0.0380592 58.1041 0.0380592 61.033 2.96699C63.9619 5.89592 63.9619 10.6447 61.033 13.5736L18.6066 56L61.033 98.4264C63.9619 101.355 63.9619 106.104 61.033 109.033C58.1041 111.962 53.3553 111.962 50.4264 109.033L2.6967 61.3033ZM9 63.5H8V48.5H9V63.5Z" fill="#D9D9D9"/>
                            </svg>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="112" viewBox="0 0 64 112" fill="none">
                                <path d="M61.3033 61.3033C64.2322 58.3744 64.2322 53.6256 61.3033 50.6967L13.5736 2.96699C10.6447 0.0380592 5.89592 0.0380592 2.96699 2.96699C0.0380592 5.89592 0.0380592 10.6447 2.96699 13.5736L45.3934 56L2.96699 98.4264C0.0380592 101.355 0.0380592 106.104 2.96699 109.033C5.89592 111.962 10.6447 111.962 13.5736 109.033L61.3033 61.3033ZM55 63.5H56V48.5H55V63.5Z" fill="#D9D9D9"/>
                            </svg>
                        </div>
                        <div className="swiper-pagination" style={{
                            position: 'relative',
                            width: 15,
                            bottom: 1
                        }}></div> 
                    </div> */}
                </Swiper>
            </div>
        </div>
    )
}