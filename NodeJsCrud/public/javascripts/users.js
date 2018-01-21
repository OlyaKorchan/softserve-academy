const showAddUserForm = function showAddUserForm(){
    document.getElementById('create_user').style.display = "block";
};

const newUserAdded = function newUserAdded(){
    
    const iframe = document.getElementById('new_user').contentWindow.document;
    const iframeRow = iframe.querySelector('.added_user');
    const tableBody = document.getElementById('table_body');
    tableBody.appendChild(iframeRow);

    document.getElementById('create_user').style.display = "none";
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
    const deletedUser = JSON.parse(iframe.body.innerHTML);
    deletedRow = document.getElementById(deletedUser.id).remove();
};

const editUserForm = function editUserForm(id){
    const user = allUsers.filter((el) => {
        return el.id == id;
    })[0];
    document.getElementById('edit_userName').value = user.userName;
    document.getElementById('edit_userSurname').value = user.userSurname;
    document.getElementById('edit_email').value = user.email;
    document.getElementById('edit_age').value = user.age;

    document.getElementById('edit_user').style.display = "block";
};
