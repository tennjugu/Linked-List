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
    firstNode(){
        return `value of first node: ${this.head.value}`
    }
    lastNode(){
        return `value of last node: ${this.tail.value}`
    }
    retrieveAt(index){
        let currentNode = this.head
        let  currentPosition= 0

        if (index < 0) {
            return "Invalid index. Enter a non-negative index."
        }
    
        while (currentNode !== null && index > currentPosition) {
            currentNode = currentNode.next
            currentPosition++
        }
        if(index === currentPosition){
            return `node at index ${index} is ${currentNode.value}`
        }
        if (index > 0 && index > currentPosition){
            return `Invalid index. Enter a value between 0 and ${currentPosition}`
        }
    }
    popAt(index) {
        let currentNode = this.head
        let previousNode = null
        let currentPosition = 0
        
        if (index < 0) {
            return "Invalid index. Enter a non-negative index."
        }
        while (currentNode !== null && currentPosition < index) {
            previousNode = currentNode
            currentNode = currentNode.next
            currentPosition++
        }
        if (index === 0) {
            if (currentNode === null) {
                return "Index not found."
            }
            this.head = currentNode.next //if there is at least one node, the head is is removed and the next node becomes the head
            if (currentNode === this.tail) {
                this.tail = previousNode
            }
            return `Removed node at index ${index} with value: ${currentNode.value}`
        }
        if (index === currentPosition) {
            if (currentNode === this.tail) {
                this.tail = previousNode
            }
            if (currentNode === null) {
                return `cannot remove ${index} with value: ${currentNode}`
            }else {
                previousNode.next = currentNode.next
            }
            return `Removed node at index ${index} with value: ${currentNode.value}`
        } 
        if (index > currentPosition) {
            return `Invalid index. Enter a value between 0 and ${currentPosition}`
        }
    }
    contains(value){
        let currentNode = this.head
        let status = false
        while (currentNode !== null){     
        }      
    }
}
  

let newList = new LinkedList()
newList.append(10)
newList.append(15)
newList.append(20)
newList.prepend(40)
console.log(newList)
console.log(newList.size())
console.log(newList.popAt(3))
console.log(newList)
console.log(newList.size())