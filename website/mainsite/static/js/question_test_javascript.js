
function toggleTab(tab) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(t => t.classList.remove('active'));

  tab.classList.add('active');

  const tabId = tab.id;
  const targetDiv = document.getElementById(tabId.replace('Tab', 'Div'));

  const divs = document.querySelectorAll('.func-div');
  divs.forEach(div => div.classList.remove('active'));

  targetDiv.classList.add('active');
}

    document.addEventListener("DOMContentLoaded", function () {
        var dropdownButton = document.getElementById("customDropdownButton");
        var dropdownMenu = document.querySelector(".custom-dropdown .dropdown-menu");

        dropdownButton.addEventListener("click", function () {
            dropdownMenu.classList.toggle("show-options");
        });

        document.addEventListener("click", function (event) {
            if (!event.target.matches("#customDropdownButton")) {
                dropdownMenu.classList.remove("show-options");
            }
        });
    });

document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.getElementById('customDropdownButton');
    const dropdownMenu = document.querySelector('.custom-dropdown .dropdown-menu');

    const minSelectionText = document.getElementById('minSelectionText');

    dropdownMenu.addEventListener('click', function (event) {
        if (event.target.classList.contains('dropdown-item')) {
            minSelectionText.textContent = event.target.textContent;

            const selectedValue = event.target.getAttribute('data-value');
            console.log('Selected Value:', selectedValue);
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.getElementById('customDropdownButton2');
    const dropdownMenu = document.querySelector('.custom-dropdown .dropdown-menu');

    const minSelectionText = document.getElementById('maxSelectionText');

    dropdownMenu.addEventListener('click', function (event) {
        if (event.target.classList.contains('dropdown-item')) {
            minSelectionText.textContent = event.target.textContent;

            const selectedValue = event.target.getAttribute('data-value');
            console.log('Selected Value:', selectedValue);
        }
    });
});


function generateUUID(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
        var r = (Math.random() * 16) | 0,
        v = c === 'x' ? r: (r& 0x3) |0x8;
        return v.toString(16);
    });
}

const ansCount = 0;
function addAnswer() {
    const ansOptId= generateUUID();
    const ansOptElements = document.querySelectorAll('.ansOpt').length;
    const cnt = ansOptElements + 1;
    var ansSummernoteContent = document.querySelector('.ansSummernote').value;

    const ansOptHTML = `
     <div class="ansOpt" id="${ansOptId}">
      ${ansSummernoteContent}
      <div class="switch-container">
                        <label class="switch">
                            <input type="checkbox" class='question-validity' ansOptCheck-ref-id="${ansOptId}" onchange="validateQuestion('${ansOptId}');">
                            <span class="slider" data-ans-isCorrect-id="${ansOptId}"></span>
                        </label>
                        <label class="switch-label">Incorrect</label>
      </div>
      <span class="ansNumber">${cnt}</span>
     <button class="btn btn-danger deleteAnsOpt" data-ans-opt-id="${ansOptId}" onclick="deleteAnsOpt(this)">🗑Delete</button>
    `;
    document.getElementById('ansOptDiv').insertAdjacentHTML('beforeend', ansOptHTML);

    previewConstructor();
}

function deleteAnsOpt(deleteButton){
    const ansOptId = deleteButton.getAttribute('data-ans-opt-id');
    const ansOptElement = document.getElementById(ansOptId);

    ansOptElement.remove();
};

function validateQuestion(ansOptContainerId) {
    const ansOptContainer = document.getElementById(ansOptContainerId);
    const ansOPTDIV = document.getElementById('ansOptDiv');

    if (ansOptContainer) {
        const checkboxSelf = ansOptContainer.querySelector(`.question-validity[ansoptcheck-ref-id="${ansOptContainerId}"]`);
        const checkboxes = ansOPTDIV.querySelectorAll('.switch-container input[type="checkbox"]');

        checkboxes.forEach(checkbx => {
            if (checkbx !== checkboxSelf) {
                checkbx.checked = false;
                checkbx.parentElement.parentElement.querySelector('.switch-label').innerText = 'Incorrect';
            }

            checkbx.classList.remove('crctAns');
        });

        checkboxSelf.classList.add('crctAns');
        checkboxSelf.parentElement.parentElement.querySelector('.switch-label').innerText = 'Correct'
    }
}

function showDiv(div_){
    console.log(div_);
    const cdiv = document.getElementById(`${div_}`);
    cdiv.classList.toggle('active');
}