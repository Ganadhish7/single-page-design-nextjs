import PlacementServicesData from "../services-data/PlacementServicesData";
import styles from "./PlacementServices.module.css";

function PlacementServices() {
  return (
    <>
      <div className={styles.placement_services_div}>
        <h1>Stackkaroo&rsquo;s Talent Hiring & Job Placement Services</h1>
        <p>
          We are a talent searching platform that redesigns how companies hire
          talents. It is a cost-effective solution for industries. <br></br>We
          also provide global job opportunities with good salaries, support, and
          professional development.
        </p>
      </div>
      <PlacementServicesData />
    </>
  );
}

export default PlacementServices;
