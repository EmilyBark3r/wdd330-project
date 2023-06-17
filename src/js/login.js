import { login } from "./auth.mjs";

function getRedirectParam() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const param = urlParams.get('redirect');
    return param;
}

getRedirectParam();

document.getElementById("loginButton").addEventListener("click", (e) => {
    e.preventDefault()
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const creds = {username, password};
    const redirect = getRedirectParam();

    login(creds, redirect);
})
