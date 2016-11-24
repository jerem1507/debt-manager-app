export class User {

    private _token : string;
    private _email : string;
    private _password : string;

    constructor() {
        this._token = "";
        this._email = "";
        this._password = ""
    }

    set token (token : string) {
        this._token = token;
    }

    get token() : string {
        return this._token;
    }

    set email(email : string) {
        this._email = email;
    }

    get email() : string {
        return this._email;
    }

    set password(password : string) {
        this._password = password;
    }

    get password() : string {
        return this._password;
    }

    public reset() : void {
        this._password = "";
        this._email = "";
    }

    public toString() : string {
        let encryptedPassword = this._password.replace(/./g, '*');
        return "User : (email : " + this._email + "), Password : (" + encryptedPassword + ")";
    }

}