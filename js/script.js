$(function () {

    'use strict';

    $('.navbar ul.navbar-nav li.search a').on('click', function () {
        $(this).siblings('form').fadeToggle();
    });

    $('.navbar ul.navbar-nav li a, footer ul.main-list li a').on('click', function (e) {

        var getAttr = $(this).attr('href');

        e.preventDefault();
        $('html').animate({ scrollTop: $(getAttr).offset().top }, 1000);
    });
});
var objPeople = [{ username: "NyamkaaTR", password: "2000" }, { username: "Nyamaa", password: "sada" }, { username: "S8", password: "1548" }]
function click1() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for (i = 0; i < objPeople.length; i++) {
        if (username == objPeople[i].username) {
            if (password == objPeople[i].password) {
                alert("Амжилттай нэвтэрлээ")
                } else if (username == objPeople[i].username) {
                    if (password !== objPeople[i].password) {
                    alert("password буруу")
                }
            }
        } else if (password == objPeople[i].password) {
            if (username !== objPeople[i].username) {
                alert("username буруу")
            }
        }
        if (username != objPeople[i].username) {
            if (password != objPeople[i].password) {
                alert('password or username is incorrect')
            }
        }
    }
}
var myArray = ["+", "-", "*", "/"]
var hasDot = false
var myInput = document.getElementById("myInput")
function insert(argument1) {
    var lastChar = myInput.value[myInput.value.length - 1]
    if (argument1 == "." && hasDot) {
    }
    else if (myArray.includes(argument1)) {
        if (myArray.includes(lastChar)) {
        }
        else {
            myInput.value += argument1
            hasDot = false
        }
    }
    else {
        myInput.value += argument1
    }
    if (myInput.value[myInput.value.length - 1] == ".") {
        hasDot = true
    }
}
function C() {
    myInput.value = "";
}
function equal() {
    if (myArray.includes(myInput.value[myInput.value.length - 1])) {
        alert("Тоогоо оруулна уу!")
    }
    else if (myInput.value) {
        myInput.value = eval(myInput.value)
    }

}

var minute = 0
var second = 0
var doil = 0
var Id = 0
function start() {
    if (Id == 0) {
        Id = setInterval(stopwatch, 10)
    }
    if (document.getElementById('btn').style.display = "block") {
        document.getElementById('btn').style.display = "none";
        document.getElementById('btn1').style.display = "block";
    }
}
start();

function btn3() {
    if (Id != 0) {
        clearInterval(Id)
        Id = 0
    }
    if(document.getElementById('btn').style.display = "none") {
        document.getElementById('btn').style.display = "block";
        document.getElementById('btn1').style.display = "none";
    }
}
btn3();


function reset() {
        minute = 0
        second = 0
        doil = 0
        document.getElementById('div1').innerHTML = "00:00:00"
        clearInterval(Id)
    Id = 0;
    document.getElementById('div4').innerHTML = "";
}


function lap() {
    var p = document.createElement('p')
    p.innerHTML = document.getElementById('div1').innerHTML
    document.getElementById('div4').appendChild(p)
}

function stopwatch() {
    document.getElementById('div1').innerHTML = (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second) + ":" + (doil < 10 ? "0" + doil : doil)
    doil++;
    if (doil == 100) {
        doil = 0
        second++;
    }
    if (second == 60) {
        second = 0
        minute++;
    }
}

let Input = document.getElementById('input1')
let p1 = document.getElementById('display1')

function btn() {
    run(Input.value)
}
function run(time) {
    if (time < 60) {
        p1.innerHTML = "00:" + "00:" + time
    }
    else if (time >= 60) {
        let min = Math.floor((time % 3600) / 60)
        let sec = Math.floor(time % 60)
        let hrs = Math.floor(time / 3600)

        if (sec < 10) {
            p1.innerHTML = hrs + ":" + min + ":" + "0" + sec
        }
        else p1.innerHTML = hrs + ":" + min + ":" + sec
        if (hrs == 0) {
            min--
        }
        if (min == 0) {
            sec--
        }

    }

    time--;
    if (time >= 0) {
        setTimeout(run, 1000, time)
    }

}
var input = document.getElementById('input')
function click2() {
    var p = document.createElement("p")
    var button = document.createElement('button');
    button.style.position = "relative"
    button.style.top = "-50px"
    button.style.height = "30px"
    button.style.width = "30px"
    button.style.left = "100px"
    button.style.borderRadius = "5px"
    button.innerHTML = "-"
    p.innerHTML = input.value
    p.style.position = "relative"
    p.style.left = "-100px"
    p.style.fontSize = "32px"
    button.onclick = function () {
        p.style.display = "none"
        button.style.display = "none"
    }

    document.getElementById("items").append(p, button)
    if (input.value == "") {
        button.style.display = "none"
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function cursor(n) {
    showSlides(slideIndex += n);
}

function dooot(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var a = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > a.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = a.length }
    for (i = 0; i < a.length; i++) {
        a[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    a[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


var too = 0;
var too1 = document.getElementById('too')
function btn1() {
    too++;
    too1.innerHTML = too;
}
function btn2() {
        too--;
        too1.innerHTML = too;
}


function change() {
    var colors = ['red', 'black', 'green', 'yellow', 'purple', 'grey',]
    var random = colors[Math.floor(Math.random() * colors.length)]
    var x = document.getElementById('ground');
    x.style.backgroundColor = random;
}




function start1() {
    var strings = ['Би МТ колонк-с бензин авлаа.', 'Болд Монголд ирээгүй удаж байна.', 'Өнөөдөр цас орно гэсэн боловч ороогүй.']
    var random = Math.floor(Math.random() * strings.length);
    var x = (strings[random])
    document.getElementById("string").innerHTML = (x);
}


var image = document.getElementById("aaa");
var img_array = ["imgs/billie1.jpg", "imgs/billie2.jpg", "imgs/billie3.jpg", "imgs/billie4.jpg"];
var index = 0;
var num = 0
var q = setInterval(slide, 1000);
function slide() {
    image.src = img_array[index];
    index++;
    if (index >= img_array.length) {
        index = 0;
    }
}
setInterval(q);
function click3() {
    num++
    if (num == 1) {
        clearInterval(q)
    }
    else if (num == 2) {
        q = setInterval(slide, 1000)
        num = 0
    }
}
