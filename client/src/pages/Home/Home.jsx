import styles from "./home.module.css";
import HomeMarquee from "@components/HomeMarquee/HomeMarquee";
import Projects from "@components/Projects/Projects";

export default function Home() {
  return (
    <>
      <main className={ styles.container } >
        <HomeMarquee />
        <Projects/>
      </main>
    </>
  );
}
