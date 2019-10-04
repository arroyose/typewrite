// ---------------------------------------------------------------------------------------
//                              FUNCTION TYPEWRITE
//
// This is the main fuction that is in charge for display 
// all the words on the HTML elemen.
//
//
//  *NOTE: The function need to be Async the way the ejecutions of this function 
//         give to us options for use the object Promise and wait until this object was finished
// -----------------------------------------------------------------------------------------

async function typewrite(element,texts,delay_word,delay_char) {

	aux = document.getElementById(element).innerHTML;//Get in aux the content ready on the HTML element
    num_text=texts.length;// check How many words we have
    
    for (i=0; i < num_text;i++){ // Iterations for number of words 
        current_text=texts[i];// Get the current word into the Words array
        long_current_text=current_text.length;//Get the chars length on current word
        
        for(j=0;j<=long_current_text; j++){ // Iterations for number of chars in the current word
           
            // If it is the first iteration it is a new word and we delete the content of the html element
            if(j==0){
                document.getElementById(element).innerHTML ="";
                aux="";
            }
            // If not read the new char and add this to the content on HTML element
            aux = aux.concat(current_text.charAt(0));
            document.getElementById(element).innerHTML = aux;

            // Update the current_text var to the rest of the current word and
            // deleted the last char we add to the HTML element
            current_text=current_text.substr(1);

            // call to sleep function with chart delay
            await sleep(delay_char);
        }
        // call to sleep function with word delay
        await sleep(delay_word);
    }
   // recursive call to the function with a news words or word.
   typewrite(element,texts,delay_word,delay_char);
}

// ---------------------------------------------------------------------------------------
//                              FUNCTION TYPEWRITE
//
// This fuction is in charge to make the delay in ms that you specific on the call.
// -----------------------------------------------------------------------------------------
 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// ---------------------------------------------------------------------------------------
//                              SET-UP  &  Function Call
// ---------------------------------------------------------------------------------------
//
// Array WORDS => Is the Array where we want to specify the words
//                you want to display in the HTML elements.
//
// Function call
//      - 1º parameter => id_of the html elements where you want to display the content.(my_typewrite)
//      - 2º parameter => array of Words you want to display.(words)
//      - 3º parameter => Delay on ms of word delay. (1000)
//      - 4º parameter => Delay on ms of character delay.(200)
// -----------------------------------------------------------------------------------------
 
//Array WORDS
    var words = ["1 word","2 word","3 word"];
//Function call
    typewrite("my_typewrite",words,1000,200);