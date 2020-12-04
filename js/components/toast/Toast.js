
// naudojamas pavaizduoti vartotojui error'a
class Toast {
    constructor() {
        this.selector = 'body';
        this.renderIntoParentDOM = document.querySelector(this.selector);
        this.DOM = null;        // reprezentuoja pati naujai sugeneruota elementa
        this.textDOM = null;    // elementas, kuri atvaizduosime ivykus klaida
        console.log(`creating toast...`);
    }

    /**
     * 
     * @param {string} type Zinutes tipas. Vieninteliai galimi variantai: `success | error`
     */
    show() {
        this.DOM.classList.add('visible');
    }

    hide() {

    }


    render() {
        const HTML = `<div class="toast">
                        <i class="fa fa-check"></i>
                        <i class="fa fa-shield"></i>
                        <p>Your message here...</p>
                        <i class="fa fa-times"></i>
                      </div>`;

        // daug geriau nei .innerHtml(), nes neperasys viso elemento strukturos per nauja
        this.renderIntoParentDOM.insertAdjacentHTML('beforeend',HTML);
    }
}

export { Toast }