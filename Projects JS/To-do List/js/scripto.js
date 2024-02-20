
// Create new div inside taskHolder div each time I push a task
// Give it a class task (The Div) and style it


// Makes the Div and asigns 'tsk' id 

let input = document.getElementById('taskinput');
let i = 0;
function taskMaker() {

    if (input.value == '') {
        return;
    }

    let parentDiv = document.querySelector('#taskHolder');
    let newDiv = document.createElement('div');
    parentDiv.appendChild(newDiv)

    newDiv.setAttribute('id', 'tsk' + i)
    newDiv.setAttribute('class', 'tsk')
    console.log(`1: i=${i}`);
    innertxt(newDiv);
}

function innertxt(div) {

    let newIMG = document.createElement('img')
    let para = document.createElement('span')

    // Download an img of delete
    newIMG.setAttribute('src', '../imgs/delete.svg')
    // newIMG.src = '../imgs/delete.svg';
    newIMG.setAttribute('alt', 'delete')
    newIMG.setAttribute('width', '15')
    newIMG.setAttribute('height', '15')
    newIMG.setAttribute('type', 'button')
    newIMG.setAttribute('class', 'img')
    newIMG.setAttribute('id', `deleteBTN` + i)

    newIMG.addEventListener('click', () => deleto(div))

    div.appendChild(para)
    div.appendChild(newIMG)

    let task = document.getElementById('taskinput').value
    para.innerText = task
    console.log(`Task: ${task}`);

    if (input.value != '') {
        input.value = '';
    }
    console.log(`2: i=${i}`);
    i++;
}

function deleto(divElement) {
    divElement.remove();
}


document.getElementById('create').addEventListener('click', taskMaker)