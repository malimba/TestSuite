
function toggleTab(tab) {
  // Remove the 'active' class from all tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(t => t.classList.remove('active'));

  // Add the 'active' class to the clicked tab
  tab.classList.add('active');

  // Get the corresponding div based on the tab's id
  const tabId = tab.id;
  const targetDiv = document.getElementById(tabId.replace('Tab', 'Div'));

  // Remove 'active' class from all divs
  const divs = document.querySelectorAll('.func-div');
  divs.forEach(div => div.classList.remove('active'));

  // Add 'active' class to the target div
  targetDiv.classList.add('active');
}

    document.addEventListener("DOMContentLoaded", function () {
        // Get the dropdown button and menu
        var dropdownButton = document.getElementById("customDropdownButton");
        var dropdownMenu = document.querySelector(".custom-dropdown .dropdown-menu");

        // Add click event listener to the dropdown button
        dropdownButton.addEventListener("click", function () {
            // Toggle the visibility of the dropdown menu
            dropdownMenu.classList.toggle("show-options");
        });

        // Add click event listener to the document to close the dropdown when clicking outside
        document.addEventListener("click", function (event) {
            if (!event.target.matches("#customDropdownButton")) {
                dropdownMenu.classList.remove("show-options");
            }
        });
    });

//for min selection
document.addEventListener('DOMContentLoaded', function () {
    // Select the dropdown button and menu
    const dropdownButton = document.getElementById('customDropdownButton');
    const dropdownMenu = document.querySelector('.custom-dropdown .dropdown-menu');

    // Select the span that displays the selected text
    const minSelectionText = document.getElementById('minSelectionText');

    // Add a click event listener to each dropdown item
    dropdownMenu.addEventListener('click', function (event) {
        // Check if a dropdown item was clicked
        if (event.target.classList.contains('dropdown-item')) {
            // Update the text in the span to the selected option's text
            minSelectionText.textContent = event.target.textContent;

            // Optionally, you can also retrieve the value of the selected option
            const selectedValue = event.target.getAttribute('data-value');
            console.log('Selected Value:', selectedValue);
        }
    });
});
//for max selection
document.addEventListener('DOMContentLoaded', function () {
    // Select the dropdown button and menu
    const dropdownButton = document.getElementById('customDropdownButton2');
    const dropdownMenu = document.querySelector('.custom-dropdown .dropdown-menu');

    // Select the span that displays the selected text
    const minSelectionText = document.getElementById('maxSelectionText');

    // Add a click event listener to each dropdown item
    dropdownMenu.addEventListener('click', function (event) {
        // Check if a dropdown item was clicked
        if (event.target.classList.contains('dropdown-item')) {
            // Update the text in the span to the selected option's text
            minSelectionText.textContent = event.target.textContent;

            // Optionally, you can also retrieve the value of the selected option
            const selectedValue = event.target.getAttribute('data-value');
            console.log('Selected Value:', selectedValue);
        }
    });
});


//for saveBtn functionality
//function to generate UUID
function generateUUID(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
        var r = (Math.random() * 16) | 0,
        v = c === 'x' ? r: (r& 0x3) |0x8;
        return v.toString(16);
    });
}

// Function to retrieve content of ansSummernote and create a non-editable div
//globals
const ansCount = 0;
function addAnswer() {
    //generate unique id for each ansOpt
    const ansOptId= generateUUID();
    //HTML  for ansOpt
    //logic to determine answer number
    const ansOptElements = document.querySelectorAll('.ansOpt').length;
    const cnt = ansOptElements + 1; // Increment the count
    //logic to retrieve answer content
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
    //append ansOPt to ansOptDiv
    document.getElementById('ansOptDiv').insertAdjacentHTML('beforeend', ansOptHTML);
}

//function to delete ansOpt element
function deleteAnsOpt(deleteButton){
    const ansOptId = deleteButton.getAttribute('data-ans-opt-id');
    const ansOptElement = document.getElementById(ansOptId);

    //remove ansOpt element  from DOM
    ansOptElement.remove();
};

//function to set question to correct or incorrect
function validateQuestion(ansOptContainerId) {
    // Get the parent container of the current slider (adjust the selector accordingly)
    const ansOptContainer = document.getElementById(ansOptContainerId);
    const ansOPTDIV = document.getElementById('ansOptDiv');

    if (ansOptContainer) {
        //get current  check box
        const checkboxSelf = ansOptContainer.querySelector(`.question-validity[ansoptcheck-ref-id="${ansOptContainerId}"]`);
        // Get all sliders within the ansOptDiv
        const checkboxes = ansOPTDIV.querySelectorAll('.switch-container input[type="checkbox"]');

        // Iterate through all sliders
        checkboxes.forEach(checkbx => {
            // Uncheck all sliders except the current one
            if (checkbx !== checkboxSelf) {
                checkbx.checked = false;
                checkbx.parentElement.parentElement.querySelector('.switch-label').innerText = 'Incorrect';
            }

            // Remove 'crctAns' class from all sliders
            checkbx.classList.remove('crctAns');
        });

        // Add the 'crctAns' class to the current slider
        checkboxSelf.classList.add('crctAns');
        //change label text to Correct
        checkboxSelf.parentElement.parentElement.querySelector('.switch-label').innerText = 'Correct'
    }
}