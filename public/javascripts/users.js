//Events on load
window.onload = () => {
    //Show user form
    const showUserForm = document.getElementById('new_user_form');
    showUserForm.addEventListener('click', () => {
        document.getElementById('create_user').style.display = "block";
    });

    document.getElementById('create_user_form').addEventListener('submit', (event) => {
        event.preventDefault();
        const data = serializeFormData(document.getElementById('create_user_form'));
        sendData('POST', data, createdUser);
    });

    document.getElementById('edit_user_form').addEventListener('submit', (event) => {
        event.preventDefault();
        const data = serializeFormData(document.getElementById('edit_user_form'));
        sendData('PUT', data, editedUser)
    });
}
const sendDeleteRequest = function sendDeleteRequest(id){
    sendData('DELETE', JSON.stringify({deleted_user: id}), deletedUser);
}

//General functions
const sendData = function sendUserData(requestType, data, onSuccess){
    const xhr = new XMLHttpRequest();

    xhr.open(requestType, '/users', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
        if(xhr.readyState == 4 && xhr.status == 200){
            onSuccess(xhr.responseText);
        }
    }
    xhr.send(data);
};

const serializeFormData = function serializeFormData(form){
    const formData = new FormData(form);
    let formObj = {};
    for(let pair of formData.entries()){
        formObj[pair[0]] = pair[1];
    }
    return JSON.stringify(formObj);
};

const createdUser = function createdUser(userData){
        const addedUser = new DOMParser().parseFromString(userData, "text/html");
        const tableBody = document.getElementById('table_body');
        tableBody.appendChild(addedUser.querySelector('tr'));

        document.getElementById('create_user').style.display = "none";
        const allInputs = document.getElementById('create_user').querySelectorAll('input:not([type=submit])');
        for(let i = 0; i < allInputs.length; i++){
            allInputs[i].value = '';
        }
}

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

const editedUser = function editedUser(updatedData){
        const updatedUser = new DOMParser().parseFromString(updatedData, "text/html");
        const tableBody = document.getElementById('table_body');
        const userId = updatedUser.querySelector('tr').id;
        const oldRow = document.getElementById(userId);
        tableBody.replaceChild(updatedUser.querySelector('tr'), oldRow);
        
        document.getElementById('edit_user').style.display = "none";
};

const deletedUser = function deletedUser(deletedId){
    const deletedRow = document.getElementById(deletedId).remove();
}
