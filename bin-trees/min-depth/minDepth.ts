import { BNodeNum } from "../common/bintree";

/** Get minimum depth from node.
 *
 * Minimum depth: length of shortest path from node to a leaf.
 **/

function minDepth(node: BNodeNum): number {
  if(node.lnode === null && node.rnode === null) return 1;

  // If we only have the right side, only search right
  if(node.lnode === null){
    return minDepth(node.rnode!) + 1
  }

  // If we only have the left side, only search left
  if(node.rnode === null){
    return minDepth(node.lnode!) + 1
  }

  // If we have both nodes, determine which is the min.
  const lDepth = minDepth(node.lnode);
  const rDepth = minDepth(node.rnode);

  return Math.min(lDepth, rDepth) + 1;
}

export { minDepth };