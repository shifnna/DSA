//* install an extension called 'Colorful Comments' in VS code for better experience😊

//^^ Trie

class TrieNode{
    constructor(){
        this.child={};
        this.wordEnd=false;
    }
}

class trie{
    constructor(){
        this.root = new TrieNode();
    }

    insert(data){
        let node = this.root;
        for(let d of data){
            if(!node.child[d]){
                node.child[d]=new TrieNode()
            }
            node=node.child[d];
        }
        node.wordEnd=true;
    }

    search(data){
        let node = this.root;
        for(let d of data){
            if(!node.child[d]) return false;
            node=node.child[d];
        }
        return node.wordEnd
    }

    preffix(data){
        let node = this.root;
        for(let d of data){
            if(!node.child[d]) return false;
            node=node.child[d];
        }
        return true;
    }

    suffix(data) {
        let dataa = data.split("").reverse().join(""); 
        let node = this.root;
    
        for (let d of dataa) {
            if (!node.child[d]) {
                return false; 
            }
            node = node.child[d];
        }
        return true;
    }

    autoCompletion(data){
        let node = this.root

        for(let d of data){
            if(!node.child[d]){
                return []
            }
            node = node.child[d]
        }

        let words = []
        this.dfs(node,data,words)
        return words

    }

    dfs(node,data,words){
        if(node.wordEnd){
            words.push(data)
        }

        for(let d in node.child){
            this.dfs(node.child[d],data+d,words)
        }
    }
    
}

const Trie=new trie();
Trie.insert('siya');
Trie.insert('siyar');
Trie.insert('sana');

console.log(Trie.search('shifa'));
console.log(Trie.search('shifna'));
console.log(Trie.autoCompletion('siy'));

