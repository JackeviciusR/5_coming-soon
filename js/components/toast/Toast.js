
// naudojamas pavaizduoti vartotojui error'a
class Toast {
    constructor() {
        this.selector = 'body';
        this.renderIntoParentDOM = document.querySelector(this.selector);
        this.DOM = null;        // reprezentuoja pati naujai sugeneruota elementa
        this.textDOM = null;    // elementas, kuriame atvaizduosime pranesima ivykus klaidai
        console.log(`creating toast...`);
    }

    /**
     * 
     * @param {string} type Zinutes tipas. Vieninteliai galimi variantai: `success | error`
     * @param {string} message Tekstas, kuris turi buti atvaizduotas pranesime.
     */
    // kai rodom zinute/pranesima
    show(type, message) {
        // classList savybe grazinti elemento klases varda kaip DOMTokenList objekta
        // classList.add/contains/item/remove/toggle;
        // 'visible' busena aprasytas prie toast.css
        console.log('DOM before: ', this.DOM);
        this.DOM.classList.add('visible');
        console.log('DOM after: ', this.DOM);
        this.textDOM.innerText = message;
        console.log('DOM message: ', this.DOM);


        if (type === 'success') {
            // 'error' busena aprasytas prie toast.css
            this.DOM.classList.remove('error');
            console.log('DOM remove error: ', this.DOM);
            console.log('DOM success error0: ', this.DOM.classList.item(0));
            console.log('DOM success error1: ', this.DOM.classList.item(1));
            console.log('DOM success error2: ', this.DOM.classList.item(2));
        }
        if (type === 'error') {
            this.DOM.classList.add('error');
        }

    }

    hide() {
        this.DOM.classList.remove('visible');
    }


    render() {
        const HTML = `<div class="toast">
                        <i class="fa fa-check"></i>
                        <i class="fa fa-shield"></i>
                        <p>Your message here...</p>
                        <i class="fa fa-times"></i>
                      </div>`;

        // daug geriau nei .innerHTML(), nes neperasys viso elemento strukturos per nauja
        this.renderIntoParentDOM.insertAdjacentHTML('beforeend',HTML);
        this.DOM = this.renderIntoParentDOM.querySelector('.toast');
        this.textDOM = this.DOM.querySelector('p');
    }
}

export { Toast }