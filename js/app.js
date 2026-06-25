import { StorageManager } from './storage.js';
import { DOM } from './dom.js';

const App = {
    data: [],

    init() {
        this.data = StorageManager.load();
        DOM.get('#btnSalvar')?.addEventListener('click', () => this.addNote());
        this.render();
    },

    addNote() {
        const materia = DOM.getValue('#materia');
        const conteudo = DOM.getValue('#conteudo');

        if (!materia || !conteudo) return alert('Preencha todos os campos!');

        this.data.push({
            id: Date.now(),
            materia,
            conteudo,
            date: new Date().toLocaleDateString()
        });

        StorageManager.save(this.data);
        DOM.clear('#materia', '#conteudo');
        this.render();
    },

    deleteNote(id) {
        this.data = this.data.filter(note => note.id !== id);
        StorageManager.save(this.data);
        this.render();
    },

    render() {
        DOM.render(
            DOM.get('#lista'),
            this.data.map(({ id, materia, conteudo, date }) => `
                <div class="study-card">
                    <div class="sc-head">
                        <div class="sc-subject">
                            <div class="sc-icon"><i class="ti ti-book-2"></i></div>
                            <div>
                                <div class="sc-name">${materia}</div>
                                <div class="sc-date">${date}</div>
                            </div>
                        </div>
                    </div>
                    <div class="sc-body">${conteudo}</div>
                    <div class="sc-footer">
                        <span class="sc-tag">Registro</span>
                        <button class="btn-del" onclick="App.deleteNote(${id})">
                            <i class="ti ti-trash"></i> Remover
                        </button>
                    </div>
                </div>
            `).join('')
        );

        const total = this.data.length;
        DOM.get('#statTotal').textContent =
        DOM.get('#countEl').textContent = total;
    }
};

window.App = App;
document.addEventListener('DOMContentLoaded', () => App.init());