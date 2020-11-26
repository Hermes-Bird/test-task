import React from 'react'
import { IRepo } from '../actions/repos'
import EmptyList from './EmptyList'
import Repo from './Repo'

const Repos: React.FC<{repos: IRepo[]}> = ({repos}) => {
    if (repos.length === 0) return <EmptyList/>
    
    return (
        <>
            {repos.map((repo, i) => <Repo {...repo} key={i} />)}
        </>
    )
}

export default Repos
