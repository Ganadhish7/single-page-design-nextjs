import styles from "./page.module.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import OurStory from "./pages/OurStory";
import DigitalServices from "./pages/DigitalServices";
import SEOServices from "./pages/SEOServices";
import PlacementServices from "./pages/PlacementServices";
import TravelServices from "./pages/TravelServices";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Homepage />
      <OurStory />
      <DigitalServices />
      <SEOServices />
      <PlacementServices />
      <TravelServices />
    </main>
  );
}
