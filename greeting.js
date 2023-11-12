// 로그인 창
const loginForm = document.querySelector("#loginForm");
const greeting = document.querySelector("#greeting");
const loginInput = document.querySelector("#loginForm Input");
const changeBtn = document.querySelector("#changeBtn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

// 유저명 제출
function loginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  printGreeting(username);
}

// 인삿말 출력
function printGreeting(username) {
  greeting.innerText = `Welcome ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  changeBtn.classList.remove(HIDDEN_CLASSNAME);
}

// 유저명 입력창
function usernameWirte(){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
}

// 이름 변경
function nameChange(event) {
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, null);
  greeting.classList.add(HIDDEN_CLASSNAME);
  changeBtn.classList.add(HIDDEN_CLASSNAME);
  loginInput.value = null;
  usernameWirte();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername===null || savedUsername==="null") {
  usernameWirte();
} else {
  printGreeting(savedUsername);
}

changeBtn.addEventListener("click", nameChange);