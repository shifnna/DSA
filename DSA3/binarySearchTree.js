//^^^ All basic functions are included here 
// *insert
// *searchpreOrder
// *postOrder
// *inOrder
// *levelOrder
// *min
// *max
// *delete
// *isEmpty

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode);
        }  
    }

    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left == null){
                root.left = newNode;
            }else{
                this.insertNode(root.left,newNode);
            }
        }else{
            if(root.right ===null){
                root.right = newNode;
            }else{
                this.insertNode(root.right,newNode);
            }
        }
    }

    search(root,value){
        if(!root){
            return false;
        }else{
            if(root.value === value){
                return true;
            }else if(value<root.value){
               return this.search(root.left,value); 
            }else{
               return this.search(root.right,value);
            }
        }
    }

    //3 types of DFS traversals
    preOrder(root){
        if(!root){
            return;
        }
        console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }

    inOrder(root){
        if(!root){
            return;
        }
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right);
    }

    postOrder(root){
        if(!root){
            return;
        }
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.value);
    }

    BFS(){
        const queue = [];
        queue.push(this.root);

        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value;
        }else{
           return this.min(root.left); 
        }
    }

    max(root){
        if(!root.right){
            return root.value;
        }else{
           return this.min(root.right); 
        }
    }

    
    getSuccessor(root) {
        root = root.right;
        while (root !== null && root.left !== null) {
            root = root.left;
        }
        return root;
    }

    delNode(root, value) {
        if (root === null) {
            return root;
        }    
        if (root.value > value) {
            root.left = this.delNode(root.left, value);
        } else if (root.value < value) {
            root.right = this.delNode(root.right, value);
        } else {    
            // Cases when root has 0 children or 
            // only right child
            if (root.left === null) 
                return root.right;
    
            // When root has only left child
            if (root.right === null) 
                return root.left;
    
            // When both children are present
            let succ = this.getSuccessor(root);
            root.value = succ.value;
            root.right = this.delNode(root.right, succ.value);
        }
        return root;
    }
}

const bst = new BinarySearchTree();
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log('isEmpty',bst.isEmpty());
console.log(bst.search(bst.root,10));

console.log('preOrder:');
bst.preOrder(bst.root);

console.log('inOrder:');
bst.inOrder(bst.root);

console.log('postOrder:');
bst.postOrder(bst.root);
//display
console.log('levelOrder:');
bst.BFS();

console.log('min value is:',bst.min(bst.root));
console.log('max value is:',bst.max(bst.root));
//delete
bst.delNode(bst.root,10);

console.log('levelOrder:');
bst.BFS();