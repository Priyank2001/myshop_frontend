export default  class Context{
    #instance = null
    static BASE_BACKEND_URL="http://localhost:8080/"
    static ADMIN_BASE_URL="/myshopadmin"
    constructor(){
    }
    static getInstance(){
        if(this.#instance == null){
            this.#instance = new Context();
        }
        return this.#instance
    }
    
}