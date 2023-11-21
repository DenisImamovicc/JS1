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
  console.log(checkDupes(newTodoTitle));



  if (newTodoTitle === "" || checkDupes(newTodoTitle)) {
    return alert("Lazy boy!,you can't have nothing todo.*whipped noises*");
  }

  const newTodo = {
    title: newTodoTitle,
    completed: false,
  };

  todos.push(newTodo);

  renderTodos();

  inputNewTodoTitleEl.value = "";
});

todolistEl.addEventListener("click", (e) => toggleTodoCompletion(e.target))

todolistEl.addEventListener("click", (e) => {
  e.target.id === "deleteBtn"
    ? removeTodo(e.target.parentElement)
    : ""
})

const handleClassnameAssign = (el, classname) => {
  return el.classList[1]
    ? el.classList.remove(classname)
    : el.classList.add(classname);
};

const checkDupes = (inputTitle) => {
  return todos.find((todo) => {
    if (inputTitle === todo.title) {
      return true
    } else {
      return false
    }
  })
};

const removeTodo = (todo) => {
  const chosenTitle = todo.childNodes[0].textContent.trim()
  todos.find((todo,index) => {
    if (todo.title === chosenTitle) {
      return todos.splice(index,1)
    }
  });
  console.log(todos);
  return todo.remove()
};

const toggleTodoCompletion = (chosenTodo) => {
  const chosenTodoTitle = chosenTodo.childNodes[0].textContent.trim()
   todos.find((todo) => {
    if (todo.title === chosenTodoTitle) {
      handleClassnameAssign(chosenTodo, "completed");
      return (todo.completed = !todo.completed);
    }
  });
};

const renderTodos = () => {
  todolistEl.innerText = "";
  const sortedTodos = sortTodosAlphabetically(todos);

  sortedTodos.forEach((todo) => {

		const cssCompleted = todo.completed ? "completed" : "";

		todolistEl.innerHTML += `
			<li class="list-group-item ${cssCompleted}" id="todo">
				${todo.title}
        <button class="" id="deleteBtn">🚮</button>
			</li>
		`;
  });
};

const sortTodosAlphabetically = (todolist) => {
  return todolist.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (a.title < b.title) {
      return 1;
    } else {
      return 0;
    }
  });
};

renderTodos();