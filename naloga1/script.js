//Določi input element za kasnejšo uporabo
let input = document.getElementById('input')
//Na začetku ustvari prazen array "denarnica" in spremenljivko "skupaj" z vrednostjo 0
let denarnica = [];
var skupaj = 0

//ob kliku gumba "shrani" se sproži funkcija
function poberiInput(){
    if((!input.value.length == '') && (Number(input.value) > 0)){ //Preveri, da input polje ni prazno oz. da vnesena št. ni negativna
        denarnica.push(input.value); //doda na novo vneseno število v array "denarnica"
        //Preveri koliko je v array-u "denarnica" 1,2,5,10,20 številk
        st1 = denarnica.filter(x => x == 1).length;
        st2 = denarnica.filter(x => x == 2).length;
        st5 = denarnica.filter(x => x == 5).length;
        st10 = denarnica.filter(x => x == 10).length;
        st20 = denarnica.filter(x => x == 20).length;
        skupaj += Number(input.value); //sešteje skupaj dosedanji skupni znesek in vneseno število
        input.value = ''; //počisti input polje
        //div-u z ID-jem "izpisek" spremeni innerHtml s novimi vrednostmi
        document.getElementById("izpisek").innerHTML = '<h3>Denarnica</h3>' + '<ul style="list-style-type: none;">' + 
        '<li>1€: ' + st1 + 'x</li> ' +
        '<li>2€: ' + st2 + 'x</li> ' +
        '<li>5€: ' + st5 + 'x</li> ' +
        '<li>10€: ' + st10 + 'x</li> ' +
        '<li>20€: ' + st20 + 'x</li> ' +
        '<li><b>Skupaj: </b>' + skupaj + '€</li>' +
        '</ul>';
    }
}
//