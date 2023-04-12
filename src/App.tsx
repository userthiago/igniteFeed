import { Header } from "./components/Header";
import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { posts } from "./mocks/post";

function App() {
	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => (
						<Post
							key={post.id}
							author={post.author}
							publishedAt={post.publishedAt}
							content={post.content}
						/>
					))}
				</main>
			</div>
		</>
	);
}

export default App;
