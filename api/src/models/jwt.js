class JWT {

    constructor() {
        this._JWT = require('jose').JWT;
        this._JWK = require('jose').JWK;         
    }

    set(key){
        this._key = this._JWK.asKey(JSON.stringify(key)).toJWK(true);
        return this;
    }

    get() {
        return this._key; 
    }

    new() {     
        this._key = this._JWK.generateSync("OKP", "Ed25519");
        return this; 
    }

    get_token(payload){
        this._payload = payload; 
        this._token = this._JWT.sign(payload, this._JWK.asKey(this._key), {
               algorithm: (this._key.kty == 'oct') ? "HS512" : "EdDSA",               
               header: {
                   typ: 'JWT'
               }
           });           
        // }
        
        return this._token;
    }

    verify(){
        this._ver = this._JWT.verify(this.get_token(this._payload), this._key, 
        {
            // complete: true
        }
        );
        return this._ver;
    }
}

module.exports = () => new JWT();
