import type { NextPage } from 'next'
import Head from 'next/head'
import { getData } from '../lib/data'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'

type HomeProps = { }

const Home = ({ found, environment }: HomeProps) => {

  const task1 = found ? '&#9989;' : '&#10060;'
  const result = useSWR('/api/health', fetch)
  const task2 = result.data && result.data.ok ? '&#9989;' : '&#10060;'
  const task3 = environment == 'production' ? '&#9989;' : '&#10060;'

  return (
    <div className={styles.container}>
      <Head>
        <title>Breakfix</title>
      </Head>

      <main className={styles.main}>
        <h2>Tasks completed</h2>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Completed?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>React Error</td>
              <td dangerouslySetInnerHTML={{__html: task1}} />
            </tr>
            <tr>
              <td>Healthcheck</td>
              <td dangerouslySetInnerHTML={{__html: task2}} />
            </tr>
            <tr>
              <td>Production Build</td>
              <td dangerouslySetInnerHTML={{__html: task3}} />
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const found = getData().found
  const environment = process.env.NODE_ENV
  return {
    found,
    environment
  }
}

export default Home
