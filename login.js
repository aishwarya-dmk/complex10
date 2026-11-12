function login() {
    if (document.getElementById("name").value.trim()) {
        document.getElementById("exam").hidden = false;
    } else {
        alert("Enter student name");
    }
}