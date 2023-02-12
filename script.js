let oval_shape = document.getElementById("oval");
let bey_bowl = document.getElementById('beybowl');
let inner_bowl = document.getElementById('innerbowl');
let line_1 = document.getElementById('line1');
let line_2 = document.getElementById('line2');
let circle_1 = document.getElementById('circle');
let lane_1 = document.getElementById('lane1');
let lane_2 = document.getElementById('lane2');

let power_btn = document.getElementById('powerbtn');
let menu_btn = document.getElementById('menuBtn');

let menucontent = document.getElementById('contmenu');

power_btn.addEventListener('click', function() {
    oval_shape.style.boxShadow= " 0 0 30px #2f374a";
    oval_shape.style.border= "5px solid rgb(255, 101, 101)";
    oval_shape.style.background= "#2f374a";
    bey_bowl.style.boxShadow= "0 0 25px #71bdc7";
    bey_bowl.style.border= " 4px solid #71bdc7";
    bey_bowl.style.background= "#1f2533";
    inner_bowl.style.background= "#364059";
    inner_bowl.style.border= " 4px solid #87abdd";
    inner_bowl.style.boxShadow= " inset 0 0 150px black";
    line_1.style.background= " rgb(255, 141, 141)";
    line_1.style.boxShadow= " 0 0 18px red";
    line_2.style.background= " rgb(255, 141, 141)";
    line_2.style.boxShadow= " 0 0 18px red";
    circle_1.style.border= " 6px solid #77a4e9";
    circle_1.style.boxShadow= " 0 0 18px #6b9ce4";
    lane_1.style.border= " 4px solid #71bdc7";
    lane_1.style.boxShadow= " inset 0 0 40px black";
    lane_2.style.border= " 4px solid #71bdc7";
    lane_2.style.boxShadow= " inset 0 0 40px black";
});

menu_btn.addEventListener('click', function() {
    menucontent.style.display= "block";
});

let close_btn = document.getElementById('closemenu');

close_btn.addEventListener('click', function() {
    menucontent.style.display= "none";
});



let beybladeone = document.getElementById('beyblade1');
let beybladetwo = document.getElementById('beyblade2');

let sel1 = document.getElementById('selected1');
let sel2 = document.getElementById('selected2');

let oponent1 = document.getElementById('op1');
let oponent2 = document.getElementById('op2');

let person1 = document.getElementById('per1');
let pertext1 = document.getElementById('person1');
let beyimg1 = document.getElementById('hisbeyi');
let beytext1 = document.getElementById('hisbeyt');

let person2 = document.getElementById('per2');
let pertext2 = document.getElementById('person2');
let beyimg2 = document.getElementById('hisbeyi2');
let beytext2 = document.getElementById('hisbeyt2');


document.getElementById('val1').addEventListener('click', function() {
    beybladeone.src= "valkrey.png";
    beybladeone.style.height= "125px";
    sel1.innerHTML= "Valkyrie";
    oponent1.innerHTML= "Valkyrie";
    person1.src= "valt.png";
    pertext1.innerHTML= "Valt Aoi";
    beyimg1.src= "valkrey.png";
    beytext1.innerHTML= "Valkyrie";
});

document.getElementById('faf1').addEventListener('click', function() {
    beybladeone.src= "fafnir.png";
    beybladeone.style.height= "125px";
    sel1.innerHTML= "Fafnir";
    oponent1.innerHTML= "Fafnir";
    person1.src= "free.png";
    pertext1.innerHTML= "Free De La Hoya";
    beyimg1.src= "fafnir.png";
    beytext1.innerHTML= "fafnir";
});

document.getElementById('spr1').addEventListener('click', function() {
    beybladeone.src= "spryzen.png";
    beybladeone.style.height= "125px";
    sel1.innerHTML= "Spryzen";
    oponent1.innerHTML= "Spryzen";
    person1.src= "shu.webp";
    pertext1.innerHTML= "Shu Kurenai";
    beyimg1.src= "spryzen.png";
    beytext1.innerHTML= "Spryzen";
});

document.getElementById('lui1').addEventListener('click', function() {
    beybladeone.src= "luinor.png";
    beybladeone.style.height= "125px";
    sel1.innerHTML= "Luinor";
    oponent1.innerHTML= "Luinor";
    person1.src= "lui.png";
    pertext1.innerHTML= "Lui Shirosagi";
    beyimg1.src= "luinor.png";
    beytext1.innerHTML= "Luinor";
});

document.getElementById('ach1').addEventListener('click', function() {
    beybladeone.src= "achilles.png";
    beybladeone.style.height= "125px";
    sel1.innerHTML= "Achilles";
    oponent1.innerHTML= "Achilles";
    person1.src= "aiger.webp";
    pertext1.innerHTML= "Aiger Akabane";
    beyimg1.src= "achilles.png";
    beytext1.innerHTML= "Achilles";
});

document.getElementById('hel1').addEventListener('click', function() {
    beybladeone.src= "helios.png";
    beybladeone.style.height= "125px";
    sel1.innerHTML= "Helios";
    oponent1.innerHTML= "Helios";
    person1.src= "hikaru.png";
    pertext1.innerHTML= "Hikaru Hizashi";
    beyimg1.src= "helios.png";
    beytext1.innerHTML= "Helios";
});

document.getElementById('hyp1').addEventListener('click', function() {
    beybladeone.src= "phoenix.png";
    beybladeone.style.height= "125px";
    sel1.innerHTML= "Phoenix";
    oponent1.innerHTML= "Phoenix";
    person1.src= "phi.webp";
    pertext1.innerHTML= "Phi";
    beyimg1.src= "phoenix.png";
    beytext1.innerHTML= "Phoenix";
});

document.getElementById('sal1').addEventListener('click', function() {
    beybladeone.src= "salamander.png";
    beybladeone.style.height= "125px";
    sel1.innerHTML= "Salamandar";
    oponent1.innerHTML= "Salamandar";
    person1.src= "suo.png";
    pertext1.innerHTML= "Suo Genjji";
    beyimg1.src= "salamander.png";
    beytext1.innerHTML= "Salamandar";
});



document.getElementById('val2').addEventListener('click', function() {
    beybladetwo.src= "valkrey.png";
    beybladetwo.style.height= "125px";
    sel2.innerHTML= "Valkyrie";
    oponent2.innerHTML= "Valkyrie";
    person2.src= "valt.png";
    pertext2.innerHTML= "Valt Aoi";
    beyimg2.src= "valkrey.png";
    beytext2.innerHTML= "Valkyrie";
});

document.getElementById('faf2').addEventListener('click', function() {
    beybladetwo.src= "fafnir.png";
    beybladetwo.style.height= "125px";
    sel2.innerHTML= "Fafnir";
    oponent2.innerHTML= "Fafnir";
    person2.src= "free.png";
    pertext2.innerHTML= "Free De La Hoya";
    beyimg2.src= "fafnir.png";
    beytext2.innerHTML= "fafnir";
});

document.getElementById('spr2').addEventListener('click', function() {
    beybladetwo.src= "spryzen.png";
    beybladetwo.style.height= "125px";
    sel2.innerHTML= "Spryzen";
    oponent2.innerHTML= "Spryzen";
    person2.src= "shu.webp";
    pertext2.innerHTML= "Shu Kurenai";
    beyimg2.src= "spryzen.png";
    beytext2.innerHTML= "Spryzen";
});

document.getElementById('lui2').addEventListener('click', function() {
    beybladetwo.src= "luinor.png";
    beybladetwo.style.height= "125px";
    sel2.innerHTML= "Luinor";
    oponent2.innerHTML= "Luinor";
    person2.src= "lui.png";
    pertext2.innerHTML= "Lui Shirosagi";
    beyimg2.src= "luinor.png";
    beytext2.innerHTML= "Luinor";
});

document.getElementById('ach2').addEventListener('click', function() {
    beybladetwo.src= "achilles.png";
    beybladetwo.style.height= "125px";
    sel2.innerHTML= "Achilles";
    oponent2.innerHTML= "Achilles";
    person2.src= "aiger.webp";
    pertext2.innerHTML= "Aiger Akabane";
    beyimg2.src= "achilles.png";
    beytext2.innerHTML= "Achilles";
});

document.getElementById('hel2').addEventListener('click', function() {
    beybladetwo.src= "helios.png";
    beybladetwo.style.height= "125px";
    sel2.innerHTML= "Helios";
    oponent2.innerHTML= "Helios";
    person2.src= "hikaru.png";
    pertext2.innerHTML= "Hikaru Hizashi";
    beyimg2.src= "helios.png";
    beytext2.innerHTML= "Helios";
});

document.getElementById('hyp2').addEventListener('click', function() {
    beybladetwo.src= "phoenix.png";
    beybladetwo.style.height= "125px";
    sel2.innerHTML= "Phoenix";
    oponent2.innerHTML= "Phoenix";
    person2.src= "phi.webp";
    pertext2.innerHTML= "Phi";
    beyimg2.src= "phoenix.png";
    beytext2.innerHTML= "Phoenix";
});

document.getElementById('sal2').addEventListener('click', function() {
    beybladetwo.src= "salamander.png";
    beybladetwo.style.height= "125px";
    sel2.innerHTML= "Salamander";
    oponent2.innerHTML= "Salamandar";
    person2.src= "suo.png";
    pertext2.innerHTML= "Suo Genjji";
    beyimg2.src= "salamander.png";
    beytext2.innerHTML= "Salamandar";
});

let startSpin = document.getElementById('spin');

startSpin.addEventListener('click', function() {
    beybladeone.style.animation= " spinning 0.15s linear infinite";
    beybladetwo.style.animation= " spinning 0.15s linear infinite";
}); 

let battleups = document.getElementById('matchups');

document.getElementById('startBtl').addEventListener('click', function() {
    if (oponent1.innerHTML.length == 0 , oponent2.innerHTML.length == 0) {
        alert('Select Beyblades');
        menucontent.style.display= "block";
    };
    if (oponent1.innerHTML.length > 0 , oponent2.innerHTML.length > 0) {
        battleups.style.display= "block";
    };
});

document.getElementById('closebattleups').addEventListener('click', function() {
    battleups.style.display= "none";
});
