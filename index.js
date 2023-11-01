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

console.log(newList.firstNode())
console.log(newList.lastNode())
console.log(newList.contains(10))
console.log(newList)
console.log(newList.size())