import React from 'react'
import { Button, Container, Grid, Icon, Label, List, Segment } from 'semantic-ui-react'

interface IRepoProps {
    description: string | null
    repoUrl: string
    repoName: string
    language: string
    update: string
}

const Repo: React.FC<IRepoProps> = ({description, repoName, repoUrl, update, language}) => {
    return (
        <Segment as={Container}>
            <Grid rows={3}>
                <Grid.Row columns={2}>
                    <Grid.Column as="a" href={repoUrl} className="repo-link" floated="left">
                        {repoName}
                    </Grid.Column>
                    <Grid.Column floated="right">
                        <Button floated="right" size="tiny">
                            <Icon name="star outline"/>
                            Star
                        </Button>
                    </Grid.Column>
                </Grid.Row>
                {
                    description ? (
                        <Grid.Row>
                            <Grid.Column>
                                {description}
                            </Grid.Column>
                        </Grid.Row>
                    ) : null
                }
                <Grid.Row>
                    <Grid.Column>
                        <List horizontal verticalAlign="middle">
                            <List.Item>
                                <List.Content as="span">
                                    <Label circular empty/>
                                    <span className="lang-name">
                                        {language}
                                    </span>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content as="span">
                                    Updated {update}
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default Repo