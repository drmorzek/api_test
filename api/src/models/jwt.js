class JWT {

    constructor() {
        this._JWT = require('jose').JWT;
        this._JWK = require('jose').JWK; 
        this.gen_OKP();        
    }

    set_key(key){
        this._secret = JSON.stringify(key);
        this._key = this._JWK.asKey(this._secret).toJWK(true);
        return this;
    }

    key_from_db(key){
        // console.log(JSON.parse(key))
       this._key = this._JWK.asKey(JSON.parse(key));
    }

    gen_secret(){
        this.set_key(this.set_key(JSON.stringify(this.gen_OKP())).get_key().k);
        return this;
    }

    gen_OKP() {
        this._key = this._JWK.generateSync("OKP", "Ed25519");
        return this;
    }

    get_secret(){
        this._secret = (this._secret != undefined) ? this._secret : "secret key not found";
        return this._secret;
    }

    get_key() {
        return this._key; 
    }    

    get_token(payload){
        this._payload = payload; 
        this._token = this._JWT.sign(payload, this._JWK.asKey(this._key), {
               algorithm: (this._key.kty == 'oct') ? "HS512" : "EdDSA",               
               header: {
                   typ: 'JWT'
               }
           });             
        return this._token;
    }

    set_payload(payload){
        this._payload = payload;
    }

    verify(complete = false) {
        this._ver = this._JWT.verify(this.get_token(this._payload), this._key, 
        {
            complete: complete
        }
        );
        if (complete == false) delete this._ver.iat;
        return this._ver;
    }

    auth(password, key){
        this._ver = this._JWT.verify(password, this._JWK.asKey(JSON.parse(key)).toJWK(true));
        return this._ver.password;
    }

}

module.exports = () => new JWT();
