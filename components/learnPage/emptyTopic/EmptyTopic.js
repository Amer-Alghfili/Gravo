import styles from "./EmptyTopic.module.css";
const img = require("../../../img/bored.svg");
const imgSrc = img.default.src;

export default function EmptyTopic() {
  console.log(imgSrc);
  return (
    <div className={styles.topic__notFound}>
      <div className={styles.notFound__imgContainer}>
        <img
          src={imgSrc}
          alt="A student who did not find any content to learn"
        />
      </div>
      <h2 className={styles.notFound__title}>
        Unfortunately the topic you are looking for is not found 😢
      </h2>
    </div>
  );
}
