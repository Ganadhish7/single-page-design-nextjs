import styles from "../pages/SEOServices.module.css";

const seoServices = [
  {
    title: "Customized SEO Services",
    description:
      "We develop tailored SEO plans for new websites as they consider a correct SEO website checklist, as well as strategy, to be critical for business.",
  },
  {
    title: "Mobile SEO Services",
    description:
      "We stress upon the mobile optimizations since the mobile phone use by search is highly prevalent. They are more able to score the best SEO rankings and can easily be viewed on mobile devices.",
  },
  {
    title: "On-Page SEO Services",
    description:
      "We offer on-page SEO services for content, photos, descriptions, and visibility. They follow the design principles for SEO-friendly websites in order to provide their customers with the best outcomes.",
  },
  {
    title: "Free Website Audit and Strategies",
    description:
      "We go beyond essential SEO website development to give out free website audits, analysis and SEO strategies for transparent business strategies. They target business owners in different industries, and these packages include local SEO and e-commerce services.",
  },
  {
    title: "Off-Page SEO Services",
    description:
      "We undertake off-page SEO for better rankings. They mainly specialize in handling backlink profiles. Their SEO analysts strive to ensure that their websites are listed on some of the popular sites in the industry of travel.",
  },
];

function SEOServicesData() {
  return (
    <div className={styles.seoServices_div}>
      <h2>SEO Services</h2>
      {seoServices.map((service) => (
        <div key={service.title}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SEOServicesData;
