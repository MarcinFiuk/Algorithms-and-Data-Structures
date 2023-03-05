// Breadth first - horizontal - from felt to right -good when the tree is very depth and not very wide
//Depth first - vertical - good then the tree is very wide
// -inOrder return data in underlying order
//-preOrder return data which help duplicate/clone the tree

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;

        while (true) {
            if (newNode.val === currentNode.val) {
                return;
            }

            if (newNode.val > currentNode.val) {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            } else if (newNode.val < currentNode.val) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            }
        }
    }

    find(val) {
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;

        while (currentNode) {
            if (currentNode.val === val) {
                return true;
            }

            if (val > currentNode.val) {
                currentNode = currentNode.right;
            } else if (val < currentNode.val) {
                currentNode = currentNode.left;
            }
        }

        return false;
    }

    // breadth first search
    bfs() {
        const queue = [];
        const data = [];
        let node = this.root;

        if (!this.root) {
            return;
        }

        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            // data.push(node);
            data.push(node.val);

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        return data;
    }

    dfsPreOrder() {
        const data = [];
        const current = this.root;

        function traverse(node) {
            // data.push(node)
            data.push(node.val);

            if (node.left) {
                traverse(node.left);
            }

            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(current, data);

        return data;
    }

    dfsPostOrder() {
        const data = [];
        const current = this.root;

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            data.push(node.val);
        }

        traverse(current);
        return data;
    }

    dfsInOrder() {
        const data = [];
        const current = this.root;

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            data.push(node.val);
            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(current);
        return data;
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.insert(11);

console.log(tree.dfsInOrder());
