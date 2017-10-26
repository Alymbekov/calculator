// var btn = document.getElementById('ce');

// btn.addEventListener("click" , function (e) {
// 	alert("No");
// });


// var butt = document.querySelectorAll(".btn");
// var display = document.getElementById("display");

// var handleClick = function (e) {
// var value = e.target.textContent;
// display.value = value;

// };

// for (var i = 0; i < butt.length; i++) {
//  	var btn = butt [i];

//  	btn.addEventListener("click",handleClick); 
//  } 
//  
var numbers = document.querySelectorAll(".number");
                operations = document.querySelectorAll(".operation");
            decimal = document.getElementById("decimal");
      clearbtn = document.querySelectorAll(".clear_btn")
            result = document.getElementById("result");
                howWorkbtn = document.getElementById("howWorkbtn");
                  display = document.getElementById("display");
                    MemoryCurrentNumber = 0; 
                    MemoryNewNumber = false;
                    MemoryPendingOperation = "";

   for (var i = 0; i<numbers.length; i++) {
                     var number = numbers[i];
                         number.addEventListener("click",function(e){
                         numberPress(e.target.textContent);
                     });

   };
   for (var i = 0; i<operations.length; i++) {
                     var operationbtn = operations[i];
                         operationbtn.addEventListener("click" , function(e){ 
                            operation(e.target.textContent);

                         });
   };
    for (var i = 0; i<clearbtn.length; i++) {
                     var clearbtns = clearbtn[i];
                         clearbtns.addEventListener("click",function(e){
                         	clear(e.srcElement.id);
                         	
                         }); 

   };
    decimal.addEventListener("click" , decimal);
     howWorkbtn.addEventListener("click" , function (e){
                              console.log("Клик по knopke");});




   function numberPress(number){
       if (MemoryNewNumber) {
           display.value = number;
           MemoryNewNumber = false;

       } else {

       	     if(display.value === "0"){
       	        display.value = number;
       } else {
            display.value += number; 
	   };
	};
}; 

       
function operation(op){
	var LocalOperationMemory = display.value;
      
      if (MemoryNewNumber && MemoryPendingOperation !== "=") {
      	 display.value = MemoryCurrentNumber;
      } else {
      	MemoryNewNumber = true;
      	
      	if (MemoryPendingOperation === "+"){
      		MemoryCurrentNumber += parseFloat(LocalOperationMemory);
      	 }
      	    else if (MemoryPendingOperation === "-") {
      	 	MemoryCurrentNumber -= parseFloat(LocalOperationMemory); 
      	 }
      	  
      	    else if (MemoryPendingOperation === "*") {
      	 	MemoryCurrentNumber *= parseFloat(LocalOperationMemory); 
      	 } 
      	    else if (MemoryPendingOperation === "/") {
      	 	MemoryCurrentNumber /= parseFloat(LocalOperationMemory); 
      	 }
      	    else {
      	 	MemoryCurrentNumber = parseFloat(LocalOperationMemory);
      	 }; 
      	 display.value = MemoryCurrentNumber;
      	 MemoryPendingOperation = op;
      	};
     };


function decimal(argument) {
       var LocalDecimalMemory = display.value;

      if (MemoryNewNumber) {
      	LocalDecimalMemory = "0.";
      	MemoryNewNumber = false;
          } else {
              if (LocalDecimalMemory.indexOf(".") === - 1) {
      		      LocalDecimalMemory += ".";
      		  };
      };
        display.value = LocalDecimalMemory;
};



function clear(id){
    if(id==="ce") {
		display.value = "0";
		MemoryNewNumber = true;
	} else if (id==="c"){
		display.value="0";
		MemoryNewNumber = true;
		MemoryCurrentNumber = 0;
		MemoryPendingOperation = "";
	};

	};
function howWork(argument){

};



function nul(){
  var null1 = getElementById("display");
if (null1.value.subtrs(-2)=="/0"){
	alert("No");
	null1.value = ".";
};

};