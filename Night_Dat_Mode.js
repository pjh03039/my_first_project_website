var Links = {
    setColor: function (color) {
        $('a').css('color', color);
    }
}
var Body = {
    SetColor: function(color) { $('body').css('color', color); }, //Text Color
    SetBackgroundColor: function(color) { $('body').css('backgroundColor', color); } //Background Color
}
function BorderColorPowderblue(tag) {
    document.querySelector(tag).style.borderColor = 'powderblue';
}
function BorderColorBlack(tag) {
    document.querySelector(tag).style.borderColor = 'black';
}
function NightDayHandler(self) {
    if (self.value === 'Night') {
        Body.SetColor('white');
        Body.SetBackgroundColor('black');
        self.value = 'Day';
        Links.setColor('powderblue');
        BorderColorPowderblue('h1');
        BorderColorPowderblue('ol');
    }
    else {
        Body.SetColor('black');
        Body.SetBackgroundColor('white');
        self.value = 'Night';
        Links.setColor('black');
        BorderColorBlack('h1');
        BorderColorBlack('ol');
    }
}