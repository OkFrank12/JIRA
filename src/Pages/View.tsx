import { GlobalContext } from "../Global/GlobalProvider";
import { useContext } from "react"
import Header from "../Components/Block/Header";
import Hero from "../Components/Block/Landing/Hero";
import Catchup from "../Components/Block/Landing/Catchup";
import NewIntro from "../Components/Block/Landing/NewIntro";
import NextIntro from "../Components/Block/Landing/NextIntro";
import Relationships from "../Components/Block/Landing/Relationships";
import JiraDevs from "../Components/Block/Landing/JiraDevs";
import JiraPurpose from "../Components/Block/Landing/JiraPurpose";
import Conclusion from "../Components/Block/Landing/Conclusion";
import Footer from "../Components/Block/Footer";


const View = () => {
  const {userState}: any = useContext(GlobalContext)
  console.log("userState: ", userState)
  return (
    <div>
      <Header />
      <Hero />
      <Catchup />
      <NewIntro />
       <NextIntro />
      <Relationships />
      <JiraDevs />
      <JiraPurpose />
      <Conclusion />
      <Footer />
    </div>
  );
};

export default View;
