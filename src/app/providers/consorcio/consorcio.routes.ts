// APIs
const ConsorcioApiRutas = {
    v1: 'http://api.consorcioloco.local/api'
};

// ROLES
const ConsorcioApiRol = {
    user: '/user',
    admin: '/admin'
};

// AUTH
const ConsorcioAuthRutas = {
    auth: `${ConsorcioApiRutas.v1}/auth`
};


// LOGIN
export const ConsorcioLoginRutas = {
    login: `${ConsorcioApiRutas.v1}/oauth/login`
};

// REGISTER
export const ConsorcioUsuarioRutas = {
    create: `${ConsorcioAuthRutas.auth}/register`
};

// CONSORCIO
export const ConsorcioConsorcioRutas = {
    list: `${ConsorcioApiRutas.v1}/consorcio`,
    page: `${ConsorcioApiRutas.v1}/consorcio?page=`
};

// UNIDAD
// user
export const ConsorcioUnidadRutasUser = {
    list: `${ConsorcioApiRutas.v1}/user/unidad`,
    page: `${ConsorcioApiRutas.v1}/page/unidad?page=`
};


// UNIDAD
// admin
export const ConsorcioUnidadRutasAdmin = {
    list: `${ConsorcioApiRutas.v1}/admin/unidad`,
    create: `${ConsorcioApiRutas.v1}/admin`,
    page: `${ConsorcioApiRutas.v1}/admin/unidad?page=`
};


// EXPENSA
// admin
export const ConsorcioExpensaRutasAdmin = {
    list: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/expensa`,
    listByUnidad: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/expensa?unidad_id=`,
    page: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/expensa?page=`,
    show: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/expensa?id=`,
    check: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/expensa?puerta`,
};

// EXPENSA
// user
export const ConsorcioExpensaRutasUser = {
    check: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/expensa?puerta`,
    page: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/expensa?page=`,
    list: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/expensa`,
    listByUnidad: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/expensa?unidad_id=`
};


// RECLAMO
// user
export const ConsorcioReclamoRutasUser = {
    create: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/reclamo`,
    page: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/reclamo?page=`
};

export const ConsorcioOptions = {
    post: {}
};
