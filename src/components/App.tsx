import React from 'react'
import { Container } from 'semantic-ui-react'
import ReposList from './ReposList'
import SearchBar from './SearchBar'


function App() {
    return (
		<Container className="app-container">
			<SearchBar />
			<ReposList />
		</Container>
	)
}

export default App
