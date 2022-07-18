import { FC } from 'react'
import { IMenu } from './Menu.interface'
import MenuItem from './MenuItem'
import styles from './Menu.module.scss'
interface MenuProps {
  menu: IMenu
}

const Menu:FC<MenuProps> = ({menu: {items, title}}) => {
  return (
    <div className={styles.menu}>
      <div className={styles.heading}>{title}</div>
      <ul className={styles.ul}>
        {items.map(item => (
          <MenuItem  menuItem={item} key={item.link}/>
        ))}
      </ul>
    </div>
  )
}

export default Menu