import { SHOW_ALERT, SHOW_ALERT_LOGIN, SHOW_ALERT_PADDED, SHOW_ALERT_LOGOUT,
    SHOW_ALERT_NOLOGIN, SHOW_ALERT_WRONGCRED } from './alertTypes'

const initialState = {

}

const alertReducer = (state = initialState, action) => {
    switch(action.type){
        case SHOW_ALERT: 
            alert('Alert');
            break;
        case SHOW_ALERT_LOGIN:
            alert('Successfully Logged In');
            break;
        case SHOW_ALERT_PADDED:
            alert('Product Added');
            break;
        case SHOW_ALERT_LOGOUT:
            alert('Successfully Logged Out');
            break;
        case SHOW_ALERT_NOLOGIN:
            alert('Please Login First');
            break;
        case SHOW_ALERT_WRONGCRED:
            alert('Invalid Credentials');
            break;
    }
}

export default alertReducer;