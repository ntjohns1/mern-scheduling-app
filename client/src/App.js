import React from 'react';
import StoreProvider from './store';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Nav from './components/Navbar';
import Home from './pages/homepage';
import Login from './pages/login';
import Signup from './pages/signup';
import Portal from './pages/portal';
import Students from './pages/students';
import SingleLesson from './components/Schedule/SingleLesson';
import Schedule from './pages/schedule';
import Messages from './pages/messages'
import Cal from './pages/calendar';
import SetNotifications from './components/Schedule/SetNotifications';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

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
	clientState: { defaults: {}, resolvers: {} }
});

const history = createBrowserHistory();



export default function App() {
	return (
			<ApolloProvider client={client}>
				<StoreProvider>
				<Router history={history}>
					<Nav />
					<Switch>
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
						<Route exact path='/notifications'>
							<SetNotifications />
						</Route>
						<Route exact path='/lesson/:id'>
							<SingleLesson />
						</Route>
						<Route exact path='/calendar'>
							<Cal />
						</Route>
						<Route exact path='/messages'>
							<Messages />
						</Route>
						<Route exact path='/login'>
							<Login />
						</Route>
						<Route exact path='/signup'>
							<Signup />
						</Route>
					</Switch>
				</Router>
				</ StoreProvider>
			</ApolloProvider>
	);
};
