import { createReducer, on } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosSucces, cargarUsuariosError } from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface usuariosState {
    users: Usuario[],
    loaded: boolean,
    loading: boolean,
    error: any
}

export const usuariosInitState: usuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

const _usuariosReducer = createReducer(usuariosInitState,

    on(cargarUsuarios, state => ({ ...state, loading: true })),

    on(cargarUsuariosSucces, (state, { usuarios }) => ({
        ...state,
        loading: false,
        loaded: true,
        users: [...usuarios]

    })),

    on(cargarUsuariosError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: payload
    })),

);

export function usuariosReducer(state, action) {
    return _usuariosReducer(state, action);
}

