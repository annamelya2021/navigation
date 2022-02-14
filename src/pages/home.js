import { refs } from "../refs/index.js";

export const createHomePage = () => {
  // const createHeaderForThisPage = () => {
  refs.main.innerHTML = `<h2>Home page</h2>`;
};
// const createProductMarkup = () => {
//   return `<ul class="productList">
//     <li class="productListItem">Product1
//     </li>
//     <li class="productListItem">Product2
//     </li>
//     <li class="productListItem">Product3
//     </li>
//     <li class="productListItem">Product4
//     </li>
//     <li class="productListItem">Product5
//     </li>
//     </ul>`;
// };
// refs.main.innerHTML = createHeaderForThisPage();
// setTimeout(
//   () => refs.main.insertAdjacentHTML("beforeend", createProductMarkup()),
//   3000
// );
// };
