import { combineReducers } from 'redux';
import userReducers from './userReducer';
import driverReducers from './driverReducer';
import motoReducers from './motoReducer';
import adminReducers from './adminReducer';
import authReducer from "./authReducer";

export default combineReducers({
    users : userReducers,
    drivers : driverReducers,
    moto: motoReducers,
    admin: adminReducers,
    auth: authReducer
});

// export default appReducers;