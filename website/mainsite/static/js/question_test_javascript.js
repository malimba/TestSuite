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
        //for min select
        var dropdownButton = document.getElementById("customDropdownButton");
        var dropdownMenu = document.querySelectorAll(".custom-dropdown .dropdown-menu")[0];

        dropdownButton.addEventListener("click", function () {
            dropdownMenu.classList.toggle("show-options");
        });

        document.addEventListener("click", function (event) {
            if (!event.target.matches("#customDropdownButton")) {
                dropdownMenu.classList.remove("show-options");
            }
        });
        //for max select
        var dropdownButton2 = document.getElementById("customDropdownButton2");
        var dropdownMenu2 = document.querySelectorAll(".custom-dropdown .dropdown-menu")[1];

        dropdownButton2.addEventListener("click", function () {
            dropdownMenu2.classList.toggle("show-options");
        });

        document.addEventListener("click", function (event) {
            if (!event.target.matches("#customDropdownButton2")) {
                dropdownMenu2.classList.remove("show-options");
            }
        });
    });


function toggleDropdown(event) {
    event.parentElement.querySelector(".nested").classList.toggle("active");
    event.classList.toggle("caret-down");
}
document.addEventListener('DOMContentLoaded', function () {
    const jsonDropdownCaret_ = document.getElementsByClassName("caret");
    for (let i = 0; i < jsonDropdownCaret_.length; i++) {
        jsonDropdownCaret_[i].addEventListener("click", function () {
            toggleDropdown(this);
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.getElementById('customDropdownButton');
    const minSelectionText = document.getElementById('minSelectionText');
    const dropdownMenu = document.getElementById('minSelDrpDwn');

    dropdownMenu.addEventListener('click', function (event) {
        if (event.target.classList.contains('dropdown-item')) {
            minSelectionText.textContent = event.target.textContent;
            const selectedValue = event.target.getAttribute('data-value');
            console.log('Min Selection:', selectedValue);
        }
    });

    const dropdownButton2 = document.getElementById('customDropdownButton2');
    const maxSelectionText = document.getElementById('maxSelectionText');
    const dropdownMenu2 = document.getElementById('maxSelDrpDwn');

    dropdownMenu2.addEventListener('click', function (event) {
        if (event.target.classList.contains('dropdown-item')) {
            maxSelectionText.textContent = event.target.textContent;
            const selectedValue = event.target.getAttribute('data-value');
            console.log('Max Selection:', selectedValue);
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
//initiate json
let jsonData;
document.addEventListener('DOMContentLoaded', function(){
        //json data declaration
     jsonData = {
            "root": {
                "ask": {
                    "content": {
                        "kind": "rich",
                        "html": ""
                    },
                    "modal": null,
                    "name": null,
                    "extractAnswer": false,
                    'sidebarEnabled': false,
                    'hintEnabled': false,
                    'feedbackEnabled': false,
                    'shuffled':false,
                    'threshold':0
                },
                "sidebar": {
                    "kind": "sidebar",
                    "active": false,
                    "content": {
                        "kind": "rich",
                        "html": ""
                    },
                    "position": null
                },
                "hint":{
                    "kind":"hint",
                    "active":false,
                    "content":{
                        "title":"",
                        "html":""
                    }
                },
                "feedback":{
                    "kind":"hint",
                    "active":false,
                    "content":{
                        "html":""
                    }
                },
                "directory": {
                    "folder": "",
                    "tags": {
                        "tagName":"",
                        "tagValue": ""
                    },
                    "scoring": {
                        "scoreTags": {
                            "positive": 1,
                            "negative": -0
                        },
                        "feedback": {
                            "kind": "rich",
                            "html": ""
                        },
                        "modal": null,
                        "copyOf": false
                    },
                    "questionKind": "",
                    "multipleChoice": {
                        "choices":[],
                        "choicesDisplayType":"",
                        //specifically for dropdown
                        "width": "",
                        'choicesEffects':{
                            "maxSelection": 1,
                            "minSelection": 1,
                            "shuffle": false,
                            "threshold": 0,
                            "effect": false
                        },
                        "display": {
                            "mainParentContainerDisplay":"",
                            "subParentContainerDisplay":"",
                            "ansOptDisplay":""
                        }
                    }
                }
            }
        };
    document.addEventListener('change', updateJson);
    document.addEventListener('click', updateJson);
    var jsonGlobal;
});

function updateJson(){

    //checks for status of enable buttons
    const extractAnswerStatus = document.getElementById('extrAns').checked;
    const sideBarStatus = document.getElementById('sideBarEnbl').checked;
    const hintStatus = document.getElementById('hintEnbl').checked;
    const feedbackStatus = document.getElementById('fdbckEnbl').checked;
    const shufflechoicesStatus = document.getElementById('sfC').checked;
    //content items => inputs
    const reportNameContent = document.getElementById('rprtName').value;
    const thresholdContent = document.getElementById('threshold').value;
    const minSelection = document.getElementById('customDropdownButton').innerText;
    const maxSelection = document.getElementById('customDropdownButton2').innerText;
    const questionContent = $('#qSummernote').summernote('code');
    const sidebarContent = $("#sBDivSummernote").summernote('code');
    const hintTitle = document.getElementById('hintTitle').value;
    const hintContent = $("#hintDivSummernote").summernote('code');
    const feedbackContent = $("#fdbackDivSummernote").summernote('code');
    const answersArray = document.querySelectorAll(".ansOpt");
    //styling attributes
    referenceCheckBox = document.querySelector("#previewDiv input[type='checkbox']");
    try{
        // mainParentContainer - for main-preview
        const mainParentContainer = document.getElementById('main-preview');
        // subParentContainer - for previewAOptsDiv
        const subParentContainer = document.getElementById('previewAOptsDiv');
        
        // styling for mainParentContainer
        const mainParentContainerStyle = getComputedStyle(mainParentContainer);
//        console.log(mainParentContainerStyle);
        // styling for subParentContainer
        const subParentContainerStyle = getComputedStyle(subParentContainer);
        //conditionality for dropdown options
        if (mainParentContainer.style.display === 'dropdown'){
            //width of dropdown
            const ansDropdownWidth = document.getElementById('dropdownAOpts').style.width;
            const ansOptionsDisplayType = 'dropdown';
        }
        if(mainParentContainer.style.display === 'grid'){
            const ansOptionsDisplayType = 'grid';
        }
        const ansOptionsDisplayType = 'normal'; //for flex state
        const questionKind = document.getElementById('kind').innerText;
        //start json modify
        jsonData['root']['ask']['content']['html'] = questionContent;
        jsonData['root']['ask']['name'] = reportNameContent;
        jsonData['root']['ask']['extractAnswer'] = extractAnswerStatus;
        jsonData['root']['ask']['sidebarEnabled'] = sideBarStatus;
        jsonData['root']['ask']['hintEnabled'] = hintStatus;
        jsonData['root']['ask']['feedbackEnabled'] = feedbackStatus;
        jsonData['root']['ask']['shuffled'] = shufflechoicesStatus;
        jsonData['root']['ask']['threshold'] = thresholdContent;
        jsonData['root']['sidebar']['active'] = sideBarStatus;
        jsonData['root']['sidebar']['content']['html'] = sidebarContent;
        jsonData['root']['sidebar']['position'] = document.getElementById('sidebarPosToggler').value;
        jsonData['root']['hint']['content']['title'] = hintTitle;
        jsonData['root']['hint']['content']['html'] = hintContent;
        jsonData['root']['hint']['active'] = hintStatus;
        jsonData['root']['feedback']['content']['html'] = feedbackContent;
        jsonData['root']['feedback']['active'] = feedbackStatus;
        jsonData['root']['directory']['folder'] = document.getElementById('fldrDrpDwn').value;
        jsonData['root']['directory']['tags']['tagName'] = document.getElementById('tagDrpDwn').value;
        jsonData['root']['directory']['tags']['tagValue'] = document.getElementById('tagValue').innerText;
        jsonData['root']['directory']['scoring']['scoreTags']['positive'] = document.getElementById('pnt').innerText || 1
        jsonData['root']['directory']['scoring']['scoreTags']['negative'] = document.getElementById('negMult').innerText || -0
        jsonData['root']['directory']['scoring']['feedback']['html'] = $('#fdbackDivSummernote').summernote('code');
        jsonData['root']['directory']['questionKind'] = document.getElementById('kind').innerText;
        //append answer options
        const ansObjs = document.querySelectorAll(".main-content");
         //for jsonData update
         //intialise array
         jsonData.root.directory.multipleChoice.choices =[];

        ansObjs.forEach(ans =>{
            const newChoice = {
                    "data":{
                        "id": `${ans.parentElement.id}`,
                        "content":{
                            "html": `${ans.innerHTML}`,
                            "isCorrect":`${ans.parentElement.querySelector('.question-validity').checked}`
                        }
                    }
            }
            jsonData.root.directory.multipleChoice.choices.push(newChoice);
        });
        jsonData['root']['directory']['multipleChoice']['choicesDisplayType'] = ansOptionsDisplayType;
        jsonData['root']['directory']['multipleChoice']['display']['ansOptDisplay'] = ansOptionsDisplayType;
        jsonData['root']['directory']['multipleChoice']['display']['mainParentContainerDisplay'] = mainParentContainerStyle;
        jsonData['root']['directory']['multipleChoice']['display']['subParentContainerDisplay'] = subParentContainerStyle;
        if (ansOptionsDisplayType === 'dropdown'){
            jsonData['root']['directory']['multipleChoice']['width'] = document.getElementById('widthType').value;
        }
        console.log(jsonData);
//        jsonGlobal = jsonData;

        renderJson(jsonData);//update HTML json

    }
    catch(err){console.log(err, 'An error occurred. No inputs to retrive yet');}

};
function renderJson(jsonData){ //->append json to json view
        document.getElementById("aModal").innerHTML = jsonData.root.ask.modal || "null";
        document.getElementById("aName").innerHTML = jsonData.root.ask.name || "null";
        document.getElementById("aEa").innerHTML = jsonData.root.ask.extractAnswer || "null";
        document.getElementById("aSidebar").innerHTML = jsonData.root.sidebar.active || "null";
        document.getElementById("aHint").innerHTML = jsonData.root.hint.active || "null";
        document.getElementById("aFeedback").innerHTML = jsonData.root.feedback.active || "null";
        document.getElementById("aShuffle").innerHTML = jsonData.root.ask.shuffled || "null";
        document.getElementById("aThreshold").innerHTML = jsonData.root.ask.threshold || "null";

        document.getElementById("sActive").innerHTML = jsonData.root.sidebar.active || "null";
        document.getElementById("sHtml").innerHTML = jsonData.root.sidebar.content.html || "null";
        document.getElementById("sPos").innerHTML = jsonData.root.sidebar.position || "null";

        document.getElementById("hActive").innerHTML = jsonData.root.hint.active || "null";
        document.getElementById("hT").innerHTML = jsonData.root.hint.content.title || "null";
        document.getElementById("hHtml").innerHTML = jsonData.root.hint.content.html || "null";

        document.getElementById("fActive").innerHTML = jsonData.root.feedback.active || "null";
        document.getElementById("fHtml").innerHTML = jsonData.root.feedback.content.html || "null";

        document.getElementById("dF").innerHTML = jsonData.root.directory.folder || "null";
        document.getElementById("dT").innerHTML = jsonData.root.directory.tags.tagName || "null";
        document.getElementById("dV").innerHTML = jsonData.root.directory.tags.tagValue || "null";
        document.getElementById("sP").innerHTML = jsonData.root.directory.scoring.scoreTags.positive || "null";
        document.getElementById("sN").innerHTML = jsonData.root.directory.scoring.scoreTags.negative || "null";
        document.getElementById("fH").innerHTML = jsonData.root.directory.scoring.feedback.html || "null";

        document.getElementById("mCDT").innerHTML = jsonData.root.directory.multipleChoice.choicesDisplayType || "null";
        document.getElementById("mW").innerHTML = jsonData.root.directory.multipleChoice.width || "null";
        document.getElementById("maS").innerHTML = jsonData.root.directory.multipleChoice.choicesEffects.maxSelection || "null";
        document.getElementById("miS").innerHTML = jsonData.root.directory.multipleChoice.choicesEffects.minSelection || "null";
        document.getElementById("mSf").innerHTML = jsonData.root.directory.multipleChoice.choicesEffects.shuffle || "null";
        document.getElementById("mThr").innerHTML = jsonData.root.directory.multipleChoice.choicesEffects.threshold || "null";
        document.getElementById("mEff").innerHTML = jsonData.root.directory.multipleChoice.choicesEffects.effect || "null";

        document.getElementById("mMDisp").innerHTML = jsonData.root.directory.multipleChoice.display.mainParentContainerDisplay || "null";
        document.getElementById("mSDisp").innerHTML = jsonData.root.directory.multipleChoice.display.subParentContainerDisplay || "null";
        document.getElementById("mAODisp").innerHTML = jsonData.root.directory.multipleChoice.display.ansOptDisplay || "null";

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
      <div class="main-content">${ansSummernoteContent}</div>
      <div class="switch-container">
                        <label class="switch">
                            <input type="checkbox" class='question-validity' ansOptCheck-ref-id="${ansOptId}" onchange="validateQuestion('${ansOptId}');">
                            <span class="slider" data-ans-isCorrect-id="${ansOptId}"></span>
                        </label>
                        <label class="switch-label">Incorrect</label>
      </div>
      <span class="ansNumber">${cnt}</span>
      <button class="btn btn-primary " data-ans-opt-id="${ansOptId}" onclick="editAnsOpt(this)"><i class="fa-solid fa-pencil"></i></button>
     <button class="btn btn-danger deleteAnsOpt" data-ans-opt-id="${ansOptId}" onclick="deleteAnsOpt(this)"><i class="fa fa-trash" aria-hidden="true"></i></button>
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
    //for min max select options
    const minSelOptDiv = document.getElementById("minSelDrpDwn");
    const maxSelOptDiv = document.getElementById('maxSelDrpDwn');
    //clear all existing options
    minSelOptDiv.innerHTML = '';
    maxSelOptDiv.innerHTML = '';
    for(i=0; i<cnt; i++){
        const newOption = `
                             <button class="dropdown-item" data-value="${i+1}">${i+1}</button>
                           `;
        minSelOptDiv.insertAdjacentHTML('beforeend', newOption);
        maxSelOptDiv.insertAdjacentHTML('beforeend', newOption);
   };
   //for jsonDiv choices
   //clear the input
   updateJsonChoices();
}
function updateJsonChoices() {
    console.log(jsonData);
    const choicesArray = jsonData.root.directory.multipleChoice.choices;
    const jsonChoicesDiv = document.getElementById('choicesUl');
    jsonChoicesDiv.innerHTML = ''; // Clear existing content

    for (let index = 0; index < choicesArray.length; index++) {
        const choice = choicesArray[index];

        const choiceHtml = `
            <li>
                <span class="caret"><b>"${index}"</b></span>
                <ul class="nested">
                    <li>
                        <span class="caret"><b>"data"</b></span>
                        <ul class="nested">
                            <li>"id:"<span>"${choice.data.id}"</span></li>
                            <li>
                                <span class="caret"><b>"content"</b></span>
                                <ul class="nested">
                                    <li>"html": "${choice.data.content.html}"</li>
                                    <li>"isCorrect": "${choice.data.content.isCorrect}"</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        `;

        jsonChoicesDiv.insertAdjacentHTML('beforeend', choiceHtml);
    }

    // Add event listeners for dropdown toggling on updated choices
    attachDropdownEventListeners(jsonChoicesDiv);
}

// Function to attach event listeners for dropdown toggling
function attachDropdownEventListeners(container) {
    const jsonDropdownCaret_ = container.getElementsByClassName("caret");
    for (let i = 0; i < jsonDropdownCaret_.length; i++) {
        jsonDropdownCaret_[i].addEventListener("click", function () {
            toggleDropdown(this);
        });
    }
}

// Call the function to update choices and attach event listeners
//updateJsonChoices();

function deleteAnsOpt(deleteButton){
    const ansOptElements = document.querySelectorAll('.ansOpt').length;
    const cnt = ansOptElements + 1;
    const ansOptId = deleteButton.getAttribute('data-ans-opt-id');
    const ansOptElement = document.getElementById(ansOptId);
    const ansOptPreviewObject = document.getElementById(`${ansOptId}prevA`);
    //for display view
    //for display preview

    ansOptPreviewObject.remove();
    ansOptElement.remove();
    //for min max select options
    const minSelOptDiv = document.getElementById("minSelDrpDwn");
    const maxSelOptDiv = document.getElementById('maxSelDrpDwn');
    //clear all existing options
    minSelOptDiv.innerHTML = '';
    maxSelOptDiv.innerHTML = '';
    for(i=0; i<cnt; i++){
        const newOption = `
                             <button class="dropdown-item" data-value="${i+1}">${i+1}</button>
                           `;
        minSelOptDiv.insertAdjacentHTML('beforeend', newOption);
        maxSelOptDiv.insertAdjacentHTML('beforeend', newOption);
   };
   updateJsonChoices();
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
        checkboxSelf.parentElement.parentElement.querySelector('.switch-label').innerText = 'Correct';
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
                    checkbox.parentElement.parentElement.style.display = 'inline-block';
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
                                    <div class="ansOpt" id="${ansOptId}">
                                    <div class="main-content">${ans}</div>
                                    <div class="switch-container">
                                                       <label class="switch">
                                                           <input type="checkbox" class='question-validity' ansOptCheck-ref-id="${ansOptId}" onchange="validateQuestion('${ansOptId}');">
                                                           <span class="slider" data-ans-isCorrect-id="${ansOptId}"></span>
                                                       </label>
                                                       <label class="switch-label">Incorrect</label>
                                     </div>
                                     <span class="ansNumber">${cnt}</span>
                                     <button class="btn btn-primary " data-ans-opt-id="${ansOptId}" onclick="editAnsOpt(this)"><i class="fa-solid fa-pencil"></i></button>
                                    <button class="btn btn-danger deleteAnsOpt" data-ans-opt-id="${ansOptId}" onclick="deleteAnsOpt(this)"><i class="fa fa-trash" aria-hidden="true"></i></button>
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
    //for min max select options
    const minSelOptDiv = document.getElementById("minSelDrpDwn");
    const maxSelOptDiv = document.getElementById('maxSelDrpDwn');
    //clear all existing options
    minSelOptDiv.innerHTML = '';
    maxSelOptDiv.innerHTML = '';
    for(i=0; i<cnt; i++){
        const newOption = `
                             <button class="dropdown-item" data-value="${i+1}">${i+1}</button>
                           `;
        minSelOptDiv.insertAdjacentHTML('beforeend', newOption);
        maxSelOptDiv.insertAdjacentHTML('beforeend', newOption);
   };

              updateJsonChoices();
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

function editAnsOpt(opt){

}