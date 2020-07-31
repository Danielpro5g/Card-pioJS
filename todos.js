const ElementList = document.querySelector('#app ul');

const todos = [
  'Produtos',
  'Produtos',
  'Produtos',
  'Produtos',
  'Produtos',

];

function RenderTodos(){
  for(todo of todos){
    const TodoElement = document.createElement('li');
    const TodoNome = document.createTextNode(todo);

    TodoElement.appendChild(TodoNome);
    ElementList.appendChild(TodoElement);
  }
}

RenderTodos();