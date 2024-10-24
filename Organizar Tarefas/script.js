document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('taskList');
        
        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <button class="completeBtn">Concluir</button>
            <button class="removeBtn">Remover</button>
        `;
        
        taskList.appendChild(li);

        taskInput.value = '';

        li.querySelector('.completeBtn').addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.querySelector('.removeBtn').addEventListener('click', function() {
            taskList.removeChild(li);
        });
    }
});
