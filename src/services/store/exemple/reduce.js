import * as types from '../types';

const initialState = {
    botaoClicado: false,
}

export default function (state = initialState, action) {
    switch(action.type) {
        case types.BOTAO_CLICADO_SUCCESS :{
            console.log('Deu sucesso :) BOTAO_CLICADO_SUCCESS');
            const newState = {...state}
            newState.botaoClicado = !newState.botaoClicado;
            return newState;
        }
        case types.BOTAO_CLICADO_FAILURE :{
            console.log('Deu ruim :( BOTAO_CLICADO_FAILURE');
        }
        case types.BOTAO_CLICADO_REQUEST :{
            console.log('BOTAO_CLICADO_REQUEST');
        }
        default:
            return state;
    }
}
