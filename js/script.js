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
    else {
        clearInterval(Id)
        Id = 0
    }
}


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

var Input = document.getElementById("input1")

function btn() {
    run(Input.value)
}
function run(time) {
    var m = Math.floor(time / 60)
    var h = Math.floor(m / 60)
    var s = (time % 60)
    time--;
    var timeoutId = setTimeout(run, 1000, time)//recursive function, recursion
    if (time <= 0) {
        clearTimeout(timeoutId)
    }
    document.getElementById('display1').innerHTML = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s)
}


var input = document.getElementById('input')
function click2() {
    var p = document.createElement("p")
    var button = document.createElement('button');
    button.style.position = "relative"
    button.style.top = "-78px"
    button.style.height = "50px"
    button.style.width = "50px"
    button.style.left = "100px"
    button.style.borderRadius = "5px"
    button.innerHTML = "-"
    p.innerHTML = input.value
    p.style.position = "relative"
    p.style.left = "-120px"
    p.style.fontSize = "50px"
    button.onclick = function () {
        p.style.display = "none"
        button.style.display = "none"
    }

    document.getElementById("item").append(p, button)

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
    var strings = ['abc', 'def','ghi','jkl', 'mno', 'pqr', 'stu', 'vwx', 'yz', '123', '456', '789', '010']
    var random = Math.floor(Math.random() * strings.length);
    var x = (strings[random]).toUpperCase()
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
