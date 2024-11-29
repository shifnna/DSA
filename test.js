//* install an extension called 'Colorful Comments' in VS code for better experience😊


//suparna about code explanation

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        let newNode = new Node();
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left===null){
                root.left = newNode;
            }else{
                this.insertNode(root.left,newNode);
            }
        }else{
            if(root.right===null){
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
            }else if(value < root.value){
                this.search(root.left,value);
            }else{
                this.search(root.right,value);
            }
        }
    }

    preOrder(root){
        if(!root){
          return
        }
        console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }

    inOrder(root){
        if(!root){
          return
        }
        this.preOrder(root.left);
        console.log(root.value);
        this.preOrder(root.right);
    }

    postOrder(root){
        if(!root){
          return
        }
        this.preOrder(root.left);
        this.preOrder(root.right);
        console.log(root.value);
    }

    min(root){
        if(!root.left){
            return root.value;
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value;
        }else{
            return this.min(root.right)
        }
    }

    getSuccessor(root){
        root = root.right;
        while (root!==null && root.left) {
            root = root.left
        }
        return root;
    }

    BFS(){
        let queue = [];
        queue.push(this.root);

        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
}