let $ = document;
let body = document.body;

let head = $.getElementById('head');;
let loading = $.getElementById('Temp');;
let eventKey = $.getElementById('eventKey');
let eventLock = $.getElementById('eventLocation');
let eventTW = $.getElementById('eventTW');
let eventCode = $.getElementById('eventCode');
let h = $.getElementById('header');

body.addEventListener('keydown', function (e) {
    e.preventDefault();
    loading.style.opacity = 0;
    setTimeout(function () {
        loading.style.display = 'none';

    }, 500)
    //    console.log(e);
    eventLock.innerHTML = e.location;
    eventKey.innerHTML = e.key;
    eventTW.innerHTML = e.which;
    eventCode.innerHTML = e.code;
    h.innerHTML = e.which;
})