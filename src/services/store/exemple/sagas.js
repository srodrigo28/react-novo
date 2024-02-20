import { call, put, all, takeLatest } from "redux-saga/effects"
import { toast } from "react-toastify";
import * as actions from "./action"
import * as types from "../types"

const requisicao = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
    }, 2000);
});

function* exampleRequest(){
    try{
        yield call(requisicao);
        yield put(actions.clicaBotaoSuccess());
    }catch(e){
        toast.error("Deu erro. :(")
        yield call(actions.clicaBotaoFailure(e));
    }
}

export default all([
    takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)
])