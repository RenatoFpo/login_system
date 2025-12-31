import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a href="/home">Início</a>
                <h2>Olá, Aluno.</h2>
                <div className={styles.menu}>
              <ul className={styles.ul}>
                <li className={styles.li}><a className={styles.title} href="/minhasala">Minha Sala</a></li>
                <li className={styles.li}><a href="/home">Meu Boletim</a></li>
                <li className={styles.li}><a href="/"></a>Frequência</li>
              </ul>
            </div>
           </nav>
        </header>
        )
    
}