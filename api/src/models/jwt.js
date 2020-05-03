class JWT {

    constructor() {
        this.JWT = require('jose').JWT;
        this.JWK = require('jose').JWK;         
        this.JWS = require('jose').JWS;         
    }

    set_key(key){
        this.key = this.JWK.asKey(JSON.stringify(key)).toJWK(true);
    }

    get_key() {
        return this.key; 
    }

    new_key() {     
        this.key = this.JWK.generateSync("OKP", "Ed25519");
        return this.key; 
    }

    get_token(payload){
        this.payload = payload; 
        if(this.key.kty == 'oct') {
            this.token = this.JWS.sign(payload, this.JWK.asKey(this.key), {
                alg: 'HS512'
            });
        } else {
           this.token = this.JWT.sign(payload, this.JWK.asKey(this.key), {
               algorithm: "EdDSA"
           });           
        }
        
        return this.token;
    }

    verify(){
        this.ver = this.JWT.verify(this.get_token(this.payload), this.key, {
            complete: true
        });
        return this.ver;
    }
}

module.exports = () => new JWT();
