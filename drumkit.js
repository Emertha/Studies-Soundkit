document.addEventListener('DOMContentLoaded', appStart)

const sounds = {
    97 : "boom",
    115 : "clap",
    100 : "clap",
    102 : "hihat",
    103 : "kick",
    104 : "openhat",
    106 : "ride",
    107 : "snare",
    108 : "tink",
   
}

const channel1 = [];
let isRecording = false;
let recStartTime = 0;
function appStart(){
    window.addEventListener('keypress', playSound);
    document.querySelector('#rec').addEventListener('click', recAudio);
    document.querySelector('#play').addEventListener('click', playAudio);
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
     const soundName = sounds[e.charCode]
    const audioDOM = document.querySelector(`#${soundName}`);

    audioDOM.currentTime = 0;
     audioDOM.play()
     channel1.push({
         name: soundName,
         time: Date.now() - recStartTime,
     })
    }

    function playSound(e){
        //sprawdzenie czy znak jest zgodny z kodem
         if(!sounds[e.charCode]){
             return;
         }
         console.log(e);
          //e.charcode - kod znaku
          const soundName = sounds[e.charCode]
         const audioDOM = document.querySelector(`#${soundName}`);
     
         audioDOM.currentTime = 0;
          audioDOM.play()
          channel1.push({
              name: soundName,
              time: Date.now() - recStartTime,
          })
         }
         

         
