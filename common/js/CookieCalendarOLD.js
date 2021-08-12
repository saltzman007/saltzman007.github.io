// window.onload = function () {
    window.onload = function () {


    // document.getElementById("salttest").innerHTML = "fuck";

    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem("GlowCookies") == "1") {
            // document.getElementById("EnglishCalendar").innerHTML = '<iframe src="https://www.google.com/calendar/embed?mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%2399ff99&amp;src=j68v7bktcnj5q0i22vojr26210%40group.calendar.google.com&amp;color=%232F6309&amp;src=1n4mi37755lep00rgc3s47lmdk%40group.calendar.google.com&amp;color=%230D7813&amp;src=dcq0hu5mvcm7m9a7trto1e8i08%40group.calendar.google.com&amp;color=%230D7813&amp;ctz=Europe%2FBerlin&hl=en"  style=" border-width:0 " width="500" height="600" frameborder="0" scrolling="no"></iframe>";'       
            // document.getElementById("GermanCalendar").innerHTML = '<iframe src="https://www.google.com/calendar/embed?mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%2399ff99&amp;src=j68v7bktcnj5q0i22vojr26210%40group.calendar.google.com&amp;color=%232F6309&amp;src=1n4mi37755lep00rgc3s47lmdk%40group.calendar.google.com&amp;color=%230D7813&amp;src=dcq0hu5mvcm7m9a7trto1e8i08%40group.calendar.google.com&amp;color=%230D7813&amp;ctz=Europe%2FBerlin&hl=de" style=" border-width:0 " width="500" height="600" frameborder="0" scrolling="no"></iframe>';
            document.getElementById("EnglishCalendar").innerHTML = '<iframe src="https://www.google.com/calendar/embed?mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%2399ff99&amp;src=j68v7bktcnj5q0i22vojr26210%40group.calendar.google.com&amp;color=%232F6309&amp;src=1n4mi37755lep00rgc3s47lmdk%40group.calendar.google.com&amp;color=%230D7813&amp;src=dcq0hu5mvcm7m9a7trto1e8i08%40group.calendar.google.com&amp;color=%230D7813&amp;ctz=Europe%2FBerlin&hl=en"  style=" border-width:0 " width="500" height="600" frameborder="0" scrolling="no"></iframe>';
            document.getElementById("GermanCalendar").innerHTML = '<iframe src="https://www.google.com/calendar/embed?mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%2399ff99&amp;src=j68v7bktcnj5q0i22vojr26210%40group.calendar.google.com&amp;color=%232F6309&amp;src=1n4mi37755lep00rgc3s47lmdk%40group.calendar.google.com&amp;color=%230D7813&amp;src=dcq0hu5mvcm7m9a7trto1e8i08%40group.calendar.google.com&amp;color=%230D7813&amp;ctz=Europe%2FBerlin&hl=de" style=" border-width:0 " width="500" height="600" frameborder="0" scrolling="no"></iframe>';
            document.getElementById("EnglishNoCookies").innerHTML = "";
            document.getElementById("GermanNoCookies").innerHTML = "";

        }
        else {
            document.getElementById("EnglishCalendar").innerHTML = "";
            document.getElementById("GermanCalendar").innerHTML = "";
            document.getElementById("EnglishNoCookies").innerHTML = "Activate cookies for calendar view!";
            document.getElementById("GermanNoCookies").innerHTML = "Für den Kalender bitte Cookies akzeptieren";

        }
    }
    else {
        document.getElementById("EnglishCalendar").innerHTML = "";
        document.getElementById("GermanCalendar").innerHTML = "";
        document.getElementById("EnglishNoCookies").innerHTML = "Sorry, your browser does not support web storage...";
        document.getElementById("GermanNoCookies").innerHTML = "Ihr Browser unterstützt web storage nicht:-(";
    }

};