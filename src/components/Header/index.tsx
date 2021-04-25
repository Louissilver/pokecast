import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';

import styles from './styles.module.scss';

export function Header({ toggleTheme, theme }) {

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  });

  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="Logo da Podcastr" />
        </a>
      </Link>

      <p>O melhor para você ouvir, sempre</p>
      <span>{currentDate}</span>
      <button type="button" onClick={() => toggleTheme()} className={styles.themeButton}>
        <img src={theme ? '/lightbulb_outline.svg' : '/lightbulb.svg'} alt={theme ? 'Ir para modo claro' : 'Ir para modo escuro'} />
        <span>{theme ? 'Ir para modo claro' : 'Ir para modo escuro'}</span>
      </button>
    </header>
  )
}