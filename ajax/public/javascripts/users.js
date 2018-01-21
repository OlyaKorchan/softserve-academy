//Events on load
window.onload = () => {
    //Show user form
    const showUserForm = document.getElementById('new_user_form');
    showUserForm.addEventListener('click', () => {
        document.getElementById('create_user').style.display = "block";
    });

    document.getElementById('create_user_form').addEventListener('submit', (event) => {
        event.preventDefault();
        sendData(document.getElementById('create_user_form'));
    });
}

//General functions
const sendData = function sendUserData(userForm){
    const xhr = new XMLHttpRequest();
    const formData = new FormData(userForm);

    xhr.addEventListener('load', (event) => {
        const addedUser = JSON.parse(event.currentTarget.response);
        const tableBody = document.getElementById('table_body');
        const newUserRow = createUserRow(addedUser);

        allUsers.push(addedUser);
        tableBody.innerHTML += newUserRow;

        document.getElementById('create_user').style.display = "none";
        const allInputs = document.getElementById('create_user').querySelectorAll('input:not([type=submit])');
        for(let i = 0; i < allInputs.length; i++){
            allInputs[i].value = '';
        }
    });

    xhr.open('POST', '/users', true);
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(serializeFormData(formData));
};

const serializeFormData = function serializeFormData(formData){
    let formObj = {};
    for(let pair of formData.entries()){
        formObj[pair[0]] = pair[1];
    }
    return JSON.stringify(formObj);
};

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



// const sendDeleteRequest = function sendDeleteRequest(id){
//     const iframe = document.getElementById('delete_user');
//     const form = document.createElement('form');
//     const node = document.createElement('input');
//     const methodNode = document.createElement('input');
//     form.action = '/users';
//     form.target = iframe.name;
//     form.method = 'POST';

//     node.name = 'id';
//     node.value = id;

//     methodNode.name = 'method';
//     methodNode.value = 'delete';
//     form.appendChild(node.cloneNode());
//     form.appendChild(methodNode.cloneNode());

//     form.style.display = "none";
//     document.body.appendChild(form);

//     form.submit();

//     document.body.removeChild(form);
// };

// const deleteUser = function deleteUser(){
//     const iframe = document.getElementById('delete_user').contentWindow.document;

//     if (iframe.body.innerHTML) {
//         const deletedUser = JSON.parse(iframe.body.innerHTML);
//         for (let i = 0; i < allUsers.length; i++){
//             let itemIndex;
//             if (allUsers[i].id == deletedUser.id){
//             allUsers.splice(itemIndex, 1);
//             break;
//         }
//     }
//     deletedRow = document.getElementById(deletedUser.id).remove();
//     }
// };

// const editUserForm = function editUserForm(id){
//     const user = allUsers.filter((el) => {
//         return el.id == id;
//     })[0];

//     document.getElementById('edit_userName').value = user.userName;
//     document.getElementById('edit_userSurname').value = user.userSurname;
//     document.getElementById('edit_email').value = user.email;
//     document.getElementById('edit_age').value = user.age;
//     document.getElementById('edit_id').value = user.id;

//     document.getElementById('edit_user').style.display = "block";
// };

// const editUser = function editUser(){
//     const iframe = document.getElementById('edited_user').contentWindow.document;

//     if (iframe.body.innerHTML) {
//         const editedUser = JSON.parse(iframe.body.innerHTML);
//         const editedRow = createUserRow(editedUser);

//         document.getElementById(editedUser.id).innerHTML = editedRow;
//         for(let i = 0; i < allUsers.length; i++){
//             if (allUsers[i].id == editedUser.id){
//                 allUsers[i] = editedUser;
//                 break;
//             }
//         }

//         document.getElementById('edit_user').style.display = "none";
//     }
// };

