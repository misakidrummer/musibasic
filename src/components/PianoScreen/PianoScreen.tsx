import styles from "./PianoScreen.module.scss";

export const PianoComponent = () => {
  return (
    <article className={styles.piano_container}>
      <section
        className={styles.piano_container__left}
        aria-labelledby="piano-title"
      >
        <header>
          <h1 id="piano-title">Piano</h1>
          <div className={styles.logo}></div>
        </header>
        <h2>
          Lorem ipsum dolor <span>1#</span> sit amet consectetur
        </h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          dolores illum! Rem, culpa quia. Laudantium earum blanditiis maiores,
          magni, dicta ea, iure ad autem adipisci reprehenderit voluptatibus
          est. A, praesentium.
        </p>
      </section>

      <div className={styles.piano_container__right}></div>
    </article>
  );
};
