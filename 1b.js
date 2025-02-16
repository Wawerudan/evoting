const steps = document.querySelectorAll('.step');
const buttons = document.querySelectorAll('.btn-1');
const countySelect = document.getElementById('county');
const constituencySelect = document.getElementById('constituency');
const confirmVoteBtn = document.getElementById('confirm-vote');

let currentStep = 0;

const constituencies = {
    "Nairobi": ["Westlands", "Dagoretti", "Lang'ata"],
    "Mombasa": ["Mvita", "Changamwe", "Likoni"],
    "Kisumu": ["Kisumu Central", "Nyando", "Muhoroni"],
    "Nyeri": ["Mathira","Tetu","Nyeri Town","Kieni","Mukurweni"]
};

function moveNext() {
    if (currentStep < steps.length - 1) {
        steps[currentStep].classList.remove('active');
        currentStep++;
        steps[currentStep].classList.add('active');
    }
}

buttons.forEach(button => {
    button.addEventListener("click", moveNext);
});

countySelect.addEventListener("change", function () {
    const selectedCounty = countySelect.value;
    constituencySelect.innerHTML = `<option value="">...Select Constituency...</option>`;

    if (selectedCounty in constituencies) {
        constituencies[selectedCounty].forEach(constituency => {
            let option = document.createElement("option");
            option.value = constituency;
            option.textContent = constituency;
            constituencySelect.appendChild(option);
        });
    }
});

confirmVoteBtn.addEventListener("click", function() {
    document.getElementById("picked-county").textContent = countySelect.value || "None";
    document.getElementById("picked-constituency").textContent = constituencySelect.value || "None";
    document.getElementById("picked-governor").textContent = document.querySelector('input[name="governor"]:checked')?.value || "None";
    document.getElementById("picked-senator").textContent = document.querySelector('input[name="senator"]:checked')?.value || "None";
    document.getElementById("picked-women-rep").textContent = document.querySelector('input[name="women-rep"]:checked')?.value || "None";
    document.getElementById("picked-president").textContent = document.querySelector('input[name="president"]:checked')?.value || "None";
});
