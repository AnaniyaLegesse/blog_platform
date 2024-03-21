import styles from "./homepage.module.css";



export default function Home() {
  return (
    <div className={styles.container}>
      <div>Featured</div>
      <div>Catagorilist</div>
      
      <div className={styles.content}>
        <div>cardList</div>
        <div>menu</div>
      </div>
    </div>
  );
}
