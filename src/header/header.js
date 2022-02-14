// import { refs } from './refs/index.js';
import { createHomePage } from "../pages/home.js";
import { createAboutPage } from "../pages/about.js";
// import { createAuthPage } from "../pages/auth.js";

import { refs } from "../refs/index.js";
import { createAuthPage } from "../pages/auth.js";
const items = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Sign in",
    path: "/signin",
  },
  {
    name: "Sign out",
    path: "/signout",
  },
];
// фукция которая формирует разметку
const createHeaderMarkup = () => {
  return items.reduce((acc, item) => {
    acc += `<li class="navListItem"
        data-navLink="${
          item.path
          // .toLowerCase()
          // .split(" ")
          // .join("")
        }">
        ${item.name}</li>`;
    return acc;
  }, "");
  // return items.map(element =>
  //     `<li class="navListItem">${element.name}</li>`)
  //     .join('');
};

const setActiveLink = (targetElement) => {
  // я хочу получить елемент у которого есть активный клас
  // пусть будет активным елемент на который мы добавили активный клас
  // найди елемент в котором есть этот класс
  // 6 определить какой елемент активный
  const activeElement = refs.navList.querySelector(".navListItemActive");
  // console.log('activeElement :>> ', activeElement);
  // 7 у активного елемента убери активный клас
  activeElement.classList.remove("navListItemActive");
  //    8 и добавь клас на тот элемент на который мы кликнули (targetElement)
  targetElement.classList.add("navListItemActive");
};

// export const createLinkListener = () => {

//     // refs.navList.addEventListener('click', (e) => {
//     //     if (e.target === e.currentTarget)
//     //     // if (e.target.nodeName !== 'LI')
//     //         return;
//     //     // функция в которую мы пробрасываем e.target
//     //     setActiveLink(e.target);
//     //     // console.log(e.target.dataset.navlink)

//     // })
//         // console.log('e:>> ', e.target));
// }

export const createHeader = () => {
  // эта функция возвращает разметку в юелку добавить хедер
  // 1 создает разметку списка навигации
  refs.navList.innerHTML = createHeaderMarkup();
  // сделать первый елемент списка активным
  // 2 пусть первым активным елементом будет firstElementChild
  refs.navList.firstElementChild.classList.add("navListItemActive");
  // как только добавился активный класс на первый лелемент отрисуй
  createHomePage();
  // 3 добавить слушателя собитыя на клик на елементы списка
  refs.navList.addEventListener("click", (e) => {
    //  4  исключить клик на список клик должен срабаиывать только на елемента списка li

    if (e.target === e.currentTarget)
      // 5 if (e.target.nodeName !== 'LI')
      return;
    // функция в которую мы пробрасываем e.target
    //  при клике на елемент устанавливать активный класс на елементе
    // при этом убирать клас с ранее выбранного елемента на котором
    // на текущий момент установлен активный класс
    // при этом в функцию передается ссылка на элеиеннт нана котором
    // произошло таргетирование (targetElement)
    setActiveLink(e.target);
    console.log(e.target.dataset.navlink);
    // если dataset navlink разняется "/home"
    if (e.target.dataset.navlink === "/home")
      // создай разметку
      createHomePage();
    if (e.target.dataset.navlink === "/about") createAboutPage();
    if (e.target.dataset.navlink === "/signout")
      createAuthPage({
        name: "Sign out",
        path: "/signout",
      });
    if (e.target.dataset.navlink === "/signin")
      createAuthPage({
        name: "Sign in",
        path: "/signin",
      });
  });
};
