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
    size = this.size();
    //what to do if index out of bounds
    if (index < 0) {
      index = size + index;
      console.error("Invalid index");
      //don't think you can do negative indexes with this... unless you traverse the whole thing
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
    let tmp = at(-2);
    tmp.nextNode = null;
  }
  contains(value) {}

  find(value) {}

  toString() {
    let string = "";
    let tmp = this.head;
    while (tmp) {
      string += "( " + tmp.value.toString() + " ) -> ";
      tmp = tmp.nextNode;
    }
    string += "null";
    console.log(string);
    return string;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.toString();
