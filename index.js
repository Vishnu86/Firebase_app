
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL : "https://champions-cf815-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)

let publish = document.getElementById("Publish")
let comments = document.getElementById("comments")
let com = document.getElementById("com")
let commentListDb = ref(database, "commentList")

let textComments = []

console.log(typeof textComments)


publish.addEventListener("click", function(){
    let text = com.value
    push(commentListDb, text)

    renderAllcomments(textComments)
}
)
onValue(commentListDb, function(snapshot){
    console.log(snapshot.val())
})

function renderappend(text){
    let li = document.createElement("li")
    li.textContent = text
    comments.append(li)

}

function clearDom(){

    comments.innerHTML = ""
}

function renderAllcomments(textComments){
 
    clearDom()
    for(let i = 0; i < textComments.length; i++){

        console.log(textComments[i])
        renderappend(textComments[i])
  
    }

    console.log(textComments)
}

