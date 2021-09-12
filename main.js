canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d")

img_image="blank.png";
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if ((keyPressed >=97 && keyPressed<=122) || (keyPressed>=65 && keyPressed<=90))
    {
        alphabetkey();
        document.getElementById("heading").innerHTML="You Pressed Alphabet Key";
        console.log("alphabet key");
    }
    else if ((keyPressed >=48 && keyPressed<=57))
    {
        numberkey();
        document.getElementById("heading").innerHTML="You Pressed Number Key";
        console.log("number key");
    }
    else if ((keyPressed >=37 && keyPressed<=40))
    {
        arrowkey();
        document.getElementById("heading").innerHTML="You Pressed Arrow Key";
        console.log("arrow key");
    }
    else if ((keyPressed=17) || (keyPressed=18) || (keyPressed=27 ))
    {
        specialkey();
        document.getElementById("heading").innerHTML="You Pressed Special Key";
        console.log("special key");
    }
}

function alphabetkey(){
    img_image="ak.png";
    add();
}
function numberkey(){
    img_image="nk.png";
    add();
}
function arrowkey(){
    img_image="ark.png";
    add();
}
function specialkey(){
    img_image="sk.png";
    add();
}

function add(){
background_imgTag=new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src=img_image;

}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}