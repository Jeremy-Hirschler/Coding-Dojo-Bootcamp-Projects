class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }
    addFront(val){
        let new_node = new Node(val);
        if (!this.head){
            this.head = new_node;
            return this;
        }

        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    removeFront(){
        if (!this.head){
            return null
        }
        this.head = this.head.next;
        return this;
    }
    front(){
        if (!this.head){
            return null
        }
        return this.head.data
    }
    display(){
        let str = '';
        let runner = this.head;
        while (runner !== null){
            if (runner.next !== null){

                str += runner.data + ', '
                
            }else{
                str += runner.data
                
            }
            runner = runner.next
        }
        return str;
    }
}

let SLL1 = new SLL();
console.log(SLL1.addFront(76))
console.log(SLL1.addFront(2))
console.log(SLL1.display())
console.log(SLL1.addFront(11.41))
console.log(SLL1.display())
