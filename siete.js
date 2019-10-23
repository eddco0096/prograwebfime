const fill = document.querySelector('.reciclabletrue');
const emties = document.querySelectorAll('.cuadrocontenedor');

//fill listeners 
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//loo emties llamar eventos drag
for(const cuadrocontenedor of emties) {
    cuadrocontenedor.addEventListener('dragover', dragOver);
    cuadrocontenedor.addEventListener('dragenter', dragEnter);
    cuadrocontenedor.addEventListener('dragleave', dragLeave);
    cuadrocontenedor.addEventListener('drop', dragDrop);
}

//funciones drag
function dragStart() {
    this.className += 'hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    
}

function dragOver(e){
    e.preventDefault();
    
}

function dragEnter(){
   
    e.preventDefault();
    this.className += 'hovered';
}

function dragLeave(){
    
    this.className = 'empty';
}

function dragDrop(){
    
    this.className = 'empty';
    this.append(fill);
}
