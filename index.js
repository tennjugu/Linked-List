class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

//class LinkedList{
   //constructor(){
   // this.head = null
   // this.tail = null
   //}

  // append(value){
   // const newNode = new Node(value)
    // if (this.head === null){
    //     //[]
    //     //node = 10
    //     //[(10, null)]
    //     this.head = newNode
    //     this.tail = newNode
    //     return
    // }else{
    //     //[(10, {null})]
    //     //tail = 10, null
    //     //[(10,{15, {null}})]
    //     this.tail.next = newNode
    //     this.tail = newNode
    // }
//}

class LinkedList {
    constructor() {
      this.head = null
      this.tail = null
    }
  
    append(value) {
      const newNode = new Node(value)
      if (this.head === null) {
        this.head = newNode
        this.tail = newNode // Set the tail for the first element
        return
      } else {
        this.tail.next = newNode // Update the current tail's next to the new node
        this.tail = newNode // Update the tail to the new node
      }
    }
    prepend(value){
        const newNode = new Node(value)
        if (this.head === null){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head // the former head becomes the next node
            this.head = newNode // new node becomes the head
        }
    }
    size() {
        let totalNode = 0
        let currentNode = this.head
        
        while (currentNode !== null) {
            totalNode++
            currentNode = currentNode.next
        }
        return `Total node(s): ${totalNode}`
    }
   
}
  

let newList = new LinkedList()
newList.append(10)
console.log(newList)
newList.append(15)
console.log(newList)
newList.append(20)
console.log(newList)
newList.prepend(40)
console.log(newList)
console.log(newList.size())
