
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from "redux-thunk";

const reducers = combineReducers({

})

const middleware=[thunk]

const Store = createStore(reducers,applyMiddleware(...middleware))

export default Store