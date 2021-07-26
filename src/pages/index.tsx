import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';

const animations = [
  `fade-up`,
  `fade-down`,
  `fade-left`,
  `fade-right`,
  `fade-up-right`,
  `fade-up-left`,
  `fade-down-right`,
  `fade-down-left`,
  `zoom-in`,
  `zoom-in-up`,
  `zoom-in-down`,
  `zoom-in-left`,
  `zoom-in-right`,
  `zoom-out`,
  `zoom-out-up`,
  `zoom-out-down`,
  `zoom-out-left`,
  `zoom-out-right`,
  `slide-up`,
  `slide-down`,
  `slide-right`,
  `slide-left`,
  `flip-left`,
  `flip-right`,
  `flip-up`,
  `flip-down`,
];
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} data-aos="fade-up" data-aos-delay="700">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p
          className={styles.description}
          data-aos="fade-in"
          data-aos-delay="1000"
        >
          Get started by editing{` `}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <p
          className={styles.description}
          data-aos="fade-in"
          data-aos-delay="1200"
        >
          This is not an official starter!
        </p>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs"
            className={styles.card}
            data-aos="fade-right"
            data-aos-delay="1300"
          >
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className={styles.card}
            data-aos="fade-left"
            data-aos-delay="1400"
          >
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
            data-aos="fade-right"
            data-aos-delay="1500"
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=typescript-nextjs-starter"
            className={styles.card}
            data-aos="fade-left"
            data-aos-delay="1600"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>

        <p
          className={styles.description}
          data-aos="fade-in"
          data-aos-delay="1700"
        >
          Animations Examples
        </p>

        <div className={styles.grid}>
          {animations.map((animation) => (
            <div className={styles.card} key={animation} data-aos={animation}>
              <h2>{animation}</h2>
              <code>{`<div data-aos=${animation}></div>`}</code>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=typescript-nextjs-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{` `}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
