import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {
  if(node === null) return 0; // TODO: how does it ever get called with null?
  if(node.children.length === 0) return 1;

  let highestPath = 1;
  // let count = 1;
  for(const child of node.children){
    const pathDepth = maxDepth(child) + 1 // + 1 to count the node passed in
    if(pathDepth > highestPath) highestPath = pathDepth
  }
  return highestPath;
}

export { maxDepth };
