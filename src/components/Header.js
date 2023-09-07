import { Link } from "react-router-dom";

export function Header() {
	return (
		<header className="header-app">
			<div className="header-nav">
				<Link to='/post'>Post</Link>
				<Link to='/new-post'>New Post</Link>
			</div>
		</header>
	)
}