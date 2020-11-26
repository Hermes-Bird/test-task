import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const ListLoader = () => {
    return (
        <div className="list-loader">
            <Dimmer active inverted>
                <Loader size="massive">Loading</Loader>
            </Dimmer>
        </div>
    )
}

export default ListLoader
