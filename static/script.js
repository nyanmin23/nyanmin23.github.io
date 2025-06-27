document.getElementById("hide-checkbox").addEventListener("change",
    function(event) {
        const element = document.body;

        if (this.checked) {
            element.classList.remove("dark-mode");
        } else {
            element.classList.add("dark-mode");
        }
    });
