import 'bootstrap';
import "./scss/main.scss";
import $ from "jquery";
import gsap from 'gsap';


$(document).ready(function() {
    const title_span = document.querySelectorAll('h1 span');
    const sub_title = document.querySelectorAll('h3 span');

    const tl = gsap.timeline({delay: 1});
    tl.to(title_span[0], {y:0, duration: 1});
    tl.to(title_span[1], {y:0, duration: 1});
    tl.to(sub_title, {x:0, duration: 1});

});
