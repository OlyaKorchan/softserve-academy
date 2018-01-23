const showAddUserForm = function showAddUserForm(){
    document.getElementById('create_user').style.display = "block";
};

const newUserAdded = function newUserAdded(){
    const iframe = document.getElementById('new_user').contentWindow.document;

    if (iframe.body.innerHTML){
        const iframeRow = iframe.querySelector('.added_user');
        const tableBody = document.getElementById('table_body');
        tableBody.appendChild(iframeRow);

        document.getElementById('create_user').style.display = "none";
        const allInputs = document.getElementById('create_user').querySelectorAll('input:not([type=submit])');
        for(let i = 0; i < allInputs.length; i++){
            allInputs[i].value = '';
        }
    }
};

const sendDeleteRequest = function sendDeleteRequest(id){
    const iframe = document.getElementById('delete_user');
    const form = document.createElement('form');
    const node = document.createElement('input');
    const methodNode = document.createElement('input');
    form.action = '/users?_method=DELETE';
    form.target = iframe.name;
    form.method = 'POST';

    node.name = 'id';
    node.value = id;

    form.appendChild(node.cloneNode());

    form.style.display = "none";
    document.body.appendChild(form);

    form.submit();

    document.body.removeChild(form);
};

const deleteUser = function deleteUser(){
    const iframe = document.getElementById('delete_user').contentWindow.document;

    if (iframe.body.innerHTML) {
        const deletedUser = iframe.body.innerHTML;
        const deletedRow = document.getElementById(deletedUser).remove();
    }
};

const editUserForm = function editUserForm(id){
    const user = {};
    const userRow = document.getElementById(id);
    for (let i = 0; i < userRow.cells.length; i++){
        user[userRow.cells[i].className] = userRow.cells[i].innerHTML;
    }

    document.getElementById('edit_id').value = id;
    document.getElementById('edit_userName').value = user.userName;
    document.getElementById('edit_userSurname').value = user.userSurname;
    document.getElementById('edit_email').value = user.email;
    document.getElementById('edit_age').value = user.age;

    document.getElementById('edit_user').style.display = "block";
};

const editUser = function editUser(){
    const iframe = document.getElementById('edited_user').contentWindow.document;

    if (iframe.body.innerHTML) {
        const iframeRow = iframe.querySelector('.edited_user');
        const userId = iframeRow.querySelector('td').parentNode.id;
        const oldRow = document.getElementById(userId);
        const tableBody = document.getElementById('table_body');
        tableBody.replaceChild(iframeRow, oldRow);
        
        document.getElementById('edit_user').style.display = "none";
    }
};