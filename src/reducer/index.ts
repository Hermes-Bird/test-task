import { combineReducers } from "redux";
import { Actions, IRepo } from "../actions/repos";
import { ActionTypes } from "../actions/types";

interface IRepos {
    fetchedRepos: IRepo[],
    searchedRepos: IRepo[] 
}

const initialState: IRepos = {
    fetchedRepos: [],
    searchedRepos: []
} 

const reposReducer = (state: IRepos = initialState, action: Actions) => {
    console.log('New Action')
    switch (action.type) {
        case ActionTypes.fetchRepos:
            return {
                searchedRepos: action.payload,
                fetchedRepos: action.payload
            }
        case ActionTypes.searchRepos:
            let searchedRepos

            if (action.payload) {
                searchedRepos = state.fetchedRepos.filter(repo => {
                    const lowerCaseQuery = action.payload.toLowerCase()
                    const lowerCaseRepoName = repo.repoName.toLowerCase()
                    return lowerCaseRepoName.includes(lowerCaseQuery)
                })
            } else searchedRepos = [...state.fetchedRepos]

            return {
                ...state,
                searchedRepos
            }
        default:
            return state
    }
}

export interface IStoreState {
    repos: IRepos
}

export const reducers = combineReducers<IStoreState>({
    repos: reposReducer
})