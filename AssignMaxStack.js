class maxStack{
    constructor(){
        this.stack = []
        this.maxStack = []
    }

    push(ele){
        if(this.maxStack.length === 0){
            this.stack[this.stack.length] = ele
            this.maxStack[this.maxStack.length] = ele;
        }
        else {
            this.stack.push(ele)
            if(ele > this.maxStack[this.maxStack.length -1]){
                this.maxStack[this.maxStack.length] = ele
            }
        }
    }

    pop(){
        let a = this.stack.splice((this.stack.length-1),1)[0];
        console.log(a)
        if(a === this.maxStack[this.maxStack.length-1]) this.maxStack.splice((this.maxStack.length-1),1);
    }

    max(){
        console.log(this.maxStack[this.maxStack.length-1]);
    }

    print(){
        console.log(this.stack)
    }
}

// let obj = new maxStack();
// obj.push(1);
// obj.print();
// obj.push(2);
// obj.print();
// obj.max();
// obj.pop();
// obj.print()
// obj.max();