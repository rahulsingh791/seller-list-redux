import { SHOW_ALERT, SHOW_ALERT_LOGIN, SHOW_ALERT_PADDED, SHOW_ALERT_LOGOUT,
    SHOW_ALERT_NOLOGIN, SHOW_ALERT_WRONGCRED } from './alertTypes'

export const showAlert = () => {
    return {
        type: SHOW_ALERT
    }
}
export const showAlertLogin = () => {
    return { 
        type: SHOW_ALERT_LOGIN
    }
}
export const showAlertPadded = () => {
    return {
        type: SHOW_ALERT_PADDED
    }
}
export const showAlertLogout = () => {
    return {
        type: SHOW_ALERT_LOGOUT
    }
}
export const showAlertNologin = () => {
    return {
        type: SHOW_ALERT_NOLOGIN
    }
}
export const showAlertWrongCred = () => {
    return {
        type: SHOW_ALERT_WRONGCRED
    }
}

