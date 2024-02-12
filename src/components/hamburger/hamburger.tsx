import logo from './../../assets/wreck-logo-white.png';
import hambut from './../../assets/ham-button.png';
import hamclose from './../../assets/ham-close.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { NavBarItemEnum } from '../navbar/NavBarItem';

export interface HamburgerProps {
    selectedItem: NavBarItemEnum;
}

export const Hamburger = (props: HamburgerProps) => {

    const [open, setOpen] = useState(false);

    const GetTextColor = (page: NavBarItemEnum) => 
    {
        return page == props.selectedItem ? 'text-[#FFC42D]' : 'text-white';
    }

    return (
        <div className='mb-[2vh]'>
            <div className={classNames(
                'absolute h-screen w-[80vw] bg-[#2E2F31] z-10 overflow-hidden transition flex flex-col space-y-[3vh] font-inter text-[6vw]',
                { 'translate-x-[-80vw]' : !open}
            )}>
                <div className='h-[5vh] w-fill justify-center flex mt-[1vh]'>
                    <Link to={'/wreckcon-app'} className='w-fill'>
                        <img src={logo} className='w-[18vw]'></img>
                    </Link>
                    <div>
                        <button onClick={() => setOpen(!open)} className='absolute translate-x-[-42vw]'>
                            <img src={hamclose} className='w-[7vw]'/>
                        </button>
                    </div>
                </div>
                <Link to={'/about'} className={`ml-[10vw] ${GetTextColor(NavBarItemEnum.ABOUT)}`}>
                    about
                </Link>
                <div>
                    <hr className='mx-[10vw] h-[0.3vh] border-none bg-[#FFC42D]'/>
                </div>
                <Link to={'https://discord.gg/BY2hTWjz4s'} className='ml-[10vw] text-white'>
                    discord
                </Link>
                <Link to={'https://gatech.universitytickets.com/w/event.aspx?id=2002&p=1'} className='ml-[10vw] text-white'>
                    tickets
                </Link>
                <Link to={'/schedule'} className={`ml-[10vw] ${GetTextColor(NavBarItemEnum.SCHEDULE)}`}>
                    schedule
                </Link>
                <Link to={'https://wreckcon.bigcartel.com/'} className='ml-[10vw] text-white'>
                    shop
                </Link>
                <div>
                    <hr className='mx-[10vw] h-[0.3vh] border-none bg-[#FFC42D]'/>
                </div>
                <Link to={'/contact-us'} className={`ml-[10vw] ${GetTextColor(NavBarItemEnum.CONTACT)}`}>
                    contact us
                </Link>
                <Link to={'/involved'} className={`ml-[10vw] ${GetTextColor(NavBarItemEnum.PARTICIPATE)}`}>
                    participate
                </Link>
                <Link to={'/sponsors'} className={`ml-[10vw] ${GetTextColor(NavBarItemEnum.SPONSOR)}`}>
                    sponsors
                </Link>
            </div>
            <div className="h-[5vh] w-screen flex flex-column justify-center mt-[2vh] translate-x-[5vw]">
                    <Link to={'/wreckcon-app'} className='w-fill'>
                        <img src={logo} className='w-[20vw]'></img>
                    </Link>
                <div>
                    <button onClick={() => setOpen(!open)} className='relative translate-x-[-55vw]'>
                        <img src={hambut} className='w-[12vw]'/>
                    </button>
                </div>
            </div>
        </div>
    )
}