let rand_text = document.getElementById("rand-textbox");
let rand2dollar_radio = document.getElementById("rand2dollar-radio");
let rand2euro_radio = document.getElementById("rand2euro-radio");
let rand_submit = document.getElementById("rand-submit");
let rand_result = document.getElementById("rand-results")
let rand_box = document.getElementById("rand-box");


rand_submit.addEventListener("click",()=>{
    if (rand2dollar_radio.checked){
        amount = rand_text.value / 17.13
        rand_result.innerHTML = "$"+amount.toFixed(2)
    }
    else if (rand2euro_radio.checked){
        amount = rand_text.value / 23.47
        rand_result.innerHTML = "£"+amount.toFixed(2)
    }
})

let dollar_text = document.getElementById("dollar-textbox");
let dollar2rand_radio = document.getElementById("dollar2rand-radio");
let dollar2euro_radio = document.getElementById("dollar2euro-radio");
let dollar_submit = document.getElementById("dollar-submit");
let dollar_result = document.getElementById("dollar-results")
let dollar_box = document.getElementById("dollar-box");

dollar_submit.addEventListener("click",()=>{
    if (dollar2rand_radio.checked){
        amount = dollar_text.value * 17.13
        dollar_result.innerHTML = "R"+amount.toFixed(2)
    }
    else if (dollar2euro_radio.checked){
        amount = dollar_text.value * 0.89
        dollar_result.innerHTML = "£"+amount.toFixed(2)
    }
})

let euro_text = document.getElementById("euro-textbox");
let euro2rand_radio = document.getElementById("euro2rand-radio");
let euro2dollar_radio = document.getElementById("euro2dollar-radio");
let euro_submit = document.getElementById("euro-submit");
let euro_result = document.getElementById("euro-results")
let euro_box = document.getElementById("euro-box");

euro_submit.addEventListener("click",()=>{
    if (euro2rand_radio.checked){
        amount = euro_text.value * 23.47
        euro_result.innerHTML = "R"+amount.toFixed(2)
    }
    else if (euro2dollar_radio.checked){
        amount = euro_text.value / 0.89
        euro_result.innerHTML = "$"+amount.toFixed(2)
    }
})

let rand_check = document.getElementById("rand-check");
let dollar_check = document.getElementById("dollar-check");
let euro_check = document.getElementById("euro-check");

rand_check.addEventListener("click",()=>{
    rand_box.style.display = "flex";
    dollar_box.style.display = "none";
    euro_box.style.display = "none";
    rand_text.value = "";
})
dollar_check.addEventListener("click",()=>{
    rand_box.style.display = "none";
    dollar_box.style.display = "flex";
    euro_box.style.display = "none";
    dollar_text.value = "";
})
euro_check.addEventListener("click",()=>{
    rand_box.style.display = "none";
    dollar_box.style.display = "none";
    euro_box.style.display = "flex";
    euro_text.value = "";
})