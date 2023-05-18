
import Layout from "components/util/Layout"
// chakra

//
import Hero from "components/Hero"
import Intro from "components/Intro"
import KickAnimation from "components/KickAnimation"
import Donate from "components/Donate"
import RollUp from "components/RollUp"
import Biking from "components/Biking"
import Footer from "components/Footer"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Intro />
      <KickAnimation />
      <Donate />
      <RollUp />
      <Biking />
      <Footer />
    </Layout>
  )
}
