class JWT {

    constructor() {
        this._JWT = require('jose').JWT;
        this._JWK = require('jose').JWK;         
        this._JWS = require('jose').JWS;         
    }

    set_key(key){
        this._key = this._JWK.asKey(JSON.stringify(key)).toJWK(true);
    }

    get_key() {
        return this._key; 
    }

    new_key() {     
        this._key = this._JWK.generateSync("OKP", "Ed25519");
        return this._key; 
    }

    get_token(payload){
        this._payload = payload; 
        if(this._key.kty == 'oct') {
            this._token = this._JWS.sign(payload, this._JWK.asKey(this._key), {
                alg: 'HS512'
            });
        } else {
           this._token = this._JWT.sign(payload, this._JWK.asKey(this._key), {
               algorithm: "EdDSA"
           });           
        }
        
        return this._token;
    }

    verify(){
        this._ver = this._JWT.verify(this.get_token(this._payload), this._key, {
            complete: true
        });
        return this._ver;
    }
}

module.exports = () => new JWT();
