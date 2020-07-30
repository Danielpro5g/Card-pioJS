const ElementList = document.querySelector('#app ul');

const todos = [
 {
   Nome: 'Application',
   idade: '18',
 },
 {
  Nome: 'Aplication',
  idade: '18',
  }
];

function RenderTodos(){
  for(todo of todos){
    const TodoElement = document.createElement('li');
    const TodoNome = document.createTextNode(todo.Nome);

    TodoElement.appendChild(TodoNome);
    ElementList.appendChild(TodoElement);
  }
}

RenderTodos();