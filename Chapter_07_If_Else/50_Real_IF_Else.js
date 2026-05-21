let isLoggedIn = true;
let userRole = "editor";

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("Welcome Admin!");
    } else if (userRole === "editor") {
        console.log("Welcome Editor!");
    } else if (userRole === "viewer") {
        console.log("Welcome Viewer!");
    }
} else {
    console.log("You are not logged in.");
}

