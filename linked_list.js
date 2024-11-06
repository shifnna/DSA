//^ 1. BASIC OPERATIONS

// Insert at beginning

// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null
//     }

//     insertBeginning(data){
//         const newNode= new Node(data);
//         newNode.next=this.head;
//         this.head=newNode;

//         if(this.tail==null){
//             this.tail=newNode;
//         }
//     }

//     display(){
//         if(this.head==null){
//             console.log('no node occure')
//         }else{
//             let current=this.head;
//             while (current !==null) {
//                 console.log(current.data);
//                 current=current.next;
//             }
//         }
//     }
// }

// const list = new LinkedList();
// list.insertBeginning(1);
// list.insertBeginning(2);
// list.insertBeginning(3);
// list.display();



//insert at end

// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null
//     }

//     append(data){
//         const newNode=new Node(data);
//         if(this.head==null){
//             this.head=newNode;
//             this.tail=newNode;
//         }else{
//             this.tail.next=newNode;
//             this.tail=newNode;
//         }
//     }

//     display(){
//         if(this.head==null){
//             console.log('no node occure')
//         }else{
//             let current=this.head;
//             while (current !==null) {
//                 console.log(current.data);
//                 current=current.next;
//             }
//         }
//     }
// }

// const list = new LinkedList();
// list.append(1);
// list.display();




// Insert after;

// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null
//     }

//     append(data){
//         const newNode=new Node(data);
//         if(this.head==null){
//             this.head=newNode;
//             this.tail=newNode;
//         }else{
//             this.tail.next=newNode;
//             this.tail=newNode;
//         }
//     }

//     insertAfter(after, data) {
//         const newNode = new Node(data);
//         let current = this.head;    
//         // Traverse to find the node with data matching 'after'
//         while (current !== null && current.data !== after) {
//             current = current.next;
//         }   
//         // If the node with data 'after' is found, insert the new node after it
//         if (current !== null) {
//             newNode.next = current.next;
//             current.next = newNode;
    
//             if (current === this.tail) {
//                 this.tail = newNode;
//             }
//         } else {
//             console.log(`Node with data ${after} not found.`);
//         }
//     }
    

//     display(){
//         if(this.head==null){
//             console.log('no node occure')
//         }else{
//             let current=this.head;
//             while (current !==null) {
//                 console.log(current.data);
//                 current=current.next;
//             }
//         }
//     }
// }

// const list = new LinkedList();
// list.append(5);
// list.append(10);
// list.append(20);
// list.insertAfter(10,15)
// list.display();


// Insert at a position

class Node {
    constructor(data) {
        this.data=data;
        this.next=null;
    }
}

class LinkedList {
    constructor() {
        this.head=null;
        this.tail=null
    }

    append(data){
        const newNode=new Node(data);
        if(this.head==null){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
    }

    insertAt(position, data) {
        
    }
    

    display(){
        if(this.head==null){
            console.log('no node occure')
        }else{
            let current=this.head;
            while (current !==null) {
                console.log(current.data);
                current=current.next;
            }
        }
    }
}

const list = new LinkedList();
list.append(5);
list.append(10);
list.append(20);
list.insertAt(2,15)
list.display();