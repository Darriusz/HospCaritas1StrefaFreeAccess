//********builder spisu lekarzy na page2*****************

$ajaxUtils.sendGetRequest("snippets/employee.html",
  function (request) {
    var finalEmployees = "";
    var empl = "1";
    $ajaxUtils.sendGetRequest("data/lekarze.json", 
      function(res){
        for (var i = 0; i < res.length; i++){ 
          // var dr = "ahoj ";
          var imie = res[i].imie;
          var nazwisko = res[i].nazwisko;
          var tekst = res[i].tekst;
          var tel = res[i].tel;
          var mail = res[i].mail;
          console.log(nazwisko);

            // lek = "dwa";
            empl = request.responseText;
            empl = empl.replace(new RegExp("{{imie}}", "g"), imie);
            empl = empl.replace(new RegExp("{{nazwisko}}", "g"), nazwisko); 
            empl = empl.replace(new RegExp("{{tekst}}", "g"), tekst); 
            empl = empl.replace(new RegExp("{{tel}}", "g"), tel); 
            empl = empl.replace(new RegExp("{{mail}}", "g"), mail);

            console.log(lek);
      finalEmployees = finalEmployees + empl;
      console.log(finalEmployees);
          };
    document.querySelector("#doctors").innerHTML = finalEmployees;
    console.log(finalEmployees);  
  }, 
  true);
},
false);


//********builder spisu pielegniarek na page2*****************

$ajaxUtils.sendGetRequest("snippets/employee.html",
  function (request) {
    var finalEmployees = "";
    var empl = "";
    $ajaxUtils.sendGetRequest("data/pielegniarki.json", 
      function(res){
        for (var i = 0; i < res.length; i++){ 
          // var dr = "ahoj ";
          var imie = res[i].imie;
          var nazwisko = res[i].nazwisko;
          var tekst = res[i].tekst;
          var tel = res[i].tel;
          var mail = res[i].mail;
          console.log(nazwisko);

            empl = request.responseText;
            empl = empl.replace(new RegExp("{{imie}}", "g"), imie);
            empl = empl.replace(new RegExp("{{nazwisko}}", "g"), nazwisko); 
            empl = empl.replace(new RegExp("{{tekst}}", "g"), tekst); 
            empl = empl.replace(new RegExp("{{tel}}", "g"), tel); 
            empl = empl.replace(new RegExp("{{mail}}", "g"), mail);

            console.log(lek);
      finalEmployees = finalEmployees + empl;
      console.log(finalEmployees);
          };
    document.querySelector("#nurses").innerHTML = finalEmployees;
    console.log(finalEmployees);  
  }, 
  true);
},
false);

//********builder spisu specjalistów na page2*****************

$ajaxUtils.sendGetRequest("snippets/employee.html",
  function (request) {
    var finalEmployees = "";
    var empl = "";
    $ajaxUtils.sendGetRequest("data/specjalisci.json", 
      function(res){
        for (var i = 0; i < res.length; i++){ 
          // var dr = "ahoj ";
          var imie = res[i].imie;
          var nazwisko = res[i].nazwisko;
          var tekst = res[i].tekst;
          var tel = res[i].tel;
          var mail = res[i].mail;
          console.log(nazwisko);

            empl = request.responseText;
            empl = empl.replace(new RegExp("{{imie}}", "g"), imie);
            empl = empl.replace(new RegExp("{{nazwisko}}", "g"), nazwisko); 
            empl = empl.replace(new RegExp("{{tekst}}", "g"), tekst); 
            empl = empl.replace(new RegExp("{{tel}}", "g"), tel); 
            empl = empl.replace(new RegExp("{{mail}}", "g"), mail);

            console.log(lek);
      finalEmployees = finalEmployees + empl;
      console.log(finalEmployees);
          };
    document.querySelector("#specialists").innerHTML = finalEmployees;
    console.log(finalEmployees);  
  }, 
  true);
},
false);