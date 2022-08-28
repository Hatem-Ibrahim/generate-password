var passValue = document.querySelector(".passValue");
var input_Range = document.querySelector(".passwordRange");
var labelLength = document.querySelector(".labelNumberLength");
var checkbox_Uppercase = document.querySelector(".checkbox_Uppercase");
var checkbox_Lowercase = document.querySelector(".checkbox_Lowercase");
var checkbox_Numbers = document.querySelector(".checkbox_Numbers");
var checkbox_Sympols = document.querySelector(".checkbox_Sympols");
var btn_generate = document.querySelector(".btn_generate");

// ============----------============
var pass_Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pass_Lowercase = "abcdefghijklmnopqrstuvwxyz";
var pass_Numbers   = "0123456789";
var pass_Sympols   = "(%&@#!>?|~^)";

// ============ function copy text  ============
function copyPass() {
    passValue.select();
    document.execCommand("copy");
}

// ============ view number length in side label ============
function passRange() {
    labelLength.innerHTML = `Length : ${input_Range.value}`;
}

// ============----- Generate Password -----============
function passGenerate() {
    if (checkbox_Uppercase.checked == true || checkbox_Lowercase.checked == true || checkbox_Numbers.checked == true || checkbox_Sympols.checked == true) {
        
        var password = "";
        var value_input_Range = input_Range.value

        for (var i = 0; i < value_input_Range; i++) {
            if (checkbox_Uppercase.checked == true) {
                var randomNumUpper = Math.floor(Math.random() * pass_Uppercase.length);
                password += pass_Uppercase.substr(randomNumUpper, 1);
            }
            if (checkbox_Lowercase.checked == true) {
                var randomNumLower = Math.floor(Math.random() * pass_Lowercase.length);
                password += pass_Lowercase.substr(randomNumLower, 1);
            }
            if (checkbox_Numbers.checked == true) {
                var randomNumUpper = Math.floor(Math.random() * pass_Numbers.length);
                password += pass_Numbers.substr(randomNumUpper, 1);
            }
            if (checkbox_Sympols.checked == true) {
                var randomNumLower = Math.floor(Math.random() * pass_Sympols.length);
                password += pass_Sympols.substr(randomNumLower, 1);
            }
        }
        var final_Password = password.substr( 0 , value_input_Range );

        // generate random String Password
        var randomstring = '';  
        for (var i=0; i<final_Password.length; i++) {  
            var rnum = Math.floor(Math.random() * final_Password.length); 
            
            randomstring += final_Password.substring(rnum, rnum+1);  
        }  
        passValue.value = randomstring;
        console.log(passValue.value.length);
    }
}
