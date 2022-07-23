import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

const Logo:FC = () => {
  return (
    <Link to='/' className={styles.logoCinema}>
      <img src={'http://localhost:3000/logo-cinema.svg'} alt="Logo Cinema" width={285} height={50} draggable={false}/>
    </Link>
  )
}

export default Logo