"use client";
import Image from "next/image";
import styles from "app/sass/global-error.module.sass";

export default function GlobalError({ error, reset }: ErrorPageProps) {
  return (
    <main className={styles.Error}>
      <h1 className={styles.Error__title}>Ha ocurrido un error</h1>
      <Image src="/images/error.png" width={500} height={500} alt="Error" />
      <p className={styles.Error__message}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam impedit
        optio hic, exercitationem laudantium quam necessitatibus explicabo nulla
        at nihil doloremque ea voluptatum? Veniam porro quasi earum laudantium.
        Quae, at!
      </p>
      <button onClick={reset} className={styles.Error__button}>
        Volver a intentar
      </button>
    </main>
  );
}
