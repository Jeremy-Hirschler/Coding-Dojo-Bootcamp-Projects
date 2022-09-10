//Singly Linked Lists


class Node {
    constructor(data){
        this.data = data;
        this.next = null
    }
}
class SLL {
    constructor(){
        this.head = null
    }
    addFront(val){
        let new_node = new Node(val);
        //if head does not exist
        if (!this.head){
            this.head = new_node;
            return this;
        }
        //if head does exist
        new_node.next = this.head;//assign current head of list to new node pointer
        this.head = new_node;//assign head of list as newly created node
        
        return this;
    }
    removeFront(){
        
        if (!this.head){
            return null;
        }
        this.head = this.head.next;
        return this;

    }
    front(){
        
        if (!this.head){
            return null;
        }
        return this.head.data

    }
    
}

let SLL1 = new SLL();
SLL1.addFront(10).addFront(3).addFront(23);
console.log('added',SLL1)
console.log('removed',SLL1.removeFront())
console.log('front',SLL1.front())


