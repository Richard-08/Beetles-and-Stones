class Node {
    constructor(data, next=null) {
        this.data = data
        this.next = next
    }
}
///////////////////// Определение методов для работы со списком /////////////////////////
class LinkedList {
    constructor() {
      this.head = null
      this.length = 0
    }
    add(data) { // Добавление в начало связного списка (первый элемент становится вторым)
        this.head = new Node(data, this.head) 
        this.length++
      }

    remove(value) { // Удаление элемента
    let prevNode = null
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.data === value) {
        if (prevNode) {
          prevNode.next = currentNode.next
        } else {
          this.head = currentNode.next
        }
        currentNode = null
        this.length--
        return true
      }
      prevNode = currentNode
      currentNode = currentNode.next
    }
  }

  findMax() { // Нахождение элемента с максимальным значением
    let max = 0;
    let node = this.head
    while (node) {
      /* console.log(node.data) */
      if (node.data > max) {
          max = node.data;
      }
      node = node.next
    }
    return max;
  }
}


//////////////////////////////// Solution ///////////////////////////////////


const beetlesAndStones = (s, b) => {
    let freeStones = new LinkedList(); // список свободных камней
    freeStones.add(s);
    let left;
    let right;
    let maxFreeStones;
    let i;
    while (b > 0) {
        b -= 1;
        maxFreeStones = freeStones.findMax(); // Находим максимальное кол-во свободных камней

        i = Math.round(maxFreeStones / 2); // находим равноудаленный камень
        left = i - 1; // свободные камни слева
        right = maxFreeStones - i; // свободные камни справа

        freeStones.remove(maxFreeStones);
        freeStones.add(left);
        freeStones.add(right);
    }
    return [`Free stones in left: ${left}`, `Free stones in right: ${right}`];
}

console.log(beetlesAndStones(8, 1)); // 3, 4
console.log(beetlesAndStones(8, 2)); // 1, 2
console.log(beetlesAndStones(8, 3)); // 1, 1
console.log(beetlesAndStones(8, 8)); // 0, 0
/* console.log(beetlesAndStones(4000000000, 100000)); // 30516, 30517  */




