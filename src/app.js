document.addEventListener(
    "DOMContentLoaded",
    () => {


        // Add smooth button interactions

        const buttons =
            document.querySelectorAll(".btn");


        buttons.forEach(button => {


            button.addEventListener(
                "click",
                () => {


                    // Temporary action
                    // Replace later with login/signup pages

                    if(
                        button.textContent.includes("Create")
                        ||
                        button.textContent.includes("Get Started")
                    ){

                        alert(
                            "Welcome to My Chat!"
                        );

                    }


                    if(
                        button.textContent.includes("Login")
                    ){

                        alert(
                            "Login page coming soon!"
                        );

                    }


                }
            );


        });



        // Simple scroll animation

        const sections =
            document.querySelectorAll(
                "section"
            );


        const observer =
        new IntersectionObserver(
            entries => {


                entries.forEach(
                    entry => {


                        if(entry.isIntersecting){

                            entry.target.classList.add(
                                "show"
                            );

                        }


                    }
                );


            },
            {
                threshold:0.15
            }
        );



        sections.forEach(
            section => {

                section.classList.add(
                    "hidden"
                );

                observer.observe(
                    section
                );

            }
        );


    }
);