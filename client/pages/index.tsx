import type { NextPage } from 'next'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href="/demo"><button>SWR demo</button></Link>
    </div>
  )
}

export default Home
