import styles from "../styles/BannerHome.module.css";
export default function BannerHomepage() {
  return (
    <>
      <div className={styles.banner_div}>
        <h1>
          It's now safe to <strong className="text-secondary">Crave!</strong>
        </h1>
      </div>
    </>
  );
}
