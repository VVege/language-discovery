import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import './test.js';
createApp(App).mount('#app');
class AAA {
    test() {
        console.log(this);
    }
}
class BBB {
    test;
}
let bbb = new BBB();
let aaa = new AAA();
bbb.test = aaa.test;
bbb.test();
debugger;
let numer = 'VBNDVNEMDVDMVDMVDVDV';
console.log(typeof numer);
//# sourceMappingURL=main.js.map