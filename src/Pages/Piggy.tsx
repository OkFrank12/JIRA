
import Hero from '../Components/Block/Piggy/Hero'
import Security from '../Components/Block/Piggy/Security'
import Deploys from '../Components/Block/Piggy/Deploys'
import Invest from '../Components/Block/Piggy/Invest'
import Customer from '../Components/Block/Piggy/Customer'
import Millions from '../Components/Block/Piggy/Millions'
import Shorts from '../Components/Block/Piggy/Shorts'
import Footer from '../Components/Block/Piggy/Footer'
import Header from '../Components/Block/Piggy/Header'
import HomeScreen from './Home/HomeScreen'


const Piggy = () => {
  return (
    <div>
      <Header />
      <HomeScreen />
      <Hero />
      <Security />
      <Deploys />
      <Invest />
      <Customer />
      <Millions />
      <Shorts />
      <Footer />
    </div>
  )
}

export default Piggy
