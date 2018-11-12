import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';

import User from './Models/user';
import Sports from './Models/sports';
import News from './Models/news';
import Team from './Models/team';
import Challenges from './Models/challenges';

import typeDefs from './schema';
import resolvers from './resolvers';

mongoose.connect('mongodb://localhost:27017/users');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());


const schema = makeExecutableSchema({
    typeDefs, //Como van a lucir mis datos.
    resolvers // Métodos a usar 
})

// Creating an express server and a GraphQL endpoint

app.use('/graphql', express.json(), graphqlHTTP({
    schema: schema,
    context: {
        News
    },
    graphiql: true
}));


//----------------------------------------------- End-points -----------------------------------------------------------

//---------------------------------------- Métodos CRUD para el modelo USER --------------------------------------------

// GET ALL
router.route('/users').get((req, res) => {
    User.find((err, users) => {
        if(err){
            console.log(err);
        }else{
            res.json(users);
        }
    });
});

// GET byID
router.route('/users/:id').get((req, res) => {
    User.findById(req.params.id, (err, user) => {
        if(err){
            console.log(err);
        }else{
            res.json(user);
        }
    });
});

// POST
router.route('/users/add').post((req, res) => {
    let user = new User(req.body);
    user.save()
    .then(user => {
        res.status(200).json({'user': 'Added successfully'});
    })
    .catch(err => {
        res.status(400).send('Failed to create new record');
    });
});

// UPDATE
router.route('/users/update/:id').post((req, res) => {
    User.findById(req.params.id, (err, user) => {
        if(!user){
            return next(new Error('Could not load document'));
        }else{
            user.FirstName = req.body.FirstName;
            user.LastName = req.body.LastName;
            user.Email = req.body.Email;
            user.Sports = req.body.Sports;
            user.Team = req.body.Team;
            user.Img = req.body.Img;

            user.save().then(user => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

// DELETE
router.route('/users/delete/:id').get((req, res) => {
    User.findByIdAndRemove({_id: req.params.id}, (err, user) => {
        if(err){
            res.json(err);
        }else{
            res.json('Remove successfully');
        }
    })
})

//---------------------------------------- Métodos CRUD para el modelo SPORTS --------------------------------------------
// GET ALL
router.route('/sports').get((req, res) => {
    Sports.find((err, sports) => {
        if(err){
            console.log(err);
        }else{
            res.json(sports);
        }
    });
});

// GET byID
router.route('/sports/:id').get((req, res) => {
    Sports.findById(req.params.id, (err, sport) => {
        if(err){
            console.log(err);
        }else{
            res.json(sport);
        }
    });
});

// POST
router.route('/sports/add').post((req, res) => {
    let sport = new Sports(req.body);
    sport.save()
    .then(sport => {
        res.status(200).json({'sport': 'Added successfully'});
    })
    .catch(err => {
        res.status(400).send('Failed to create new record');
    });
});

// UPDATE
router.route('/sports/update/:id').post((req, res) => {
    Sports.findById(req.params.id, (err, sport) => {
        if(!sport){
            return next(new Error('Could not load document'));
        }else{
            sport.Name = req.body.Name;

            sport.save().then(sport => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

// DELETE
router.route('/sports/delete/:id').get((req, res) => {
    Sports.findByIdAndRemove({_id: req.params.id}, (err, sport) => {
        if(err){
            res.json(err);
        }else{
            res.json('Remove successfully');
        }
    })
})

//---------------------------------------- Métodos CRUD para el modelo NEWS --------------------------------------------
// GET ALL
router.route('/news').get((req, res) => {
    News.find((err, news) => {
        if(err){
            console.log(err);
        }else{
            res.json(news);
        }
    });
});

// GET byID
router.route('/news/:id').get((req, res) => {
    News.findById(req.params.id, (err, news) => {
        if(err){
            console.log(err);
        }else{
            res.json(news);
        }
    });
});

// POST
router.route('/news/add').post((req, res) => {
    let news = new News(req.body);
    news.save()
    .then(news => {
        res.status(200).json({'news': 'Added successfully'});
    })
    .catch(err => {
        res.status(400).send('Failed to create new record');
    });
});

// UPDATE
router.route('/news/update/:id').post((req, res) => {
    News.findById(req.params.id, (err, news) => {
        if(!news){
            return next(new Error('Could not load document'));
        }else{
            news.Title = req.body.Title;
            news.Tag = req.body.Tag;
            news.Description = req.body.Description;
            news.Img = req.body.Img;

            news.save().then(news => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

// DELETE
router.route('/news/delete/:id').get((req, res) => {
    News.findByIdAndRemove({_id: req.params.id}, (err, news) => {
        if(err){
            res.json(err);
        }else{
            res.json('Remove successfully');
        }
    })
})

//---------------------------------------- Métodos CRUD para el modelo TEAMS --------------------------------------------
// GET ALL
router.route('/teams').get((req, res) => {
    Team.find((err, teams) => {
        if(err){
            console.log(err);
        }else{
            res.json(teams);
        }
    });
});

// GET byID
router.route('/teams/:id').get((req, res) => {
    Team.findById(req.params.id, (err, team) => {
        if(err){
            console.log(err);
        }else{
            res.json(team);
        }
    });
});

// POST
router.route('/teams/add').post((req, res) => {
    let team = new Team(req.body);
    team.save()
    .then(team => {
        res.status(200).json({'team': 'Added successfully'});
    })
    .catch(err => {
        res.status(400).send('Failed to create new record');
    });
});

// UPDATE
router.route('/teams/update/:id').post((req, res) => {
    Team.findById(req.params.id, (err, team) => {
        if(!team){
            return next(new Error('Could not load document'));
        }else{
            team.Name = req.body.Name;
            team.Members = req.body.Members;
            team.Achievements = req.body.Achievements;
            team.Img = req.body.Img;

            team.save().then(team => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

// DELETE
router.route('/teams/delete/:id').get((req, res) => {
    Team.findByIdAndRemove({_id: req.params.id}, (err, team) => {
        if(err){
            res.json(err);
        }else{
            res.json('Remove successfully');
        }
    })
})

//---------------------------------------- Métodos CRUD para el modelo CHALLENGES --------------------------------------------
// GET ALL
router.route('/challenges').get((req, res) => {
    Challenges.find((err, challenges) => {
        if(err){
            console.log(err);
        }else{
            res.json(challenges);
        }
    });
});

// GET byID
router.route('/challenges/:id').get((req, res) => {
    Challenges.findById(req.params.id, (err, challenge) => {
        if(err){
            console.log(err);
        }else{
            res.json(challenge);
        }
    });
});

// POST
router.route('/challenges/add').post((req, res) => {
    let challenge = new Challenges(req.body);
    challenge.save()
    .then(challenge => {
        res.status(200).json({'challenges': 'Added successfully'});
    })
    .catch(err => {
        res.status(400).send('Failed to create new record');
    });
});

// UPDATE
router.route('/challenges/update/:id').post((req, res) => {
    Challenges.findById(req.params.id, (err, challenge) => {
        if(!challenge){
            return next(new Error('Could not load document'));
        }else{
            challenge.Place = req.body.Place;
            challenge.Teams = req.body.Teams;
            challenge.Date = req.body.Date;

            challenge.save().then(challenge => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

// DELETE
router.route('/challenges/delete/:id').get((req, res) => {
    Challenges.findByIdAndRemove({_id: req.params.id}, (err, challenges) => {
        if(err){
            res.json(err);
        }else{
            res.json('Remove successfully');
        }
    })
})

app.use('/', router);

app.get('/', (req, res) => res.send("Hello"));
app.listen(4000, () => console.log('Express server running on port 4000'));