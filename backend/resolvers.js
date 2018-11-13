import 'babel-polyfill';

export default {
    Query: {
        allNews: async (parent,args, {News}) => {
            const news = await News.find();
            return news.map(x => {
                x._id = x.id;
                console.log(x);
                return x;
            })
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
        }
    }
}