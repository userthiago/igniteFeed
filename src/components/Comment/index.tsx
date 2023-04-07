import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./styles.module.css";

export function Comment() {
	return (
		<div className={styles.comment}>
			<img
				className={styles.avatar}
				src="https://github.com/userthiago.png"
				alt="Imagem de perfil de Thiago Santos"
			/>
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Thiago Santos</strong>
							<time
								title="07 de Abril às 08:13h"
								dateTime="2023-04-07 08:13:30"
							>
								Cerca de 1h atrás
							</time>
						</div>
						<button title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>
					<p>Muito bom Devon, parabéns!! 👏👏</p>
				</div>
				<footer>
					<button>
						<ThumbsUp /> Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
