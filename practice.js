//Objects
let person={name: "Caleb",
age:20,
country:"Ghana"}

function logData(){
  console.log(person.name + " is "+ person.age+" years old "+"and lives in"+ " "+ person.country)
}
logData()

//Else/if/else if
let age = 75

if (age < 6){
  console.log("free")
}
else if(age >= 6 && age < 18 ){
  console.log("Child discount")
}
else if(age >= 18 && age <= 26){
  console.log("Student discount")
}
else if(age >= 27 && age <= 66 ){
  console.log("Full price")
}
else{console.log("senior citizen discount")}

//for loops

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]
console.log("Five largest countries in the world:")
for(let i=0; i < largeCountries.length; i ++){
  console.log("-"+ largeCountries[i])
}

//Push/Pop/Unshift/Shift
let largeCountry = ["Tuvalu","India","USA","Indonesia","Monaco"]
largeCountry.pop()
largeCountry.push("Pakistan")
largeCountry.shift()
largeCountry.unshift("China")

console.log(largeCountry)


//IF and AND/ or

let dayOfMonth = 31
let weekday = "Friday"

if(dayOfMonth === 13 && weekday === "Friday"){
  console.log("😱")
}

// Rock Paper Scissors
let hands = ["rock","paper","scissor"]
function RPC(){
  let game = Math.floor(Math.random() * 3)
  return hands[game]
  
}
console.log(RPC())

//apple and orange

let fruit = ["apple","orange", "apple","apple","orange"]

function sort(){
  for (let i = 0; i < fruit.length; i +=1){
    if (fruit[i]==="apple"){
      appleShelf.textContent += "Apple Shelf"
    }
    else{
      orangeShelf.textContent += "Orange Shelf"
    }
  }
  
}


// Template Strings
const recipient = "Ball"

const sender = "Caleb"
const email = `Hey ${recipient}! 
How is it going?
 Cheers ${sender}`
console.log(email)

let myLeads = `["www.awesomelead.com"]`
myLeads = JSON.parse(myLeads)

myLeads.push("www.epicleads.com")
myLeads = JSON.stringify(myLeads)



console.log(typeof myLeads)


//truthy and falsy
//falsy = false, 0, "", null, undefined, nan
// null is how developers define emptiness and Undefined is how javascript defines emptiness


//Checking truthyness or falsyness

console.log(Boolean(""))  // false
console.log(Boolean("0")) // true
console.log(Boolean(100)) //true
console.log(Boolean(null)) //false
console.log(Boolean([0])) // true
console.log(Boolean(-0)) //false


//Function Parameters
//const welcomeEl = document.getElementById("welcome-el")

//function greetUser(greeting, name, emoji){
 // welcomeEl.textContent = `${greeting}, ${name}, ${emoji}`
//}greetUser("Howdy ","Teye Caleb Jeffery","🐾")

//parameters
function add(x, y){
  return x + y 


  //arguments are created outside the function
}
console.log(add(3, 4))
console.log(add(9,102))


//number2
function getFirst(arr){
  return arr[0]
}
console.log(getFirst([3,5,2,1,6]))

//Practice
let myCourse = ["Learn CSS Animations","UI Design Fundamentals","Intro to Clean code"]

function arraya(arr){
  for(let i =0; i< arr.length; i++)
  console.log(arr[i])

}
arraya(myCourse)


//3
function generateSentence(desc,arr){
  for(let i=0;i<arr.length;i++)
  console.log(`The ${arr.length} ${desc} are ${arr}`)
}
generateSentence("fat ass bitches", ["Anita","Brigdet", "Temari","Mango"])
