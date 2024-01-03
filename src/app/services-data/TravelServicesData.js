import styles from "../pages/TravelServices.module.css";

const travelServices = [
  {
    logo: "./travel-services/calendar.png",
    title: "Booking Automation",
    description:
      "Check out our Booking Automation for easy and hassle-free reservations. It simplifies the process and makes our platform user-friendly.",
  },
  {
    logo: "./travel-services/first-aid-kit.png",
    title: "First Aid Medical Kit",
    description:
      "At Plankaroo, your safety and peace of mind are our top priority. We provide essential health care services, like First Aid Medical Kits, to equip you for any circumstance and confident travel.",
  },
  {
    logo: "./travel-services/tracking.png",
    title: "Tracking Feature",
    description:
      "You understand the importance of staying connected with family during your visit. Plankaroo.com tracks loved ones for peace of mind and allows you to fully enjoy your journey.",
  },
  {
    logo: "./travel-services/luggage.png",
    title: "Customized Tour Packages",
    description:
      "Enjoy our custom tour packages. Choose destinations, activities, accommodations, restaurants, vehicles, and tour guides for a personalized itinerary. We design packages for every traveler.",
  },
  {
    logo: "./travel-services/info.png",
    title: "Information Automation",
    description:
      "Plankaroo.com's Info Automation ensures understanding of cultural activities in user's language. We use 3D map for precise details, making travels more exciting.",
  },
  {
    logo: "./travel-services/gift-list.png",
    title: "Surprise Plans",
    description:
      "Surprise Plans at Plankaroo.com for an enhanced trip experience. Special packages and customized surprises to elevate your journey. Let us add spice to your travels.",
  },
];

function TravelServicesData() {
  return (
    <div className={styles.travel_services_data_div}>
      {travelServices.map((service) => (
        <div className={styles.travel_services} key={service.title}>
          <img src={service.logo} alt={service.title} />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TravelServicesData;
