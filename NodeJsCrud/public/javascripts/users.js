const showAddUserForm = function showAddUserForm(){
    document.getElementById('create_user').style.display = "block";
};

const newUserAdded = function newUserAdded(){
    const iframe = document.getElementById('new_user').contentWindow.document;
    const iframeRow = iframe.querySelector('.added_user');
    const tableBody = document.getElementById('table_body');
    tableBody.appendChild(iframeRow);
};

const deleteUser = function deleteUser(id){
    
};

