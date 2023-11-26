import image from '../Assets/pho_mock2.png';
import image1 from '../Assets/web_pfp.png';
import image2 from '../Assets/txt2_ blank.png';
import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from "react-router-dom";
import '../Css/Welcome.css';
import '../Assets/pho_mock2.png';
import '../Assets/pho_mock3.jpeg';
import DoughnutChart from './DoughtnutChart';
import {  } from 'react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faLock, faUsersLine, faHouse, faList, faHeart, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

// Phoenix Token | The Rise From Ashes
function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const controlIsOpen = () => {
        if (isOpen){
            setIsOpen(false);
        }else {
            setIsOpen(true);
        }
        
      };


    return <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{ background: "#250000" }}>
        {isOpen && <MobileNavOverlay isOpen={isOpen} setIsOpen={setIsOpen} />}
        <div class="container-fluid">
        <a class="navbar-brand text-light" style={{ fontFamily: "Poppins", width: '165px', height: '50px' }} href="#">
            <img src={image2} style={{width: '100%', height: '100%'}} alt="Logo" />
        </a>

            <div className='d-none d-lg-block'>
            <div class="navbar-nav ml-auto d-flex ">
                <a class="nav-item nav-link text-light " href="#about" style={{fontFamily: 'Poppins'}}>About</a>
                <a class="nav-item nav-link text-light " href="#tokenomics" style={{fontFamily: 'Poppins'}}>Tokenomics</a>
                <a class="nav-item nav-link text-light " href="#roadmap" style={{fontFamily: 'Poppins'}}>RoadMap</a>
                <a class="nav-item nav-link text-light " href="#how2buy" style={{fontFamily: 'Poppins'}}>How to buy</a>
                <a class="nav-item nav-link text-light " href="#faq" style={{fontFamily: 'Poppins'}}>FAQ</a>
                <a class="nav-item nav-link text-light " href="#socials" style={{fontFamily: 'Poppins'}}>Socials</a>

                {/* <div className=" d-lg-none"><a class="text-light bg-danger px-3 py-1 rounded-3" href="#" style={{ textDecoration: 'none', fontWeight: 'bold', background: 'linear-gradient(180deg, #FF8A00 0%, #FFC200 100%)', boxShadow: '0px 5px 4px 0px rgba(0, 0, 0, 0.70)', fontFamily: 'Poppins' }}>Buy Now</a></div> */}
            </div>
            </div>

            <div className='d-none d-md-flex d-lg-none'>
            {/* <div class="navbar-nav ml-auto d-flex "> */}
                <a class="nav-item nav-link text-light px-2" href="#about" style={{fontFamily: 'Poppins'}}>About</a>
                <a class="nav-item nav-link text-light px-2" href="#tokenomics" style={{fontFamily: 'Poppins'}}>Tokenomics</a>
                <a class="nav-item nav-link text-light px-2" href="#roadmap" style={{fontFamily: 'Poppins'}}>RoadMap</a>
                <a class="nav-item nav-link text-light px-2" href="#how2buy" style={{fontFamily: 'Poppins'}}>How to buy</a>
                <a class="nav-item nav-link text-light px-2" href="#faq" style={{fontFamily: 'Poppins'}}>FAQ</a>
                {/* <a class="nav-item nav-link text-light px-2" href="#socials" style={{fontFamily: 'Poppins'}}>Socials</a> */}
                
                

                <div className=""><a class="text-light bg-danger px-3 py-1 rounded-3" href="#" style={{ textDecoration: 'none', fontWeight: 'bold', background: 'linear-gradient(180deg, #FF8A00 0%, #FFC200 100%)', boxShadow: '0px 5px 4px 0px rgba(0, 0, 0, 0.70)', fontFamily: 'Poppins' }}>Buy Now</a></div>
                {/* <div className=" d-lg-none"><a class="text-light bg-danger px-3 py-1 rounded-3" href="#" style={{ textDecoration: 'none', fontWeight: 'bold', background: 'linear-gradient(180deg, #FF8A00 0%, #FFC200 100%)', boxShadow: '0px 5px 4px 0px rgba(0, 0, 0, 0.70)', fontFamily: 'Poppins' }}>Buy Now</a></div> */}
            {/* </div> */}
            </div>

            <div className='d-md-none'>
                {/* <i className="bi bi-list btn p-1 rounded-3 mobile-nav-toggle text-light" onClick={() => setIsOpen(true)} style={{ boxShadow: "0px 5px 30px rgba(65, 84, 241, 0.4)", transition: "0.5s", fontWeight: 'bold', fontSize: '15px'}}/> */}
                <FontAwesomeIcon icon={faList} style={{ color: 'white', margin: '', fontSize: '20px', cursor: 'pointer' }}  onClick={controlIsOpen}/>
            </div>

            <div className="d-none d-lg-block"><a class="text-light bg-danger px-3 py-1 rounded-3" href="#" style={{ textDecoration: 'none', fontWeight: 'bold', background: 'linear-gradient(180deg, #FF8A00 0%, #FFC200 100%)', boxShadow: '0px 5px 4px 0px rgba(0, 0, 0, 0.70)', fontFamily: 'Poppins' }}>Buy Now</a></div>
        </div>
    </nav>
}

    const MobileNavOverlay = ({ isOpen, setIsOpen }) =>{

        const handleOverlayClick = () => {
          setIsOpen(false);
        };

        const navigate = useNavigate();

      
        return (
          <div className='container-fluid bg-dark' style={{ borderRadius: '10px', position: 'fixed', top: 0, left: 0, width: '80%', height: '100%', top: '50%', left: '40%', transform: 'translate(-50%, -50%)', zIndex: 9999, fontFamily: 'Poppins' }}>
          <i className="bi bi-x bi-3x mobile-nav-toggle mx-auto" style={{color: "ButtonShadow", width: '20px', height: '20px'}} onClick={() => setIsOpen(false)} />
          <div className="mobile-nav-overlay" 
          onClick={handleOverlayClick} 
          style={{background: "#FF8A00", borderRadius: '10px', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}>
            
            <nav id="navbar" className="navbar py-5 m-0">
                <ul className="nav flex-column" style={{height: '100%', width: '100%'}}>
                    <div className='p-2'><a class="nav-item nav-link text-dark p-2" href="#about" ><p style={{fontWeight: 'bold', fontFamily: 'Poppins',}}>About</p></a></div>
                    <div className='p-2'><a class="nav-item nav-link text-dark p-2" href="#tokenomics"><p style={{fontWeight: 'bold', fontFamily: 'Poppins',}}>Tokenomics</p></a></div>
                    <div className='p-2'><a class="nav-item nav-link text-dark p-2" href="#roadmap"><p style={{fontWeight: 'bold', fontFamily: 'Poppins',}}>RoadMap</p></a></div>
                    <div className='p-2'><a class="nav-item nav-link text-dark p-2" href="#how2buy"><p style={{fontWeight: 'bold', fontFamily: 'Poppins',}}>How to buy</p></a></div>
                    <div className='p-2'><a class="nav-item nav-link text-dark p-2" href="#faq"><p style={{fontWeight: 'bold', fontFamily: 'Poppins',}}>FAQ</p></a></div>
                    <div className='p-2'><a class="nav-item nav-link text-dark p-2" href="#socials"><p style={{fontWeight: 'bold', fontFamily: 'Poppins',}}>Socials</p></a></div>
                    
                    

                </ul>

            </nav>
          </div>
          </div>
        );
    };

function TypedText() {

    const [value, setValue] = useState('');
    
    const [typedText, setTypedText] = useState('');
    const [blink, setBlink] = useState(true);

    const buttonRef = useRef(null);

    useEffect(() => {
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in view
            // Trigger the animation by adding the 'fade-in-on-scroll' class
            // setIsVisible(true);
            buttonRef.current.classList.add('fade-in-on-scroll');
            buttonRef.current.classList.remove('disp2');
            buttonRef.current.classList.add('disp');
            // Stop observing once the animation is triggered
            // observer.unobserve(entry.target);
          }
          else {
            // Element is out of view, remove the 'fade-in-on-scroll' class
            buttonRef.current.classList.remove('fade-in-on-scroll');
            buttonRef.current.classList.remove('disp');
            buttonRef.current.classList.add('disp2');
            // setIsVisible(false);
          }
        });
      };
  
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      };
  
      const observer = new IntersectionObserver(callback, options);
  
      if (buttonRef.current) {
        observer.observe(buttonRef.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, []);

    const handleTypingAnimation = (text) => {
        const typingDelay = 80; // Adjust typing speed here

        let currentTextIndex = 0;
        let prevTypedText = '';
        
        const typeNextCharacter = () => {
            if (currentTextIndex === text.length) {
                // return; // All texts have been typed
                currentTextIndex=0;
            }

            const currentText = text[currentTextIndex];

            if (prevTypedText.length === currentText.length) {
                prevTypedText = '';
                currentTextIndex++;
                // setValue('');
                setBlink(false);
                setValue('.')
                console.log('false');

                setTimeout(() =>{
                    console.log('true');
                    setValue('..')
                    setBlink(true);
                }, 580);

                setTimeout(() =>{
                    console.log('false');
                    setValue('...')
                    setBlink(false);
                }, 1580);
                
                setTimeout(() => {
                    setBlink(true)
                    setValue('')
                    typeNextCharacter();
                }, 3500);
                return;
            }

            prevTypedText = prevTypedText + currentText[prevTypedText.length];
            
            setTypedText(prevTypedText);
            setValue('');

            setTimeout(typeNextCharacter, typingDelay);
        };

        typeNextCharacter(); // Start typing the first text
    };


    useEffect(() => {
        handleTypingAnimation(['Safeguarding Communities', 'Empowering Humanity']); // Start typing on load
    }, []);

    return (
        <div ref={buttonRef} className="container my-md-5 px-5 d-flex justify-content-center align-items-center fade-in-on-scroll" style={{ height: '50vh' }}>
                <p className="text-light text-center d-none d-md-block" style={{
                    textAlign: "center",
                    // textShadow: "0px 18px 7px rgba(0, 0, 0, 0.70)",
                    // fontFamily: 'Phoenix2',
                    fontSize: "8vw",
                    fontStyle: "normal",
                    fontWeight: "700",
                    // fontFamily: "Phoenix",
                    fontFamily: 'Poppins',
                    //lineHeight: "8vw", /* 112px */
                    background: "linear-gradient(180deg, #FFC700 0%, #FF7A00 100%)",
                    backgroundClip: "text",
                    webkitBackgroundClip: "text",
                    webkitTextFillColor: "transparent",
                }}>{typedText}{value}</p>

                <p className="text-light text-center d-md-none" style={{
                    textAlign: "center",
                    // textShadow: "0px 18px 7px rgba(0, 0, 0, 0.70)",
                    // fontFamily: "Zilla Slab",
                    fontSize: "10vw",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontFamily: 'Poppins',
                    // fontFamily: "Phoenix",
                    //lineHeight: "8vw", /* 112px */
                    background: "linear-gradient(180deg, #FFC700 0%, #FF7A00 100%)",
                    backgroundClip: "text",
                    webkitBackgroundClip: "text",
                    webkitTextFillColor: "transparent",
                // }}>The Rise From<br />Ashes</p>
                }}>{typedText}{value}</p>

            </div>

    );
}

function About(){

    const buttonRef = useRef(null);

    useEffect(() => {
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in view
            // Trigger the animation by adding the 'fade-in-on-scroll' class
            // setIsVisible(true);
            buttonRef.current.classList.add('fade-in-on-scroll');
            buttonRef.current.classList.remove('disp2');
            buttonRef.current.classList.add('disp');
            // Stop observing once the animation is triggered
            // observer.unobserve(entry.target);
          }
          else {
            // Element is out of view, remove the 'fade-in-on-scroll' class
            buttonRef.current.classList.remove('fade-in-on-scroll');
            buttonRef.current.classList.remove('disp');
            buttonRef.current.classList.add('disp2');
            // setIsVisible(false);
          }
        });
      };
  
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      };
  
      const observer = new IntersectionObserver(callback, options);
  
      if (buttonRef.current) {
        observer.observe(buttonRef.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, []);


    return (
        <div ref={buttonRef} className='' >
            <div className='d-none d-lg-flex' style={{height: ''}}>
                <div className='col-12 col-lg-6 d-none d-lg-flex justify-content-center align-items-center'>
                    <img src={image1} alt="Phoenix Token Logo" style={{maxWidth: '80%', maxHeight: '80%'}}/>
                </div>

                <div className='col-12 col-lg-6 d-none d-lg-flex justify-content-center align-items-center'>
                <div className=' p-5'>
                    <p className="" style={{
                            textAlign: "left",
                            // textShadow: "0px 18px 7px rgba(0, 0, 0, 0.70)",
                            // fontFamily: "Phoenix",
                            fontSize: "32px",
                            fontStyle: "normal",
                            fontWeight: "700",
                            //lineHeight: "8vw", /* 112px */
                            background: "linear-gradient(180deg, #FFC700 0%, #FF7A00 100%)",
                            backgroundClip: "text",
                            webkitBackgroundClip: "text",
                            webkitTextFillColor: "transparent",
                            fontFamily: 'Poppins'
                        }}>ABOUT PHOENIX TOKEN</p>
                        <p className="mb-5" style={{
                            color: "#FFF",
                            textAlign: "left",
                            fontFamily: "Josefin Sans",  
                            fontSize: "17px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            // lineHeight: "110%", /* 33px */
                            fontFamily: 'Poppins'
                        }}>The Phoenix token is a decentralized token built on the Binance smart chain, fundamentally as a meme coin for those who love the story of the mythical phoenix which represents resilience and transformation even in the face of adversity. <br/>
                            The core principles of the team behind this token centers around wider adoption for the African demography, charity and all-round reliance. In the words of our developer, we will ‘START FROM THE ASHES, RISE, AND WE GO BOOM’.

                        </p>
                        <p style={{
                            color: "#FFF",
                            textAlign: "left",
                            fontFamily: "Josefin Sans",
                            fontSize: "17px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            // lineHeight: "110%", /* 33px */
                            
                            fontFamily: 'Poppins'
                        }}>The team aims to build some significant AI tools for it's Community and overall users to adopt more of the Blockchain technologies while providing the best user friendly experience. A plan for a seamless DEX is also on the horizon as new milestones are reached.
                        </p>
                </div></div>
            </div>
            
            <div className="container d-lg-none" id="about">
                <div className='col-12 mb-5 d-flex justify-content-center align-items-center'>
                    <img src={image1} alt="Phoenix Token Logo" style={{maxWidth: '80%', maxHeight: '80%'}}/>
                </div>
                <div className="row">
                    <div className="col-md-12 mx-auto d-block justify-content-center align-items-center text-center">
                        <p className="" style={{
                            textAlign: "center",
                            // textShadow: "0px 18px 7px rgba(0, 0, 0, 0.70)",
                            // fontFamily: "Phoenix",
                            fontSize: "32px",
                            fontStyle: "normal",
                            fontWeight: "700",
                            // lineSpacing: '5px',
                            //lineHeight: "8vw", /* 112px */
                            background: "linear-gradient(180deg, #FFC700 0%, #FF7A00 100%)",
                            backgroundClip: "text",
                            webkitBackgroundClip: "text",
                            webkitTextFillColor: "transparent",
                            fontFamily: 'Poppins'
                        }}>ABOUT PHOENIX TOKEN</p>
                        <p className="mb-5" style={{
                            color: "#FFF",
                            textAlign: "center",
                            fontFamily: "Josefin Sans",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            // lineHeight: "110%", /* 33px */
                            fontFamily: 'Poppins'
                        }}>The Phoenix token is a decentralized token built on the Binance smart chain, fundamentally as a meme coin for those who love the story of the mythical phoenix which represents resilience and transformation even in the face of adversity. <br/>
                            The core principles of the team behind this token centers around wider adoption for the African demography, charity and all-round reliance. In the words of our developer, we will ‘START FROM THE ASHES, RISE, AND WE GO BOOM’.</p>
                        <p style={{
                            color: "#FFF",
                            textAlign: "center",
                            fontFamily: "Josefin Sans",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            // lineHeight: "110%", /* 33px */
                            
                            fontFamily: 'Poppins'
                        }}>The team aims to build some significant AI tools for it's Community and overall users to adopt more of the Blockchain technologies while providing the best user friendly experience. A plan for a seamless DEX is also on the horizon as new milestones are reached.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}

function AboutBottom(){

    const buttonRef = useRef(null);

    useEffect(() => {
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in view
            // Trigger the animation by adding the 'fade-in-on-scroll' class
            // setIsVisible(true);
            buttonRef.current.classList.add('fade-in-on-scroll');
            buttonRef.current.classList.remove('disp2');
            buttonRef.current.classList.add('disp');
            // Stop observing once the animation is triggered
            // observer.unobserve(entry.target);
          }
          else {
            // Element is out of view, remove the 'fade-in-on-scroll' class
            buttonRef.current.classList.remove('fade-in-on-scroll');
            buttonRef.current.classList.remove('disp');
            buttonRef.current.classList.add('disp2');
            // setIsVisible(false);
          }
        });
      };
  
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      };
  
      const observer = new IntersectionObserver(callback, options);
  
      if (buttonRef.current) {
        observer.observe(buttonRef.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, []);


    return (
        <div ref={buttonRef} class="container py-5" >
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
                    <div class="col mb-4">
                        <div class="card rounded-4" style={{ background: "#FF8A00" }}>
                            {/* <img src="your-icon-1.png" class="card-img-top" alt="Icon 1" /> */}

                            <div className='d-flex justify-content-center align-items-center mt-4' style={{ height: '65px', width: '100%' }}>
                                <div className=''><FontAwesomeIcon icon={faUsersLine} style={{ color: 'white', margin: '0 auto', fontSize: '75px' }} /></div>
                            </div>
                            <div class="card-body text-center">
                            </div>
                            <div className="card-title mb-4 text-center d-flex justify-content-center align-items-center p-1" style={{ height: '10px', fontFamily: 'Poppins' }}>
                                <h5 style={{ fontWeight: '800'}}>RENOUNCED OWNERSHIP</h5>
                            </div>
                            {/* <div className="card-body" style={{ height: '170px' }}>
                                <p class="text-center" style={{ fontFamily: 'Poppins' }}>Ownership has been renounced and this means the project is Community Driven.</p>
                            </div> */}

                        </div>
                    </div>

                    <div class="col mb-4">
                        <div class="card rounded-4" style={{ background: "#FF8A00" }}>
                            {/* <img src="your-icon-2.png" class="card-img-top" alt="Icon 2" /> */}
                            {/* <i style={{color: 'blue', margin: '0 auto'}} class="bi bi-lock-fill"></i> */}
                            <div className='d-flex justify-content-center align-items-center mt-4' style={{ height: '65px', width: '100%' }}>
                                <div className=''><FontAwesomeIcon icon={faLock} style={{ color: 'white', margin: '0 auto', fontSize: '75px' }}/></div>
                            </div>
                            <div class="card-body text-center">
                            </div>
                            <div className="card-title mb-4 text-center d-flex justify-content-center align-items-center p-1" style={{ height: '10px' }}>
                                <h5 style={{ fontWeight: '800'}}>LOCKED LIQUIDITY</h5>
                            </div>
                            {/* <div className="card-body" style={{ height: '170px' }}>
                                <p class="text-center">Liquidity have been locked and this guarantee safe trading for everyone</p>
                            </div> */}
                        </div>
                    </div>

                    <div class="col mb-4">
                        <div class="card rounded-4" style={{ background: "#FF8A00" }}>
                            {/* <img src="your-icon-3.png" class="card-img-top" alt="Icon 3" /> */}
                            {/* <i style={{color: 'blue', margin: '0 auto'}} class="bi bi-fire-fill"></i> */}
                            <div className='d-flex justify-content-center align-items-center mt-4' style={{ height: '65px', width: '100%' }}>
                                <div className=''><FontAwesomeIcon icon={faFire} style={{ color: 'white', margin: '0 auto', fontSize: '75px' }}/></div>
                            </div>
                            <div class="card-body text-center">
                            </div>
                            <div className="card-title mb-4 text-center d-flex justify-content-center align-items-center p-1" style={{ height: '10px' }}>
                                <h5 style={{ fontWeight: '800'}}>DEFLATIONARY MECHANISM</h5>
                            </div>
                            {/* <div className="card-body" style={{ height: '170px' }}>
                                <p class="text-center">5% have been burnt initially and 2% burn on every transactions. This is to make sure that $PHT become more scarce</p>
                            </div> */}
                        </div>
                    </div>

                    <div class="col mb-4">
                        <div class="card rounded-4" style={{ background: "#FF8A00" }}>

                            <div className='d-flex justify-content-center align-items-center mt-4' style={{ height: '65px', width: '100%' }}>
                                <div className=''><FontAwesomeIcon icon={faHeart} style={{ color: 'white', margin: '0 auto', fontSize: '75px' }}/></div>
                            </div>
                            <div class="card-body text-center">
                            </div>
                            <div className="card-title mb-4 text-center d-flex justify-content-center align-items-center p-1" style={{ height: '10px', }}>
                                <h5 style={{ fontWeight: '800'}}>CHARITY</h5>
                            </div>
                            {/* <div className="card-body" style={{ height: '170px' }}>
                                <p class="text-center">We are forstering help for more Blockchain adoptions around the world</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
    );
}

function TokenomicsHeader (){

    const buttonRef = useRef(null);

    useEffect(() => {
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in view
            // Trigger the animation by adding the 'fade-in-on-scroll' class
            // setIsVisible(true);
            buttonRef.current.classList.add('fade-in-on-scroll');
            buttonRef.current.classList.remove('disp2');
            buttonRef.current.classList.add('disp');
            // Stop observing once the animation is triggered
            // observer.unobserve(entry.target);
          }
          else {
            // Element is out of view, remove the 'fade-in-on-scroll' class
            buttonRef.current.classList.remove('fade-in-on-scroll');
            buttonRef.current.classList.remove('disp');
            buttonRef.current.classList.add('disp2');
            // setIsVisible(false);
          }
        });
      };
  
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      };
  
      const observer = new IntersectionObserver(callback, options);
  
      if (buttonRef.current) {
        observer.observe(buttonRef.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, []);

    return (
        <p ref={buttonRef} className="" style={{
            textAlign: "center",
            // textShadow: "0px 18px 7px rgba(0, 0, 0, 0.70)",
            fontFamily: "Zilla Slab",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: "700",
            //lineHeight: "8vw", /* 112px */
            background: "linear-gradient(180deg, #FFC700 0%, #FF7A00 100%)",
            backgroundClip: "text",
            webkitBackgroundClip: "text",
            webkitTextFillColor: "transparent",
            fontFamily: 'Poppins'
        }}>TOKENOMICS</p>
    );
}

function TokenomicsBottom(){

    const buttonRef = useRef(null);

    useEffect(() => {
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in view
            // Trigger the animation by adding the 'fade-in-on-scroll' class
            // setIsVisible(true);
            buttonRef.current.classList.add('fade-in-on-scroll');
            buttonRef.current.classList.remove('disp2');
            buttonRef.current.classList.add('disp');
            // Stop observing once the animation is triggered
            // observer.unobserve(entry.target);
          }
          else {
            // Element is out of view, remove the 'fade-in-on-scroll' class
            buttonRef.current.classList.remove('fade-in-on-scroll');
            buttonRef.current.classList.remove('disp');
            buttonRef.current.classList.add('disp2');
            // setIsVisible(false);
          }
        });
      };
  
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      };
  
      const observer = new IntersectionObserver(callback, options);
  
      if (buttonRef.current) {
        observer.observe(buttonRef.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, []);

    return (

        <div ref={buttonRef}>
            <div className="container rounded-4 d-none d-md-block" style={{ background: '#FF8A00' }}>
                    <div className="row ">
                        <div className="col-md-8 col-sm-12 rounded-4 bg-primary" style={{ lightgray: '50% / cover no-repeat', position: 'relative', opacity: '0.9', backgroundSize: 'cover', backgroundPosition: 'center', }}>
                            <div>
                                <div className=' rounded-4 d-flex justify-content-center align-items-center' style={{ backgroundColor: '#FFC700', fontWeight: 'bold', height: '100%', width: '100%', position: 'absolute', left: '0', top: '0' }}>
                                    <div className='py-4 px-4 d-block justify-content-center'>
                                        <p style={{ fontWeight: '800', fontSize: '25px' }}>Reward for Holders</p>
                                        <p style={{ fontWeight: '200' }}>Phoenix Token is bringing back the era for Community with a lot of reward! $PHT is a deflationary
                                            token designed to become more scarce over time. All holders of Phoenix Token will earn more $WKC
                                            (WikiCat Coin) and is automatically sent to your wallet by simply holding Phoenix Token coins in your
                                            wallet. Watch the amount of WikiCat Coin grow in your wallet as Phoenix Token coin holders automatically
                                            receive a 3% fee from every transaction that happens on the Phoenix Token network. The
                                            community receives more $WKC coins from the fees generated on each transaction.</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-md-4 col-sm-12 rounded-4 py-4 py-md-5 px-md-4">
                            <div className='py-md-4 d-block align-items-center'>
                                <h1 className='' style={{ marginBottom: '0px', fontWeight: 'bold' }}>2%</h1>
                                <p style={{ fontWeight: 'bold' }}>Auto Burn</p>
                                {/* <h1 className='' style={{ marginBottom: '0px', fontWeight: 'bold' }}>2%</h1>
                                <p style={{ fontWeight: 'bold' }}>Burning Mechanism</p> */}
                                <h1 className='' style={{ marginBottom: '0px', fontWeight: 'bold' }}>3%</h1>
                                <p style={{ fontWeight: 'bold' }}>Reflection</p>
                            </div>


                        </div>
                    </div>

                    <div>

                    </div>
                </div>

                <div className='d-block d-md-none mt-5'>
                <div className="container">
                <div className="container col-md-8 col-sm-12 rounded-4 mb-4 d-block d-md-none" style={{ backgroundColor: '#FFC700', }}>
                    <div style={{ backgroundColor: '#FFC700', fontWeight: 'bold' }}>
                        <div className='py-4 px-2'>
                            <h3 style={{ fontWeight: '800' }}>Reward for Holders</h3>
                            <p style={{ fontWeight: '200' }}>Phoenix Token is bringing back the era for Community with a lot of reward! $PHT is a deflationary
                                token designed to become more scarce over time. All holders of Phoenix Token will earn more $WKC
                                (WikiCat Coin) and is automatically sent to your wallet by simply holding Phoenix Token coins in your
                                wallet. Watch the amount of WikiCat Coin grow in your wallet as Phoenix Token coin holders automatically
                                receive a 1% fee from every transaction that happens on the Phoenix Token network. The
                                community receives more $WKC coins from the fees generated on each transaction.</p>
                        </div>
                    </div>


                </div>
            </div>

            <div className="container">
                <div className="col-sm-12 rounded-4 py-4 py-md-5 px-md-4 d-block d-md-none" style={{ background: '#FF8A00' }}>
                    <div className='px-3'>
                        <h1 className='' style={{ marginBottom: '0px', fontWeight: 'bold' }}>2%</h1>
                        <p style={{ fontWeight: 'bold' }}>Auto Burn</p>
                        {/* <h1 className='' style={{ marginBottom: '0px', fontWeight: 'bold' }}>2%</h1>
                        <p style={{ fontWeight: 'bold' }}>Burning Mechanism</p> */}
                        <h1 className='' style={{ marginBottom: '0px', fontWeight: 'bold' }}>3%</h1>
                        <p style={{ fontWeight: 'bold' }}>Reflection</p>
                    </div>


                </div>
            </div>
                </div>
        </div>
    );

}

function Tokenomics (){

    const buttonRef = useRef(null);

    useEffect(() => {
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in view
            // Trigger the animation by adding the 'fade-in-on-scroll' class
            // setIsVisible(true);
            buttonRef.current.classList.add('fade-in-on-scroll');
            buttonRef.current.classList.remove('disp2');
            buttonRef.current.classList.add('disp');
            // Stop observing once the animation is triggered
            // observer.unobserve(entry.target);
          }
          else {
            // Element is out of view, remove the 'fade-in-on-scroll' class
            buttonRef.current.classList.remove('fade-in-on-scroll');
            buttonRef.current.classList.remove('disp');
            buttonRef.current.classList.add('disp2');
            // setIsVisible(false);
          }
        });
      };
  
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      };
  
      const observer = new IntersectionObserver(callback, options);
  
      if (buttonRef.current) {
        observer.observe(buttonRef.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, []);

    return (
        <div >
            <div className="py-5 container" id='tokenomics' >
                <TokenomicsHeader />
{/* 
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-md-5 col-12 mb-4 mx-2 rounded-4 p-2 px-3" style={{ background: '#FFC700', fontWeight: 'bold', color: '#000', fontFamily: 'Poppins' }}>
                            <p className="pt-1" style={{ marginBottom: '0px', fontSize: '12px', fontFamily: 'Poppins' }}>Total Supply</p>
                            <h2 class="mb-0" style={{ fontFamily: 'Poppins', fontSize: '25px', fontWeight: '800' }}>10,000,000</h2>
                        </div>

                        <div class="col-md-4 col-12 mb-4 mx-2 rounded-4 p-2 px-3" style={{ background: '#FFC700', fontWeight: 'bold', color: '#000' }}>
                            <p className="pt-1" style={{ marginBottom: '0px', fontSize: '12px', fontFamily: 'Poppins' }}>Tax Slippage</p>
                            <h2 class="mb-0" style={{ fontFamily: 'Poppins', fontSize: '25px', fontWeight: '800' }}>5% BUY & SELL</h2>
                        </div>

                        <div class="col-md-2 col-12 mb-4 mx-2 rounded-4 p-2 px-3" style={{ background: '#FFC700', fontWeight: 'bold', color: '#000' }}>
                            <p className="" style={{ marginBottom: '0px', fontSize: '12px', fontFamily: 'Poppins' }}>Initial Burn</p>
                            <h2 class="mb-0 d-md-block d-none" style={{ fontFamily: 'Poppins', fontSize: '25px', fontWeight: 'bold' }}>6M</h2>
                            <h2 class="mb-0 d-sm-block d-md-none" style={{ fontFamily: 'Poppins', fontSize: '25px', fontWeight: 'bold' }}>6,000,000</h2>
                        </div>
                    </div>
                </div> */}

                <div className=" " ref={buttonRef}>
                    <div className=''>
                        <DoughnutChart />
                    </div>
                    
                </div>

                <TokenomicsBottom />


            </div>
                {/* <TokenomicsBottom /> */}
            </div>
    );
}

function RoadMap (){

    const buttonRef = useRef(null);

    useEffect(() => {
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in view
            // Trigger the animation by adding the 'fade-in-on-scroll' class
            // setIsVisible(true);
            buttonRef.current.classList.add('fade-in-on-scroll');
            buttonRef.current.classList.remove('disp2');
            buttonRef.current.classList.add('disp');
            // Stop observing once the animation is triggered
            // observer.unobserve(entry.target);
          }
          else {
            // Element is out of view, remove the 'fade-in-on-scroll' class
            buttonRef.current.classList.remove('fade-in-on-scroll');
            buttonRef.current.classList.remove('disp');
            buttonRef.current.classList.add('disp2');
            // setIsVisible(false);
          }
        });
      };
  
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      };
  
      const observer = new IntersectionObserver(callback, options);
  
      if (buttonRef.current) {
        observer.observe(buttonRef.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, []);

    return (
        <div ref={buttonRef} id='roadmap'>
            <div className="py-5 container d-block d-md-none mt-5"  >
                
                <p className="" style={{
                    textAlign: "center",
                    // textShadow: "0px 18px 7px rgba(0, 0, 0, 0.70)",
                    fontFamily: "Zilla Slab",
                    fontSize: "32px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    //lineHeight: "8vw", /* 112px */
                    background: "linear-gradient(180deg, #FFC700 0%, #FF7A00 100%)",
                    backgroundClip: "text",
                    webkitBackgroundClip: "text",
                    webkitTextFillColor: "transparent",
                    fontFamily: 'Poppins'
                }}>ROADMAP</p>

                    <div className="col-12" style={{width: ''}}>
                        <div className='row'>
                            

                            <div className='col-12'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div class="vertical-line " style={{
                                        width: '2px',
                                        height: '70px',
                                        backgroundColor: '#FF8A00',
                                        // position: 'relative'
                                    }}></div>
                                </div>
                                <div className='rounded-4 mb-5 py-5 text-center' style={{ background: '#FFC700', marginBottom: '0px' }}>
                                    
                                    <p>Social Media Handles Creation</p>
                                    <p>Website Launch</p>
                                    <p>Launch A Public Sale</p>
                                    <p>500 Asset Holders</p>
                                    <p>1000 Twitter Followers</p>
                                    <p>500 Telegram Members</p>
                                    <p>500 TikTok Followers</p>
                                </div>

                                <div className='d-flex justify-content-center align-items-center'>
                                
                                    <div class="vertical-line p-1" style={{
                                        width: '2px',
                                        // height: '100px',
                                        backgroundColor: '#FF8A00',
                                        position: 'absolute',
                                        zIndex: '10'
                                    }}></div>
                                </div>
                                <div className='rounded-4 mt-5 mb-5 py-5 text-center' style={{ background: '#FF8A00', zIndex: '1000px'}}>

                                    <p>First Airdrop Campaign</p>
                                    <p>Contract Audit</p>
                                    <p>1500 Asset Holders</p>
                                    <p>Whitepaper Release</p>
                                    <p>Meme Contest</p>
                                    <p>5000 Twitter Followers</p>
                                    <p>5000 Telegram Members</p>
                                    <p>1500 TikTok Followers</p>
                                    <p>CG & CMC Listing</p>
                                    
                                </div>


                                <div className='d-flex justify-content-center align-items-center'>
                                
                                    <div class="vertical-line p-1" style={{
                                        width: '2px',
                                        // height: '100px',
                                        backgroundColor: '#FF8A00',
                                        position: 'absolute',
                                        zIndex: '10'
                                    }}></div>
                                </div>
                                <div className='rounded-4 mt-5 mb-5 py-5 text-center' style={{ background: '#FFC700', zIndex: '1000px'}}>
                                    <p>Phoenix Token Bot Release</p>
                                    <p>First Ressurection Campaign</p>
                                    <p>5,000 Asset Holders</p>
                                    <p>10,000 Telegram Members</p>
                                    <p>10,000 Twitter Followers</p>
                                    <p>5000 TikTok Followers</p>
                                    <p>Medium Influencer Marketing</p>
                                    <p>Billboard Marketing in Africa</p>
                                </div>

                                <div className='d-flex justify-content-center align-items-center'>
                                
                                    <div class="vertical-line p-1" style={{
                                        width: '2px',
                                        // height: '100px',
                                        backgroundColor: '#FF8A00',
                                        position: 'absolute',
                                        zIndex: '10'
                                    }}></div>
                                </div>
                                <div className='rounded-4 mt-5 mb-5 py-5 text-center' style={{ background: '#FF8A00', zIndex: '1000px'}}>

                                    <p>10,000 Asset Holders</p>
                                    <p>20,000 Telegram Members</p>
                                    <p>20,000 Twitter Followers</p>
                                    <p>10,000 TikTok Followers</p>
                                    <p>Large Influencer Marketing</p>
                                    <p>Phoenix Bot Launch</p>
                                    <p>Billboard Marketing in Asia & Europe</p>
                                    <p>Second Resurrection Campaign</p>
                                </div>

                                <div className='d-flex justify-content-center align-items-center'>
                                
                                    <div class="vertical-line p-1" style={{
                                        width: '2px',
                                        // height: '100px',
                                        backgroundColor: '#FF8A00',
                                        position: 'absolute',
                                        zIndex: '10'
                                    }}></div>
                                </div>
                                <div className='rounded-4 mt-5 py-5 text-center' style={{ background: '#FFC700', zIndex: '1000px'}}>
                                    <p>20,000 Asset Holders</p>
                                    <p>50,000 Telegram Members</p>
                                    <p>50,000 Twitter Followers</p>
                                    <p>15,000 TikTok Followers</p>
                                    <p>Large Influencer Marketing</p>
                                    <p>Phoenix Token DEX Release</p>
                                    <p>Ecosystem Ideation</p>
                                    <p>Third Resurrection Campaign</p>
                                    <p>New Utility Roadmap Release</p>
                                </div>

                                <div className='d-flex justify-content-center align-items-center'>
                                
                                    <div class="vertical-line " style={{
                                        width: '2px',
                                        height: '120px',
                                        backgroundColor: '#FFC700',
                                        position: 'absolute',
                                        zIndex: '10'
                                    }}></div>
                                </div>
                            </div>

                        </div>
                        
                    
                    </div>
            </div>
            
            <div className="py-5 container d-none d-md-block mt-5" >
                <p className="" style={{
                    textAlign: "center",
                    // textShadow: "0px 18px 7px rgba(0, 0, 0, 0.70)",
                    fontFamily: "Zilla Slab",
                    fontSize: "32px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    //lineHeight: "8vw", /* 112px */
                    background: "linear-gradient(180deg, #FFC700 0%, #FF7A00 100%)",
                    backgroundClip: "text",
                    webkitBackgroundClip: "text",
                    webkitTextFillColor: "transparent",
                    fontFamily: 'Poppins'
                }}>ROADMAP</p>

                <div className="mx-auto d-flex justify-content-center">
                    <div class="vertical-line" style={{
                        width: '2px',
                        height: '1900px',
                        backgroundColor: 'white',
                        position: 'relative'
                    }}>
                        <div class="horizontal-line" style={{
                            top: "80px",
                            width: "100px",
                            height: "2px",
                            backgroundColor: "white",
                            position: "absolute",
                            left: '-100px', // Add this line to move it to the left
                        }}>
                        </div>
                        <div class="circle" style={{
                            top: "55px",
                            width: '50px',
                            height: '50px',
                            background: '#FF8A00',
                            borderRadius: '50%',
                            position: 'absolute',
                            left: '-100px', /* Adjust the positioning as needed */
                            color: 'white',
                            textAlign: 'center',
                            // fontSize: '10px',
                            lineHeight: '20px',
                            fontFamily: 'Poppins'
                        }}><div className='d-flex justify-content-center align-items-center' style={{height: '100%', width: '100%'}}><p style={{fontWeight: 'bolder'}}>Q1</p></div></div>
                        <div class='' style={{
                            top: "60px",
                            width: '250px',
                            // height: '200px',
                            fontSize: '14px',
                            // height: '20px',
                            borderRadius: '10%',
                            position: 'absolute',
                            left: '-360px', /* Adjust the positioning as needed */
                            color: 'white',
                            textAlign: 'right',
                            lineHeight: '20px',
                            fontFamily: 'Poppins'
                        }}>

                            <p>Social Media Handles Creation</p>
                            <p>Website Launch</p>
                            <p>Launch A Public Sale</p>
                            <p>500 Asset Holders</p>
                            <p>1000 Twitter Followers</p>
                            <p>500 Telegram Members</p>
                            <p>500 TikTok Followers</p>
                        </div>

                        <div class="horizontal-line" style={{
                            top: "450px",
                            width: "100px",
                            height: "2px",
                            backgroundColor: "white",
                            position: "absolute",
                            // left: '-100px', // Add this line to move it to the left
                        }}>

                        </div>

                        <div class="circle" style={{
                            top: "425px",
                            width: '50px',
                            height: '50px',
                            background: '#FF8A00',
                            borderRadius: '50%',
                            position: 'absolute',
                            left: '100px', /* Adjust the positioning as needed */
                            color: 'white',
                            textAlign: 'center',
                            // fontSize: '10px',
                            lineHeight: '20px',
                            fontFamily: 'Poppins'
                        }}><div className='d-flex justify-content-center align-items-center' style={{height: '100%', width: '100%'}}><p style={{fontWeight: 'bolder'}}>Q2</p></div></div>

                        <div class="circle" style={{
                            top: "430px",
                            width: '200px',
                            borderRadius: '50%',
                            position: 'absolute',
                            left: '160px', /* Adjust the positioning as needed */
                            color: 'white',
                            textAlign: 'left',
                            fontSize: '14px',
                            textAlign: 'left', // Align text to the right
                            lineHeight: '20px',
                            fontFamily: 'Poppins'
                        }}>

                            <p>First Airdrop Campaign</p>
                            <p>Contract Audit</p>
                            <p>1500 Asset Holders</p>
                            <p>Whitepaper Release</p>
                            <p>Meme Contest</p>
                            <p>5000 Twitter Followers</p>
                            <p>5000 Telegram Members</p>
                            <p>1500 TikTok Followers</p>
                            <p>CG & CMC Listing</p>
                        </div>
                        <div class="horizontal-line" style={{
                            top: "820px",
                            width: "100px",
                            height: "2px",
                            backgroundColor: "white",
                            position: "absolute",
                            left: '-100px', // Add this line to move it to the left
                        }}>

                        </div>
                        <div class="circle" style={{
                            top: "795px",
                            width: '50px',
                            height: '50px',
                            background: '#FF8A00',
                            borderRadius: '50%',
                            position: 'absolute',
                            left: '-100px', /* Adjust the positioning as needed */
                            color: 'white',
                            textAlign: 'center',
                            // fontSize: '10px',
                            lineHeight: '20px',
                            fontFamily: 'Poppins'
                        }}><div className='d-flex justify-content-center align-items-center' style={{height: '100%', width: '100%'}}><p style={{fontWeight: 'bolder'}}>Q3</p></div></div>
                        <div class="" style={{
                            top: "800px",
                            width: '200px',
                            fontSize: '14px',
                            // height: '20px',
                            borderRadius: '10%',
                            position: 'absolute',
                            left: '-310px', /* Adjust the positioning as needed */
                            color: 'white',
                            textAlign: 'right',
                            lineHeight: '20px',
                            fontFamily: 'Poppins'
                        }}>

                            <p>Phoenix Token Bot Release</p>
                            <p>First Ressurection Campaign</p>
                            <p>5,000 Asset Holders</p>
                            <p>10,000 Telegram Members</p>
                            <p>10,000 Twitter Followers</p>
                            <p>5000 TikTok Followers</p>
                            <p>Medium Influencer Marketing</p>
                            <p>Billboard Marketing in Africa</p>
                        </div>
                        <div class="horizontal-line" style={{
                            top: "1190px",
                            width: "100px",
                            height: "2px",
                            backgroundColor: "white",
                            position: "absolute",

                        }}>

                        </div>

                        <div class="circle" style={{
                            top: "1165px",
                            width: '50px',
                            height: '50px',
                            background: '#FF8A00',
                            borderRadius: '50%',
                            position: 'absolute',
                            left: '100px', /* Adjust the positioning as needed */
                            color: 'white',
                            textAlign: 'left',
                            // fontSize: '10px',
                            lineHeight: '20px',
                            fontFamily: 'Poppins'
                        }}><div className='d-flex justify-content-center align-items-center' style={{height: '100%', width: '100%'}}><p style={{fontWeight: 'bolder'}}>Q4</p></div></div>

                        <div class="circle" style={{
                            top: "1170px",
                            width: '200px',
                            borderRadius: '50%',
                            position: 'absolute',
                            left: '160px', /* Adjust the positioning as needed */
                            color: 'white',
                            textAlign: 'center',
                            fontSize: '14px',
                            textAlign: 'left', // Align text to the right
                            lineHeight: '20px',
                            fontFamily: 'Poppins'
                        }}>

                            <p>10,000 Asset Holders</p>
                            <p>20,000 Telegram Members</p>
                            <p>20,000 Twitter Followers</p>
                            <p>10,000 TikTok Followers</p>
                            <p>Large Influencer Marketing</p>
                            <p>Phoenix Bot Launch</p>
                            <p>Billboard Marketing in Asia & Europe</p>
                            <p>Second Resurrection Campaign</p>
                        </div>


                        <div class="horizontal-line" style={{
                            top: "1560px",
                            width: "100px",
                            left: '-100px',
                            height: "2px",
                            backgroundColor: "white",
                            position: "absolute",

                        }}>

                        </div>

                        <div class="circle" style={{
                            top: "1535px",
                            width: '50px',
                            height: '50px',
                            background: '#FF8A00',
                            borderRadius: '50%',
                            position: 'absolute',
                            left: '-100px', /* Adjust the positioning as needed */
                            color: 'white',
                            textAlign: 'left',
                            // fontSize: '10px',
                            lineHeight: '20px',
                            fontFamily: 'Poppins'
                        }}><div className='d-flex justify-content-center align-items-center' style={{height: '100%', width: '100%'}}><p style={{fontWeight: 'bolder'}}>Q5</p></div></div>

                        <div class="circle" style={{
                            top: "1540px",
                            width: '200px',
                            borderRadius: '50%',
                            position: 'absolute',
                            left: '-310px', /* Adjust the positioning as needed */
                            color: 'white',
                            textAlign: 'right',
                            fontSize: '14px',
                            lineHeight: '20px',
                            fontFamily: 'Poppins'
                        }}>

                            <p>20,000 Asset Holders</p>
                            <p>50,000 Telegram Members</p>
                            <p>50,000 Twitter Followers</p>
                            <p>15,000 TikTok Followers</p>
                            <p>Large Influencer Marketing</p>
                            <p>Phoenix Token DEX Release</p>
                            <p>Ecosystem Ideation</p>
                            <p>Third Resurrection Campaign</p>
                            <p>New Utility Roadmap Release</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}

function Buy(){

    const buttonRef = useRef(null);

    useEffect(() => {
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in view
            // Trigger the animation by adding the 'fade-in-on-scroll' class
            // setIsVisible(true);
            buttonRef.current.classList.add('fade-in-on-scroll');
            buttonRef.current.classList.remove('disp2');
            buttonRef.current.classList.add('disp');
            // Stop observing once the animation is triggered
            // observer.unobserve(entry.target);
          }
          else {
            // Element is out of view, remove the 'fade-in-on-scroll' class
            buttonRef.current.classList.remove('fade-in-on-scroll');
            buttonRef.current.classList.remove('disp');
            buttonRef.current.classList.add('disp2');
            // setIsVisible(false);
          }
        });
      };
  
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      };
  
      const observer = new IntersectionObserver(callback, options);
  
      if (buttonRef.current) {
        observer.observe(buttonRef.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, []);

    return(
        <div ref={buttonRef}>

<div className="py-5 container mt-5" id='how2buy'>
                <p className="" style={{
                    textAlign: "center",
                    // textShadow: "0px 18px 7px rgba(0, 0, 0, 0.70)",
                    fontFamily: "Zilla Slab",
                    fontSize: "32px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    background: "linear-gradient(180deg, #FFC700 0%, #FF7A00 100%)",
                    backgroundClip: "text",
                    webkitBackgroundClip: "text",
                    webkitTextFillColor: "transparent",
                    fontFamily: 'Poppins'
                }}>HOW TO BUY $PHT</p>

                <div className="container rounded-4" >
                    <div className="row" >
                        <div className="col-lg-6 col-sm-12 rounded-4" >
                            <img src={image} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 col-sm-12 rounded-4 py-4 text-white d-flex align-items-center justify-content-center">
                            <div className='' style={{ fontFamily: 'Poppins' }}>
                                <p style={{marginBottom: '0px'}}><b style={{ fontFamily: 'Poppins'}}>CREATE A WALLET<br /></b></p>
                                <p>Go to the App Store and Download any Custodial wallet (E.g. Trust Wallet, Metamask, SafaPal)</p>
                                <p style={{marginBottom: '0px'}}><b >PURCHASE BNB<br /></b></p>
                                <p>Purchase BNB Smart Chain (Bep 20) via any CEX (Binance, kucoin etc...) and deposit into your wallet address.</p>
                                <p style={{marginBottom: '0px'}}><b >SWAP BNB TO PHT<br /></b></p>
                                <p>Copy the Contract Address and head over to PancakeSwap or Poocoin DEX, Paste the Contract Address to import $PHT then proceed to swap BNB to PHT.</p>

                                <div className="text-dark" ><div className="px-3 rounded-3" style={{ background: '#FFC700', fontWeight: 'bold', width: 'fit-content' }}><p className='p-1'> Buy on PancakeSwap </p></div></div>
                            </div>



                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

function FAQ() {
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    const handleShow1 = () => {
        if(show1){
            setShow1(false);
        }else{
            setShow1(true);
        }
        
        setShow2(false);
        setShow3(false);
      };
    
      const handleShow2 = () => {
        setShow1(false);
        if(show2){
            setShow2(false);
        }else{
            setShow2(true);
        }

        setShow3(false);
      };
    
      const handleShow3 = () => {
        setShow1(false);
        setShow2(false);
        
        if(show3){
            setShow3(false);
            
        }else{
            setShow3(true);
        }
      };

    const buttonRef = useRef(null);

    useEffect(() => {
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in view
            // Trigger the animation by adding the 'fade-in-on-scroll' class
            // setIsVisible(true);
            buttonRef.current.classList.add('fade-in-on-scroll');
            buttonRef.current.classList.remove('disp2');
            buttonRef.current.classList.add('disp');
            // Stop observing once the animation is triggered
            // observer.unobserve(entry.target);
          }
          else {
            // Element is out of view, remove the 'fade-in-on-scroll' class
            buttonRef.current.classList.remove('fade-in-on-scroll');
            buttonRef.current.classList.remove('disp');
            buttonRef.current.classList.add('disp2');
            // setIsVisible(false);
          }
        });
      };
  
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      };
  
      const observer = new IntersectionObserver(callback, options);
  
      if (buttonRef.current) {
        observer.observe(buttonRef.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, []);

    return (
        <div ref={buttonRef} id='faq'>
            <div className="py-5 container">

<p className="" style={{
    textAlign: "center",
    // textShadow: "0px 18px 7px rgba(0, 0, 0, 0.70)",
    fontFamily: "Zilla Slab",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: "700",
    background: "linear-gradient(180deg, #FFC700 0%, #FF7A00 100%)",
    backgroundClip: "text",
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent",
    fontFamily: 'Poppins'
}}>F.A.Qs</p>

<div className="container rounded-4" style={{  }}>
    <div className="row" >
        <div className="col-12 rounded-4 py-4 px-md-3 px-1" style={{ fontFamily: 'Poppins' }}>

            <div className='mb-3 '>
                <div className='d-flex' onClick={handleShow1} style={{display: 'flex', alignItems: '', justifyContent: 'space-between', width: '100%', cursor: 'pointer'}}>
                    <p className='text-light mb-0' style={{fontWeight: 'bold', fontSize: '20px', paddingRight: '10px'}}>Why Phoenix Token?</p>
                    { show1 && <FontAwesomeIcon icon={faCaretUp} style={{ color: 'white', margin: '', fontSize: '20px' }}/>}
                    { !show1 && <FontAwesomeIcon icon={faCaretDown} style={{ color: 'white', margin: '', fontSize: '20px' }}/>}
                </div>
                { show1 && <p className='text-light' style={{paddingRight: '22px'}}>We are different even among a huge registry of Meme tokens in the DeFi Space. 
                    Transparency, an experienced team of hardcore builders and innovation are our strongest suites.</p>}
            </div>
        
            <div className='mb-3'>
                <div className='d-flex' onClick={handleShow2} style={{display: 'flex', alignItems: '', justifyContent: 'space-between', width: '100%', cursor: 'pointer'}}>
                    <p className='text-light mb-0' style={{fontWeight: 'bold', fontSize: '20px', paddingRight: '10px'}}>What are the Utilities for Phoenix Token?</p>
                    { show2 && <FontAwesomeIcon icon={faCaretUp} style={{ color: 'white', margin: '', fontSize: '20px' }}/>}
                    { !show2 && <FontAwesomeIcon icon={faCaretDown} style={{ color: 'white', margin: '', fontSize: '20px' }}/>}
                </div>
                { show2 && <p className='text-light' style={{paddingRight: '22px'}}>Although Phoenix Token is a meme token. 
                    The token will serve as a tool to empower local businesses and push charity endeavors. Education and adoption is also a huge priority for us.</p>}
            </div>

            <div className=''>
                <div className='d-flex' onClick={handleShow3} style={{display: 'flex', alignItems: '', justifyContent: 'space-between', width: '100%', cursor: 'pointer'}}>
                    <p className='text-light mb-0' style={{fontWeight: 'bold', fontSize: '20px', paddingRight: '10px'}}>Who owns Phoenix Token ?</p>
                    { show3 && <FontAwesomeIcon icon={faCaretUp} style={{ color: 'white', margin: '', fontSize: '20px' }}/>}
                    { !show3 && <FontAwesomeIcon icon={faCaretDown} style={{ color: 'white', margin: '', fontSize: '20px' }}/>}
                </div>
                { show3 && <p className='text-light' style={{paddingRight: '22px'}}>The ownership of the token has been renounced and it is owned by the community.

                    Funding or contributions are voluntary and ultimately the community gets to decide the future of the project.</p>}
            </div>
            
        </div>
    </div>
</div>

</div>
        </div>
    )
}

function Socials (){

    const buttonRef = useRef(null);

    useEffect(() => {
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in view
            // Trigger the animation by adding the 'fade-in-on-scroll' class
            // setIsVisible(true);
            buttonRef.current.classList.add('fade-in-on-scroll');
            buttonRef.current.classList.remove('disp2');
            buttonRef.current.classList.add('disp');
            // Stop observing once the animation is triggered
            // observer.unobserve(entry.target);
          }
          else {
            // Element is out of view, remove the 'fade-in-on-scroll' class
            buttonRef.current.classList.remove('fade-in-on-scroll');
            buttonRef.current.classList.remove('disp');
            buttonRef.current.classList.add('disp2');
            // setIsVisible(false);
          }
        });
      };
  
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      };
  
      const observer = new IntersectionObserver(callback, options);
  
      if (buttonRef.current) {
        observer.observe(buttonRef.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, []);

    const handleTelegramClick = () => {
        window.open('https://t.me/PhoenixToken0', '_blank', 'noopener,noreferrer');
    };

    const handleTwitterClick = () => {
        window.open('https://twitter.com/PhoenixToken0', '_blank', 'noopener,noreferrer');
    };

    return(
        <div ref={buttonRef} id='socials'>
            <div className="py-5 container">

                <p className="" style={{
                    textAlign: "center",
                    // textShadow: "0px 18px 7px rgba(0, 0, 0, 0.70)",
                    fontFamily: "Zilla Slab",
                    fontSize: "32px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    background: "linear-gradient(180deg, #FFC700 0%, #FF7A00 100%)",
                    backgroundClip: "text",
                    webkitBackgroundClip: "text",
                    webkitTextFillColor: "transparent",
                    fontFamily: 'Poppins'
                }}>SOCIALS</p>

                <p className="text-center text-light" style={{ fontFamily: 'Poppins' }}>Our community of Immortals with the love for humanity grow stronger with each passing day. Please follow our social platforms to get the most up-to-date, accurate PHT information.</p>

                <div className="p-3 d-flex justify-content-center">
                    <div className="rounded-4 d-flex justify-content-space-around" style={{ width: '160px' }}>
                        <i style={{ color: 'white', margin: '0 auto', fontSize: '35px', cursor: 'pointer' }} onClick={handleTelegramClick} class="bi bi-telegram"></i>
                        <i style={{ color: 'white', margin: '0 auto', fontSize: '35px', cursor: 'pointer' }} onClick={handleTwitterClick} class="bi bi-twitter"></i>
                    </div>


                </div>
                </div>
        </div>
    )
}


function Welcome(){
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // For smooth scrolling
        });
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };


        return (
        <div className='container-fluid' style={{ background: "#250000", fontFamily: 'Poppins' }}>
            <button
                className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
                onClick={scrollToTop}
            >
                <i className="bi bi-arrow-up"></i>
            </button>
            
            {isOpen && <MobileNavOverlay isOpen={isOpen} setIsOpen={setIsOpen} />}
            
            <Navbar />
            <div className="d-none d-md-block" style={{ height: '10vh' }}></div>
            <TypedText />
            <About />
            <AboutBottom />
            <Tokenomics />
            <RoadMap />
            <Buy />
            <FAQ />
            <Socials />

        </div>

    );
}

export default Welcome;