function TreeNode(val) {
     this.val = val;
      this.left = this.right = null;
 }
//handy data to use for any kind of Tree Problem
 var rootNode = new TreeNode(1);
   rootNode.left = new TreeNode(-1);
     rootNode.left.left = new TreeNode(-2);
     rootNode.left.right = new TreeNode(-3);
        rootNode.left.right.right = new TreeNode(5);
  rootNode.right = new TreeNode(11);
     rootNode.right.left = new TreeNode(21);
     rootNode.right.right = new TreeNode(6);


// below are the iterative functions for Tree Traversal

function preOrder(root){
    var stack1 = [];
    stack1.push(root);
    while(stack1.length !=0){
       let node = stack1.pop();
       console.log(node.val);
       if(node.right != null)
         stack1.push(node.right);
       if(node.left != null)
         stack1.push(node.left);

    }
}

function postOrder(root){
   var stack1 = [], stack2 = [];
   stack1.push(root);
   while(stack1.length !=0){
     var node = stack1.pop();
     stack2.push(node.val);
     if(node.left != null)
         stack1.push(node.left);
     if(node.right != null)
         stack1.push(node.right);
   }
  return stack2.reverse();
}



function inOrder(root){
    var stack1 = [];
    rootNode = root;
    while(true){
      if(rootNode !=null){
        stack1.push(rootNode);
        rootNode = rootNode.left;
      }else{
         if(stack1.length ==0)
              break;
         let curNode = stack1.pop();
         console.log(curNode.val);
         rootNode = curNode.right;
      }
    }
}
