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
    page: `${ConsorcioApiRutas.v1}/user/consorcio?page=`,
    read: `${ConsorcioApiRutas.v1}/user/user`
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

// FACTURA
// user
export const ConsorcioFacturaRutasUser = {
    list: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/factura`,
    page: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/factura?page=`,
    read: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/factura?id=`
};


// FACTURA
// admin

export const ConsorcioFacturaRutasAdmin = {
    list: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/factura`,
    page: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/factura?page=`,
    masa: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/factura`
};

// PAGO
// admin
export const ConsorcioPagoRutasAdmin = {
    list: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/pago`,
    page: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/pago?page=`,
    aprobar: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/pago/aprobar`,
    rechazar: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/pago/rechazar`
};

// user
export const ConsorcioPagoRutasUser = {
    list: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/pago`,
    page: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/pago?page=`,
    create: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/pago`,
};

// GASTO
// admin
export const ConsorcioGastoRutasAdmin = {
    list: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/gasto`,
    create: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/gasto`,
    page: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/gasto?page=`
};

// user
export const ConsorcioGastoRutasUser = {
    list: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/gasto`,
    page: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/gasto?page=`
};

// PROVEEDEOR
// admin
export const ConsorcioGastoProveedorAdmin = {
    list: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/proveedor`,
    page: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/proveedor?page=`
};

// ESTADÍSTICAS
// admin
export const ConsorcioConsorcioStatsRutasAdmin = {
    list: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.admin}/estadistica`
};
// user
export const ConsorcioConsorcioStatsRutasUser = {
    list: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/estadistica`
};

// MINUTA
export const ConsorcioMinutaUser = {
    list: `${ConsorcioApiRutas.v1}${ConsorcioApiRol.user}/informe`
};
