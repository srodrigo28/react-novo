import * as types from "./../types";

export function clicaBotaoRequest(){
    return {
        type: types.BOTAO_CLICADO_REQUEST,
    }
}

export function clicaBotaoBotaoSuccess(){
    return {
        type: types.BOTAO_CLICADO_SUCCESS,
    }
}

export function clicaBotaoFailure(){
    return {
        type: types.BOTAO_CLICADO_FAILURE,
    }
}