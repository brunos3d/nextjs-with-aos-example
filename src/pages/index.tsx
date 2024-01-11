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
    <>
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
            <a href="https://nextjs.org">Nikat</a>
          </h1>
          <p>Customer Engagement and beyond</p>
{/* 
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
          </p> */}

          <div className={styles.grid}>
            {animations.map((animation) => (
              <div className={styles.card} key={animation} data-aos={animation}>
                <h2>{animation}</h2>
                <code>{`<div data-aos=${animation}></div>`}</code>
              </div>
            ))}
          </div>
        </main>

        <div className='flex text-center'>
          <div>
            <span data-aos="zoom-in" data-aos-delay="200"><svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zm-312 8v64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80-96V280c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 64v96c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg></span>
            <h2 data-aos="flip-up" data-aos-delay="200" >Hyper Personalised Marketing</h2>
            <p className='features-desc' data-aos="zoom-in-up" data-aos-delay="500">
              Create personalized campaigns for your customers using our robust
              camapign creating tool
            </p>
          </div>
          <div>
            <span data-aos="zoom-in" data-aos-delay="200"><svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 640 512"><path d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM25.9 233.4C29.3 191.9 64 160 105.6 160h44.8c27 0 51 13.4 65.5 34.1c-2.7 1.9-5.2 4-7.5 6.3l-64 64c-21.9 21.9-21.9 57.3 0 79.2L192 391.2V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V348.3c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zM448 64a64 64 0 1 1 128 0A64 64 0 1 1 448 64zM431.6 200.4c-2.3-2.3-4.9-4.4-7.5-6.3c14.5-20.7 38.6-34.1 65.5-34.1h44.8c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6V464c0 26.5-21.5 48-48 48H496c-26.5 0-48-21.5-48-48V391.2l47.6-47.6c21.9-21.9 21.9-57.3 0-79.2l-64-64zM272 240v32h96V240c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l64 64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V336H272v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2z"/></svg></span>
            <h2 data-aos="flip-up" data-aos-delay="200">Proximity Solutions</h2>
            <p className='features-desc' data-aos="zoom-in-up" data-aos-delay="500">
              Use our customised GPS and Bluetooth Low Energy hardware solutions to give proximity based alerts to your customers
            </p>
          </div>
          <div>
            <span data-aos="zoom-in" data-aos-delay="200"><svg xmlns="http://www.w3.org/2000/svg" height="28" width="32" viewBox="0 0 640 512"><path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg></span>
            <h2 data-aos="flip-up" data-aos-delay="200">IoT Based Hardware Solutions</h2>
            <p className='features-desc' data-aos="zoom-in-up" data-aos-delay="500">
              Use our proprietary Bluetooth & IoT based hardware solutions to monitor & manage your store and customers
            </p>
          </div>
        </div>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=typescript-nextjs-starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{` `}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
}
