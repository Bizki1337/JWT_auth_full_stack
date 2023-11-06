import Button from 'library/components/Button'

import { ContainerProps } from './HomeContainer'

import styles from './home.module.scss'

const Home = ({
}: ContainerProps) => {
	return (
		<div className={styles.wrapper}>
			Home
		</div>
	)
}

export default Home