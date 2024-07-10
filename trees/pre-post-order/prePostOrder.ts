import { TreeNodeNum } from "../common/tree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of values of visited nodes. */

function preOrder(node: TreeNodeNum | null): number[] {
  if (node === null) return [];
  const vals = [node.val];

  for (const child of node.children) {
    vals.push(...preOrder(child))
  }

  return vals;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of values of visited nodes. */

function postOrder(node: TreeNodeNum | null): number[] {
  if (node === null) return [];
  const vals: number[] = [];

  for (const child of node.children) {
    vals.push(...postOrder(child))
  }
  vals.push(node.val)

  return vals;
}

export { preOrder, postOrder };
