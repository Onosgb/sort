import { LinkedList } from "./LinkedList";
import { NumbersCollections } from "./NumbersCollection";
import { CharactersCollections } from "./CharactersCollection";

// sort number collections
const numberCollections = new NumbersCollections([10, 3, -5, 0, 8, 20]);
numberCollections.sort();
console.log(numberCollections.data);

//sort character collections
const characterCollections = new CharactersCollections("badkzxqk");
characterCollections.sort();
console.log(characterCollections.data);

// sort link list
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
