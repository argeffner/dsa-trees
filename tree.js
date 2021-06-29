/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // if there is no root return 0
    if (!this.root) return 0;

    let total = this.root.val;

    //use recursion function to loop through nodes
    /** Go through each child of the chilren node
     *  add the value of each child to total 
     * and check if the child has children
     *   -if yes use recursion on that child
     */
    function addRoots(n) {
      for (let child of n.children) {
        total += child.val

        if (child.children.length > 0)
          addRoots(child)
      }
    }

    addRoots(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // if there is no root return 0
    if (!this.root) return 0;

    let count = 0;

    function evenRoots(n) {
      for (let child of n.children) {
        if (child.val % 2 === 0) {
        count += 1;
        }
        if (child.children.length > 0) {
          evenRoots(child)
        }
      }
    }

    evenRoots(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

    if (!this.root) return 0;

    let count = (this.root.val > lowerBound) ? 1 : 0;

    function greaterRoots(n){
      for (let child of n.children) {
        if (child.val > lowerBound) {
          count += 1;
        } 
        if (child.children.length > 0) {
          greaterRoots(child);
        }
      }
    }
    greaterRoots(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
