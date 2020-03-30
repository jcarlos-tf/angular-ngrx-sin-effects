import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

//acciones
export const cargarUsuarios = createAction('[Usuarios] cargar Usuarios');

export const cargarUsuariosSucces = createAction(
    '[Usuarios] cargar Usuarios Suecces',
    props<{ usuarios: Usuario[] }>()
);

export const cargarUsuariosError = createAction(
    '[Usuarios] Cargar Usuarios Error',
    props<{ payload: any }>()
);