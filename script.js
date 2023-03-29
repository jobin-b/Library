let myLibrary = [
    {
        name: "1Q84"
    },
    {
        name: "1Q84"
    }
];

function Book(name) {
    this.name = name;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function showBooks(){
    let container = document.getElementById("container");
    container.innerHTML = "";
    for (let index = 0; index < myLibrary.length; index++) {
        const element = myLibrary[index];
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.innerText = element.name;
        div.appendChild(p);
        let btn = document.createElement("button");
        btn.innerText = "Remove Book";
        btn.className = "remove";
        btn.setAttribute("book", index);
        div.appendChild(btn);
        container.appendChild(div).className = "Book";
    }

}

showBooks();

let button = document.getElementById("btn");
button.addEventListener("click", function(){
    let form = document.createElement("form");
    let label = document.createElement("label");
    label.setAttribute("for", "Title");
    label.innerText = "Title";
    input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "title");
    input.setAttribute("required", "true");
    input.id = "title";
    let submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.id = "submit";
    submit.innerText = "Submit";
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(submit);
    document.body.insertBefore(form, document.body.children[1]);

    submit.addEventListener("click", function(event){
        event.preventDefault();
        let book = new Book(input.value);
        addBookToLibrary(book);
        showBooks();
    });
});

let removes = document.querySelectorAll(".remove");
removes.forEach(remove => {
    remove.addEventListener("click", function(){
        myLibrary.splice(remove.getAttribute("book"), 1);
        showBooks();
    });
})