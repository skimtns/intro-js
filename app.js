var colors = ["red", "#00FF48", "blue", "orange"]
  var btn = document.getElementById("btn")
  btn.addEventListener("click", changeColor)
  function changeColor(){
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
  }


  // var pDemo = document.getElementByID("demo")
  // var imageSrc = document.getElementById("img")
  // pDemo.innerHTML = "hello world"

  // document.getElementsByClassName("demo2").text = "Hahaha"
  // document.getElementByTagName("p")

  // imageSrc.src = "https://images.unsplash.com/photo-1544427182-ecaee9a40564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  // imageSrc.src = "https://images.unsplash.com/photo-1505851543971-19811a8f4c21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"

  // pDemo.style.color = "red"

  // Event handlers

  // onclick = js

  // element.addEventListener(event, function, useCapture)
  // element.addEventListener("click", function() {
  //   do something 
  // })

    // element.addEventListener("click", myFunction)

    // function myFunction(){
    //   do something
    // }



    // scope 

    var foo = 'bar'; // global -- it's defined by the placement not by name 

    function someFunction(params1, params2){
      // params1 and 2 are local variables 
      var bar = 'foo' // local -- local because of the access only within the function
    }

    function myFunction (){
      // debugger
      console.log(bar)  // gives error because of the scope of the variable
      console.log(foo) // gives 'bar' because foo is global
    }

    function whatIsThis(){
      baz = "what variable is this?" 
    }

    // console.log(baz)  // gives an error
    
    whatIsThis()
    // console.log(baz)

    // myFunction()

    // objects
    // arrays, hashes, function, classes 

    // window object what the user sees
      // window
        // global
        // function calls 

  var num = 23
  console.log(this.num)
  console.log(this)

  var person = {
    firstName: 'bob',
    lastName: 'smith',
    func: function(){
      return this.firstName + " " + this.lastName
    }
  }

  console.log(person.func())


  // single comment
/* 
multi
line comment// 
*/

// array - is an object not a data type 
// string
// float
// integer
// boolean
// null 
// undefined 
// object key, value pairs
// date


// console.log('hello world today')

// // operator
// console.log(1+2)
// console.log(1-1)
// console.log(1*5)
// console.log(1/1)
// console.log(Math.pow(2,3))
// console.log((2+3*6) -1*5)

// comparators, always returns true or false, > < >= <= == === !=

// console.log( 4 > 2)

// logical operators && (both sides to be true)   || (one side has to be true)

// variables 

// var name = 'Bob'
// camel case for multiple words variable names 
// starts with a letter or $ or _ 
// case sensitive 
// cannont have them be reserved words 
// var lastName = 'marley'

// var balance = 1000
// balance++
// balance--
// balance+= 1
// balance-=10
// console.log(balance)

// var greeting = "hello"
// var planet = "world"
// console.log(greeting + planet)

// console.log(greeting + 32)
// console.log(greeting +3/2)

// console.log(greeting + " Name: \t World")

// console.log(greeting.length)
// console.log(greeting.length > planet )
// console.log(greeting.charAt(4))

// var num = Number("1.363234343")
// console.log(num)
// console.log(parseInt('1.86876'))
// console.log(parseFloat(1.23434))
// console.log(num.toString())

// console.log(num.toFixed(2))
// console.log(num.toPrecision(2))

// Math.random()
// console.log((Math.random() * 7).toPrecision(2))
// console.log(Math.min(2,1,-1,12,28))
// console.log(Math.round(3.74))
// console.log(Math.floor(3.74))
// console.log(Math.ceil(3.14))
// console.log(Math.PI)

// var arr = ["Marc", "Kira", "Henry"]
// console.log(arr[2])
// console.log(arr.indexOf("Kira"))
// console.log(arr.join(" and "))
// console.log(arr.includes("Marc"))

// << ruby way to push objects in the array

// console.log(arr.push("green"))
// console.log(arr)
// console.log(arr.unshift("red"))
// console.log(arr)
// console.log(arr.pop())
// console.log(arr)
// console.log(arr.slice(1))
// console.log(arr)
// console.log(arr.length)
// console.log(arr.reverse())
// console.log(arr)

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// arr.forEach (function(element) {
//   console.log(element)
// })

// map

// arr.map (function(a){
//   return a 
// })


// filter

// arr.filter(function (a){
//   console.log(a)
// })

// arr.reduce(function(a, num){
//   return a + num 
// })

// objects

// - hash key value pairs {}
// - Json key value pairs 
// - Instantied Objects
//   var person = Person.new()

// var person = {name: "bob", age:36}
// console.log(person.name)
// console.log(person['name'])

// console.log(person.name = 'craig')

// var people = {
//   name: ['bob', 'joe', 'susie', 'jane']
//   ages: [2,3,4,5,6]
// }

// var cars = {
//   cars: [
//     {make: 'ford', price: 12345},
//     {make: 'fordsasds', price: 125},
//   ]
// }


//JSON

// Javascript Object Notation
// {
//   "firstName": "john",
//   "lastName": "wayne"
// }

// var person = JSON.parse(object)

// console.log()

// debugger is the debugger for the js = like pry in ruby
