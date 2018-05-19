import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
import { Container, Label, Button, Divider, Header, List, Icon, Image, Popup } from 'semantic-ui-react'

class Profile extends Component{

    render(){

        return (
            <Query
            query={gql`
              {
                user(id: 0) {
                    name,
                    email,
                    mobile,
                    city,
                    country,
                    occupation,
                    summary,
                    technologies {
                        language,
                        image,
                        versions {
                            tag
                            experience{
                                start
                            }
                        }
                    }
                }
              }
            `}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;
        
              return (
                <div>
                  <Divider clearing/>
                    <Header as='h1' style={{color: "#1B3E5C", textTransform: "uppercase", fontWeight: "500", fontSize: "30px", textAlign: "center"}}>
                        {`${data.user.name}`}
                    </Header>
                  <Divider clearing/>
                    <Container textAlign='center'>
                    <List horizontal style={{margin: "0 auto", textAlign: "center"}}  bulleted>
                        <List.Item>
                        <List.Content verticalAlign='middle'>
                        {`${data.user.city}, ${data.user.country}`}
                        </List.Content>
                        </List.Item>
                        <List.Item>{`${data.user.mobile}`}</List.Item>
                        <List.Item>{`${data.user.email}`}</List.Item>
                    </List>
                    </Container>
                  <Container textAlign='center' style={{marginTop: "10px"}}>
                  <Image src="https://i.stack.imgur.com/hYHA6.jpg?s=328&g=1" size='tiny' centered circular/>
                  <Header as='h4' sub style={{marginTop: "5px"}}>{`${data.user.occupation}`}</Header>
                  
                </Container>
                <Container textAlign='center' text>
                    <Divider horizontal clearing>Summary</Divider>
                    {`${data.user.summary}`}
                </Container>
                <Container textAlign='center' text>
                    <Divider horizontal clearing>Technologies</Divider>
                    <List horizontal> 
                    {
                        data.user.technologies.map(({language, image, versions}) => {
                          
                            return (
                                <List.Item>
                                    <Image><i class={`${image} fa-2x`}></i></Image>
                                {
                                    <Popup
                                        trigger={
                                                <List.Content>
                                                <List.Header>{`${language}`}</List.Header>
                                                </List.Content>
                                        }
                                        content={
                                            versions.map(({tag, experience}) => {
                                                return (
                                                    <Label circular color="blue"><Moment fromNow ago>{`${experience.start}`}</Moment></Label>
                                                )
                                            })
                                        }
                                        basic
                                    />
                                }
                                </List.Item>
                            )
                        })
                    }
                    </List>
                </Container>
                </div>
              );
            }}
          </Query>
        )

    }

}

export default Profile;