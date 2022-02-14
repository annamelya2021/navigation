import { refs } from "../refs/index.js";
const createAuthForm = (name) => {
  return `<form name="authForm">
        <label> Email
            <input type="email" name="email" required />
        </label>
        <label >Password
            <input type="password" name="password" required />
        </label>
        <button type="submit">${name}</button>
    </form>`;
};

export const createAuthPage = (currentPage) => {
  // вставили форму
  refs.main.innerHTML = createAuthForm(currentPage.name);
  // создаем объект будущего юзера собираем данные из формы
  const user = {
    email: "",
    password: "",
  };
  // получаем ссылку на форму (замена квериселектору)
  const authForm = document.forms.authForm;
  //Делегирование проиходит на инпуте ловим на форме

  authForm.addEventListener(
    "input",
    (e) =>
      // собрали данные
      // e.target - это инпут
      (user[e.target.name] = e.target.value)
  );

  authForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(user);
  });
};
