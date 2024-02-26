import React, { useRef, useState } from "react"
import { Navbar } from "../../components/navbar/NavBar";
import { NAVBARCONFIG } from "../../components/navbar/NavBarConfig";
import { NavBarItemEnum } from "../../components/navbar/NavBarItem";
import { Link } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import twitter from "../../assets/contact_logos/twitterlogo.png";
import instagram from "../../assets/contact_logos/instagramlogo.png";
import youtube from "../../assets/contact_logos/youtubelogo.png";
import mail from "../../assets/contact_logos/maillogo.png";
import { Hamburger } from "../../components/hamburger/hamburger";

export const Contact = (): JSX.Element => {
    const emailRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const [submitted, setSubmitted] = useState(false);

    function submitSheet() {
        setSubmitted(true);

        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        const message = messageRef.current?.value;

        console.log(name);
        console.log(email);
        console.log(message);

        let today = new Date().toLocaleDateString()

        fetch('https://sheetdb.io/api/v1/3w5sniyxjs8ya', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [
                    {
                        'Date': today,
                        'Name': name,
                        'Email': email,
                        'Message': message
                    }
                ]
            })
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
        
    }

    return (
        <div className="bg-[#2e2f31] h-screen">
            <div className="h-fit overflow-hidden bg-[#2e2f31]">
                <BrowserView>
                    <Navbar items={NAVBARCONFIG}
                    selectedItem={NavBarItemEnum.GET_INVOLVED}
                    dropdownSelect="contact us"
                    />
                </BrowserView>
                <MobileView>
                    <Hamburger contact={true} />
                </MobileView>
                <div className="flex flex-row justify-center space-x-[0.3vw]">
                    <div className="w-[40vw]">
                        <div className="h-[6vw] mt-[1vw] font-coolvetica text-white text-[4vw]">
                            Contact Us!
                        </div>
                        <div className="font-inter text-[1.7vw] text-white">
                            Have something you'd like to tell us? You can reach us at any of the social medias below, or send us a message
                            with the form to the right.
                        </div>
                        <div className="grid grid-cols-2 gap-[2vw] text-[1.7vw] text-white mb-[2vw]">
                            <Link to={'https://twitter.com/conwreck'} className="w-[8vw] mt-[1vw] font-inter">
                                <img src={twitter} alt="could not load" />
                                <div className="mt-[1vw]"> @conwreck </div>
                            </Link>
                            <Link to={'https://www.instagram.com/wreck.con/?hl=en'} className="w-[8vw] mt-[1vw] font-inter">
                                <img src={instagram} alt="could not load" />
                                <div className="mt-[1vw]"> @wreck.con </div>
                            </Link>
                            <Link to={'https://www.youtube.com/@WreckCon'} className="w-[8vw] font-inter">
                                <img src={youtube} alt="could not load" />
                                <div className="mt-[1vw]"> WreckCon </div>
                            </Link>
                            <a href={"mailto:info@wreckcon.org"} className="w-[8vw] font-inter">
                                <img src={mail} alt="image could not load" />
                                <div className="mt-[1vw]"> info@wreckcon.org </div>
                            </a>
                        </div>
                    </div>
                    <form className="w-[50vw] flex flex-col font-inter text-[1.7vw] mb-[3vw] mt-[2vw] space-y-[3vw]">
                        <div>
                            <input
                                type="text"
                                placeholder="name"
                                name="name"
                                ref={nameRef}
                                className="text-black w-[40vw]"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                ref={emailRef}
                                className="text-black w-[40vw]"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="message"
                                name="message"
                                ref={messageRef}
                                className="text-black w-[40vw] h-[20vw]"
                            />
                        </div>
                        <div>
                            <button onClick={submitSheet}
                                className="bg-[#FFC42D] w-[7vw] h-[3vw] rounded-md translate-y-[-5vw] translate-x-[30vw]"
                            >
                                send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}