document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleMode");

    // Load saved mode from Session Storage
    const savedMode = sessionStorage.getItem("themeMode");
    if (savedMode) {
        document.body.classList.add(savedMode);
    }

    // Toggle mode and update Session Storage
    toggleButton.addEventListener("click", () => {
        if (document.body.classList.contains("dark")) {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
            sessionStorage.setItem("themeMode", "light");
        } else if (document.body.classList.contains("light")) {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
            sessionStorage.setItem("themeMode", "dark");
        } else {
            // Default to light mode if none is set
            document.body.classList.add("light");
            sessionStorage.setItem("themeMode", "light");
        }
    });
});
