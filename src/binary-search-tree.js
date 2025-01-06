const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
      }
    }
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  

  add(data) {
      this.root = this.addWithin(this.root, data);
    }

    addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data){
        return node;
      }
      if (data < node.data){
        node.left = this.addWithin(node.left, data);
      }else {
        node.right = this.addWithin(node.right, data);
      }
      return node;
    }
  
    getRoot() {
      return this.root;
      }


  has(data) { 
    return this.searchWithin(this.root, data); } 
  
  searchWithin(node, data) { 
    if (!node) { 
      return false; } 
    if (node.data === data) { 
      return true; } 
    return data < node.data ? 
      this.searchWithin(node.left, data) : 
    this.searchWithin(node.right, data); }
  


  remove(data) {
   return this.removeWithin(this.root, data)
}
  
  removeWithin(node, data){
    if(!node){
      return null;
}

    if (data < node.data){
      node.left = this.removeWithin(node.left, data);
      return node;
}  else if (node.data < data){
node.right = this.removeWithin(node.right, data);
return node;
} else {
  if(!node.left && !node.right) {
    return null;
  }

  if (!node.left) {
    node = node.right;
    return node; 
  }

  if (!node.right) {
    node = node.left;
    return node;
  }

  let minFromRight = node.right;
  while(minFromRight.left) {
    minFromRight = minFromRight.left;
  }
  node.data = minFromRight.data;

  node.right = this.removeWithin(node.right, minFromRight.data);

  return node;

}
  }
}
    const tree = new BinarySearchTree();
    tree.add(1);
    tree.add(2);
    tree.add(3);     
    tree.add(4);
    tree.add(5);
    

  console.log(tree.getRoot().data);
  console.log(tree);
  console.log(tree.has(5));
  tree.remove(5); 
  console.log(tree.has(5));
  

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};