// detect IE ersion
var IEversion = detectIE();
if (IEversion !== false) {
    alert('You are using IE'+IEversion);
    document.location.href = "https://www.google.com/chrome/browser/desktop/";
}
function detectIE() {
    var getAgent = window.navigator.userAgent;
    var msie = getAgent.indexOf('MSIE ');
    if (msie > 0) {
        return parseInt(getAgent.substring(msie+5, getAgent.indexOf('.', msie)), 10);
    }
    var trident = getAgent.indexOf('Trident/');
    if (trident > 0) {
        var rv = getAgent.indexOf('rv:');
        return parseInt(getAgent.substring(rv+3, getAgent.indexOf('.', rv)), 10);
    }
    var edge = getAgent.indexOf('Edge/');
    if (edge > 0) {
        return parseInt(getAgent.substring(edge+5, getAgent.indexOf('.', edge)), 10);
    }
    return false;
}