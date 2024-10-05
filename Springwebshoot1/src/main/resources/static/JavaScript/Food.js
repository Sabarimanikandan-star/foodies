let foods= document.getElementById("foods");
let orders=document.getElementById("orders");
let dishs=document.getElementById("dishs");
let trackBtn=document.getElementById("trackBtn");

foods.addEventListener("click",function(){
    foods.style.color="red";
    orders.style.color="white";
    dishs.style.color="white";
})
dishs.addEventListener("click",function(){
    foods.style.color="white";
    orders.style.color="white";
    dishs.style.color="green";
})
orders.addEventListener("click",function(){
    foods.style.color="white";
    orders.style.color="orange";
    dishs.style.color="white";
})

let logBtn=document.getElementById("logBtn");
logBtn.addEventListener("click",function(){
    document.querySelector(".loginPage").style.display="block";
})
let loged=document.getElementById("logedBtn");

loged.addEventListener("click",function(){
    let email=document.getElementById("name");
    let pass=document.getElementById("pass");

if(email.value==""|| pass.value==""){
    alert("Please Enter Email Password")

}else{
    alert("You Loged In");
    document.querySelector(".loginPage").style.display="none";
}

})
trackBtn.addEventListener("click",function(){
    document.querySelector(".tracking").style.display="flex";
    document.getElementById(".food").style.display="none";
    document.getElementById(".order").style.display="none";
    document.getElementById(".dish").style.display="none";
    document.getElementById(".main").style.display="none";
    document.getElementById("card2").style.display="none";
})

function submitOrder1() {
    const foodName = document.getElementById('food-name1').innerText;
    const price = parseFloat(document.getElementById('food-price1').innerText);

    // Navigate to the new page with query parameters
    window.location.href = `Delivery.html?foodName=${encodeURIComponent(foodName)}&price=${price}`;
}

function submitOrder2(){
    const foodName = document.getElementById('food-name2').innerText;
    const price = parseFloat(document.getElementById('food-price2').innerText);

    // Navigate to the new page with query parameters (without quantity or total price)
    window.location.href = `Delivery.html?foodName=${encodeURIComponent(foodName)}&price=${price}`;
}

function submitOrder3(){
    const foodName = document.getElementById('food-name3').innerText;
    const price = parseFloat(document.getElementById('food-price3').innerText);

    // Navigate to the new page with query parameters (without quantity or total price)
    window.location.href = `Delivery.html?foodName=${encodeURIComponent(foodName)}&price=${price}`;
}

function submitOrder4(){
    const foodName = document.getElementById('food-name4').innerText;
    const price = parseFloat(document.getElementById('food-price4').innerText);

    // Navigate to the new page with query parameters (without quantity or total price)
    window.location.href = `Delivery.html?foodName=${encodeURIComponent(foodName)}&price=${price}`;
}

function submitOrder5(){
    const foodName = document.getElementById('food-name5').innerText;
    const price = parseFloat(document.getElementById('food-price5').innerText);

    // Navigate to the new page with query parameters (without quantity or total price)
    window.location.href = `Delivery.html?foodName=${encodeURIComponent(foodName)}&price=${price}`;
}

function submitOrder6(){
    const foodName = document.getElementById('food-name6').innerText;
    const price = parseFloat(document.getElementById('food-price6').innerText);

    // Navigate to the new page with query parameters (without quantity or total price)
    window.location.href = `Delivery.html?foodName=${encodeURIComponent(foodName)}&price=${price}`;
}