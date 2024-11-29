//^^^ simple implimentation of trie (insert,search,preffix,suffix,autocompletion and deletion are included)

class TrieNode{
    constructor(){
        this.child ={}
        this.wordEnd = false
    }
}

class trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(data){
        let node = this.root

        for(let d of data){
            if(!node.child[d]){
                node.child[d] = new TrieNode()   //node nte ullil oru child[d] undaakkunnu then athinte ullil oru newNode undakkunnu
            }
            node = node.child[d]
        }
        node.wordEnd = true
    }

    search(data){
        let node = this.root

        for(let d of data){
            if(!node.child[d]){
                return false
            }
            node = node.child[d]
        }
        return node.wordEnd
    }

    prefix(data){
        let node = this.root

        for(let d of data){
            if(!node.child[d]){
                return false
            }
            node = node.child[d]
        }
        return true
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

        for(let char in node.child){
            this.dfs(node.child[char],data+char,words)
        }
    }

    deleteNode(data){
        const deleteNode = (node, word, index) =>{
            if(index === word.length){
                if(!node.wordEnd){
                    return false
                }
                node.wordEnd = false
                return Object.keys(node.child).length === 0
            }

            const char = word[index]
            const childNode = node.child[char]

            if(!childNode){
                return false
            }

            let shouldDeleteChild = deleteNode(childNode, word, index+1)

            if(shouldDeleteChild){
                delete node.child[char]
                return !node.wordEnd && Object.keys(node.child).length === 0
            }
            return false
        }
        deleteNode(this.root, data , 0)
    }

    
}

let triee = new trie()

triee.insert("shifna")
triee.insert("hanna")
triee.insert("sana")

console.log(triee.prefix("shif"))
console.log(triee.search("hanna"))
console.log(triee.search("safa"))
console.log(triee.autoCompletion("sa"))




// There are three cases when deleting a word from Trie.

// 1.The deleted word is a prefix of other words in Trie.
// 2.The deleted word shares a common prefix with other words in Trie.
// 3.The deleted word does not share any common prefix with other words in Trie.