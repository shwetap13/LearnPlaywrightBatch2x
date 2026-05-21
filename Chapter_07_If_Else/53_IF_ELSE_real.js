let username = "Dev";
let password = "1234";
let isAccountLocked = true;

if ((username === "Dev" && password === "1234") && !isAccountLocked) {
    console.log("Login successful!");
} else {
    console.log("Login failed or account is locked.");
}