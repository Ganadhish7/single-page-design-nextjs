import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.text_container}>
          <h2 className={styles.text_container_title}>
            Diversifying the Designs of{" "}
            <span>
              {" "}
              <br></br>Digital World
            </span>
          </h2>
          <div className={styles.text_container_text}>
            <p>
              Explorogent International Services Private Limited (EISPL) is one
              of the most famous companies in the sector of Web and Mobile
              Development. In the market, EISPL has a strong presence in
              providing quality services to its clients.{" "}
            </p>
            <p>
              EISPL is convinced that one should diversify the offering, given
              the changing needs of the clients. That is why we engage in
              multiple projects and activities. We also possess knowledge in web
              development, app development, UI/UX design, as well as digital
              marketing.
            </p>
          </div>
          <div className={styles.btn_container}>
            <button className={styles.btn}>
              <img className={styles.btn_call} src="call.png" />
              <span>Book a Call</span>
            </button>
          </div>
        </div>
        <div className={styles.image_container}>
          <img
            className={styles.image_properties}
            src="removebg-preview 1.png"
          />
        </div>
      </main>
      <Services />
    </>
  );
}

function Services() {
  return (
    <div className={styles.services}>
      <h3>
        In the realm of digital solutions<br></br> we offer expertise in
      </h3>
      <div className={styles.services_text}>
        <button>Website Development</button>
        <button>App Development</button>
        <button>UI/UX Design</button>
        <button>Digital Marketing</button>
        <button>SEO Optimization</button>
      </div>
      <h3>
        showcasing our proficiency across various facets of the digital platform
      </h3>
      <div className={styles.stay_ahead_title}>
        <h1>
          Stay Ahead! <br></br>
          Launch Your Next Project with Stackkaroo
        </h1>
      </div>
    </div>
  );
}

export default Homepage;
