import 'babel-polyfill';

const dbConnection = require('./dbConnection');

export default {
    Query: {
        allNews: async (parent,args, {News}) => {
            const news = await News.find();
            return news.map(x => {
                x._id = x.id;
                console.log(x);
                return x;
            })
        },
        oneNews: async (parent, args, {News}) => {
            const news = await News.findById(args.id);
            news.id = args.id;
            return news;
        },
        allUsers: async (parent, args, {User}) => {
            return new Promise((resolve, rejects) => {
                dbConnection().query('SELECT * FROM usuarios', (err,res) => {
                    if(err){
                        rejects(err);
                    }else{
                        resolve(res);
                    } 
                });
            });
        },
        oneUser: async (parent, args, {User}) => {
            console.log(args.id_usuario);
            return new Promise((resolve, rejects) => {
                dbConnection().query('SELECT * FROM usuarios WHERE id_usuario = ' + args.id_usuario, (err,res) => {
                    if(err){
                        rejects(err);
                    }else{
                        console.log(res);
                        resolve(res);
                    } 
                });
            });
        },
        allTeams: async (parent, args, {User}) => {
            return new Promise((resolve, rejects) => {
                dbConnection().query('SELECT * FROM equipos', (err,res) => {
                    if(err){
                        rejects(err);
                    }else{
                        resolve(res);
                    } 
                });
            });
        },
        oneTeam: async (parent, args, {User}) => {
            return new Promise((resolve, rejects) => {
                dbConnection().query('SELECT * FROM equipos WHERE id_equipo = ' + args.id_equipo, (err,res) => {
                    if(err){
                        rejects(err);
                    }else{
                        console.log(res);
                        resolve(res);
                    } 
                });
            });
        },
        allRetos: async (parent, args, {User}) => {
            return new Promise((resolve, rejects) => {
                dbConnection().query('SELECT * FROM reto', (err,res) => {
                    if(err){
                        rejects(err);
                    }else{
                        resolve(res);
                    } 
                });
            });
        },
        oneReto: async (parent, args, {User}) => {
            return new Promise((resolve, rejects) => {
                dbConnection().query('SELECT * FROM equipos WHERE id_reto = ' + args.id_reto, (err,res) => {
                    if(err){
                        rejects(err);
                    }else{
                        console.log(res);
                        resolve(res);
                    } 
                });
            });
        },
        allSports: async (parent, args, {User}) => {
            return new Promise((resolve, rejects) => {
                dbConnection().query('SELECT * FROM deportes', (err,res) => {
                    if(err){
                        rejects(err);
                    }else{
                        resolve(res);
                    } 
                });
            });
        },
        oneSport: async (parent, args, {User}) => {
            return new Promise((resolve, rejects) => {
                dbConnection().query('SELECT * FROM deportes WHERE id_deporte = ' + args.id_deporte, (err,res) => {
                    if(err){
                        rejects(err);
                    }else{
                        console.log(res);
                        resolve(res);
                    } 
                });
            });
        }
    },
    Mutation: {
        insertNews: async (parent, args, {News}) => {
            const news = await new News(args).save();
            news._id = news.id;
            console.log(news._id);
            return news;
        },
        updateNews: async (parent, args, {News}) => {
            return await News.findById(args.id, (err, news) => {
                if(!news){
                    return next(new Error('Could not load document'));
                }else{
                    if(args.Title != null){
                        news.Title = args.Title;
                    }
                    if(args.Tag != null){
                        news.Tag = args.Tag;
                    }
                    if(args.Description != null){
                        news.Description = args.Description;
                    }
                    if(args.Img != null){
                        news.Img = args.Img;
                    }
                    news.id = args.id;
                    news.save();
                    console.log(news);
                    return news;
                }
            });
        },
        deleteNews: async (parent, args, {News}) => {
            return await News.findById({_id: args.id}, (err, news) => {
                if(err){
                    return err
                }else{
                     News.findByIdAndRemove({_id: args.id}, (err, xxx) => {
                        if(err){
                            return err;
                        }else{
                            news.id = args.id;
                            console.log(news);
                            return news;
                        }
                    });
                }
            });
        },

        insertUser: async (parent, args, {User}) => {
            return new Promise((resolve, rejects) => {
                dbConnection().query(
                    'INSERT INTO usuarios(id_usuario, nombre, apellido, correo) VALUES(' + args.id_usuario + ',' + '"' + args.nombre + '"' + ','
                    + '"' + args.apellido + '"' + ',' + '"' +  args.correo + '"' +')', (err,res) => {
                    if(err){
                        console.log(err);
                        rejects(err);
                    }else{
                        console.log(res);
                        resolve(res);
                    } 
                });
            });
        },
        updateUser: async (parent, args, {User}) => {
            return new Promise((resolve, rejects) => {
                if(args.nombre != null && args.apellido != null && args.correo != null){
                    dbConnection().query(
                        'UPDATE usuarios SET nombre = ' + '"' + args.nombre + '"' + ',' + 
                         'apellido = ' + '"' + args.apellido + '"' + ',' + 'correo = ' + '"' + args.correo + '"' +
                        'WHERE id_usuario = ' + args.id_usuario, (err,res) => {
                        if(err){
                            console.log(err);
                            rejects(err);
                        }else{
                            console.log(res);
                            resolve(res);
                        } 
                    });
                }
            });
        },
        deleteUser: async (parent, args, {User}) => {
            return new Promise((resolve, rejects) => {
                dbConnection().query(
                    'DELETE FROM usuarios WHERE id_usuario=' + args.id_usuario, (err,res) => {
                    if(err){
                        console.log(err);
                        rejects(err);
                    }else{
                        console.log(res);
                        resolve(res);
                    } 
                });
            });
        },
        insertTeam: async (parent, args, {User}) => {
            return new Promise((resolve, rejects) => {
                dbConnection().query(
                    'INSERT INTO equipos(id_equipo, nombre_equipo, logros) VALUES(' + args.id_equipo + ',' + '"' + args.nombre_equipo + '"' + ','
                    + '"' + args.logros + '"' + ')', (err,res) => {
                    if(err){
                        console.log(err);
                        rejects(err);
                    }else{
                        console.log(res);
                        resolve(res);
                    } 
                });
            });
        },
        updateTeam: async (parent, args, {User}) => {
            return new Promise((resolve, rejects) => {
                if(args.nombre_equipo != null && args.logros != null){
                    dbConnection().query(
                        'UPDATE equipos SET nombre_equipo = ' + '"' + args.nombre_equipo + '"' + ',' + 
                         'logros = ' + '"' + args.logros + '"' +
                        'WHERE id_equipo = ' + args.id_equipo, (err,res) => {
                        if(err){
                            console.log(err);
                            rejects(err);
                        }else{
                            console.log(res);
                            resolve(res);
                        } 
                    });
                }
            });
        },
        deleteTeam: async (parent, args, {User}) => {
            return new Promise((resolve, rejects) => {
                dbConnection().query(
                    'DELETE FROM equipos WHERE id_equipo=' + args.id_equipo, (err,res) => {
                    if(err){
                        console.log(err);
                        rejects(err);
                    }else{
                        console.log(res);
                        resolve(res);
                    } 
                });
            });
        },
        insertReto: async (parent, args, {User}) => {
            return new Promise((resolve, rejects) => {
                dbConnection().query(
                    'INSERT INTO reto(id_reto, lugar, fecha) VALUES(' + args.id_reto + ',' + '"' + args.lugar + '"' + ','
                    + '"' + args.fecha + '"' + ')', (err,res) => {
                    if(err){
                        console.log(err);
                        rejects(err);
                    }else{
                        console.log(res);
                        resolve(res);
                    } 
                });
            });
        },
        updateReto: async (parent, args, {User}) => {
            return new Promise((resolve, rejects) => {
                if(args.lugar != null && args.fecha != null){
                    dbConnection().query(
                        'UPDATE reto SET lugar = ' + '"' + args.lugar + '"' + ',' + 
                         'fecha = ' + '"' + args.fecha + '"' +
                        'WHERE id_reto = ' + args.id_reto, (err,res) => {
                        if(err){
                            console.log(err);
                            rejects(err);
                        }else{
                            console.log(res);
                            resolve(res);
                        } 
                    });
                }
            });
        },
        deleteReto: async (parent, args, {User}) => {
            return new Promise((resolve, rejects) => {
                dbConnection().query(
                    'DELETE FROM reto WHERE id_reto=' + args.id_reto, (err,res) => {
                    if(err){
                        console.log(err);
                        rejects(err);
                    }else{
                        console.log(res);
                        resolve(res);
                    } 
                });
            });
        },
        insertSport: async (parent, args, {User}) => {
            return new Promise((resolve, rejects) => {
                dbConnection().query(
                    'INSERT INTO deportes(id_deporte, nombre_deporte) VALUES(' + args.id_deporte + ','
                     + '"' + args.nombre_deporte + '"' + ')', (err,res) => {
                    if(err){
                        console.log(err);
                        rejects(err);
                    }else{
                        console.log(res);
                        resolve(res);
                    } 
                });
            });
        },
        updateSport: async (parent, args, {User}) => {
            return new Promise((resolve, rejects) => {
                if(args.nombre_deporte != null){
                    dbConnection().query(
                        'UPDATE deportes SET nombre_deporte = ' + '"' + args.nombre_deporte + '"' +
                        'WHERE id_deporte = ' + args.id_deporte, (err,res) => {
                        if(err){
                            console.log(err);
                            rejects(err);
                        }else{
                            console.log(res);
                            resolve(res);
                        } 
                    });
                }
            });
        },
        deleteSport: async (parent, args, {User}) => {
            return new Promise((resolve, rejects) => {
                dbConnection().query(
                    'DELETE FROM deportes WHERE id_deporte=' + args.id_deporte, (err,res) => {
                    if(err){
                        console.log(err);
                        rejects(err);
                    }else{
                        console.log(res);
                        resolve(res);
                    } 
                });
            });
        }
    }
}