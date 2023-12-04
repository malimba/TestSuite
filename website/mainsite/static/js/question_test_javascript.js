
function toggleTab(tab) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(t => t.classList.remove('active'));

  tab.classList.add('active');

  const tabId = tab.id;
  const targetDiv = document.getElementById(tabId.replace('Tab', 'Div'));

  const divs = document.querySelectorAll('.func-div');
  divs.forEach(div => div.classList.remove('active'));

  targetDiv.classList.add('active');


  // Corrected conditions
  if (tabId === 'dispTab') {

    document.getElementById('previewDiv').style.display = 'block';
  } else {

    document.getElementById('previewDiv').style.display = 'none';
  }
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
    const jsonDropdownCaret = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < jsonDropdownCaret.length; i++) {
      jsonDropdownCaret[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }
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
//add listener to sidebar enabled checkbox
document.addEventListener('DOMContentLoaded', function(){
    const sidebarCheckbox = document.getElementById('sideBarEnbl');
    const hintCheckbox = document.getElementById('hintEnbl');
    sidebarCheckbox.addEventListener('change', function(){
        document.getElementById('sidebarDiv').classList.toggle('inactive-disp-elem');
    });
    hintCheckbox.addEventListener('change', function(){
        document.getElementById('previewHintDiv').classList.toggle('inactive-disp-elem');
    });
});
function updateHintT(this_){
    document.getElementById('hintTitleDrp').innerText = this_.value;
}

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
    //add div to preview div
    var previewAnsDiv = $('#previewAOptsDiv');
    //create preview answer element
    const previewAnsOptHTML = `
        <div id="${ansOptId}prevA">
        <input type="checkbox">${ansSummernoteContent}
        </div>
    `
    document.getElementById('previewAOptsDiv').insertAdjacentHTML('beforeend', previewAnsOptHTML);
    //for display preview

}

function deleteAnsOpt(deleteButton){
    const ansOptId = deleteButton.getAttribute('data-ans-opt-id');
    const ansOptElement = document.getElementById(ansOptId);
    const ansOptPreviewObject = document.getElementById(`${ansOptId}prevA`);
    //for display view
    //for display preview

    ansOptPreviewObject.remove();
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
        const cdiv = document.getElementById(`${div_}`);
        cdiv.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function(){
    // Get the select elements
    const displayTypeSelect = document.getElementById('dispType');
    const directionTypeSelect = document.getElementById('directionType');
    const wrappingTypeSelect = document.getElementById('wrappingType');
    const justifyCntTypeSelect = document.getElementById('justifyCntType');
    const algnItmsTypeSelect = document.getElementById('algnItmsType');
    const marginTypeSelect = document.getElementById('marginType');

    // Add event listeners to update styles on select change
    displayTypeSelect.addEventListener('change', updateCheckboxStyles);
    directionTypeSelect.addEventListener('change', updateCheckboxStyles);
    wrappingTypeSelect.addEventListener('change', updateCheckboxStyles);
    justifyCntTypeSelect.addEventListener('change', updateCheckboxStyles);
    algnItmsTypeSelect.addEventListener('change', updateCheckboxStyles);
    marginTypeSelect.addEventListener('change', updateCheckboxStyles);

    // Initial update
    updateCheckboxStyles();

    function updateCheckboxStyles() {
        // Get all checkboxes in the preview div
        var checkboxes = document.querySelectorAll('#previewDiv input[type="checkbox"]');
        // Get the selected values from the select elements
        const displayType = displayTypeSelect.value;
        const directionType = directionTypeSelect.value;
        const wrappingType = wrappingTypeSelect.value;
        const justifyCntType = justifyCntTypeSelect.value;
        const algnItmsType = algnItmsTypeSelect.value;
        const marginType = marginTypeSelect.value;
        const previewContainer = document.getElementById('previewAOptsDiv');


        // Ensure visibility of elements => toggle inactive-disp-element
        wrappingTypeSelect.labels[0].classList.remove('inactive-disp-elem');
        wrappingTypeSelect.classList.remove('inactive-disp-elem');
        justifyCntTypeSelect.labels[0].classList.remove('inactive-disp-elem');
        justifyCntTypeSelect.classList.remove('inactive-disp-elem');
        algnItmsTypeSelect.labels[0].classList.remove('inactive-disp-elem');
        algnItmsTypeSelect.classList.remove('inactive-disp-elem');
        marginTypeSelect.labels[0].classList.remove('inactive-disp-elem');
        marginTypeSelect.classList.remove('inactive-disp-elem');
        directionTypeSelect.labels[0].classList.remove('inactive-disp-elem');
        directionTypeSelect.classList.remove('inactive-disp-elem');
        const dropdownOpts = document.querySelectorAll('#previewAOptsDiv select');
        var widthTE = document.getElementById('widthType');
        var gridFormatters = document.getElementById('gridFormatters');
        if(dropdownOpts){
            dropdownOpts.forEach(d =>{
                d.parentNode.removeChild(d);
            });
        }
        if (widthTE){
            widthTE.labels[0].style.display = 'none';
            widthTE.style.display = 'none';
        }
        if(gridFormatters){
            gridFormatters.parentNode.removeChild(gridFormatters);
        }

        // Conditions

            if (displayType === 'flex'){
                // Condition for direction
                if (directionType === 'column'){
                    checkboxes.forEach(checkbox => {
                    checkbox.parentElement.parentElement.style.display = displayType;
                    checkbox.parentElement.parentElement.style.flexDirection = 'column';
                    checkbox.parentElement.style.display = 'block';
                    checkbox.parentElement.style.flexWrap = wrappingType;
                    checkbox.parentElement.parentElement.style.justifyContent = justifyCntType;
                    checkbox.parentElement.style.alignItems = algnItmsType;
                    checkbox.parentElement.parentElement.style.margin = marginType;
                    });
                };
                if (directionType === 'row'){
                    checkboxes.forEach(checkbox => {
                    checkbox.parentElement.parentElement.style.display = displayType;
                    checkbox.parentElement.style.display = 'inline-block';
                    checkbox.parentElement.style.flexWrap = wrappingType;
                    checkbox.parentElement.parentElement.style.justifyContent = justifyCntType;
                    checkbox.parentElement.style.alignItems = algnItmsType;
                    checkbox.parentElement.parentElement.style.margin = marginType;
                    });
                }
            }

            if (displayType === 'dropdown'){
                // Apply inactive-disp-elem to label and element
                wrappingTypeSelect.labels[0].classList.toggle('inactive-disp-elem');
                wrappingTypeSelect.classList.toggle('inactive-disp-elem');
                directionTypeSelect.labels[0].classList.toggle('inactive-disp-elem');
                directionTypeSelect.classList.toggle('inactive-disp-elem');
                justifyCntTypeSelect.labels[0].classList.toggle('inactive-disp-elem');
                justifyCntTypeSelect.classList.toggle('inactive-disp-elem');
                algnItmsTypeSelect.labels[0].classList.toggle('inactive-disp-elem');
                algnItmsTypeSelect.classList.toggle('inactive-disp-elem');
                marginTypeSelect.labels[0].classList.toggle('inactive-disp-elem');
                marginTypeSelect.classList.toggle('inactive-disp-elem');
                //check for constructed dropdown options
                var widthType = document.getElementById('widthType');
                if(!widthType){
                    // Insert widthType dropdown
                    const widthOpElem = `<label for="widthType">Width</label>
                                          <select id="widthType" onchange="setWidth(this)")>
                                            <option value="auto">Auto</option>
                                            <option value="100">100px</option>
                                            <option value="150">150px</option>
                                            <option value="200">200px</option>
                                            <option value="250">250px</option>
                                            <option value="300">300px</option>
                                            <option value="350">350px</option>
                                            <option value="400">400px</option>
                                          </select>

                                        `;

                    const parentContainer = document.getElementById('dispDiv');
                    parentContainer.insertAdjacentHTML('beforeend', widthOpElem);
                  }else {widthType.style.display='inline-block';widthType.labels[0].style.display='inline-block';}
                //apply inactive-disp-elem to all checkbox divs
                checkboxes.forEach(checkbox =>{
                    checkbox.parentElement.style.display = 'none';
                });
                //create dropdown
                var dropdownElem = document.createElement('select');
                dropdownElem.id = 'dropdownAOpts';
                checkboxes.forEach(checkbox => {
                    var option = document.createElement('option');
                    option.value = checkbox.parentElement.innerText;
                    option.text = checkbox.parentElement.innerText;
                    option.id = checkbox.parentElement.id;
                    console.log(option);
                    dropdownElem.appendChild(option);
                });
                previewContainer.appendChild(dropdownElem);
            }
            if(displayType === 'grid'){
                // Apply inactive-disp-elem to label and element
                wrappingTypeSelect.labels[0].classList.toggle('inactive-disp-elem');
                wrappingTypeSelect.classList.toggle('inactive-disp-elem');
                directionTypeSelect.labels[0].classList.toggle('inactive-disp-elem');
                directionTypeSelect.classList.toggle('inactive-disp-elem');
                marginTypeSelect.labels[0].classList.toggle('inactive-disp-elem');
                marginTypeSelect.classList.toggle('inactive-disp-elem');

                if (!gridFormatters){
                //create styling options
                var styleOptions = `<div id="gridFormatters"><label for="colNo">No. of Columns</label>
                                    <select id="colNo">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                    <label for="gapcolSpce">Gap between columns</label>
                                    <select id="gapcolSpce">
                                        <option value="none">None</option>
                                        <option value="5px">5px</option>
                                        <option value="10px">10px</option>
                                        <option value="15px">15px</option>
                                        <option value="20px">20px</option>
                                        <option value="25px">25px</option>
                                        <option value="30px">30px</option>
                                        <option value="35px">35px</option>
                                        <option value="40px">40px</option>
                                    </select>
                                    <label for="gaprwSpce">Gap between</label>
                                    <select id="gaprwSpce">
                                        <option value="none">None</option>
                                        <option value="5px">5px</option>
                                        <option value="10px">10px</option>
                                        <option value="15px">15px</option>
                                        <option value="20px">20px</option>
                                        <option value="25px">25px</option>
                                        <option value="30px">30px</option>
                                        <option value="35px">35px</option>
                                        <option value="40px">40px</option>
                                    </select>
                                    `
                document.getElementById('dispDiv').insertAdjacentHTML('beforeend', styleOptions);
                document.getElementById('colNo').addEventListener('change', function(){
                    updateGridState();
                });

                document.getElementById('gapcolSpce').addEventListener('change', function(){
                    updateGridState();
                });

                document.getElementById('gaprwSpce').addEventListener('change', function(){
                    updateGridState();
                });

                }else{gridFormatters.style.display='inline-block';updateGridState();}


                checkboxes.forEach(checkbox =>{
                checkbox.parentElement.parentElement.style.display = 'grid';
                checkbox.parentElement.parentElement.style.gridTemplateColumns = 'repeat(4, 1fr)';
                checkbox.parentElement.parentElement.style.gridRowGap = '10px';
                checkbox.parentElement.parentElement.style.gridColumnGap = '10px';
                checkbox.parentElement.style.flexWrap = wrappingType;
                checkbox.parentElement.parentElement.style.justifyContent = justifyCntType;
                checkbox.parentElement.style.alignItems = algnItmsType;
                checkbox.parentElement.parentElement.style.margin = marginType;
                });
            }

    }

});


function togglePreviewVisibility(){
    const previewDiv = document.getElementById('previewDiv');
    previewDiv.classList.toggle('active');
};

function setWidth(dElem){
    const ansDropdown = document.getElementById('dropdownAOpts');
    ansDropdown.style.width = document.getElementById('widthType')[document.getElementById('widthType').selectedIndex].innerText;
}

function updateGridState(){
    var columnGap = document.getElementById('gapcolSpce').options[document.getElementById('gapcolSpce').selectedIndex].value;
    var rowGap = document.getElementById('gaprwSpce').options[document.getElementById('gaprwSpce').selectedIndex].value;
    var colNum = document.getElementById('colNo').options[document.getElementById('colNo').selectedIndex].value;
    var ansOptCheckboxes = document.querySelectorAll('#previewDiv input[type="checkbox"]');
    ansOptCheckboxes.forEach(checkbox =>{
        console.log('here')
        checkbox.parentElement.parentElement.style.display = 'grid';
        checkbox.parentElement.parentElement.style.gridTemplateColumns = `repeat(${colNum}, 1fr)`;
        checkbox.parentElement.parentElement.style.gridRowGap = `${rowGap}`;
        checkbox.parentElement.parentElement.style.gridColumnGap = `${columnGap}`;
    });
}
function useExample(){
    var qTextArea = document.getElementById('pasteQuestionT');
    qTextArea.value = "What is a banana?\n\nBlack\nWhite\nBlue\nYellow";
}
function generateQPaste(){
    var ansCount = 0;
    const ansOptElements = document.querySelectorAll('.ansOpt').length;
    const cnt = ansOptElements + 1;
    var qTextArea = document.getElementById('pasteQuestionT');
    var qTextContent = qTextArea.value.trim();
    var lines = qTextContent.split('\n');
    var question = lines[0];
    var answers = lines.slice(1);
    //process questions
    answers.forEach(ans =>{
        if(!isspace(ans)){
            const ansOptId = generateUUID();
            const ansOptHTML = `
                                    <div class="ansOpt" id="${ansOptId}">${ans}
                                    <div class="switch-container">
                                                       <label class="switch">
                                                           <input type="checkbox" class='question-validity' ansOptCheck-ref-id="${ansOptId}" onchange="validateQuestion('${ansOptId}');">
                                                           <span class="slider" data-ans-isCorrect-id="${ansOptId}"></span>
                                                       </label>
                                                       <label class="switch-label">Incorrect</label>
                                     </div>
                                     <span class="ansNumber">${cnt}</span>
                                    <button class="btn btn-danger deleteAnsOpt" data-ans-opt-id="${ansOptId}" onclick="deleteAnsOpt(this)">🗑Delete</button>
                                    </div>
                                `;
                                document.getElementById('ansOptDiv').insertAdjacentHTML('beforeend', ansOptHTML);
             //add div to preview div
            var previewAnsDiv = $('#previewAOptsDiv');
            //create preview answer element
            const previewAnsOptHTML = `
                <div id="${ansOptId}prevA">
                <input type="checkbox">${ans}
                </div>
            `
            document.getElementById('previewAOptsDiv').insertAdjacentHTML('beforeend', previewAnsOptHTML);
        }
    });
    $('#qSummernote').summernote('code', question);
}

function isspace(str){
    return /^\s*$/.test(str);
}

function addTag(){
    var TagValue = document.getElementById('tagValue').value.trim();
    var addTagElem =document.createElement('div');
    addTagElem.id ="add-tag";
    addTagElem.classList.add('add-tag')
    var addTagContent = document.createElement('p');
    addTagContent.innerText = TagValue;
    var delBtn = document.createElement('i');
    delBtn.classList.add('fas', 'fa-times', 'deleteTagBtn');
    delBtn.addEventListener('click', function(){
        addTagElem.parentNode.removeChild(addTagElem);
    });
    addTagContent.appendChild(delBtn);
    addTagElem.appendChild(addTagContent);

    document.getElementById('addedTags').appendChild(addTagElem);
}
//for sidebar position
function swapPos(){
    var sideBarDiv = document.getElementById('sidebarDiv');
    var mainContentDiv = document.getElementById('main-preview');
    var margin1 = window.getComputedStyle(sideBarDiv).marginRight;
    var margin2 = window.getComputedStyle(mainContentDiv).marginRight;
    sideBarDiv.style.marginRight = margin2;
    mainContentDiv.style.marginRight = margin1;
}

/*
json schema

*/
