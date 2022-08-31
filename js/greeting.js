const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// classname 같이 단순한 클래스이름은 대문자로 구분해주는게 관례이다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//DB에 username을 입력받아서, username이 있으면 form을 넘어가고 바로 hello username
//으로 넘어갈수 있게 만들어본다.
// form이 처음부터 출력되면 안되므로 index.html에서 두 element 모두 class= "hidden" 추가.

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}
function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    //localStorage 라는 DB를 사용하는데, setItem(Key, Item) 으로 간단하게 저장할 수 있다.
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show LoginForm
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    // show greeting
    paintGreetings(savedUsername);
}
