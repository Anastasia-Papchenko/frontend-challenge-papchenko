// import { AbstractView } from "../../common/view.js";
// import { Header } from "../../components/header/header.js";

// export class FavoritesView extends AbstractView {
//     constructor(appState) {
//         super();
//         this.appState = appState;
//     }

//     render() {
//         this.app.innerHTML = ""; // Очистка содержимого приложения
//         const main = document.createElement("div");
//         main.classList.add("favorites");

//         // Если есть избранные котики
//         if (this.appState.favorites.length > 0) {
//             main.innerHTML = `
//                 <div class="favorites__container">
//                     ${this.appState.favorites
//                         .map(
//                             (favorite) => `
//                                 <div class="img-wrapper">
//                                     <img src="${favorite.url}" alt="A favorite cat" />
//                                     <div class="heard__div">
//                                         <button class="button__remove">
//                                             <img src="/static/heard-red.svg" alt="Unlike" />
//                                         </button>
//                                     </div>
//                                 </div>
//                             `
//                         )
//                         .join("")}
//                 </div>
//             `;
//         } else {
//             // Если избранных котиков нет
//             main.innerHTML = "<p>Нет избранных котиков :(</p>";
//         }

//         // Добавление обработчиков для удаления из избранного
//         main.querySelectorAll(".button__remove").forEach((button, index) => {
//             button.addEventListener("click", () => {
//                 const removedCat = this.appState.favorites[index];
//                 this.appState.favorites = this.appState.favorites.filter(
//                     (cat) => cat.id !== removedCat.id
//                 );
//                 this.render(); // Перерисовка списка
//             });
//         });

//         this.app.append(main);
//         this.renderHeader();
//     }

//     renderHeader() {
//         const header = new Header(this.appState).render();
//         this.app.prepend(header);
//     }
// }
