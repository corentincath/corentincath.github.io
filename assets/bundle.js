import 'bootstrap';
import "./scss/main.scss";
import $ from "jquery";
import gsap from 'gsap';


$(document).ready(function() {
    var title_span = document.querySelectorAll('h1 span');

    gsap.to(title_span[0], {y:100});
    console.log(title_span)
});
