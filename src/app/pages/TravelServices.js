import TravelServicesData from "../services-data/TravelServicesData";
import styles from "./TravelServices.module.css";

function TravelServices() {
  return (
    <>
      <div className={styles.main_div}>
        <div className={styles.trip_div}>
          <h1>Planning for a Trip?</h1>
          <p className={styles.trip_div_p1}>
            India&rsquo;s no.1 Tour & Travel Operator Agency and your source for
            the most personalized travel experience in India, Plankaroo.com
          </p>
          <p className={styles.trip_div_p2}>
            Our platform aims to be a one-stop shop for memorable experiences
            for you. Plankaroo.com offers travel bookings, sightseeing,
            restaurant reservations, and tour guides. We help travelers make
            custom trips to India, fulfilling travel dreams.
          </p>
        </div>
        <div className={styles.occasion_div}>
          <h1>Planning for a Special Occasion</h1>
          <p className={styles.occasion_div_p1}>
            Go straight to Plankaroo.com, the number one Event Organizer
          </p>
          <p className={styles.occasion_div_p2}>
            Through our special plans, we&rsquo;ll cater to all your event
            needs, ensuring a memorable day for your loved ones. Whatever you
            wish to celebrate, Plankaroo.com will make it unforgettable. Our
            team of specialists will prepare a tailored event, so you can relax
            and enjoy the party. Trust Plankaroo.com to fulfill your dreams and
            create lasting memories.
          </p>
        </div>
      </div>
      <div className={styles.tours_div}>
        <h1>Plankaroo Tours & Travels Services</h1>
        <p>
          We Provide the Best Class Services to make your vacation fun and
          memorable
        </p>
      </div>
      <TravelServicesData />
    </>
  );
}

export default TravelServices;
