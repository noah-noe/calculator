 let result = document.getElementById("result")
    let temp = ""

    function getData(data){

        if(data.innerText == '='){
            result.innerText =  eval( temp )
            temp = eval( temp )    
        }else{
            // result.innerText = data.innerText
            temp += data.innerText
            result.innerText = temp
        }
    }

    function clearCalculator(){
        result.innerText = 0;
        temp = ""
    }
function startVoiceInput() {

    let SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Voice recognition is not supported.");
        return;
    }

    let recognition = new SpeechRecognition();

    let language = document.getElementById("languageSelect").value;
    recognition.lang = language;

    recognition.start();

    recognition.onresult = function(event) {

        let speech = event.results[0][0].transcript.toLowerCase();

        speech = speech.replace(/plus/g, "+");
        speech = speech.replace(/minus/g, "-");
        speech = speech.replace(/times|multiply/g, "*");
        speech = speech.replace(/divided by|divide/g, "/");
        speech = speech.replace(/equals|equal/g, "=");

        speech = speech.replace(/더하기/g, "+");
        speech = speech.replace(/빼기/g, "-");
        speech = speech.replace(/곱하기/g, "*");
        speech = speech.replace(/나누기/g, "/");
        speech = speech.replace(/같음|이퀄/g, "=");

        speech = speech.replace(/အပေါင်း/g, "+");
        speech = speech.replace(/အနှုတ်/g, "-");
        speech = speech.replace(/အမြှောက်/g, "*");
        speech = speech.replace(/အစား/g, "/");

        number = speech;

        number = speech;

        try {
            let answer = eval(number);
            result.innerText = answer;
            number = String(answer);
        } catch (error) {
             result.innerText = "Error";
};
    }
}