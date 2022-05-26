import "./wrapper.css";
import assets from "../assets";
import Button from "./Button";



export const  SectionWrapper = ({ title, description, showBtn, mockupImg, banner }) => {
  return (
    <div  className="banner">
        <div className="boxClass">
            <div className="descdiv w3-animate-fading">
            <h1 className="h1-text">{title}</h1>
            <p className="desctext">{description}</p>
               {showBtn && (
                   <Button 
                       assetUrl={assets.expo}
                       link="https://expo.dev/@bechemgaston/MyApp?serviceType=classic&distribution=expo-go"
                   />
                    )}
            </div>
        </div>
        <img src={mockupImg} alt="mockup" className="mockup-pic" />
  
    </div>
  )
}



  export const  SectionWrapper2 = ({ title, description, showBtn, mockupImg }) => {
    return (
      <div>
        <div className="banner2">
           <div className="banner2-div2">
            <img src={mockupImg} alt="mockup2" className="mockup-pic2 w3-animate-right" />
            <h1 className="h1-text2 w3-animate-left">{title}</h1>
            <p className="desctext2 w3-animate-right">{description}</p>
            </div>
        </div>  
      </div>
    )
  }


  export const  SectionWrapper3 = ({ title, description, showBtn, mockupImg }) => {
    return (
      <div>
        <div className="section3">
        <img src={mockupImg} alt="feature" className="mockup3" />
           <h1 className="h1-text3 w3-animate-left">{title}</h1>
            <p className="desctext3 w3-animate-right">{description}</p>
            </div>
      </div>
    )
  }


  
  export const  SectionWrapper4 = ({ title, description, showBtn, mockupImg }) => {
    return (
      <div className="wrap4">
      <div className="section4">
      <h1 className="h1-text4 w3-animate-left">{title}</h1>
        <p className="desctext4 w3-animate-right">{description}</p>
        <img src={mockupImg} alt="feature" className="mockup4" />
         
            </div>
      </div>
    )
  }