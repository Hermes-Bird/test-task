import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'
import { IStoreState } from '../reducer'
import ListLoader from './Loader'
import Repos from './Repos'
import { fetchRepos, IRepo } from '../actions/repos'

interface IReposListProps {
    repos: IRepo[]
    fetchRepos: () => Promise<void>  
}

const ReposList: React.FC<IReposListProps> = ({repos, fetchRepos}) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchRepos()
            .catch(err => {
                console.log(err.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [fetchRepos])

    return (
        <Segment>
            {
                isLoading ? <ListLoader/> : <Repos repos={repos}/>
            }
        </Segment>
    )
}
const mapStateToProps = ({repos}: IStoreState) => {
    return {repos: repos.searchedRepos}
}

export default connect(mapStateToProps, {fetchRepos})(ReposList)
