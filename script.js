class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    //if head is null (ll empty), make a new node and set it to head
    if (this.head == null) {
      this.head = new Node(value);
    } else {
      this.tail().nextNode = new Node(value);
    }
  }

  prepend(value) {
    if (this.head == null) {
      this.head = new Node(value);
    } else {
      //does head need to be stored before using?
      this.head = new Node(value, this.head);
    }
  }

  size() {
    let count = 0;

    let tmp = this.head;
    while (tmp) {
      //not sure on this
      count++;
      tmp = tmp.nextNode;
    }
    return count;
  }

  head() {
    return this.head;
  }

  tail() {
    if (this.head == null) {
      return null;
    } else {
      let tmp = this.head;
      //while next node isn't null, iterate until you get to null, and return that node
      while (tmp.nextNode) {
        tmp = tmp.nextNode;
      }

      return tmp;
    }
  }
  at(index) {
    //zero indexed
    let size = this.size();
    //what to do if index out of bounds
    if (index < 0) {
      //reverse index into a positive
      index = size + index;
    }
    if (index == 0) {
      return this.head;
    } else {
      let count = 0;
      let tmp = this.head;
      while (index !== count) {
        count++;
        tmp = tmp.nextNode;
      }
      return tmp;
    }
  }
  pop() {
    //what about size = 1
    let tmp = this.at(-2);
    tmp.nextNode = null;
  }
  contains(value) {
    let tmp = this.head;
    while (tmp) {
      if (tmp.value == value) {
        return true;
      } else {
        tmp = tmp.nextNode;
      }
    }
    return false;
  }

  find(value) {
    let tmp = this.head;
    let count = 0;
    while (tmp) {
      if (tmp.value == value) {
        return count;
      } else {
        count++;
        tmp = tmp.nextNode;
      }
    }
    return null;
  }

  toString() {
    let string = "";
    let tmp = this.head;
    while (tmp) {
      string += "( " + tmp.value.toString() + " ) -> ";
      tmp = tmp.nextNode;
    }
    string += "null";
    return string;
  }

  insertAt(value, index) {
    let tmp = this.at(index);
    let tmpPrev = this.at(index - 1);
    tmpPrev.nextNode = new Node(value, tmp);
  }

  removeAt(index) {
    let tmp = this.at(index - 1);
    let tmpNext = this.at(index + 1);
    tmp.nextNode = tmpNext;
  }
}

console.log("Initialize list");

let list = new LinkedList();

console.log("Append list");

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log("Prepend list");
list.prepend("heyy");

console.log("First print list");
console.log(list.toString());

console.log("Size");
console.log(list.toString());
console.log(list.size());

console.log("Head");
console.log(list.toString());
console.log(list.head);

console.log("Tail");
console.log(list.toString());
console.log(list.tail());

console.log("Index at test for 3");
console.log(list.toString());
console.log(list.at(3));

console.log("Index at test for -2");
console.log(list.toString());
console.log(list.at(-2));

console.log("Test pop (remove last element)");
console.log(list.toString());
list.pop();
console.log(list.toString());

console.log("Test contains hamster, and find for index value");
console.log(list.contains("hamster"));
console.log(list.find("hamster"));

console.log("Test contains pizza, and find for index value");
console.log(list.contains("pizza"));
console.log(list.find("pizza"));

console.log("Test insert 'bacon' at index 3");
console.log(list.toString());
list.insertAt("bacon", 3);
console.log(list.toString());

console.log("Test remove at index 4 (should remove parrot)");
console.log(list.toString());
console.log(list.at(4));
list.removeAt(4);
console.log(list.toString());
