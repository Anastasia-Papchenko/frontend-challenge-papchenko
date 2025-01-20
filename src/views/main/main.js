import { AbstractView } from "../../common/view.js";
import onChange from 'on-change';
import { Header } from "../../components/header/header.js";
import { Card } from "../../components/card/card.js";

export class MainView extends AbstractView {
    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0
    };

    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        // this.state = onChange(this.state, this.stateHook.bind(this));

        this.setTitel('Кошачий пинтерест');
    }

    appStateHook(path) {
        if (path === 'favorites') {
            this.render();
        }
    };

    render() {
        const main = document.createElement('div');
        this.app.innerHTML = '';
        main.append(new Card(this.appState, this.state).render());
        this.app.append(main);
        this.renderHeader();
    }

    renderHeader() {
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    };
}