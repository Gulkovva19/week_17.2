let comments = [];

const checkSpam = document.querySelector('#btn');
checkSpam.addEventListener("click", () => {
    let message = document.getElementById("comments").value;
    let newmessage = message.toLowerCase();

    if (newmessage.includes('xxx') || newmessage.includes('viagra')) {
        let n = newmessage.replace("viagra", "***");
        let m = n.replace("xxx", "***");
        comments.push(m);
    }

    else {
        comments.push(newmessage);
    }

    console.log(comments);
    generateComments();
})



function generateComments() {
    let optionString = "";
    for (let comment of comments) {

        optionString += `<div class="message" id="mmessage"><span>${comment}</span><button class="comments__button_small id="btndelete"">Удалить</button></div>`;
    }
    document.getElementById("commentslist").innerHTML = optionString;
}


const commentDel = document.querySelector('#btndelete');
commentDel.addEventListener("click", () => {
    let elem = document.getElementById("mmessage");
    elem.firstChild.remove();
})