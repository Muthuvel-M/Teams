import { useRef, useEffect } from "react";
import "./App.css";
import vanakam from "../src/assets/vanakam.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import back from "../src/assets/Frame.svg"

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const imgRef = useRef(null);
  const imgsRef = useRef(null);


  useEffect(() => {
    const el = imgRef.current;
    const e1 = imgsRef.current;
    gsap.fromTo(e1,{
      rotate:-90,
      x:0,
      y:0,
    },{
      x:0,
      y:150,
      backgroundColor:"green",
      duration:1,
      repeat:-1,
      yoyo:true
    })
    
    // Animate Image
    gsap.fromTo(
      el,
      {
        x: 0,
        y: 0,
        opacity:0
      },
      {
        x: 100,
        y: 0,
        opacity:1,
        scrollTrigger: {
          trigger: el,
          // markers: true,
          start: "top 100%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

    // Animate h1
    gsap.fromTo(
      "h1",
      {
        x: 800,
        y:300,
      },
      {
        x: 500,
        y: 300,
        duration: 5,
        scrollTrigger: {
          trigger: "h1",
          // markers: true,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          yoyo: true,
        },
      }
    );

    //muthu
    const text = document.querySelector(".intro");
    text.innerHTML = text.textContent
      .split("")
      .map((letter) => `<span>${letter}</span>`)
      .join("");

    gsap.from(".intro span", {
      scrollTrigger: {
        trigger: ".intro",
        start: "top 80%",
        end: "top 40%",
        toggleActions: "play none none reverse",
        scrub: true,
        // markers:true,
      },
      x: 0,
      y: -400,
      opacity: 0,
      duration: 2.5,
      stagger: 0.05,
      ease: "bounce.inOut",
    });
    gsap.fromTo(
      ".Today",
      {
        x: -1000,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "bounce",
        yoyo: true,
        scrollTrigger: {
          trigger: ".Today",
          scrub: true,
          // markers: true,
          start: "top 70%",
          end: "top 30%",
        },
      }
    );
    gsap.fromTo(
      ".update",
      {
        x: 800,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "bounce",
        yoyo: true,
        scrollTrigger: {
          trigger: ".update",
          scrub: true,
          // markers: true,
          start: "top 60%",
          end: "top 20%",
        },
      }
    );
    gsap.fromTo(".learning",{
      y:-100,
      x:-400,
      opacity:0,
    },{
      y:0,
      x:0,
      opacity:1,
      duration:4,
      scrollTrigger:{
        trigger:".learning",
        scrub:true,
        //markers:true,
        start:"top 80%",
        end:"top 40%",


      }
    }
  )

  }, []);

  return (
    <>
      <div className="container">
        <div className="scroll">
          Scroll me
          <img src={back} alt="" ref={imgsRef} className="img"/>
        </div>
        <div className="boxs">
          <h1>Hi Team</h1>
          <img src={vanakam} alt="Vanakam" ref={imgRef} />
          <h2 className="intro">It's Me {""} Muthu</h2>
          <div className="update">
            <p className="Today">Today's</p>
            <p className="update"> Update</p>
          </div>
          <div className="learning">
            Learned This Scroll Trigger Effect in the GSAP
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
