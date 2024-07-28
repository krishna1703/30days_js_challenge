import axios from 'axios';
import _ from 'lodash';
// lodash done 

// Sample array of numbers
const numbers = [1, 2, 3];

// Use Lodash's map function to double each number
const doubled = _.map(numbers, (num) => num * 2);

// Export the doubled array
export { doubled };




// axios 


const fetchData  = async ()=>{
    try {
        
const fetchDatafromapi  = await axios.get("https://fakestoreapi.com/products")
 const data  = fetchDatafromapi.data
 console.log(data)


    } catch (error) {
        console.log(error)
    }
}
fetchData()