import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon'

const EmptyList = () => {
    return (
        <Grid verticalAlign="middle" textAlign="center" container>
            <Grid.Row>
                <Grid.Column>
                    <Icon name="inbox" size="huge" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Header>List is empty</Header>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default EmptyList
