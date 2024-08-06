//  understanding local storage

const str = "krishna kumar"

 const set  =  localStorage.setItem("name",str)


 const get =  localStorage.getItem("name")
 console.log(get)

//  name=  key   , str  value

// 

const obj = {
    name: "krishna",
    age:25,
    company:"applunch"
}

 const setter = (localStorage.setItem("obj1" , JSON.stringify(obj)))
 const getter = JSON.parse( localStorage.getItem("obj1"))

 console.log(getter);

//  using local storage


localStorage.setItem('removeItem', 'This will be removed');
console.log('Before removal:', localStorage.getItem('removeItem'));
localStorage.removeItem('removeItem');
console.log('After removal:', localStorage.getItem('removeItem'));


// session storage

 const string = "my self krishna kumar"
  const setting  = sessionStorage.setItem("name" , string)
  console.log(sessionStorage.getItem("name"))

  const obj2 = {
    name: "krishna",
    age:25,
    company:"applunch"
}

 const setter2 = (sessionStorage.setItem("obj1" , JSON.stringify(obj)))
 const getter2 = JSON.parse( sessionStorage.getItem("obj1"))

 console.log(getter);


//   local storage and session storage  using are same prosess


function saveToBothStorages(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
}

function logValuesFromBothStorages(key) {
    console.log('LocalStorage:', localStorage.getItem(key));
    console.log('SessionStorage:', sessionStorage.getItem(key));
}

saveToBothStorages('testKey', 'testValue');
logValuesFromBothStorages('testKey');    

function clearBothStorages() {
    localStorage.clear();
    sessionStorage.clear();
}

clearBothStorages();

console.log('LocalStorage after clear:', localStorage);
console.log('SessionStorage after clear:', sessionStorage);