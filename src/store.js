import {reactive} from 'vue';

export const store = reactive ({

    shop: 0,

    //FUNZIONE PER INCREMENTARE IL NUMERO DI ITEM NEL CARRELLO NELLA NAVBAR

    scrollToUp () {
        window.scrollTo(0, 0);
    },
    growItem() {
        this.shop ++;
        this.scrollToUp();
    }
});