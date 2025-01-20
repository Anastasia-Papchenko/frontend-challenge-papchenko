import { DivComponent } from "../../common/div-component";
import './card.css';

export class Card extends DivComponent {
    constructor(appState, cardState) {
        super();
        this.appState = appState;
        this.parentState = cardState;
    }

    // #addToFavorites() {
    //     this.appState.favorites.push(this.cardState);
    // }

    // #deleteFromFavorites() {
    //     this.appState.favorites = this.appState.favorites.filter(
    //         b => b.id !== this.cardState.id
    //     );
    // }

    render() {

        this.el.classList.add('card');

        const existInFavorites = this.appState.favorites.find(
            b => b.id == this.cardState.id
        );

        
        const container = document.createElement('div');
        container.classList.add('image-container');

        const apiURL = "https://api.thecatapi.com/v1/images/search?limit=10&mime_types=jpg&api_key=live_W1uEc0NSdTbR9e5wpGInTAbd1g5xSxHTjKgdguoSjhWrPMvAWARCJLrntTx90c5f";

        fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const imagesHTML = data.map(cat => `
                <div class="img-wrapper">
                    <img src="${cat.url}" alt="A cute cat" />
                    <div class="heard__div">
                        <button class="button__add ${existInFavorites ? 'button__active' : ''}">
                            <img src="${existInFavorites ? '/static/heard-red.svg' : '/static/heard.svg'}" alt="Like" />
                        </button>
                    </div>
                </div>`
            ).join("");

            container.innerHTML = imagesHTML;

           
            container.querySelectorAll('.button__add').forEach((button, index) => {
                button.addEventListener('click', () => {
                    const heartImg = button.querySelector('img');
                    if (!button.classList.contains('button__active')) {
                        heartImg.src = '/static/heard-red.svg'; 
                        button.classList.add('button__active');
                    } else {
                        heartImg.src = '/static/heard.svg'; 
                        button.classList.remove('button__active');
                    }
                });
            });
        })
        .catch(error => {
            console.error("Ошибка при получении изображений:", error);
        });

        
        // if (existInFavorites) {
        //     this.el
        //     .querySelector('button')
        //     .addEventListener('click', this.#deleteFromFavorites.bind(this));
        // } else {
        //     this.el
        //     .querySelector('button')
        //     .addEventListener('click', this.#addToFavorites.bind(this));
        // }
   
    return container;
}

}