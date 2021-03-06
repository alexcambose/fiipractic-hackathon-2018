import validate from 'validate.js';
import axios from 'axios';
import config from '../config';

validate.validators.emailUnique = email => new validate.Promise(resolve => {
    axios.get(config.apiUrl + '/user/checkEmailValid', { params: { email } }).then(({ data }) => {
        if (!data) resolve('is already taken');
        else resolve();
    });
});
validate.validators.usernameUnique = username => new validate.Promise(resolve => {
    axios.get(config.apiUrl + '/user/checkUsernameValid', { params: { username } }).then(({ data }) => {
        if (!data) resolve('is already taken');
        else resolve();
    });
});
validate.validators.codeValid = code => new validate.Promise(resolve => {
    axios.get(config.apiUrl + '/user/checkCodeValid', { params: { code } })
        .then(({ data }) => {
            if (!data) resolve('is invalid');
            else resolve();
        });
});
export default validate;
