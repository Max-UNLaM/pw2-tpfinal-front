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
// admin
export const ConsorcioConsorcioRutasAdmin = {
    list: `${ConsorcioApiRutas.v1}/admin/consorcio`,
    page: `${ConsorcioApiRutas.v1}/admin/consorcio?page=`
};


// CONSORCIO
// user
export const ConsorcioConsorcioRutasUser = {
    list: `${ConsorcioApiRutas.v1}/user/consorcio`,
    page: `${ConsorcioApiRutas.v1}/user/consorcio?page=`
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
    check: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/expensa?puerta=hola`,
};

// EXPENSA
// user
export const ConsorcioExpensaRutasUser = {
    check: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/expensa?puerta=hola`,
    page: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/expensa?page=`,
    list: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/expensa`,
    show: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/expensa?id=`,
    listByUnidad: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/expensa?unidad_id=`
};


// RECLAMO
// user
export const ConsorcioReclamoRutasUser = {
    create: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/reclamo`,
    page: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/reclamo?page=`
};


// RECLAMO
// admin
export const ConsorcioReclamoRutasAdmin = {
    create: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/reclamo`,
    page: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/reclamo?page=`
};

// CONSORCIO
// user
export const ConsorcioFacturaRutasUser = {
    list: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/factura`,
    page: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/factura?page=`
};


// CONSORCIO
// admin

export const ConsorcioFacturaRutasAdmin = {
    list: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/factura`,
    page: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/factura?page=`
};

// ESTADÍSTICAS
// admin
export const ConsorcioConsorcioStatsRutasAdmin = {
    list: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/estadistica`
};


export const ConsorcioConsorcioStatsRutasUser = {
    list: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/estadistica`
};
