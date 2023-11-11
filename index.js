const buttons = document.getElementsByTagName("button");
let string = "";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      let result = eval(string);
      // alert(result);
      console.log(result);
      document.querySelector(".input").value = result;
      string = "" + result;
    }
    else if(e.target.innerHTML === "C"){
        string = "";
        document.querySelector('.input').value = '';
    }
    else if(e.target.innerHTML=== "+/-"){
        string=parseFloat(document.querySelector('.input').value)*-1;
        document.querySelector('.input').value=string;
    }
    else {
      let number = e.target.innerHTML;
      string += number;
      document.querySelector('.input').value = string;
    }
  });
});
