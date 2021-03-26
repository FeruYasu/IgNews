import { SignInButton } from '../SignInButton';
import style from './styles.module.scss';
import { ActiveLink } from '../ActiveLink'

export function Header() {
  return (
    <header className={style.headerContainer}>
      <div className={style.headerContent}>
        <img src="/images/logo.svg" alt="ig.news"/>
        <nav>
          <ActiveLink href="/" activeClassName={style.active}>
            <a className={style.active}>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" prefetch  activeClassName={style.active}>
            <a >Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}