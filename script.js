function getAsciiSum(name) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        sum += name.charCodeAt(i); 
    }
    return sum;
}
function getSimilarityPercentage(value1, value2) {
    if (value1 === 0 && value2 === 0) return 100; 
    let difference = Math.abs(value1 - value2);
    let maxVal = Math.max(value1, value2);
    let similarity = (1 - difference / maxVal) * 100;
    return similarity.toFixed(2); 
}
const btn = document.getElementById("myButton");
btn.addEventListener("click", function () {
    
    const a = document.getElementById("boy").value;
    const b = document.getElementById("girl").value;
    if(a === "Rishith" || a==="Manohar" || a==="Vanga" || a === "Vanga Rishith Reddy"){
        document.getElementById("ans").textContent = a+ " is single forever";
    }
    if(a === "arjun " || a === "Arjun "){
        document.getElementById("ans").textContent = "The percentage of " + " " + a + " and " + b 
    + " is " +  "100%";
    }
    else{
    const c = getAsciiSum(a);
    const d = getAsciiSum(b);
    const ans = getSimilarityPercentage(c,d);
    document.getElementById("ans").textContent = "The percentage of " + " " + a + " and " + b 
    + " is " + ans+ "%";
    }


});
document.getElementById("darkModeToggle").addEventListener("click", function(){
    document.body.classList.remove("valentine-mode");
    document.body.classList.toggle("dark-mode");
});
document.getElementById("ValentineMode").addEventListener("click",function(){
    document.body.classList.remove("dark-mode");
    document.body.classList.toggle("valentine-mode");
});