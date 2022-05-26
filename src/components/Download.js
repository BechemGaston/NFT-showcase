import "./download.css";
import assets from "../assets";

const Download = () => {
  return (
    <>
    <h1 className="text main-text">Download the Source Code</h1>
      <p  className="text main-text2 ">Download the full Source Code on Github</p>
    <div className="footer">
      
        <div className="innerFooter">
         <a href="https://github.com/BechemGaston/NFT-App.git" target="_blank" rel="noreferrer noopener">
         <button className="footerButton w3-animate-left">Source Code</button></a>
        </div>
        <img src={assets.scene} alt="footer" className="footerImg w3-animate-right" />
    </div>
    <div  className="end">
      <p>Made with 💖 by <b>gastonBechem</b></p>
    </div>
    </>
  )
}

export default Download