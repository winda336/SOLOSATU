const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const users = [
    {
        username: "admin",
        password: "Solsa123",
        role: "Admin"
    },
    {
        username: "kasir",
        password: "12345",
        role: "Kasir"
    },
    {
        username: "sales",
        password: "solosatu",
        role: "Sales"
    }
        ];

        const user = users.find(u =>
            u.username === username &&
            u.password === password
        );

        if(user){

            localStorage.setItem("login","true");
            localStorage.setItem("role", user.role);
            localStorage.setItem("username", user.username);

            window.location.href = "index.html";

        }else{

            document.getElementById("error").innerHTML =
            "Username atau Password salah!";

        }

});