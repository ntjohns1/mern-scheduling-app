import React from 'react';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import Home from './pages/homepage';
import Login from './pages/login';
import Signup from './pages/signup';
import Portal from './pages/portal';
import Students from './pages/students';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Schedule from './pages/schedule';
import Comments from './pages/comments'
import Calendar from './pages/calendar';

library.add(fas);

const httpLink = createHttpLink({
	uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('id_token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	// Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

export default function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
					<Nav />
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/portal'>
						<Portal />
					</Route>
					<Route exact path='/students'>
						<Students />
					</Route>
					<Route exact path='/schedule'>
						<Schedule />
					</Route>
					<Route exact path='/calendar'>
						<Calendar />
					</Route>
					<Route exact path='/comments'>
						<Comments />
					</Route>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route exact path='/signup'>
						<Signup />
					</Route>
			</Router>
		</ApolloProvider>
	);
}
