// index2.js

// task 1
import { sum } from './index1.js';

sum(55, 55); // This will log 110

// task2

import {personData} from './index1.js' 
console.log(personData)
console.log(personData.name , personData.age , personData.place)

// task3

import {multi} from './index1.js';
multi(5,36)

import { subs } from './index1.js';
subs(50,3)

// task4
import date from './index1.js'
console.log(date)

// task5
import * as mymodule from  './index3.js'

console.log(mymodule.day.getDay())

console.log(mymodule.date.getDate())
console.log(mymodule.number)

 console.log(mymodule.square(5,5))

