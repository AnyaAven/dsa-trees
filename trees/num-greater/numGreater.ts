import { TreeNodeNum } from "../common/tree";

/** numGreater(lowerBound): starting from the invoking node and moving
 * through its children, return a count of the number of nodes whose value
 * is greater than lowerBound. */

function numGreaterLoop(node: TreeNodeNum, lowerBound: number): number {
  let count = 0;

  const toVisit = [node];

  while(toVisit.length > 0){
    const current = toVisit.pop()!;

    if(current.val > lowerBound) count++;

    for(const child of current.children){
      toVisit.push(child);
    }
  }
  return count;
}

function numGreater(node: TreeNodeNum, lowerBound: number): number {
  if(node.children.length === 0) return node.val > lowerBound? 1: 0

  let count = node.val > lowerBound? 1: 0;
  for(const child of node.children){
    count += numGreater(child, lowerBound)
  }
  return count;
}

export { numGreater };