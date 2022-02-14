import HeroNav from "../hero/heroNav/HeroNav";
import styles from "../Header.module.css";
import HeroMain from "../hero/heroMain/HeroMain";
export default function Header() {
  return (
    <header className={styles.mainHeader}>
      <HeroNav />
      <HeroMain />
    </header>
  );
}
