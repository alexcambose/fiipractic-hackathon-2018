const { checkSchema } = require('express-validator/check');
const utils = require('../../utils');
const lang = require('../../translations/index');
const publicRoutes = require('express').Router();

const userController = require('../../controllers/user');
const User = require('../../models/User');
const Group = require('../../models/Group');

publicRoutes.get('/', (req, res) => {
    res.send('This is the api root');
});
publicRoutes.get('/createSecret', (req, res) => {
    const { time, isStudent, password } = req.query;
    if(password === 'secret123'){
        const token = utils.createSecret(time, isStudent === '1');
        return res.send(token);
    } else {
        return res.status(401).send('Parola incorecta');
    }
});
publicRoutes.get('/user/checkEmailValid', userController.checkEmailValid);
publicRoutes.get('/user/checkUsernameValid', userController.checkUsernameValid);
publicRoutes.get('/user/checkCodeValid', userController.checkCodeValid);
publicRoutes.post('/user/register',checkSchema({
    first_name: { exists: true, errorMessage: lang.t('errors.first_name') },
    last_name: { exists: true, errorMessage: lang.t('errors.last_name') },
    email: {
        isEmail: {
            errorMessage: lang.t('errors.email.invalid')
        },
        custom: {
            options: email => User.isEmailUnique(email),
            errorMessage: lang.t('errors.email.taken'),
        },
    },
    username: {
        exists: true, errorMessage: lang.t('errors.username.invalid'),
        custom: {
            options: username => User.isUsernameUnique(username),
            errorMessage: lang.t('errors.username.taken'),
        },
        isLength: {
            errorMessage: lang.t('errors.username.length'),
            options: { min: 5, max: 30 }
        }
    },
    password: {
        isLength: {
            errorMessage: lang.t('errors.password.length', {start: 6, end: 30}),
            options: { min: 6, max: 30 }
        },
    },
    // code: {
    //     custom: {
    //         options: code => utils.verifySecret(code),
    //         errorMessage: lang.t('errors.authentication.code'),
    //     },
    // },
}), userController.register);

publicRoutes.post('/user/login', checkSchema({
    email: {
        isEmail: { errorMessage: lang.t('errors.email.invalid') },
        custom: {
            options: (email) => User.findOne({email}),
            errorMessage: lang.t('errors.email.not_found'),
        }
    },
    password: {
        exists: true, errorMessage: lang.t('errors.password.exists'),
        custom: {
            options: (password, { req }) => User.findOne({email: req.body.email, password}),
            errorMessage: lang.t('errors.password.wrong'),
        }
    }
}), userController.login);
publicRoutes.post('/group/create', checkSchema({
    name: { exists: true, errorMessage: lang.t('errors.group.name') },
    urlname: {
        custom: {
            options: urlname => Group.isGroupNameUnique(urlname),
            errorMessage: lang.t('errors.email.not_found'),
        }
    },
}));
module.exports = publicRoutes;