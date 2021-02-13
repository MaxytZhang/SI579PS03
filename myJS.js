/*
* Excercise 1
*
*/
const square_btn = document.getElementById("color-block");
const color_name_display = document.getElementById("color-name");
let click_times = 0;
const new_color = "#1655DE";
const old_color = "#F08080";
/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    click_times += 1
    //Write a condition determine what color it should be changed to
    if(click_times % 2 === 1){
        //change the background color using JS
        square_btn.style.backgroundColor = new_color;
        //Change the text of the color using the span id color-name
        color_name_display.textContent = new_color;
    }
    else{
        //change the background color using JS
        square_btn.style.backgroundColor = old_color;
        //Change the text of the color using the span id color-name
        color_name_display.textContent = old_color;

    }
}

square_btn.addEventListener("click", changeColor)
/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const convert_btn = document.getElementById("convertbtn");
const f_input = document.getElementById("f-input");
const c_output = document.getElementById("c-output");
/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    let c_val = (f_input.value - 32) * 5 / 9;

    //Send the calculated temperature to HTML
    c_output.textContent = c_val;
}

convert_btn.addEventListener("click", convertTemp);


