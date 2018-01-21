const createUserRow = function createUserRow(user){
    const rowBody = `<tr id=${user.id}>
    <td>${user.userName}</td>
    <td>${user.userSurname}</td>
    <td>${user.email}</td>
    <td>${user.age}</td>
    <td><input type="submit" class=${user.id} value="Edit" onclick='editUserForm(this.className)'></td>
    <td><input type="submit" class=${user.id} value="Delete" onclick='sendDeleteRequest(this.className)'></td>`

    return rowBody;
};

const showAddUserForm = function showAddUserForm(){
    document.getElementById('create_user').style.display = "block";
};

const newUserAdded = function newUserAdded(){
    const iframe = document.getElementById('new_user').contentWindow.document;

    if (iframe.body.innerHTML){
        const newUser = JSON.parse(iframe.body.innerHTML);
        const tableBody = document.getElementById('table_body');
        const newUserRow = createUserRow(newUser);

        allUsers.push(newUser);
        tableBody.innerHTML += newUserRow;

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
    form.action = '/users/delete';
    form.target = iframe.name;
    form.method = 'POST';

    node.name = iframe.name;
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
        const deletedUser = JSON.parse(iframe.body.innerHTML);
        for (let i = 0; i < allUsers.length; i++){
            let itemIndex;
            if (allUsers[i].id == deletedUser.id){
            allUsers.splice(itemIndex, 1);
            break;
        }
    }
    deletedRow = document.getElementById(deletedUser.id).remove();
    }
};

const editUserForm = function editUserForm(id){
    const user = allUsers.filter((el) => {
        return el.id == id;
    })[0];

    document.getElementById('edit_userName').value = user.userName;
    document.getElementById('edit_userSurname').value = user.userSurname;
    document.getElementById('edit_email').value = user.email;
    document.getElementById('edit_age').value = user.age;
    document.getElementById('edit_id').value = user.id;

    document.getElementById('edit_user').style.display = "block";
};

const editUser = function editUser(){
    const iframe = document.getElementById('edited_user').contentWindow.document;

    if (iframe.body.innerHTML) {
        const editedUser = JSON.parse(iframe.body.innerHTML);
        const editedRow = createUserRow(editedUser);

        document.getElementById(editedUser.id).innerHTML = editedRow;
        for(let i = 0; i < allUsers.length; i++){
            if (allUsers[i].id == editedUser.id){
                allUsers[i] = editedUser;
                break;
            }
        }

        document.getElementById('edit_user').style.display = "none";
    }
};