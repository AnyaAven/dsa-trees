import { TreeNodeNum } from "../common/tree";

/** numGreater(lowerBound): starting from the invoking node and moving
 * through its children, return a count of the number of nodes whose value
 * is greater than lowerBound. */

function numGreater(node: TreeNodeNum, lowerBound: number): number {
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

export { numGreater };