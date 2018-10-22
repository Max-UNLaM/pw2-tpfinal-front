import {ColumnsModel} from '../../model/columns.model';

export abstract class ReclamoTableViewmodel {
    public static columnasVista: ColumnsModel[] = [
        {
            name: 'ID',
            matColDef: 'id',
            property: ['id']
        },
        {
            name: 'motivo',
            matColDef: 'motivo',
            property: ['motivo']
        },
        {
            name: 'Dueño',
            matColDef: 'dueño',
            property: ['usuario', 'name']
        },
        {
            name: 'Comentario Admin',
            matColDef: 'com_adm',
            property: ['comentario_admin']
        }
    ];
    public static columnasDef = [
        'id',
        'motivo',
        'dueño',
        'com_adm'
    ];
}
