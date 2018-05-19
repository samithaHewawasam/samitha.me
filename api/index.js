import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import cors from 'cors';
import _ from 'lodash';

const Users = [{
    id: "1",
    name: "Samitha Hewawasam",
    birthday: "1989-06-08",
    city: "Gampaha",
    country: "Srilanka",
    mobile: "+94773633412",
    email: "samithahewawasam@gmail.com",
    address: "211/A, Deenapamunuwa, Urapola",
    summary: 'Passionate, responsible and committed engineer, with a get-it-done, on-time spirit, and more than a 6\
    years of experience designing, implementing and adapting technically sophisticated online web\
    applications using NodeJs, Javascript, Java, PHP, \
    AngularJs, React.Js, Vue.Js , \
    docker, microservice\
    architecture and more. Experience in continuous deployment and integration for microservice\
    architecture. E2E testing using Protractor, JMeter and more.',
    occupation: "Senior Software Engineer",
    technologies: [
        {
          language: "Html",
          versions: [{
            tag: "4",
            experience: {
              start: "2011-02-20",
              end: ""
            }
          }],
          image: "fab fa-html5"
        },
        {
          language: "CSS",
          versions: [{
            tag: "4",
            experience: {
              start: "2011-02-20",
              end: ""
            }
          }],
          image: "fab fa-css3-alt"
        },
        {
          language: "Javascript",
          versions: [{
            tag: "4",
            experience: {
              start: "2012-02-20",
              end: ""
            }
          }],
          image: "fab fa-js"
        },
        {
          language: "Node.Js",
          versions: [{
            tag: "4",
            experience: {
              start: "2013-02-20",
              end: ""
            }
          }],
          image: "fab fa-node"
        },
        {
          language: "React",
          versions: [{
            tag: "4",
            experience: {
              start: "2014-02-20",
              end: ""
            }
          }],
          image: "fab fa-react"
        },
        {
          language: "Angular",
          versions: [{
            tag: "4",
            experience: {
              start: "2014-02-20",
              end: ""
            }
          }],
          image: "fab fa-angular"
        },
        {
          language: "Vue",
          versions: [{
            tag: "4",
            experience: {
              start: "2018-01-02",
              end: ""
            }
          }],
          image: "fab fa-vuejs"
        },
        ,
        {
          language: "PHP",
          versions: [{
            tag: "4",
            experience: {
              start: "2011-02-20",
              end: ""
            }
          }],
          image: "fab fa-php"
        },
        {
          language: "Java",
          versions: [{
            tag: "4",
            experience: {
              start: "2015-02-20",
              end: ""
            }
          }],
          image: "fab fa-java"
        },
        {
          language: "Aws",
          versions: [{
            tag: "4",
            experience: {
              start: "2018-01-02",
              end: ""
            }
          }],
          image: "fab fa-aws"
        },
        {
          language: "Docker",
          versions: [{
            tag: "4",
            experience: {
              start: "2016-11-26",
              end: ""
            }
          }],
          image: "fab fa-docker"
        },
        {
          language: "Python",
          versions: [{
            tag: "4",
            experience: {
              start: "2016-02-20",
              end: ""
            }
          }],
          image: "fab fa-python"
        },
        {
          language: "Jenkins",
          versions: [{
            tag: "4",
            experience: {
              start: "2016-04-20",
              end: ""
            }
          }],
          image: "fab fa-jenkins"
        }
      ]
}]


var schema = buildSchema(`

  type experience {
    start: String
    end: String
  }

  type version {
    tag: String
    experience: experience
  }

  type Technologies {
    language: String,
    versions: [version],
    image: String
  }

  type User {
    id: Int
    name: String
    birthday: String
    city: String
    country: String
    mobile: String
    email: String
    address: String
    occupation: String,
    summary: String
    technologies: [Technologies]
  }

  type Query {
      user(id: Int): User
  }

`);

var root = {
  user: ({id}) => {
    return Users[id]
  },
};

var app = express();
app.use('/graphql', cors(), graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);