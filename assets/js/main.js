// ToDoList level3


const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    const inputText = document.querySelector('input').value;
    console.log(inputText);

    if(inputText !== '') {
        const newTask = document.createElement('li');
        newTask.classList.add('list');
        newTask.innerHTML = inputText;
        console.log(newTask);

        // const removeBtn = '<button class="remove">Done</button>';
        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = 'Delete';
        removeBtn.classList.add('remove');
        removeBtn.addEventListener('click', function() {
            const ul = newTask.parentElement;
            console.log(ul);
            this.parentElement.remove();
        })

        newTask.appendChild(removeBtn)
    
        const ul = document.querySelector('ul');
        ul.appendChild(newTask);

    }


})
