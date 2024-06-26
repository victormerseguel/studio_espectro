import Image from "next/image";
import styles from "./Sentence.module.css";
import DivisorDown from "./DivisorDown";

const Sentence = () => {
  return (
    <section className={styles.container}>
      <p className={styles.p1}>
        Se és do tipo de pessoa que acha
        <br />
        que ginásios não são para ti,
      </p>
      <p className={styles.p2}>
        convidamo-te a conhecer
        <br />
        algo diferente!
      </p>
      <DivisorDown />
    </section>
  );
};

export default Sentence;
