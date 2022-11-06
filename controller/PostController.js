const PostModel = require('../models/Post.js');

const create = async (req, res) => {
    try {
        const doc = new PostModel({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
        });
        const post = await doc.save();
        res.json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'не удалось создать объявление',
        });
    };
};

const getAll = async (req, res) => {
    try {
        const posts = await PostModel.find();

        res.json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'не удалось получить объявление',
        })
    }
};

 const remove = async (req, res) => {
    try {
        const postId = req.params.id;
        PostModel.findOneAndDelete({
            _id: postId,
        },
        (err, doc) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                message: 'не удалось удалить объявление',
                })
            }
            if (!doc) {
                return res.status(404).json({
                    messega: 'обьявление не найдено'
                })
            }

            res.json({
                success: true,
            })
        }
        );
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'не удалось получить объявление',
        })
    }
};

const update = async (req, res) => {
    try {
        const postId = req.params.id;
        await PostModel.updateOne({
            _id: postId,
        },
        {
            
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,              
        });
        res.json({
            success: true,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'не удалось обновить объявление',
        });
    }
};

module.exports.create = create;
module.exports.getAll = getAll; 
module.exports.remove = remove;
module.exports.update = update;