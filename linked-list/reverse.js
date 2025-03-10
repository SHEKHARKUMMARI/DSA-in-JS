import { Node, Linkedlist } from "./index.js";

const reverseList = (list) => {
  let current = list.head;
  let prev = null;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  list.head = prev;
  return list;
};

const list = new Linkedlist();
list.append(10);
list.append(20);
list.append(30);
console.log(list.print(), reverseList(list)?.print());
