let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

form.addEventListener("submit",addItem);

//delete remove
itemList.addEventListener("click",removeItem);

function addItem(e) {
    console.log(e);
    e.preventDefault();

    newItem = document.getElementById("item").value;

    li = document.createElement("li");
    li.className = "list-group-item";

    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);

    //create delete button

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-end delete"

    deleteBtn.appendChild(document.createTextNode("X"));
    // console.log(deleteBtn);
    li.appendChild(deleteBtn)
}

//Remove item

function removeItem(e) {
    if(e.target.classList.contains("delete")) {
        if(confirm("Are You Sure ?")) {
            let li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
    
}