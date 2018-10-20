import {ColumnsModel} from '../../model/columns.model';

export abstract class PagoListViewmodel {
    public static columnasVista: ColumnsModel[] = [
        {
            name: 'ID',
            matColDef: 'id',
            property: ['id']
        },
        {
            name: 'Fecha',
            matColDef: 'fecha',
            property: ['fecha']
        },
        {
            name: 'Medio de Pago',
            matColDef: 'medio_de_pago',
            property: ['medio_de_pago']
        },
        {
            name: 'Propietario',
            matColDef: 'propietario_nombre',
            property: ['propietario', 'name']
        },
        {
            name: 'Usuario',
            matColDef: 'usuario_nombre',
            property: ['usuario_que_genera_el_pago', 'name']
        },
        {
            name: 'Banco',
            matColDef: 'banco',
            property: ['banco']
        },
        {
            name: 'Comprobante',
            matColDef: 'codigo_comprobante',
            property: ['codigo_comprobante']
        },
        {
            name: 'Monto',
            matColDef: 'monto',
            property: ['monto'],
        },
        {
            name: 'Estado',
            matColDef: 'estado',
            property: ['estado']
        }
    ];
    public static columnasDef = [
        'id',
        'fecha',
        'medio_de_pago',
        'propietario_nombre',
        'usuario_nombre',
        'banco',
        'codigo_comprobante',
        'monto',
        'estado'
    ];
}

//
//         = ['id',
//         'fecha',
//         'medio_de_pago',
//         'propietario_nombre',
//         'usuario_nombre',
//         'monto',
//         'codigo_comprobante',
//         'estado'];
