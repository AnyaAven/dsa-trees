import { BNodeNum } from "../common/bintree";

/** Minimum depth from node to an "incomplete node".
 *
 * An incomplete node is a node with 0 or 1 children (not 2).
 */

function minDepthToIncomplete(node: BNodeNum): number {
  if(node.lnode === null || node.rnode === null) return 1;

  const lval = minDepthToIncomplete(node.lnode);
  const rval = minDepthToIncomplete(node.rnode);

  return Math.min(lval, rval) + 1;
}

export { minDepthToIncomplete };
