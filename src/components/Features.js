import assets from "../assets";
import "./features.css";



const Features = () => {
  return (
    <div className="features-section">
        <div className="subSection">
            <div>
              <h1 className="h1-text">Technologies</h1>
              <p className="desctext">ProNef has been developed using a cross-platform technology, React Native</p>
            </div>
            <div className="card">
              <img src={assets.react} alt="react" style={{ width: "50%" }} />
              <div className="container">
                <p className="p-text"><b>React Native</b></p>
              </div>

              <img src={assets.javascript} alt="react" style={{ width: "50%" }} />
              <div className="container">
                <p className="p-text"><b>Javascript</b></p>
              </div>
            </div>
        </div>
    </div>
    
  )
}

export default Features