const ConsorcioApiRutas = {
    v1: 'http://api.consorcioloco.local/api'
};

const ConsorcioApiRol = {
    user: '/user',
    admin: '/admin'
};

const ConsorcioAuthRutas = {
    auth: `${ConsorcioApiRutas.v1}/auth`
};

export const ConsorcioUsuarioRutas = {
    create: `${ConsorcioAuthRutas.auth}/register`
};

export const ConsorcioUnidadRutasAdmin = {
    list: `${ConsorcioApiRutas.v1}/admin/unidad`,
    create: `${ConsorcioApiRutas.v1}/admin`,
    page: `${ConsorcioApiRutas.v1}/admin/unidad?page=`
};

export const ConsorcioUnidadRutasUser = {
    list: `${ConsorcioApiRutas.v1}/user/unidad`,
    page: `${ConsorcioApiRutas.v1}/page/unidad?page=`
};

export const ConsorcioConsorcioRutas = {
    list: `${ConsorcioApiRutas.v1}/consorcio`,
    page: `${ConsorcioApiRutas.v1}/consorcio?page=`
};

export const ConsorcioExpensaRutasAdmin = {
    list: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/expensa`,
    listByUnidad: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/expensa?unidad_id=`,
    page: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/expensa?page=`,
    show: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/expensa?id=`,
    check: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/expensa?puerta`,
};

export const ConsorcioExpensaRutasUser = {
    check: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/expensa?puerta`,
    list: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/expensa`,
    listByUnidad: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/expensa?unidad_id=`
};

export const ConsorcioReclamoRutasUser = {
    create: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/reclamo`,
    page: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/reclamo?page=`
};

export const ConsorcioLoginRutas = {
    login: `${ConsorcioApiRutas.v1}/oauth/login`
};


export const ConsorcioOptions = {
    post: {}
};
