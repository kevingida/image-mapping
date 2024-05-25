import styles from "./page.module.css";
import ImagesMapper from "@/components/image-mapper/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <ImagesMapper />
    </main>
  );
}
