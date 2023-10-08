import styles from "./services.module.css";
import another from "../../img/another EARTH.png";
import weather from "../../img/cosmo weather.jpg";
import marsphoto from "../../img/MARS PHOTO.jpg";
import photoday from "../../img/photoapparat.png";
import sputnik from "../../img/sputnik.jpg";
export const Services = () => {
  return (
    <section className={styles.sect}>
      <div className={styles.cont}>
        <ul className={styles.list_services}>
          <li className={styles.li_service}>
            <div className={styles.card}>
              <img src={another} alt="comso" />
              <div className={styles.card__content}>
                <p className={styles.card__title}>Asteroids and comets</p>
                <p className={styles.card__description}>
                  Get up-to-date information and photos about objects near the
                  land.View graphs and interesting facts
                </p>
              </div>
            </div>
          </li>
          <li className={styles.li_service}>
            <div className={styles.card}>
              <img src={weather} alt="comso" />
              <div className={styles.card__content}>
                <p className={styles.card__title}>Space weather</p>
                <p className={styles.card__description}>
                Space weather data and statistics in space.Including solar flares
                </p>
              </div>
            </div>
          </li>
          <li className={styles.li_service}>
            <div className={styles.card}>
              <img src={marsphoto} alt="comso" />
              <div className={styles.card__content}>
                <p className={styles.card__title}>Mars today!</p>
                <p className={styles.card__description}>
                Get an exclusive photo of NASA's Mars rover on the surface of Mars today!
                </p>
              </div>
            </div>
          </li>
          <li className={styles.li_service}>
            <div className={styles.card}>
              <img src={photoday} alt="comso" />
              <div className={styles.card__content}>
                <p className={styles.card__title}>Space today!</p>
                <p className={styles.card__description}>
                Get a cosmic photo of the day in the field of Astrology
                </p>
              </div>
            </div>
          </li>
          <li className={styles.li_service}>
            <div className={styles.card}>
              <img src={sputnik} alt="comso" />
              <div className={styles.card__content}>
                <p className={styles.card__title}>The Earth from space</p>
                <p className={styles.card__description}>
                Here you can see what the earth looks like from space. How huge and beautiful it is from the heights of outer space.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
