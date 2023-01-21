
export default class Context{
    constructor(){
        if(this.instance != null)return
        this.instance = new Context();
        this.adminUrl="/myshopadmin"
    }
}