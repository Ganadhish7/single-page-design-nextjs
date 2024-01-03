import styles from "../pages/PlacementServices.module.css";
const placementServices = [
  {
    logo: "./placement-services/locations.png",
    title: "Unleashing Top Talent Globally",
    description:
      "We offer 5% top talents and supports companies hiring from various time zones.",
  },
  {
    logo: "./placement-services/promotion.png",
    title: "Securing Success",
    description:
      "The company has a 30-day replacement policy and high retention rate due to competitive payouts and strong brand reputation.",
  },
  {
    logo: "./placement-services/pin.png",
    title: "Beyond Borders",
    description: "We provide both, flexible full-time and part-time jobs",
  },
  {
    logo: "./placement-services/badge.png",
    title: "End-to-End Excellence",
    description:
      "In our hiring process, a job description is shared, matches are reviewed, interviews are conducted, and post-hiring support is provided by us.",
  },
  {
    logo: "./placement-services/performance.png",
    title: "Efficiency Redefined",
    description:
      "The platform enables fast hiring without waiting for candidates to reply. We offer affordable alternatives to traditional recruitment methods and provides quality talent.",
  },
  {
    logo: "./placement-services/commitment.png",
    title: "Simplified Contracts Satisfied Partnerships",
    description:
      "The contracts are good and satisfy both parties. We save time and money by providing remote onboarding and IT support.",
  },
];

function PlacementServicesData() {
  return (
    <div className={styles.placement_services_data_div}>
      {placementServices.map((service) => (
        <div key={service.title}>
          <div className={styles.placement_services_cards}>
            <img src={service.logo} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlacementServicesData;
