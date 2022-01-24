import 'bootstrap';
import "./scss/main.scss";
import $ from "jquery";
import gsap from 'gsap';


$(document).ready(function() {
    const title_span = document.querySelectorAll('h1 span');
    const sub_title = document.querySelector('h3');
    const hr = document.querySelectorAll('hr');

    const tl = gsap.timeline({delay: 1});
    tl.to(title_span[0], {y:0, duration: 1}, 0.5);
    tl.to(title_span[1], {y:0, duration: 1}, 0.5);
    tl.to(sub_title, {x:0, duration: 1}, 0);
    for (let index = 0; index < hr.length; index++) {
        tl.to(hr[index], {x:0, duration: 1}, 1.5);
    }

});
