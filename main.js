/* query selectors desktop */
const calculate = document.querySelector(".calcular")
const results_text = document.querySelector(".results_container")
const results_numbers = document.querySelector(".results_section_numbers")
const mortgage_amount = document.querySelector(".input_1")
const mortgage_term = document.querySelector(".input_2")
const interest_rate = document.querySelector(".input_3")
const repayment = document.querySelector(".repayment_input")
const interest_only = document.querySelector(".interest_input")
const numbers = document.querySelector(".numbers")
const field_mortgage_term = document.querySelector(".mortgage_term_desktop_required")
const mortgage_term_label_desktop = document.querySelector(".mortgage_term_label_desktop")
const mortgage_amount_label_desktop = document.querySelector(".mortgage_amount_label_desktop")
const field_required_text = document.querySelector(".field_required_text")
const h6_input_2 = document.querySelector(".h6_input_2")
const h6_input_3 = document.querySelector(".h6_input_3")
const text_required_input2_desktop = document.querySelector(".text_required_input2_desktop")
const label_input2_desktop = document.querySelector(".label_input2_desktop")
const text_required_radio_desktop = document.querySelector(".text_required_radio_desktop")
/* query selectors mobile */
const mortgage_amount_mobile = document.querySelector(".input_1_mobile")
const mortgage_term_mobile = document.querySelector(".input_2_mobile")
const interest_rate_mobile = document.querySelector(".input_3_mobile")
const calculate_mobile = document.querySelector(".calculate_mobile")
const results_text_mobile = document.querySelector(".results_container_mobile")
const results_numbers_mobile = document.querySelector(".results_section_numbers_mobile")
const numbers_mobile = document.querySelector(".numbers_mobile")
const repayment_mobile = document.querySelector(".repayment_mobile_input")
const label_input1_mobile = document.querySelector(".label_input1_mobile")
const h6_input1_mobile = document.querySelector(".h6_input1_mobile")
const mortgage_term_label_mobile = document.querySelector(".mortgage_term_label_mobile")
const h6_input2_mobile = document.querySelector(".h6_input2_mobile")
const label_input3_mobile = document.querySelector(".label_input3_mobile")
const h6_input3_mobile = document.querySelector(".h6_input3_mobile")
const text_required_radio_mobile = document.querySelector(".text_required_radio_mobile")
const interest_radio_mobile = document.querySelector(".interest_radio_mobile")

calculate.addEventListener("click", calcular)
calculate_mobile.addEventListener("click", calcular_mobile)
/* to show and hide error states in desktops*/
mortgage_amount.addEventListener("input", () => {
    if(mortgage_amount.value === ""){
         mortgage_amount.classList.add("field_required")
         mortgage_amount_label_desktop.classList.remove("libra")
         mortgage_amount_label_desktop.classList.add("libra_error")
         field_required_text.classList.remove("d-none")
     }
     else if(mortgage_amount.value !== "" ){
            /* const format = mortgage_amount.value.toLocaleString(undefined)
            mortgage_amount.value = format  */ 
        mortgage_amount.classList.remove("field_required")
        mortgage_amount_label_desktop.classList.add("libra")
        mortgage_amount_label_desktop.classList.remove("libra_error")
        field_required_text.classList.add("d-none")
     }
})
mortgage_term.addEventListener("input", ()=> {
    if(mortgage_term.value === ""){
        field_mortgage_term.classList.remove("d-none")
        mortgage_term.classList.add("field_required")
        mortgage_term_label_desktop.classList.add("years_error")
        mortgage_term_label_desktop.classList.remove("mortgage_term_label_desktop")
        h6_input_2.classList.remove("text_required_input2_desktop")
    }
    else if(mortgage_term.value !== ""){
        field_mortgage_term.classList.add("d-none")
        mortgage_term.classList.remove("field_required")
        mortgage_term_label_desktop.classList.remove("years_error")
        mortgage_term_label_desktop.classList.add("mortgage_term_label_desktop")
        h6_input_2.classList.add("text_required_input2_desktop")
    }
    
})
interest_rate.addEventListener("input", ()=>{
    if(interest_rate.value === ""){
        h6_input_3.classList.remove("mortgage_term_desktop_required")
        interest_rate.classList.add("field_required")
        label_input2_desktop.classList.add("interest_error")
    }
    else if(interest_rate.value !== ""){
        h6_input_3.classList.add("mortgage_term_desktop_required")
        interest_rate.classList.remove("field_required")
        label_input2_desktop.classList.remove("interest_error")
    }
})
/* functions to hide and show error states in mobile divices */
mortgage_amount_mobile.addEventListener("input",()=>{
    if(mortgage_amount_mobile.value === ""){
        mortgage_amount_mobile.classList.add("field_required")
        label_input1_mobile.classList.add("libra_error")
        h6_input1_mobile.classList.remove("mortgage_term_desktop_required")
    }
    else if(mortgage_amount_mobile.value !== ""){
        mortgage_amount_mobile.classList.remove("field_required")
        label_input1_mobile.classList.remove("libra_error")
        h6_input1_mobile.classList.add("mortgage_term_desktop_required")
    }
})
mortgage_term_mobile.addEventListener("input", () => {
    if(mortgage_term_mobile.value === ""){
       mortgage_term_mobile.classList.remove("input_2_mobile")
        mortgage_term_mobile.classList.add("field_required")
        mortgage_term_label_mobile.classList.add("years_error_mobile")
        h6_input2_mobile.classList.remove("mortgage_term_desktop_required")
    }
    else if(mortgage_term_mobile.value !== ""){
        mortgage_term_mobile.classList.add("input_2_mobile")
        mortgage_term_mobile.classList.remove("field_required")
        mortgage_term_label_mobile.classList.remove("years_error_mobile")
        h6_input2_mobile.classList.add("mortgage_term_desktop_required")
    }
})
interest_rate_mobile.addEventListener("input", () => {
    if(interest_rate_mobile.value === ""){
        interest_rate_mobile.classList.remove("input_3_mobile")
        interest_rate_mobile.classList.add("field_required")
        h6_input3_mobile.classList.remove("mortgage_term_desktop_required")
        label_input3_mobile.classList.add("label_interest_mobile")
        label_input3_mobile.classList.remove("interest_rate_mobile")
    }
    else if(interest_rate_mobile.value !== ""){
        interest_rate_mobile.classList.add("input_3_mobile")
        interest_rate_mobile.classList.remove("field_required")
        h6_input3_mobile.classList.add("mortgage_term_desktop_required")
        label_input3_mobile.classList.remove("label_interest_mobile")
        label_input3_mobile.classList.add("interest_rate_mobile")
    }
})
/* function to calculate and show the results in desktop*/
function calcular (e){
    e.preventDefault()
    let p = mortgage_amount.value
    let r = (interest_rate.value) / 12
    let n = (mortgage_term.value) * 12
        if (repayment.checked === true && p !== "" && r !== "" && n !== "") {
            results_numbers.classList.toggle("d-none")
            results_text.classList.toggle("d-none")
            
          
        const h6 = document.createElement("h6")
        let h1 = document.createElement("h1")
        const h6_2 = document.createElement("h6")
        const h5 = document.createElement("h5")
        h6.textContent = " Your monthly repayments"
        h6.setAttribute("class", "monthly_repayments mt-4 ms-4")
        h1.textContent = `${parseFloat(eval(p * r *((1 + r)**n)) / (((1 + r)**n) -1))}`
        h1.setAttribute("class", "number_1 ms-4 mt-3 fw-bold me-4 pb-4")
        h1.textContent = h1.textContent.slice(0, 12) 
        h6_2.textContent = "Total you'll repay over the term"
        h6_2.setAttribute("class", "monthly_repayments_2 ms-4 mt-3")
        h5.textContent = `${parseFloat(eval((p * r *((1 + r)**n)) / (((1 + r)**n) -1))) * (n*12)}`
        h5.setAttribute("class", "number_2 ms-4 fw-bold")
        h5.textContent = h5.textContent.slice(0, 12) 
         h1.textContent = new Intl.NumberFormat("en-UK",{
            style:"currency",
            currency:"GBP"
         }).format(h1.textContent)
         h5.textContent = new Intl.NumberFormat("en-UK",{
            style:"currency",
            currency:"GBP"
         }).format(h5.textContent)
        numbers.append(h6, h1, h6_2, h5)
        }
        else if(interest_only.checked === true && p !== "" && r !== "" && n !== ""){
            results_numbers.classList.toggle("d-none")
            results_text.classList.toggle("d-none")
            
          
        const h6 = document.createElement("h6")
        let h1 = document.createElement("h1")
        h6.textContent = " Your monthly repayments"
        h6.setAttribute("class", "monthly_repayments mt-4 ms-4")
        h1.textContent = `${parseFloat(eval(p * r *((1 + r)**n)) / (((1 + r)**n) -1))}`
        h1.setAttribute("class", "number_1 ms-4 mt-3 fw-bold me-4 pb-4")
        h1.textContent = h1.textContent.slice(0, 12) 
         h1.textContent = new Intl.NumberFormat("en-UK",{
            style:"currency",
            currency:"GBP"
         }).format(h1.textContent)
        numbers.append(h6, h1)
        }
        else if(repayment.checked !== true && interest_only.checked !== true){
            text_required_radio_desktop.classList.toggle("d-none")
        }
       
} 
function calcular_mobile (e){
    e.preventDefault()
    let p = mortgage_amount_mobile.value
    let r = (interest_rate_mobile.value) / 12
    let n = (mortgage_term_mobile.value) * 12
        if (repayment_mobile.checked === true && p !== "" && r !== "" && n !== "") {
        results_numbers_mobile.classList.toggle("d-none")
        results_text_mobile.classList.toggle("d-none")
       
        const h6 = document.createElement("h6")
        let h1 = document.createElement("h1")
        const h6_2 = document.createElement("h6")
        const h5 = document.createElement("h5")
        h6.textContent = " Your monthly repayments"
        h6.setAttribute("class", "monthly_repayments mt-4 ms-4")
        h1.textContent =  `${parseFloat(eval(p * r *((1 + r)**n)) / (((1 + r)**n) -1))}`
        h1.setAttribute("class", "number_1 ms-4 mt-3 fw-bold me-4 pb-4")
        h1.textContent = h1.textContent.slice(0, 11) 
        h6_2.textContent = "Total you'll repay over the term"
        h6_2.setAttribute("class", "monthly_repayments_2 ms-4 mt-3")
        h5.textContent = `${parseFloat(eval((p * r *((1 + r)**n)) / (((1 + r)**n) -1))) * (n*12)}`
        h5.setAttribute("class", "number_2 ms-4 fw-bold")
        h5.textContent = h5.textContent.slice(0, 11) 
        h1.textContent = new Intl.NumberFormat("en-UK",{
            style:"currency",
            currency:"GBP"
         }).format(h1.textContent)
         h5.textContent = new Intl.NumberFormat("en-UK",{
            style:"currency",
            currency:"GBP"
         }).format(h5.textContent)
        numbers_mobile.append(h6, h1, h6_2, h5)
        }
        else if(interest_radio_mobile.checked === true && p !== "" && r !== "" && n !== ""){
            results_numbers_mobile.classList.toggle("d-none")
        results_text_mobile.classList.toggle("d-none")
       
        const h6 = document.createElement("h6")
        let h1 = document.createElement("h1")
        h6.textContent = " Your monthly repayments"
        h6.setAttribute("class", "monthly_repayments mt-4 ms-4")
        h1.textContent =  `${parseFloat(eval(p * r *((1 + r)**n)) / (((1 + r)**n) -1))}`
        h1.setAttribute("class", "number_1 ms-4 mt-3 fw-bold me-4 pb-4")
        h1.textContent = h1.textContent.slice(0, 11) 
        h1.textContent = new Intl.NumberFormat("en-UK",{
            style:"currency",
            currency:"GBP"
         }).format(h1.textContent)
        numbers_mobile.append(h6, h1,)
        }
        else if(repayment_mobile.checked !== true && interest_radio_mobile.checked !== true){
            text_required_radio_mobile.classList.remove("d-none")
        }
       
} 

