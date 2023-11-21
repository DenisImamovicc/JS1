const todolistEl = document.querySelector("#todolist");
const formCreateTodoEl = document.querySelector("#formCreateTodo");
const inputNewTodoTitleEl = document.querySelector("#inputNewTodoTitle");

// List of todos
const todos = [
	{
		title: "Eat",
		completed: false,
	},
	{
		title: "Code",
		completed: true,
	},
	{
		title: "Sleep",
		completed: false,
	},
	{
		title: "Take over the world",
		completed: false,
	},
];

formCreateTodoEl.addEventListener("submit", (e) => {

	e.preventDefault();

	const newTodoTitle = inputNewTodoTitleEl.value;

	if (newTodoTitle === "") {
		return alert("Lazy boy!,you can't have nothing todo.*whipped noises*");
	}

	const newTodo = {
		title: newTodoTitle,
		completed: false,
	}

	todos.push(newTodo);


	renderTodos();

	
	inputNewTodoTitleEl.value = "";
});

todolistEl.addEventListener("click", (e) => {
  const completedTodo = e.target
  handleClassnameAssign(completedTodo,"completed")

   todos.find((todo) =>{
      if(todo.title === completedTodo.innerText) {
        todo.completed = true
        console.log(todo);
      }
   })
  console.log(e,todos);
});

const handleClassnameAssign = (el,classname) => {
  return el.classList[1]
    ? el.classList.remove(classname)
    : el.classList.add(classname);
};


const renderTodos = () => {
	todolistEl.innerText = "";
  const sortedTodos = sortTodosAlphabetically(todos)

	sortedTodos.forEach((todo) => {
		/*
		const cssCompleted = todo.completed ? "completed" : "";

		todolistEl.innerHTML += `
			<li class="list-group-item ${cssCompleted}">
				${todo.title}
			</li>
		`;
		*/

		// create a new li element
		const todoEl = document.createElement("li");
		todoEl.innerText = todo.title;
		todoEl.classList.add("list-group-item");

		if (todo.completed) {
			todoEl.classList.add("completed");
		}

		// append the new li element to the ul element
		todolistEl.append(todoEl);
	});
}

const sortTodosAlphabetically = (todolist) => {
  return todolist.sort((a,b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
      } 
      else if (a.title < b.title) {
        return 1
      }else{
        return 0   
      } 
  })
}

const handleTodoCompletion = () => {

}

renderTodos();
console.log()
