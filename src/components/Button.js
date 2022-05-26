import "./button.css";

const Button = ({ assetUrl, link }) => {
  return (
    <div className='btn-black'
      onClick={() => window.open(link, "_blank")}
    >
    <button className="expobtn">View on Expo Store</button>
    </div>
  )
}

export default Button