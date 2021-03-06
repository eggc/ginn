import React from 'react'
import styles from "./page.module.css"

export default ({children, onClick, header, fullWidth}) => {
  const renderHeader = () => (
    <div className={styles.pageHeader}>{header}</div>
  )

  return (
    <div className={styles.pageBackground} onClick={onClick}>
      <div className={styles.pageBackgroundShadow}>
        <div className={styles.pageScrollable}>
          <div className={fullWidth ? '' : styles.pageContainer}>
            {header && renderHeader()}
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
