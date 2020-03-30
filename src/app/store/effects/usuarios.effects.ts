import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as usuariosActions from '../actions/usuarios.actions';
import { UsuarioService } from '../../services/usuario.service';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class usariosEffects {

    constructor(
        private actions$: Actions,
        private usuariosService: UsuarioService
    ) { }

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(usuariosActions.cargarUsuarios),
            tap(data => console.log('effect tap ', data)),
            mergeMap(
                () => this.usuariosService.getUser()
                    .pipe(
                        tap(data => console.log('getUsers effect', data)),
                        map(users => usuariosActions.cargarUsuariosSucces({ usuarios: users })), catchError(err => of(usuariosActions.cargarUsuariosError({ payload: err })))
                    )
            )
        )
    );
}