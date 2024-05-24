
const Fruits = ['Apple', 'Orange', 'Mango', 'Banana', 'Peach']

Fruits.map((fruit, index)=>{ // loops through all of the elements of the array, with their respective indeces.
    return(<h1>{fruit}</h1>) // Create an H1 element for each element of the array
})

Fruits.filter((fruit, index)=>{
    return fruit !== 'Apple' // Returns an array of fruits without apple.
})