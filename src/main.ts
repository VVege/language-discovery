import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app');

class AAA {
    test() {
        console.log(this);
    }
}

class BBB {
    test: any;
}

let bbb = new BBB();
let aaa = new AAA();
bbb.test = aaa.test;
bbb.test();