 class Node{
    constructor(value){
        this.data=value;
        this.next=null;
    }
}
class Linkedlist{
    constructor(){
        this.head=new Node();
    };
    append(value){
        const newNode=new Node(value);
        if(!this.head.data){
            this.head=newNode;
        }else{
            let cur=this.head;
            while(cur.next){
                cur=cur.next;

            }
            cur.next=newNode;
        }
       
       
    }
    prepend(value){
        const newNode=new Node(value);
        if(!this.head.data){
            this.head=newNode;
        }else{
            newNode.next=this.head;
            this.head=newNode;
        }
       
    }
    remove(index){
        if(index<0){
            return -1;
        }
        if(index===0){
            const headNext=this.head.next;
            if(headNext){
                this.head=headNext;
            }
            return index;
        }
            let cur=this.head;
            let idx=0;
            while(idx<index-1&&cur){
                idx++;
                cur=cur.next;

            }
            if(idx!=index-1){
                return -1;
            }
            cur.next=cur.next?.next;
            return idx;

        

    }
    isEmpty(){
        
       return this.head.data===undefined;
    }
    print(){
        let cur=this.head;
        let str=''
        while(cur){
            str+='->'+cur.data;
            cur=cur.next;
        }
        console.log('list',str)
    }
    
}

const li=new Linkedlist();
console.log(li.isEmpty()) ;
li.append(10);
li.prepend(5);
li.append(60);
li.prepend(0);
li.print();
console.log(li.remove(3));
li.print();
console.log(li.isEmpty()) ;

module.exports={Node,Linkedlist}
