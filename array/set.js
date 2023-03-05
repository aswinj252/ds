const set = new Set([1,2,3,4])
set.add(5)
console.log(set.has(6));
set.delete(3)
console.log(set.size,"is the size of the set");
set.clear()

for( const item of set){
    console.log(item);
}