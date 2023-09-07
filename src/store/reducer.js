import gerald from '.././img/Gerald.jpg';
import yennefer from '.././img/Yenefer.jpg';
import geraldPost from '.././img/GeraltInfo.jpg';
import yenneferPost from '.././img/gold-dragon-cover.jpg';

const initialState = {
	users: [
		{
			id: '1',
			author: 'Geralt of Rivia',
			nickname: '@witcher',
			authorImage: gerald,
			date: 'now',
			text: 'Вже в дорозі',
			postImage: geraldPost,
			likes: 54,
			comments: 34,
			shares: 21,
		},
		{
			id: '2',
			author: 'Yennefer of Vengerberg',
			nickname: '@witch',
			authorImage: yennefer,
			date: '5 minutes ago',
			text: 'Допоможіть слабкій жінці впоратись з драконом',
			postImage: yenneferPost,
			likes: 62,
			comments: 93,
			shares: 132,
		}
	],
	selectedUserId: null,
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'NEW_POST': {
			const newLike = Math.floor(Math.random() * 10);
			const newComment = Math.floor(Math.random() * 100);
			const newShare = Math.floor(Math.random() * 5);
			const newDate = new Date();
			console.log(state)
			return {
				...state, users: [...state.users, {
					id: 3,
					authors: action.author,
					nickname: action.nickname,
					authorImage: action.authorImage,
					date: newDate.toDateString(),
					text: action.text,
					postImage: action.postImage,
					likes: newLike,
					comments: newComment,
					shares: newShare,
				}]
			};
		}
		case 'SELECT_USER':
			return {
				...state,
				selectedUserId: action.payload,
			};
		default:
			return state;
	}
}