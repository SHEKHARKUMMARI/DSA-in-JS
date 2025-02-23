// Given the head, the head of a singly linked list, Returns true if the linked list is circular & false if it is not circular.

// A linked list is called circular if it is not NULL terminated and all nodes are connected in the form of a cycle. 

const {Node}=require('./index');

// This is called tortoise and hare algorithm || Floyd's Cycle Detection Algorithm

function isCircular(head) {
    let h=head;
    let h2=head;
    do{
        h=h?.next;
        h2=h2?.next?.next;
    }while(h&&h2&&h!=h2);
    // code here
    if(h&&h2&&h==h2){
        return true;
    }
    return false;
}

const giveC=()=>{
    let n1=new Node(10);
    let n2=new Node(20);
    let n3=new Node(30);
    let n4=new Node(40);
    n1.next=n2;
    n2.next=n3;
    n3.next=n4;
    n4.next=n2; // cycling
    return n1;
}
const giveL=()=>{
    let n1=new Node(10);
    let n2=new Node(20);
    let n3=new Node(30);
    let n4=new Node(40);
    n1.next=n2;
    n2.next=n3;
    n3.next=n4;
    return n1;
}
console.log(isCircular(giveC()),isCircular(giveL()))