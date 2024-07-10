import { TreeNodeNum } from "../common/tree";

/** sumValues(): add up all values of node and its descendants.
 * Returns sum as an integer. */
function sumValuesLoop(node: TreeNodeNum): number {
    let sum = 0;

    const toVisit = [node];

    while(toVisit.length > 0){
      const current = toVisit.pop()!;

      sum += current.val;

      for(const child of current.children){
        toVisit.push(child);
      }
    }
    return sum;
}

function sumValues(node: TreeNodeNum): number {
  if(node.children.length === 0) return node.val;
  let sum = node.val;
  for(const child of node.children){
    sum += sumValues(child)
  }
  return sum;
}

export { sumValues };
