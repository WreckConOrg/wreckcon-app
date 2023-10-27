import React from "react";

interface SponsorProps {
    logo: any;
    tier: string;
    cost: string;
    perks: Array<string>;
}

function SponsorLogo(props: SponsorProps) {

    return (
        <div>
            <div className="items-center justify-center font-inter font-bold text-white text-[2.3vw] translate-y-[1.5vw]">
                {props.tier}
            </div>
            <div className="flex flex-col items-center h-[20vw] w-[17vw] bg-[#D9D9D9] my-[3vw]">
                <img src={props.logo} alt='test' className="w-[9vw] translate-y-[-3vw]"/>
                <p>{props.cost}</p>
                {props.perks.map(txt => <p>{txt}</p>)}
            </div>
        </div>
    // return (
    //     <a href={props.clubLink}>
    //         <div>
    //             <div className="flex flex-col items-center h-[20vw] w-[17vw] bg-[#D9D9D9] my-[3vw]">
    //                 <img src={props.logo} alt='test' className="w-[9vw] translate-y-[-3vw]"/>
    //                 <div className="font-inter font-bold text-black text-[2.3vw] translate-y-[-2.5vw]">
    //                     {props.clubTitle}
    //                 </div>
    //                 <div className="font-inter text-[1.1vw] translate-y-[-2.1vw] w-[14vw]">
    //                     {props.clubText}
    //                 </div>
    //             </div>
    //         </div>
    //     </a>
    )
}

export default SponsorLogo;