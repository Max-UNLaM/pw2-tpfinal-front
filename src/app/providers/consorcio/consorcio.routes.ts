const ConsorcioApiRutas = {
    v1: 'http://api.consorcioloco.local/api'
};

const ConsorcioAuthRutas = {
    auth: `${ConsorcioApiRutas.v1}/auth`
};

export const ConsorcioUsuarioRutas = {
    register: `${ConsorcioAuthRutas.auth}/register`
};

export const ConsorcioUnidadRutas = {
    list: `${ConsorcioApiRutas.v1}/unidad`,
    page: `${ConsorcioApiRutas.v1}/unidad?page=`
};

export const ConsorcioConsorcioRutas = {
    list: `${ConsorcioApiRutas.v1}/consorcio`,
    page: `${ConsorcioApiRutas.v1}/consorcio?page=`
};

export const ConsorcioExpensaRutas = {
    list: `${ConsorcioApiRutas.v1}/expensa`,
    page: `${ConsorcioApiRutas.v1}/expensa?page=`
};

export const ConsorcioLoginRutas = {
    login: `${ConsorcioApiRutas.v1}/oauth/login`
};

export const ConsorcioOptions = {
    post: {}
};
