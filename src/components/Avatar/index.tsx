import styles from "./styles.module.css";

export function Avatar({
	src,
	hasBorder,
}: {
	src: string;
	hasBorder?: boolean;
}) {
	return (
		<img
			className={hasBorder ? styles.avatarWithBorder : styles.avatar}
			src={src}
		/>
	);
}
