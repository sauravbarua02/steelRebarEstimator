/*Please enter rebar diameter in mm, length of steel rebar in meter 
and market price of rebar per ton, which is used in your construction project.
You can calculate weight of required steel in kg and total rebar cost as per market price through this app.
*/
const btnEl = document.getElementById("calculate");
const rebarDiaEl = document.getElementById("rebar-dia");
const rebarLengthEl = document.getElementById("rebar-length");
const priceEl = document.getElementById("price");
const totalWeightEl = document.getElementById("totalWeight");
const totalpriceEl = document.getElementById("total-price");

function calculate(){
    const rebarDiaValue = rebarDiaEl.value;
    const rebarLengthValue = rebarLengthEl.value;
    const priceValue = priceEl.value;
    const totalWeightValue = (rebarDiaValue**2/162)*rebarLengthValue;
    totalWeightEl.innerText = totalWeightValue.toFixed(0);
    const totalpriceValue = (totalWeightValue/1000)*priceValue;
    totalpriceEl.innerText = totalpriceValue.toFixed(0);
}


btnEl.addEventListener("click", calculate);
