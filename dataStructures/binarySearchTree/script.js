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
            }

            if (val < currentNode?.val) {
                currentNode = currentNode.left;
            }
        }

        return false;
        // while (true) {
        //     if (currentNode.val === val) {
        //         return true;
        //     }
        //     if (val > currentNode.val) {
        //         if (currentNode.right) {
        //             currentNode = currentNode.right;
        //         } else {
        //             return false;
        //         }
        //     }
        //     if (val < currentNode.val) {
        //         if (currentNode.left) {
        //             currentNode = currentNode.left;
        //         } else {
        //             return false;
        //         }
        //     }
        // }
    }
}

const bst = new BinarySearchTree();

bst.insert(30);
bst.insert(22);
bst.insert(40);
bst.insert(21);
bst.insert(33);
bst.insert(44);
bst.insert(1);
bst.insert(64);
bst.insert(88);
bst.insert(1);
const r = bst.find(89);
console.log(r);
