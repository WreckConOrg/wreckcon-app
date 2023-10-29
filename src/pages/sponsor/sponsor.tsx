import React from "react"
import { Navbar } from "../../components/navbar/NavBar";
import { NAVBARCONFIG } from "../../components/navbar/NavBarConfig";
import { NavBarItemEnum } from "../../components/navbar/NavBarItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import gtsf from './../../assets/sponsor_logos/GTSF-logo-GOLD-CMYK.png';
import parentsfund from './../../assets/sponsor_logos/parents-fund-logo.png'
import classNames from "classnames";

import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade';
import { BrowserView, MobileView } from "react-device-detect";
import { Hamburger } from "../../components/hamburger/hamburger";

export const Sponsor = (): JSX.Element => { 
    return (
        <div className="bg-[#2e2f31] h-screen overflow-x-hidden">
            <div className="h-fit bg-[#2e2f31] w-[100vw] overflow-hidden">
                <BrowserView>
                    <Navbar
                        items={NAVBARCONFIG}
                        selectedItem={NavBarItemEnum.GET_INVOLVED}
                        dropdownSelect="sponsors"
                    />
                </BrowserView>
                <MobileView>
                    <Hamburger sponsors={true}/>
                </MobileView>
                <div className="flex flex-col justify-center items-center">
                    <div className="h-[6vw] font-coolvetica text-white text-[4vw]">
                        Sponsors
                    </div>
                    <div className="w-[70vw] font-inter text-[1.7vw] mb-[1vw] mt-[2vw] text-white text-center">
                        Without the help of our sponsors, WreckCon would not be possible. We offer four tiers of sponsorship,
                        and if you're interested in joining, please reach out to us by email!
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center mx-[10vw] h-[25vw] bg-[#2e2f31]">
                    <Swiper
                        modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={30}
                        centeredSlides={true}
                        slidesPerView={3}
                        loop={false}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper:any) => console.log(swiper)}
                        navigation={{
                            prevEl: '.prev',
                            nextEl: '.next'
                        }}
                        observer={true}
                        observeParents={true}
                        parallax={true}
                        pagination={{el:'.swiper-pagination', clickable: true }}
                        // effect={'coverflow'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2,
                            slideShadows: true,
                        } }
                        className="swiper-controller bg-[#2e2f31]"
                        // effect="coverflow"
                    >
                        <div>
                            <SwiperSlide>
                                {({ isActive, isNext, isPrev }) => (
                                    <div className={classNames("h-[20vw] w-[22vw] bg-[#E0F4F5] flex flex-col items-center rounded-lg transition-all",
                                            {"scale-75" : !isActive},
                                            {"mx-[4vw]" : isPrev},
                                            {"mx-[-4vw]" : isNext}
                                    )}>
                                        <div className="h-[4.5vw] w-[100%] bg-[#81D9DD] text-center text-white text-[2.7vw] rounded-t-lg">
                                            <p className="mt-[0.5vw] font-coolvetica"> Platinum </p>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="4vw" viewBox="0 0 76 38" fill="none" className="translate-y-[-0.5vw]">
                                            <path d="M38 38L0.76091 0.5L75.2391 0.5L38 38Z" fill="#81D9DD"/>
                                        </svg>
                                        <div className="font-coolvetica text-[3vw] translate-y-[-0.5vw] translate-x-[-0.5vw]">
                                            $10,000
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>                             
                            <SwiperSlide>
                                {({ isActive, isNext, isPrev }) => (
                                    <div className={classNames("h-[20vw] w-[22vw] bg-[#F5E5CD] flex flex-col items-center rounded-lg transition-all",
                                            {"scale-75" : !isActive},
                                            {"mx-[4vw]" : isPrev},
                                            {"mx-[-4vw]" : isNext}
                                    )}>
                                        <div className="h-[4.5vw] w-[100%] bg-[#D2A752] text-center text-white text-[2.7vw] rounded-t-lg">
                                            <p className="mt-[0.5vw] font-coolvetica"> Gold </p>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="4vw" viewBox="0 0 76 38" fill="none" className="translate-y-[-0.5vw]">
                                            <path d="M38 38L0.76091 0.5L75.2391 0.5L38 38Z" fill="#D2A752"/>
                                        </svg>
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="font-coolvetica text-[3vw] translate-y-[-0.5vw] translate-x-[-0.5vw]">
                                                $5,000
                                            </div>
                                            <img src={parentsfund} alt="parents fund logo" className="w-[15vw]"/>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                            <SwiperSlide>
                                {({ isActive, isNext, isPrev }) => (
                                    <div className={classNames("h-[20vw] w-[22vw] bg-[#F0EEFB] flex flex-col items-center rounded-lg transition-all",
                                            {"scale-75" : !isActive},
                                            {"mx-[4vw]" : isPrev},
                                            {"mx-[-4vw]" : isNext}
                                    )}>
                                        <div className="h-[4.5vw] w-[100%] bg-[#B7B6C8] text-center text-white text-[2.7vw] rounded-t-lg">
                                            <p className="mt-[0.5vw] font-coolvetica"> Silver </p>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="4vw" viewBox="0 0 76 38" fill="none" className="translate-y-[-0.5vw]">
                                            <path d="M38 38L0.76091 0.5L75.2391 0.5L38 38Z" fill="#B7B6C8"/>
                                        </svg>
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="font-coolvetica text-[3vw] translate-y-[-0.5vw] translate-x-[-0.5vw]">
                                                $1,000
                                            </div>
                                            <img src={gtsf} className="w-[20vw]"/>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>

                           
                            <SwiperSlide>
                                {({ isActive, isNext, isPrev }) => (
                                    <div className={classNames("h-[20vw] w-[22vw] bg-[#F3DFD9] flex flex-col items-center rounded-lg transition-all",
                                            {"scale-75" : !isActive},
                                            {"mx-[4vw]" : isPrev},
                                            {"mx-[-4vw]" : isNext}
                                    )}>
                                        <div className="h-[4.5vw] w-[100%] bg-[#C17D67] text-center text-white text-[2.7vw] rounded-t-lg">
                                            <p className="mt-[0.5vw] font-coolvetica"> Bronze </p>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="4vw" viewBox="0 0 76 38" fill="none" className="translate-y-[-0.5vw]">
                                            <path d="M38 38L0.76091 0.5L75.2391 0.5L38 38Z" fill="#C17D67"/>
                                        </svg>
                                        <div className="font-coolvetica text-[3vw] translate-y-[-0.5vw] translate-x-[-0.5vw]">
                                            $500
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        </div>
                        <div className="prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="3vw" viewBox="0 0 64 112" fill="none" className="absolute translate-y-[-12vw] translate-x-[0vw] z-10">
                                <path d="M2.6967 61.3033C-0.232233 58.3744 -0.232233 53.6256 2.6967 50.6967L50.4264 2.96699C53.3553 0.0380592 58.1041 0.0380592 61.033 2.96699C63.9619 5.89592 63.9619 10.6447 61.033 13.5736L18.6066 56L61.033 98.4264C63.9619 101.355 63.9619 106.104 61.033 109.033C58.1041 111.962 53.3553 111.962 50.4264 109.033L2.6967 61.3033ZM9 63.5H8V48.5H9V63.5Z" fill="#D9D9D9"/>
                            </svg>
                        </div>
                        <div className="next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="3vw" viewBox="0 0 64 112" fill="none" className="absolute translate-y-[-12vw] translate-x-[74vw] z-10">
                                <path d="M61.3033 61.3033C64.2322 58.3744 64.2322 53.6256 61.3033 50.6967L13.5736 2.96699C10.6447 0.0380592 5.89592 0.0380592 2.96699 2.96699C0.0380592 5.89592 0.0380592 10.6447 2.96699 13.5736L45.3934 56L2.96699 98.4264C0.0380592 101.355 0.0380592 106.104 2.96699 109.033C5.89592 111.962 10.6447 111.962 13.5736 109.033L61.3033 61.3033ZM55 63.5H56V48.5H55V63.5Z" fill="#D9D9D9"/>
                            </svg>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}