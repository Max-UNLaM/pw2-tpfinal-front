import {HttpHeaders} from '@angular/common/http';

const ConsorcioApiRutas = {
    v1: 'http://api.consorcioloco.local/api'
};

const ConsorcioAuthRutas = {
    auth: `${ConsorcioApiRutas.v1}/auth`
};

export const ConsorcioUsuarioRutas = {
    register: `${ConsorcioAuthRutas.auth}/register`
};

export const ConsorcioOptions = {
    post: {

    }
};
