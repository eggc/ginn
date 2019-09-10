import React from 'react';
import Page from '../page';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import styles from './root.module.css';

export default ({history}) => {
  const onClick = () => {
    history.push("/game/setup")
  }
  return (
    <Page>
      <div className={styles.container}>
        <div className={styles.titleTextContainer}>
          <h1 className={styles.titleText}>
            <Typography>不朽に踊る銀の街</Typography>
          </h1>
        </div>
      </div>
      <Button fullWidth className={styles.startButton} onClick={onClick}>はじめる</Button>
    </Page>
  );
}
