// если захочу сохранять имя пользователя

// document.addEventListener("DOMContentLoaded", function (event) {
//     let name = localStorage.getItem('name');
//     if (name != null) {
//         document.getElementById("author").value = name;
//     }

// });

let comments = [];

document.addEventListener("DOMContentLoaded", function (event) {
    loadComments();
});

const checkSpam = document.querySelector('#btn');
checkSpam.addEventListener("click", () => {
    event.preventDefault();
    let author = document.getElementById("author").value;
    let message = document.getElementById("comments").value;
    let newmessage = message.toLowerCase();

    if (newmessage.includes('xxx') || newmessage.includes('viagra')) {
        let n = newmessage.replace("viagra", "***").replace("xxx", "***");
        newmessage = n;
    }

    // если захочу сохранять имя пользователя
    // if (localStorage.getItem('name') == null) {
    //     localStorage.setItem('name', author);
    // }

    let fullcom = {
        name: author,
        body: newmessage
    }

    author = '';
    newmessage = '';
    comments.push(fullcom);
    saveComments();
    showComments();
    console.log(comments);
})


let saveComments = () => {
    localStorage.setItem('comments', JSON.stringify(comments));
}

let loadComments = () => {
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

let showComments = () => {
    let commentslist = document.getElementById('commentslist');
    let out = '';
    comments.forEach(function (item) {
        out += `<div class="message" id="newmessage">${item.name}:<span>${item.body}</span><button class="comments__button_small" id="btndelete">Удалить</button></div>`
    });
    commentslist.innerHTML = out;
}
