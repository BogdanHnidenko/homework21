import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';

export function NewPost() {
	const [postImage, setPostImage] = useState("");
	const [text, setText] = useState("");

	const dispatch = useDispatch();
	const users = useSelector((state) => state.users);
	const selectedUserId = useSelector((state) => state.selectedUserId);
	const selectedUsers = users.find((user) =>
		user.id === selectedUserId
	);

	console.log(selectedUsers)

	const handleClientChang = (userId) => {
		const select = {
			type: 'SELECT_USER',
			payload: userId,
		};
		dispatch(select);
	};



	const handleClientClick = () => {
		if (!postImage || !text || !selectedUsers) {
			alert('Введіть данні')
			return
		}
		const action = {
			type: 'NEW_POST',
			authors: selectedUsers.author,
			nickname: selectedUsers.nickname,
			authorImage: selectedUsers.authorImage,
			text,
			postImage
		}
		dispatch(action);
		setText("");
		setPostImage("");
	}

	return <>
		<div className="new-post__wrapper">
			<div className="new-post__input">
				<select onChange={(e) => handleClientChang(e.target.value)}>
					<option value={0}>Оберіть користувача</option>
					{users.map(user => (
						<option key={user.id} value={user.id}>
							{user.author}
						</option>
					))}
				</select>
			</div>
			<div className="new-post__input">
				<label htmlFor="input__url">URL Photo</label>
				<input
					value={postImage}
					onChange={(e) => setPostImage(e.target.value)} id="input__url" />
			</div>
			<div className="new-post__input">
				<label htmlFor="input__text">Text Post</label>
				<input
					value={text}
					onChange={(e) => setText(e.target.value)} id="input__text" />
			</div>
			<button onClick={handleClientClick}>Add post</button>
		</div>
	</>
}