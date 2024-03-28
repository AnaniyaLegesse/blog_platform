import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey,</b> let's Discover new stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>All That Glitters Isn't Gold: Unveiling the Pacific's Hidden Gems</h1>
          <p className={styles.postDesc}>
          Dive deeper than a submarine and explore the dazzling, bizarre, and downright weird creatures lurking beneath the Pacific waves. This blog isn't your average fish-fact fest. We're plunging into the abyss to uncover the Pacific Ocean's most fascinating residents. From bioluminescent wonders that light up the inky depths to monstrous predators with prehistoric grins, get ready to be amazed (and maybe a little creeped out) by the Pacific's hidden gems!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
