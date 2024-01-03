import styles from "./OurStory.module.css";

function OurStory() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.story_text}>
          <h1>Our Story</h1>
          <div>
            <p>
              Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan
              Mishra bring their extensive experience to the forefront as
              industry veterans. Our team is fueled by innovation, continually
              striving to exceed customer expectations.
            </p>
            <p>
              Operating from our registered office in Agartala Sadar, Tripura
              (W), our company is officially registered with the Corporate
              Identification Number (CIN). Our active status and an authorized
              share capital of Rs 10.00 lac are a source of pride.
            </p>
          </div>
          <button>Get Estimated Project Cost</button>
        </div>
        <img src="ourstory-cover.png" />
      </main>
      <WhyUs />
    </>
  );
}

const specialities = [
  {
    logoSrc: "./services-logo/user-centric.png",
    text: "User-Centric Approach",
  },
  {
    logoSrc: "./services-logo/customer-satisfaction.png",
    text: "Customer Satisfaction",
  },
  {
    logoSrc: "./services-logo/integratin-feedback.png",
    text: "Integrating Feedback",
  },
  {
    logoSrc: "./services-logo/high-quality.png",
    text: "High Quality Products",
  },
  {
    logoSrc: "./services-logo/on-time.png",
    text: "On-Time Product Delivery",
  },
];

function WhyUs() {
  return (
    <div className={styles.qualities}>
      <h2>Why Choose Us?</h2>
      <p>
        We excel with reliability, innovation and customer-centric approach for
        our quality products.<br></br>Our dedicated team ensures that the
        solutions provided are dependable and long-term
      </p>
      <div className={styles.styleCards}>
        {specialities.map((quality) => (
          <div className={styles.qualityCards} key={quality.text}>
            <div className={styles.qualityLogo}>
              <img className={styles.logo} src={quality.logoSrc} />
            </div>
            <p>{quality.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurStory;
