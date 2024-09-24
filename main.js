const calculate = document.querySelector(".calculate")
const results_text = document.querySelector(".results_section")
const results_numbers = document.querySelector(".results_section_numbers")
const mortgage_amount = document.querySelector("#mortgage_amount")
const mortgage_term = document.querySelector("#mortgage_term")
const interest_rate = document.querySelector("#interest_rate")
const repayment = document.querySelector(".repayment_input")
const interest_only = document.querySelector(".interest_input")
const number_1 = document.querySelector(".number_1")
const number_2 = document.querySelector(".number_2")
const numbers = document.querySelector(".numbers")
console.log(numbers)


/* to show the results on the results section*/
calculate.addEventListener("click", toggleResults)

function toggleResults(e){
    results_numbers.classList.toggle("d-none")
    results_text.classList.toggle("d-none")
    e.preventDefault()
}
function calcular (){
    let p = mortgage_amount.value
    let r = (interest_rate.value) / 12
    let n = (mortgage_term.value) * 12
        if (repayment.checked === true && p !== "" && r !== "" && n !== "") {
        const h6 = document.createElement("h6")
        const h1 = document.createElement("h1")
        const h6_2 = document.createElement("h6")
        const h5 = document.createElement("h5")
        h6.textContent = " Your monthly repayments"
        h6.setAttribute("class", "monthly_repayments mt-4 ms-4")
        h1.textContent = "£" + ` ${parseFloat(eval(p * r *((1 + r)**n)) / (((1 + r)**n) -1))}`
        h1.setAttribute("class", "number_1 ms-4 mt-3 fw-bold me-4 pb-4")
        h6_2.textContent = "Total you'll repay over the term"
        h6_2.setAttribute("class", "monthly_repayments_2 ms-4 mt-3")
       /*  h1.textContent.slice(-1,-12)  */
        numbers.append(h6, h1, h6_2)
        }
        else{
            alert("incorrecto")
        }
}

/* formula:  (p * r *(1 + r)**k)               / ((1 + r)**n -1) */