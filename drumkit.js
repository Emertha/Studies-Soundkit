document.addEventListener('DOMContentLoaded', appStart)

const sounds = {
    97 : "boom",
    115 : "clap",
    100 : "hihat",
    102 : "kick",
    103 : "openhat",
    104 : "ride",
    106 : "snare",
    107 : "stink",
    108 : "tom",
   
}

const channel1 = [];
let isRecording = false;
let recStartTime = 0;
function appStart(){
    window.addEventListener('keypress', playSound);
    window.addEventListener('keypress', changetoPreessedKey);
    window.addEventListener('keyup', changetoUnpreessedKey);
    document.querySelector('#rec').addEventListener('click', recAudio);
    document.querySelector('#play').addEventListener('click', playAudio);
}

function changetoPreessedKey(e){
    let elem = document.querySelector("[id='"+ e.charCode +"']");
    elem.classList.remove('key');
    elem.classList.add('pressed');
}

function changetoUnpreessedKey(e){
    let elem = document.querySelectorAll(".pressed");
    for (let i = 0; i< elem.length; i++){
        elem[i].classList.remove('pressed');
        elem[i].classList.add('key');
    }
    
    
}

function playAudio(){
    channel1.forEach(sound => {
        setTimeout(
            () => {
                const audioDOM = document.querySelector(`#${sound.name}`);
                audioDOM.currentTime = 0;
                audioDOM.play();
            }, sound.time
            )
    })
}

function recAudio(e){

    isRecording = !isRecording;
    recStartTime = Date.now();
    e.target.innerHTML = isRecording ? 'Zatrzymaj' : 'Nagrywaj'
}

function playSound(e){
   //sprawdzenie czy znak jest zgodny z kodem
    if(!sounds[e.charCode]){
        return;
    }
    console.log(e);
     //e.charcode - kod znaku
     const soundName = sounds[e.charCode];
     //alert("#" + e.charCode);

    const audioDOM = document.querySelector(`#${soundName}`);

    audioDOM.currentTime = 0;
     audioDOM.play()
     channel1.push({
         name: soundName,
         time: Date.now() - recStartTime,
     })
    }
