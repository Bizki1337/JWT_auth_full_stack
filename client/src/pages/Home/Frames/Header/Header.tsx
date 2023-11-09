import Button from 'library/components/Button'

import { ContainerProps } from './HeaderContainer'

import styles from './header.module.scss'

const Header = ({
	logout
}: ContainerProps) => {
	return (
		<div className={styles.wrapper}>
			<div>some logo</div>
			<Button
				onClick={() => logout()}
				text='Выйти'
			/>
		</div>
	)
}

export default Header