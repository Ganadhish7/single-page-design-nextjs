import styles from "../pages/DigitalServices.module.css";

const digitalServices = [
  {
    logo: "./digital-services/software.png",
    title: "Website Development",
    description:
      "We specialize in responsive website development, ensuring optimal performance across various devices.",
  },
  {
    logo: "./digital-services/code.png",
    title: "App Development",
    description:
      "We specialize in creating superior apps for diverse sectors such as e-commerce, education, and transportation.",
  },
  {
    logo: "./digital-services/cloud-computing.png",
    title: "Software Development",
    description:
      " We specialize in tailored solutions ensuring business growth and efficiency by providing superior software.",
  },
  {
    logo: "./digital-services/marketing 2.png",
    title: "UI/UX Design",
    description:
      " We specialize in creating exemplary designs prioritizing user-friendly concepts and aesthetically appealing interfaces.",
  },
  {
    logo: "./digital-services/marketing 1.png",
    title: "Digital Marketing",
    description:
      "We specialize in tailored digital marketing solutions and ensure effective online marketing strategies.",
  },
  {
    logo: "./digital-services/seo.png",
    title: "SEO Optimization",
    description:
      "We ensure optimal website traffic by addressing factors such as user experience, accessibility, product details, and monitoring target audience.",
  },
];

function DigitalServicesData() {
  return (
    <div className={styles.data_div}>
      {digitalServices.map((service) => (
        <div className={styles.digital_service_data} key={service.title}>
          <div className={styles.digital_service_titleLogo}>
            <img src={service.logo} alt={service.title} />
            <h3>{service.title}</h3>
          </div>
          <p>{service.description}</p>
          <div className={styles.right_arrow}>
            <img src="./digital-services/iconamoon_arrow-right.png" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default DigitalServicesData;
