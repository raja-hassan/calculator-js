let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";



for (items of buttons) {
  items.addEventListener("click", (arg) => {
    buttonText = arg.target.innerText;

    switch (buttonText) {
      case 'x':
          buttonText= "*"
       screenValue = screenValue + buttonText;
        screen.value = screenValue;
        break;

        case'AC':
        screenValue = "";
        screen.value = screenValue; 
        break;

     
      case '=':
        screen.value=eval(screenValue)
        screenValue=screen.value;
        break;

        case '%':
          screenValue = screenValue + '/100*';
          screen.value = screenValue;
          break;  
        
        
      default:
          screenValue = screenValue + buttonText;
          screen.value =screenValue;
        break;
    }
  });
}


