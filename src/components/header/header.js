import { DivComponent } from "../../common/div-component";
import './header.css'

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    render() {
        this.el.innerHTML = '';
        this.el.classList.add('header');
        this.el.innerHTML = `
            <div class="menu">
                <a class="menu__item" href="#">
                    Все котики
                </a>
                <a class="menu__item" href="#">
                    Любимые котики
                </a>
            </div>`
            ;
        return this.el;
    }
}

