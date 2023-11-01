# Linked-List

This is a simple implementation of a linked list in JavaScript, created as part of The Odin Project curriculum. The linked list consists of two classes or factories: `LinkedList` and `Node`.

## Classes

### LinkedList

The `LinkedList` class represents the full list and provides various methods to manipulate it. 

#### Methods

1. `append(value)`: Adds a new node containing the given `value` to the end of the list.

2. `prepend(value)`: Adds a new node containing the given `value` to the start of the list.

3. `size()`: Returns the total number of nodes in the list.

4. `head()`: Returns the first node in the list.

5. `tail()`: Returns the last node in the list.

6. `retrieveAt(index)`: Returns the node at the given index.

7. `pop(index)`: Removes the last element from the list.

8. `contains(value)`: Returns `true` if the passed-in `value` is in the list and otherwise returns `false`.

9. `find(value)`: Returns the index of the node containing the given `value`, or `null` if not found.

10. `toString()`: Represents your `LinkedList` objects as strings in the format: ( value ) -> ( value ) -> ( value ) -> null

### Node

The `Node` class represents individual nodes in the linked list. Each node has a `value` property and a link to the `nextNode`, set as `null` by default.

## Usage

You can use this linked list by creating instances of the `LinkedList` class and calling the methods described above. Here's an example of how to use it:

```javascript
const myList = new LinkedList()
myList.append(10)
myList.append(15)
myList.append(20)
myList.prepend(40)
console.log(newList.size())
console.log(newList.retrieveAt(2))
```
