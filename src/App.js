
import { Features, Download, SectionWrapper, SectionWrapper2, SectionWrapper3, SectionWrapper4  } from "./components";
import assets from "./assets";

const  App = () => {
  return (
    <>
      <SectionWrapper 
        title="Your own store of Nifty NFTs. 
        Start selling & Growing"
        description="Buy, Store, Collect NFTs, exchange and earn
        crypto. Join 25+ million people using ProNef Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
         />

      <SectionWrapper2 
        title="Smart User Interface Marketplace"
        description="Experience the Smooth UI of ProNef NFT Marketplace"
        mockupImg={assets.homeCards}

         />

         <Features />

        <SectionWrapper3 
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users' devices.
        You can easily get your app into people's hands."
        mockupImg={assets.feature}

         />

        <SectionWrapper4 
        title="Creative way to showcase the Store"
        description="The app contains two screens. The first Screen list all NFTs, while the second shows details of
         a specific NFT"
        showBtn
        mockupImg={assets.mockup}
        banner="banner"
         />

         <Download />


    </>
  )
}

export default App;