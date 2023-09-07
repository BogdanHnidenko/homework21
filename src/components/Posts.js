import { Post } from "./Post";
import { useSelector } from "react-redux";

export function Posts() {
	const authorState = useSelector((state) => state.users)

	const AddPost = authorState.map((item) => {
		return (
			<Post
				key={item.id}
				author={item.author}
				nickname={item.nickname}
				authorImage={item.authorImage}
				date={item.date}
				text={item.text}
				postImage={item.postImage}
				likes={item.likes}
				comments={item.comments}
				shares={item.shares}
			/>
		)
	})


	return (
		<>
			<div className="wrapper">
				{AddPost}
			</div>
		</>
	)
}