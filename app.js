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