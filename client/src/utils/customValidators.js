import validate from 'validate.js';
import axios from 'axios';

validate.validators.emailUnique = email => new validate.Promise(resolve => {
    axios..then(res => {
        if (res.data.userByEmail) resolve('is already taken');
        else resolve();
    });
});
validate.validators.usernameUnique = username => new validate.Promise(resolve => {
    client.query({
        query: gql`
                query userByUsername($username: String!) {
                userByUsername(username: $username) {
                    _id
                }
            }
        `,
        variables: { username },
    }).then(res => {
        if (res.data.userByUsername) resolve('is already taken');
        else resolve();
    });
});

export default validate;