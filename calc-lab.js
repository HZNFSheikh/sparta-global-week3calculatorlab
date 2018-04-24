//Varaibles declared for the basic and advanced calculators
var valueX;
var valueY;
var calculation_choice;
var calculator;



//Function for selecting type of calculator created
calculator_type();
function calculator_type(){

    calculator = prompt('Select the calculator you require (b)Basic, (a)Advanced calculator, the (BMI) Health Calculator or the (T) Trip calculator ?') || 'b';

//Switch statement for the user to pick from the different calculator types. Basic (+, -, *, /), Advanced (Modulus, Square Root), BMI & Trip calculator.
    switch (calculator) {

      case 'b':
        basic_calculator();
        break;

        case 'a':
        advanced_calculator();
        break;

        case 'BMI':
        bmi_calculator();
        break;

        case 'T':
        trip_calculator();
        break;
        default:
        console.log("Invalid entry, select from the options given"); //Error alert
        calculator_type();
      }
}

// Defining the basic_calculator functionality
function basic_calculator(){

  //Declaring the variables to carry out the calculations
  valueX = Number(prompt('Enter 1st number'));
  valueY = Number(prompt('Enter the 2nd number'));
  calculation_choice = prompt('Pick the calculation required (a)dd (s)ubtract (m)ultiply (d)ivide') || "a";

// Switch statement uses each calculation as a case and end the sequence once the answer has been given
switch (calculation_choice) {
  case "a":
  console.log(valueX + " + " +  valueY + " = " +  addition(valueX, valueY));
  function addition(number_x, number_y){
    return number_x + number_y;
  }
    break;

    case "s":
    console.log(valueX + " - " +  valueY + " = " +  subtraction(valueX, valueY));
    function substraction(number_x, number_y){
      return number_x - number_y;
    }
      break;

      case "m":
      console.log(valueX + " x " +  valueY + " = " +  multiplication(valueX, valueY));
      function multiplication(number_x, number_y){
        return number_x * number_y;
      }
        break;

        case "d":
          console.log(valueX + " / " +  valueY + " = " +  division(valueX, valueY));
          function division(number_x, number_y){
            return number_x / number_y;
          }
          break;
  default:
  console.log("Invalid entry, select from the options given"); //Error message if incorrect input was given
  basic_calculator();

  }

}

//Defining the advanced_calculator functionality
function advanced_calculator(){

  calculation_choice = prompt('Would you like to take the (m)odulus or (p)ower of two numbers or find the (s)quare root of a single number ?') || 'm';
  if(calculation_choice == 'm' || 'p'){
    valueX = Number(prompt('Enter 1st number'));
    valueY = Number(prompt('Enter 2nd number'));
  }else if(calculation_choice=='s'){
    valueX = Number(prompt('Enter the value to be square rooted'));
  }


//if statement to verify if the user picked the advanced_calculator to then run the switch statement between the 3 advanced formulas that can be carried out.
   if(calculator == 'a'){
     switch (calculation_choice) {
       case "m":
       console.log(valueX + " modulus " + valueY + " = " + modulus(valueX, valueY) );
       function modulus(number_x, number_y){
         return number_x % number_y;
          }
         break;

         case "s":
         console.log("The square root of " + valueX + " = " + square_root(valueX) );
         function square_root(number_x){
           return Math.sqrt(number_x);
         }
           break;

           case "p":
            console.log(valueX + " to the power of " + valueY + " = " + power(valueX, valueY));
            function power(number_x, number_y){
              return Math.pow(number_x, number_y);
            }
             break;

       default:
       console.log("Invalid entry, select from the options given");
       advanced_calculator();
     }
  }

  function calculator_BMI(){

    var weight;
    var height;
    var units;
    //accept user inputs
    units = prompt('Would you like to use the (I)mperial or (M)etric system?') || 'M';
    if (units == 'I'){
      height = Number(prompt("Enter your height completely in inches"));
      weight = Number(prompt("Enter your weight in pounds"));
      console.log("Your BMI is " + BMI(height, weight) + " pounds per square inch");
    }else if (units == 'M') {
      height = Number(prompt("Enter your height in meters"));
      weight = Number(prompt("Enter your weight in kilograms"));
      console.log("Your BMI is " + BMI(height, weight) + " kilograms per square meter");

      function BMI(height, weight){
        return weight / Math.pow(height, 2);
      }
    }
  }
}
