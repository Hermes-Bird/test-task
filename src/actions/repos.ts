import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes } from './types'

export interface IRepo {
    description: string | null
    repoUrl: string
    repoName: string
    language: string
    update: string
}

interface IApiRepo {
    description: string | null
    full_name: string
    html_url: string
    language: string
    updated_at: string
}

export interface IFetchReposAction {
    type: ActionTypes.fetchRepos
    payload: IRepo[]
}

export interface ISearchReposAction {
    type: ActionTypes.searchRepos
    payload: string
}

export type Actions = IFetchReposAction | ISearchReposAction

const baseUrl = 'https://api.github.com/users/Hermes-bird/repos'

const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

export const fetchRepos = () => async (dispatch: Dispatch) => {
    const { data: apiRepos } = await axios.get<IApiRepo[]>(baseUrl)

    const repos: IRepo[] = apiRepos.map(repo => {
        let updateText
        const updateDate = new Date(repo.updated_at)
        const diff = Date.now() - updateDate.getTime()
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24))

        if (days < 100)
            updateText =
                days === 0 ? 'today' : `${days} day${days > 1 ? 's' : ''} ago`
        else
            updateText = `on ${
                monthNames[updateDate.getMonth()]
            } ${updateDate.getDate()} ${updateDate.getFullYear()}`

        return {
            description: repo.description,
            update: updateText,
            language: repo.language,
            repoName: repo.full_name,
            repoUrl: repo.html_url
        }
    })

    dispatch<IFetchReposAction>({
        type: ActionTypes.fetchRepos,
        payload: repos
    })
}

export const searchRepos = (query: string): ISearchReposAction => {
    return {
        type: ActionTypes.searchRepos,
        payload: query
    }
}
