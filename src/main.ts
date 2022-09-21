import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './test.js'

createApp(App).mount('#app');

class AAA {
    test() {
        console.log(this);
    }
}

class BBB extends AAA {
    test: any;
}

let bbb = new BBB();
let aaa = new AAA();
bbb.test = aaa.test;
bbb.test();

let numer = 'VBNDVNEMDVDMVDMVDVDV';
console.log(typeof numer);