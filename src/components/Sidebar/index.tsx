import { PencilLine } from "phosphor-react";

import styles from "./styles.module.css";
import { Avatar } from "../Avatar";

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
				alt="Imagem de capa de perfil"
			/>

			<div className={styles.profile}>
				<Avatar hasBorder src="https://github.com/userthiago.png" />
				<strong>Thiago Santos</strong>
				<span>Web Developer</span>
			</div>

			<footer>
				<a href="#">
					<PencilLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}
