window.addEventListener('load', (event) => {
    document.getElementById("age").textContent = getAge();
})

function getAge()
{
    const currentYear = new Date().getFullYear();
    var age = currentYear - 2001;

    return "Age: " + age;
}

$(document).ready(function(){
    
})