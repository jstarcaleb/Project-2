

let messages = [
  "Hey, how's it going?", 
  "I'm great, thank you!",
  "All good. Been working on my portfolio lately."
,"Good to know","😁😁😁","😉"]


let newMessage = "same here!"

messages.push(newMessage)

for (let i = 0; i<messages.length; i+= 1){
  console.log(messages[i])

}


let carts = [7, 3 ,9]

for (let i = 0; i < carts.length; i +=1){
  console.log(carts[i])
}

let sentence = ["Hello", "my", "name", "is", "Caleb"]
let greetingEl = document.getElementById("greeting-el")

for (let d = 0; d < sentence.length; d += 1 ){
  greetingEl.textContent += sentence[d] + " "
}