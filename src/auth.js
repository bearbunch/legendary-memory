const API = "";


// REGISTER

async function registerUser() {

    const username =
        document.getElementById("username").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;


    if (!username || !email || !password) {

        alert("Please fill in all fields");
        return;

    }


    try {

        const response = await fetch(
            API + "/api/auth/register",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    username,
                    email,
                    password

                })

            }
        );


        const data =
            await response.json();



        if (data.success) {

            alert("Account created!");

            window.location.href =
                "login.html";

        }

        else {

            alert(
                data.error || "Registration failed"
            );

        }


    }

    catch (error) {

        console.error(error);

        alert(
            "Cannot connect to server"
        );

    }

}




// LOGIN

async function loginUser() {


    const email =
        document.getElementById("email").value.trim();


    const password =
        document.getElementById("password").value;



    if (!email || !password) {

        alert("Please fill in all fields");
        return;

    }



    try {


        const response = await fetch(
            API + "/api/auth/login",
            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },


                body: JSON.stringify({

                    email,
                    password

                })

            }
        );



        const data =
            await response.json();




        if (data.success) {


            localStorage.setItem(
                "session",
                data.session
            );


            localStorage.setItem(
                "username",
                data.user?.username || ""
            );


            alert("Login successful!");

            window.location.href =
                "index.html";


        }

        else {


            alert(
                data.error || "Login failed"
            );


        }



    }

    catch(error) {


        console.error(error);


        alert(
            "Cannot connect to server"
        );


    }


}