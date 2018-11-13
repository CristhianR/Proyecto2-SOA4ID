import 'babel-polyfill';
import news from './Models/news';

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
        }
    }
}