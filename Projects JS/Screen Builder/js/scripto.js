
const creator = document.getElementById('editorID')

const itype = document.getElementById('elementType');
const iheight = document.getElementById('elementHeight');
const iwidth = document.getElementById('elementWidth');
const icontents = document.getElementById('elementContents');
const ifontColor = document.getElementById('fontColor');
const ifontSize = document.getElementById('fontSize');
const ifontFamily = document.getElementById('fontFamily');

const editButton = document.getElementById('edit');
const saveButton = document.getElementById('saveBTN');

let i = 0;
let j = 1;
const SAVED_PROPERTIES_KEY = 'SAVED_PROPERTIES_KEY';

// Return from whence thou cam'st .. for that is thy place of belonging
function editCommand() {
    const itype = document.getElementById('elementType').value;
    const iheight = document.getElementById('elementHeight').value;
    const iwidth = document.getElementById('elementWidth').value;
    const icontents = document.getElementById('elementContents').value;
    const ifontColor = document.getElementById('fontColor').value;
    const ifontSize = document.getElementById('fontSize').value;
    const ifontFamily = document.getElementById('fontFamily').value;

    const theWall = document.getElementById('theThings');

    if (!itype || !iheight || !iwidth || !icontents || !ifontColor || !ifontSize || !ifontFamily) {
        editButton.style.color = 'red'
        alert('Not all fields were filled')
        return
    }

    console.log(`itype: `, itype);
    console.log(`iheight: `, iheight);
    console.log(`iwidth: `, iwidth);
    console.log(`icontents: `, icontents);
    console.log(`ifontColor: `, ifontColor);
    console.log(`ifontSize: `, ifontSize);
    console.log(`ifontFamily: `, ifontFamily);

    let element = document.createElement(`${itype}`)
    // element.setAttribute(`id`, `${itype + i}`)
    element.setAttribute(`class`, `editedElement`)
    theWall.appendChild(element)

    element.style.height = `${iheight}px`;
    element.style.width = `${iwidth}px`;
    element.innerHTML = icontents;
    element.style.color = ifontColor;
    element.style.fontSize = `${ifontSize}px`;
    element.style.fontFamily = ifontFamily;

    editButton.style.color = 'black'

    i++;
}

function expand() {
    if ((j % 2) == 1) {
        creator.style.display = `none`;
        document.getElementById(`btnExpander`).innerText = `>`;
        j++;
    }
    else {
        creator.style.display = `flex`;
        document.getElementById(`btnExpander`).innerText = `<`;
        j++;
    }
}

function saveFunction() {
    const itype = document.getElementById('elementType').value;
    const iheight = document.getElementById('elementHeight').value;
    const iwidth = document.getElementById('elementWidth').value;
    const icontents = document.getElementById('elementContents').value;
    const ifontColor = document.getElementById('fontColor').value;
    const ifontSize = document.getElementById('fontSize').value;
    const ifontFamily = document.getElementById('fontFamily').value;

    const objToSave = {
        type: itype,
        height: iheight,
        width: iwidth,
        contents: icontents,
        fontColor: ifontColor,
        fontSize: ifontSize,
        fontFamily: ifontFamily
    }
    const objToJSON = JSON.stringify(objToSave)
    console.log(objToJSON);
    localStorage.setItem(SAVED_PROPERTIES_KEY, objToJSON);
    alert('Save successful')
}

function restoreSavedProperties() {
    const savedJSON = localStorage.getItem(SAVED_PROPERTIES_KEY);
    if (!savedJSON) {
        return
    }
    const jsonToOBJ = JSON.parse(savedJSON)


    itype.value = jsonToOBJ.type;
    iheight.value = jsonToOBJ.height;
    iwidth.value = jsonToOBJ.width;
    icontents.value = jsonToOBJ.contents;
    ifontColor.value = jsonToOBJ.fontColor;
    ifontSize.value = jsonToOBJ.fontSize;
    ifontFamily.value = jsonToOBJ.fontFamily;
}
restoreSavedProperties();
document.getElementById(`btnExpander`).addEventListener('click', expand)

document.getElementById(`saveBTN`).addEventListener('click', saveFunction)
document.getElementById('edit').addEventListener('click', editCommand)