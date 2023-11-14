import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/create.module.css'
import Header from '../components/header'
import Cal from '../components/calendar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Make tasks</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Header />
        <div className={styles.description}>
            <form>
                <div>{/*date*/}
                    <div>
                        <Cal />
                    </div>
                </div>
                <div>{/*viss parejais*/}
                    <div>

                    </div>
                </div>
            </form>
        </div>
      </main>
    </>
  )
}