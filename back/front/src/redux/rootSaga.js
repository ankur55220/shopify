import {all,call} from 'redux-saga/effects'
import ItemSaga from './itemSaga'


function* rootSaga(){

    yield all([call(ItemSaga)]);
}


export default rootSaga;