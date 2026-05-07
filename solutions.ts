// problem 1
const filterEvenNumbers = (arry: number[]): number[] => {
  let evenNumbers: number[] = [];
  arry.forEach((num: number) => {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  });
  return evenNumbers;
};

const myNumbers = [1, 2, 3, 4, 5, 6];
const evenAges = filterEvenNumbers(myNumbers);
// console.log(evenAges);




// problem 2
const reverseString = (str: string): string => {
  const reversed = str.split("").reverse().join("");
  return reversed;
};

const myString = "typescript";
const reversedString = reverseString(myString);
// console.log(reversedString);




// problem 3
type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): string => {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
};

const value1 = "Hello";
const type1 = checkType(value1);
// console.log(type1);




// problem 4
type User = {
  id: number;
  name: string;
  age: number;
};

const getProperty = (obj: User, key: keyof User) => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };
const userName = getProperty(user, "name");
// console.log(userName);




// problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
  return {
    ...book,
    isRead: true,
  };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
const updatedBook = toggleReadStatus(myBook);
// console.log(updatedBook);




// problem 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

    constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    const srt = `Name:${this.name}, Age:${this.age}, Grade:${this.grade}`;
    return srt;
  }

}
const student = new Student("Alice", 20, "A");
const srt =  student.getDetails();
// console.log(srt);




// problem 7
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  let commonArray: number[] = [];

  arr1.forEach((num: number) => {
    if (arr2.includes(num)) {
      commonArray.push(num);
    }
  });

  return commonArray;
};

const newArray = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
// console.log(newArray);
