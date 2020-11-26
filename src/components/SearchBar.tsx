import React from 'react'
import { connect } from 'react-redux'
import { Input } from 'semantic-ui-react'
import { searchRepos } from '../actions/repos'

interface ISearchBarProps {
    searchRepos: typeof searchRepos
}

const SearchBar: React.FC<ISearchBarProps> = ({searchRepos}) => {
    return (
        <Input
            className="searchbar"
            fluid
            icon="search"
            placeholder="Search..."
            onChange={(e) => {
                searchRepos(e.target.value)
            }}
        />
    )
}

export default connect(null, {searchRepos})(SearchBar)
