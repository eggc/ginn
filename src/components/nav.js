import React from 'react'
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography'
import styles from "./nav.module.css"

export default ({resourceName, paths}) => {
  const rootPath = (resourceName ? "/" + resourceName : "")

  return (
    <Typography component="div">
      <ul className={styles.navContainer}>
        <li className={styles.navItem}>{resourceName}</li>
        <li className={styles.navItem}><Link to={rootPath}>/root</Link></li>
        {paths.map((path, i)=>{
          const to = rootPath + "/" + path
          return <li className={styles.navItem} key={i}><Link to={to}>/{path}</Link></li>
        })}
      </ul>
    </Typography>
  )
}
