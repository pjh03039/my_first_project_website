function LinkSetColor(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
        alist[i].style.color = color;
        i++;
    }
}
function BodySetColor(color) {
    document.querySelector('body').style.backgroundColor = color;
}
function SetColor(color) {
    document.querySelector('body').style.color = color;
}
function BorderColorPowderblue(tag) {
    document.querySelector(tag).style.borderColor = 'powderblue';
}
function BorderColorBlack(tag) {
    document.querySelector(tag).style.borderColor = 'black';
}
function NightDayHandler(self) {
    if (self.value === 'Night') {
        BodySetColor('black');
        SetColor('white');
        self.value = 'Day';
        LinkSetColor('powderblue');
        BorderColorPowderblue('h1');
        BorderColorPowderblue('ol');
    }
    else {
        BodySetColor('white');
        SetColor('black');
        self.value = 'Night';
        LinkSetColor('black');
        BorderColorBlack('h1');
        BorderColorBlack('ol');
    }
}