import styles from "./named.module.css";
import NASA from "../../img/NASA.png";
import LOGOTIP from '../../img/logotip.png'
export const Named = () => {
  return (
    <section className={styles.sect}>
      <div className={styles.cont}>
        <div className={styles.wrap_cont_text}>
          <img src={NASA} alt="nasa-logotipe" className={styles.img} />
          <h1 className={styles.name_text}>NASA</h1>
        </div>
        <div className={styles.about_stats_cont}>
          <h2 className={styles.name_cosmostats}>COSMO STATS</h2>
          <div className={styles.wrap_img_about_cont}>
            <img src={LOGOTIP} alt="logotip" className={styles.img_logo}/>
            <h3 className={styles.about_text}>
              The site created on the basis of API from <span>NASA</span>.This site serves as
              an assistant-guide on space statistics and tracking events outside
              the earth.Here you can find interesting facts and pictures made in
              space.
            </h3>
          </div>
          <h2 className={styles.text_have_fun}>Have fun using it!</h2>
        </div>
      </div>
    </section>
  );
};
