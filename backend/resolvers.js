import 'babel-polyfill';

export default {
    Query: {
        allNews: async (parent,args, {News}) => {
            const news = await News.find();
            return news.map(x => {
                x._id = x._id.toString();
                return x;
            })
        }
    },
    Mutation: {
        insertNews: async (parent, args, {News}) => {
            const news = await new News(args).save();
            news._id = news._id.toString();
            return news;
        }
    }
}