
// jQuerry to hide collapsible menu on xs when onblur 
// (Boostrap construction of collapsible menu requires jQuerry)
// nie chce działac z dropdown w navbarze i szukaniem

$(function (){ //czeka na załadowanie DOM bez obrazków itd.
	$("#navbarToggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth<992){
			$("#collapsibleNavbar").collapse('hide');
		}
	});
});
//*******end of jQuerry*********

// wstawiacz fragmentów do wyświetlenia na stronach html
// insertHtml(selector, [strona lub kod html])
var insertHtml = function(selector, html){
	document.querySelector(selector).innerHTML=html;
};

//to działa:
//insertHtml("#insertFooter", '<footer id="insertFooter">blablablaScript</footer>');


//spinner - znacznik ładowania strony itp.
//wymaga ikonki, np. ze strony ajaxload.info jak poniżej
//var showLoading = function (selector){
//	var html = "div ..[niezaładowna rzecz]..";
//	html += "<img src='images/ajax-loader.gif'></div>";
//	insertHtlm(selector, html);
//};
//potem oczywiście trzeba wywołać showLoading gdy potrzeba

        $ajaxUtils
          .sendGetRequest("snippets/navigation.html", 
            function (request) {
              var navigation = request.responseText;

              document.querySelector("#insertNavigation")
                .innerHTML = navigation;
            },
    false);


//*************strefa pacjenta *****************
           $ajaxUtils
          .sendGetRequest("../snippets/navigationPacjent.html", 
            function (request) {
              var navigationPacjent = request.responseText;

              document.querySelector("#NavigationPacjent")
                .innerHTML = navigationPacjent;
            },
    false);
 

//************* wstawianie footera ****************

$ajaxUtils.sendGetRequest("snippets/footer.html", 
    function (request) {
      var footer = request.responseText;
      document.querySelector(".insertFooter").innerHTML = footer;
    },
    false);  //"false", bo nie ma traktować jak JSON-a


$ajaxUtils.sendGetRequest("../snippets/footer.html", 
    function (request) {
      var footer = request.responseText;
      document.querySelector(".insertFooterPacjent").innerHTML = footer;
    },
    false);  //"false", bo nie ma traktować jak JSON-a


//******Collapsible Panel 1 Page 3 *********

        $ajaxUtils
          .sendGetRequest("data/kwalifikacje.txt", 
            function (request) {
              var txt = request.responseText;
              document.querySelector("#collapsiblePanel1Text")
                .innerHTML = txt;
            },
    false);


//******Collapsible Panel 2 Page 3 *********
        $ajaxUtils
          .sendGetRequest("data/kurs.txt", 
            function (request) {
              var txt = request.responseText;
              document.querySelector("#collapsiblePanel2Text")
                .innerHTML = txt;
            },
		false);

		

//************* hide/show element function ***************
function hideShow(item) {
  var x = document.getElementById(item);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



//********builder spisu lekarzy na page2*****************

$ajaxUtils.sendGetRequest("snippets/employee.html",
  function (request) {
    var finalEmployee = "";
    var empl = "";
    $ajaxUtils.sendGetRequest("data/lekarze.json", 
      function(res){
        for (var i = 0; i < res.length; i++){ 
          var tytul = res[i].tytul;
          var imie = res[i].imie;
          var nazwisko = res[i].nazwisko;
          var tekst = res[i].tekst;
          var tel = res[i].tel;
          var mail = res[i].mail;
            empl = request.responseText;
            empl = empl.replace(new RegExp("{{tytul}}", "g"), tytul);            
            empl = empl.replace(new RegExp("{{imie}}", "g"), imie);
            empl = empl.replace(new RegExp("{{nazwisko}}", "g"), nazwisko); 
            empl = empl.replace(new RegExp("{{tekst}}", "g"), tekst); 
            empl = empl.replace(new RegExp("{{tel}}", "g"), tel); 
            empl = empl.replace(new RegExp("{{mail}}", "g"), mail);

      finalEmployee = finalEmployee + empl;
          };
    document.querySelector("#doctors").innerHTML = finalEmployee;
  }, 
  true);
},
false);


//********builder spisu pielegniarek na page2*****************

$ajaxUtils.sendGetRequest("snippets/employee.html",
  function (request) {
    var finalEmployee = "";
    var empl = "";
    $ajaxUtils.sendGetRequest("data/pielegniarki.json", 
      function(res){
        for (var i = 0; i < res.length; i++){ 
          var tytul = res[i].tytul;
          var imie = res[i].imie;
          var nazwisko = res[i].nazwisko;
          var tekst = res[i].tekst;
          var tel = res[i].tel;
          var mail = res[i].mail;
            empl = request.responseText;
            empl = empl.replace(new RegExp("{{tytul}}", "g"), tytul); 
            empl = empl.replace(new RegExp("{{imie}}", "g"), imie);
            empl = empl.replace(new RegExp("{{nazwisko}}", "g"), nazwisko); 
            empl = empl.replace(new RegExp("{{tekst}}", "g"), tekst); 
            empl = empl.replace(new RegExp("{{tel}}", "g"), tel); 
            empl = empl.replace(new RegExp("{{mail}}", "g"), mail);

      finalEmployee = finalEmployee + empl;
          };
    document.querySelector("#nurses").innerHTML = finalEmployee;
  }, 
  true);
},
false);

//********builder spisu specjalistów na page2*****************

$ajaxUtils.sendGetRequest("snippets/employee.html",
  function (request) {
    var finalEmployee = "";
    var empl = "";
    $ajaxUtils.sendGetRequest("data/specjalisci.json", 
      function(res){
        for (var i = 0; i < res.length; i++){ 
          var tytul = res[i].tytul;
          var imie = res[i].imie;
          var nazwisko = res[i].nazwisko;
          var tekst = res[i].tekst;
          var tel = res[i].tel;
          var mail = res[i].mail;
            empl = request.responseText;
            empl = empl.replace(new RegExp("{{tytul}}", "g"), tytul);             
            empl = empl.replace(new RegExp("{{imie}}", "g"), imie);
            empl = empl.replace(new RegExp("{{nazwisko}}", "g"), nazwisko); 
            empl = empl.replace(new RegExp("{{tekst}}", "g"), tekst); 
            empl = empl.replace(new RegExp("{{tel}}", "g"), tel); 
            empl = empl.replace(new RegExp("{{mail}}", "g"), mail);

        finalEmployee = finalEmployee + empl;
        };
    document.querySelector("#specialists").innerHTML = finalEmployee;
  }, 
  true);
},
false);





