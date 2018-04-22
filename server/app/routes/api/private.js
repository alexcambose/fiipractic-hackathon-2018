const { checkSchema } = require('express-validator/check');
const lang = require('../../translations/index');
const Post = require('../../models/Post');

const privateRoutes = require('express').Router();

const userController = require('../../controllers/user');
const groupController = require('../../controllers/group');
const postController = require('../../controllers/post');

privateRoutes.get('/user', userController.info);
privateRoutes.post('/user/username', userController.getUserByUsername);
privateRoutes.post('/user', userController.update);
privateRoutes.delete('/user', userController.delete);
privateRoutes.post('/user/checkpassword', userController.checkPassword);

privateRoutes.put('/group', checkSchema({
    name: { exists: true, errorMessage: lang.t('errors.group.name') },
    // urlname: {
    //     custom: {
    //         options: urlname => Group.isUrlNameUnique(urlname),
    //         errorMessage: lang.t('errors.group.urlname'),
    //     }
    // },
}), groupController.create);

privateRoutes.delete('/group', checkSchema({
    urlname: {
        custom: {
            options: async urlname => {
                try {
                    await Group.isUrlNameUnique(urlname);
                    return false;
                } catch(e) {
                    return true;
                }
            },
            errorMessage: lang.t('errors.group.urlname'),
        }
    },
}), groupController.delete);
privateRoutes.get('/group', userController.groups);
privateRoutes.get('/group/all', groupController.all);
privateRoutes.post('/group/joinleave', checkSchema({
    urlname: {
        custom: {
            options: async urlname => {
                try {
                    await Group.isUrlNameUnique(urlname);
                    return false;
                } catch(e) {
                    return true;
                }
            },
            errorMessage: lang.t('errors.group.urlname'),
        }
    },
}), userController.joinLeave);
privateRoutes.post('/group/addPost', checkSchema({
    type: { exists: true, }
}), postController.getAll);

privateRoutes.post('/posts/all', checkSchema({
    content: {
        isLength: {
            errorMessage: lang.t('errors.post.length'),
            options: { min: 3, max: 3000 },
        },
    },
}), postController.getAllPosts);

privateRoutes.post('/posts/user', checkSchema({
    content: {
        custom: {
            options: async urlname => {
                try {
                    await Group.isUrlNameUnique(urlname);
                    return false;
                } catch(e) {
                    return true;
                }
            },
            errorMessage: lang.t('errors.group.urlname'),
        }
    },
}), userController.joinLeave);
privateRoutes.get('/post', postController.get);
privateRoutes.put('/post', checkSchema({
    content: {
        isLength: {
            errorMessage: lang.t('errors.post.length'),
            options: { min: 3, max: 3000 },
        },
    },
    type: { exists: true, }
}), postController.create);
privateRoutes.delete('/post', checkSchema({
    id: {
        custom: {
            options: async id => Post.exists(id),
            errorMessage: lang.t('errors.post.inexistent'),
        }
    }
}), postController.delete);
privateRoutes.put('/post/like', checkSchema({
    id: {
        custom: {
            options: async id => Post.exists(id),
            errorMessage: lang.t('errors.post.inexistent'),
        }
    }
}), postController.likeDislike);
module.exports = privateRoutes;