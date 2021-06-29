/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function minDepthBinary(n) {
      // these are nodes so add a 1 outside of the recurser
      if (n.left === null && n.right === null) return 1;
      if (n.left === null) return minDepthBinary(n.right) + 1;
      if (n.right === null) return minDepthBinary(n.left) + 1;
      // use Math.min to find the smallest value
      // order is irrelevant so go left to right convention
      return Math.min(minDepthBinary(n.left), minDepthBinary(n.right)) + 1;
    }
    return minDepthBinary(this.root)
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    
    function maxDepthBinary(n) {
      if (n.left === null && n.right === null) return 1;
      if (n.left === null) return maxDepthBinary(n.right) + 1;
      if (n.right === null) return maxDepthBinary(n.left) + 1;
      return Math.max(maxDepthBinary(n.left), maxDepthBinary(n.right)) + 1;
    }
    return maxDepthBinary(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
   let sum = 0;

   function maxSumBinary(n) {
    //  checks each individual node
     if (n === null) return 0;
     const addLeft = maxSumBinary(n.left);
     const addRight = maxSumBinary(n.right);
    //  see if the current sum is less than or greater than sum of values along node
     sum = Math.max(sum, n.val + addLeft + addRight);
     return Math.max(n.val + addLeft, n.val + addRight, 0);
   }
   maxSumBinary(this.root);
   return sum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let small = null;

    function findSmall(n) {
      if (n !== null) {
        if ((small > n.val || small === null) && n.val > lowerBound) {
          small = n.val;
        }
        let lefty = findSum(n.left);
        let righty = findSum(n.right);
        
      return Math.min(n.val, lefty, righty)
      }
    }
    findSmall(this.root)
    return small;
  }

  /** class solution to nextLarger(lowerbound) */ 
  // nextLarger(lowerBound) {
  //   if (!this.root) return null;

  //   // let's use BFS for this!
  //   let queue = [this.root];
  //   let closest = null;

  //   while (queue.length) {
  //     let currentNode = queue.shift();
  //     let currentVal = currentNode.val;
  //     let higherThanLowerBound = currentVal > lowerBound;
  //     let shouldReassignClosest = currentVal < closest || closest === null;

  //     if (higherThanLowerBound && shouldReassignClosest) {
  //       closest = currentVal;
  //     }

  //     if (currentNode.left) queue.push(currentNode.left);
  //     if (currentNode.right) queue.push(currentNode.right);
  //   }

  //   return closest;
  // }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
