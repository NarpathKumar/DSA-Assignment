function parenthesisChecker(str){
    let symbols = {
        '{' : '}',
        '(' : ')',
        '[' : ']'
    }
    let stack = []
    for(var i=0; i<str.length; i++){
        if(symbols.hasOwnProperty(str[i])){
            stack.push(str[i])
        }
        else if(Object.values(symbols).includes(str[i])){
            let toCheck = stack.pop();
            if(str[i] !== symbols[toCheck]){
                return i
            }
        }
    }

    if(stack.length != 0){
        return str.length;ma
    }

    return "Success";
}

// console.log(parenthesisChecker("({}(){}[])"))
