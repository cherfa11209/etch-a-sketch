// all needed variables
const width = '600px'
const height = '600px'
let cellV = prompt('how many vertical squares?', '16')
let cellH = prompt('how many horizontal squares?', '16')
let cellWidth = (parseInt(width, 10)/parseInt(cellH, 10)) + 'px';
let cellHeight = (parseInt(height, 10)/parseInt(cellV, 10)) + 'px';
let n = 0;
let i = 0;
const bwBtn = document.getElementById('create-grid');
const colorfulBtn = document.getElementById('colorful')
const clear = document.getElementById('grid-clear')

function createDiv(){
    let container = document.getElementById('grid-container');
    let cell =  document.createElement('div')
    cell.style.margin = '0px'
    cell.style.float = 'left'
    cell.classList.add('div-cell')
    cell.setAttribute('id', 'cell '+ n)
    cell.addEventListener('mouseover', e => {
        cell.style.backgroundColor = 'black'})
    cell.style.height = cellHeight
    cell.style.width = cellWidth
    container.appendChild(cell)
}

function createGrid(){
    document.getElementById("create-grid").disabled = true
    document.getElementById("colorful").disabled = true
    for(n=0; n<(cellV*cellH); n++){
        createDiv()
    }
}
bwBtn.addEventListener('click', createGrid);

function createColorfulDiv(){
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    let container = document.getElementById('grid-container');
    let colorCell =  document.createElement('div')
    colorCell.style.margin = '0px'
    colorCell.style.float = 'left'
    colorCell.classList.add('div-colorCell')
    colorCell.setAttribute('id', 'colorCell '+ i)
    colorCell.addEventListener('mouseover', e => {
        colorCell.style.backgroundColor = randomColor})
    colorCell.style.height = cellHeight
    colorCell.style.width = cellWidth
    container.appendChild(colorCell)
}

function createColorGrid(){
    document.getElementById("colorful").disabled = true
    document.getElementById("create-grid").disabled = true
    for(i=0; i<(cellV*cellH); i++){
        createColorfulDiv()
    }
}

colorfulBtn.addEventListener('click', createColorGrid);

function reload(){
    location.reload();
}
