
 interface Login {
    type: 'LOGIN'
    username: string
}

 interface Logout {
    type: 'LOGOUT'
 }

type AuthAction = Login | Logout 

 
 const authReducer = (state: string, action: AuthAction): string => {
    switch(action.type) {
        case "LOGIN":
            return action.username
        case "LOGOUT":
            return ''
    }
    return state;

 }

 export default authReducer