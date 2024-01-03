import DigitalServicesData from "../services-data/DigitalServicesData";
import styles from "./DigitalServices.module.css";

function DigitalServices() {
  return (
    <div className={styles.main_div}>
      <h2>Stackkaroo Digital Services</h2>
      <p>
        We excel with reliability, innovation and customer-centric approach for
        our quality products. <br></br> Our dedicated team ensures that the
        solutions provided are dependable and long-term
      </p>
      <DigitalServicesData />
    </div>
  );
}

export default DigitalServices;
