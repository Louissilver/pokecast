import '../styles/global.scss';
import styles from '../styles/app.module.scss';

import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { PlayerContextProvider } from '../contexts/PlayerContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <PlayerContextProvider>
      <div className={styles.wrapper + (isDarkMode ? ' dark' : ' light')} >
        <main>
          <Header toggleTheme={toggleTheme} theme={isDarkMode} />
          <Component {...pageProps} />
        </main>
        <Player />
      </div >
    </PlayerContextProvider>
  )
}

export default MyApp
