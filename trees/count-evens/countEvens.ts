import { TreeNodeNum } from "../common/tree";

/** countEvens(): starting from the invoking node and moving through its
 * children, count how many nodes have even values. Returns that count as
 * an integer. */
function countEvens(node: TreeNodeNum): number {
  let eventCount = 0;

  const toVisit = [node];

  while(toVisit.length > 0){
    const current = toVisit.pop()!;

    if(current.val % 2 === 0) eventCount++;

    for(const child of current.children){
      toVisit.push(child);
    }
  }
  return eventCount;
}

export { countEvens };
