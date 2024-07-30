let textbox = document.getElementById("textbox");
let r2d = document.getElementById("R2D");
let d2r = document.getElementById("D2R");
let r2p = document.getElementById("R2P");
let p2r = document.getElementById("P2R");
let submit = document.getElementById("submit");
let display = document.getElementById("results")

function currency(){
    let val = textbox.value;
    if (val == ""){
        display.innerHTML = "Enter a value";
    }
    else{
        display.innerHTML = "Select conversion";
        
    }
    if (r2d.checked){
        val = val / 18.44;
        val = val.toFixed(2);
        display.innerHTML = "R"+val;
    }
    else if (d2r.checked){
        val = val * 18.44;
        val = val.toFixed(2);
        display.innerHTML = "R"+val;
    }
    else if (r2p.checked){
        val = val / 23.70;
        val = val.toFixed(2);
        display.innerHTML = "R"+val;
    }
    else if (p2r.checked){
        val = val * 23.70;
        val = val.toFixed(2);
        display.innerHTML = "R"+val;
    }
    
}

function clean(){
    
    textbox.value = "";
    r2d.checked = false;
    d2r.checked = false;
    r2p.checked = false;
    p2r.checked = false;
    display.innerHTML = "Select currency";
    display.style.color = "black";
}
