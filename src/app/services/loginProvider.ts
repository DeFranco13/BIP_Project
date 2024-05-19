export class Login{
    loggedIn = false

    getLoginState(){
        return this.loggedIn
    }
    LoginSucces(){
        this.loggedIn = true
    }
}