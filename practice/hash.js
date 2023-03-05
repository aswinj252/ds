class hashtable{
    constructor(size){
        this.data= new Array(size)
    }
    _hash(key){
        let hash = 0
        for(let i=0;i<key.length;i++){
            hash = (hash+key.charCodeAt(i)*i)%this.data.length
        }
        return hash
    }
}
 
set (key,value){
    let address = this._hash(key)
}