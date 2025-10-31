/**
 * Multiplies the value prior to the suffix of a string by a value (i.e. multSuffixless("18px",2) => "32px"))
 * @param {string} s input string 
 * @param {string} scalar number to multiply by 
 * @returns {string} product
 */
function multSuffixless(s,scalar){
    let i=0;
    while(s[i++] in "0123456789.");
    return parseInt(s.substring(0,i))*scalar + s.substring(i);
}
function rescaleText(e,scalar){
    e.style.fontSize = window.getComputedStyle(e).fontSize
}
function test(){
console.log(multSuffixless("32px",3));
}