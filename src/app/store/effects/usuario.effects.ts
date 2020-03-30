import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as usuariosActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class usarioEffects {

    constructor(
        private action$: Actions,
        private usuarioService: UsuarioService
    ) { }

    cargarUsuario$ = createEffect(
        () => this.action$.pipe(
            ofType(usuariosActions.cargarUsuario),
            mergeMap(
                (action) => this.usuarioService.getUserById(action.id)
                    .pipe(
                        map(user => usuariosActions.cargarUsuarioSucces({ usuario: user })),
                        catchError(err => of(usuariosActions.cargarUsuarioError({ payload: err })))
                    )
            )
        )
    );

}