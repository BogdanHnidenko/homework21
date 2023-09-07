import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Posts } from './components/Posts';
import { NewPost } from './components/NewPost';
import store from './store/store'



function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/post' element={
					<Provider store={store}>
						<Posts />
					</Provider>
				} />
				<Route path='/new-post' element={
					<Provider store={store}>
						<NewPost />
					</Provider>
				} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
