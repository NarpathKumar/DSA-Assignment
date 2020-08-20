console.clear();
function tree(refNodeArr, nodes){
    let obj = {};
    for(let i=0; i<nodes.length; i++){
        if(nodes[i] === -1){
            obj[refNodeArr[i]] = []
            obj["root"] = refNodeArr[i] // just for letting us know which is root node
        }
        else if(Object.keys(obj).includes(String(nodes[i]))){
            obj[nodes[i]].push(refNodeArr[i])
        }
        else obj[nodes[i]] = [refNodeArr[i]]
    }
    return obj
}