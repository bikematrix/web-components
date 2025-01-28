import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <Link
            href="/collection"
            className={styles.primary}
            rel="noopener noreferrer"
          >
            Shop All Brake Pads
          </Link>
        </div>
      </main>
    </div>
  );
}
