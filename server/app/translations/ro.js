module.exports = {
    errors: {
        first_name: 'Prenumele nu poate fi gol.',
        last_name: 'Numele nu poate fi gol.',
        email: {
            invalid: 'Email invalid.',
            taken: 'Acest email este deja luat!',
            not_found: 'Acest email nu exista!',
        },
        username: {
            invalid: 'Nume utilizator invalid.',
            length: 'Nume utilizator trebuie sa fie intre 5 si 30 de caractere.',
            taken: 'Acest nume de utilizator este deja luat',
            not_found: 'Acest nume de utilizator nu exista.',
        },
        password: {
            exists: 'Capul parola nu poate fi gol.',
            length: 'Parola trebuie sa contina intre <<start>> si <<end>> caractere.',
            wrong: 'Parola grasita.'
        },
        authentication: {
            token: {
                missing: 'Nu esti autentificat.',
                invalid: 'Token invalid.',
            },
            code: 'Codul de inregistrare este invalid.',
        },
        group: {
            name: 'Grupul trebuie sa aiba un nume.',
            inexistent: 'Grupul nu exista',
            urlname: 'Grupul trebuie sa aiba un url unic.'
        },
        post: {
            length: 'Postarea nu are suficiente caractere',
            inexistent: 'Postarea cu acest identificator nu a putut fi gasita.',
        },
    }
};