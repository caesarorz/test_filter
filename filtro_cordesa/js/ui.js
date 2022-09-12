window.addEventListener('click', function(e){

  var target = e.target || e.srcElement;
  var id = target.id

  console.log("the element ", target, id)


  if (id === "dropbtn_filter_makinaria" || id === "btn_makinaria_filtrar_close") {
    return
  }

  if (id === "filter_maquinaria_btn_marca" || id === "dropbtn_text_marca_mobile") {
    return
  }
  if (id === "filter_maquinaria_btn_tipo" || id === "dropbtn_text_tipo_mobile") {
    return
  }
  if (id === "filter_maquinaria_btn_uso" || id === "dropbtn_text_uso_mobile") {
    return
  }

  // if (id === "filter_maquinaria_btn_marca" || id === "dropbtn_text_marca_mobile") {
  //   return
  // }
  // if (id === "filter_maquinaria_btn_tipo" || id === "dropbtn_text_tipo_mobile") {
  //   return
  // }
  // if (id === "filter_maquinaria_btn_uso" || id === "dropbtn_text_uso_mobile") {
  //   return
  // }

  if (e.target.classList.contains("makinaria_close") === false) {
    console.log("makinaria_close")
    document.getElementById("dropdown_content_makinaria").style.display = "none";
    document.getElementById("myDropdownMarca").classList.remove("show");
    document.getElementById("myDropdownTipo").classList.remove("show");
    document.getElementById("myDropdownUso").classList.remove("show");
    document.getElementById("myDropdownMarcaMobile").classList.remove("show");
    document.getElementById("myDropdownTipoMobile").classList.remove("show");
    document.getElementById("myDropdownUsoMobile").classList.remove("show");
  }

})


function myFunctionMarca() {
    const theid = document.getElementById("myDropdownMarca");
    theid.classList.toggle("show");
  }

function myFunctionTipo() {
    const theid = document.getElementById("myDropdownTipo");
    theid.classList.toggle("show");
}

function myFunctionUso() {
    const theid = document.getElementById("myDropdownUso");
    theid.classList.toggle("show");
}


function myFunctionMarcaMobile() {
    const theid = document.getElementById("myDropdownMarcaMobile");
    theid.classList.toggle("show");
  }

function myFunctionTipoMobile() {
    const theid = document.getElementById("myDropdownTipoMobile");
    theid.classList.toggle("show");
}

function myFunctionUsoMobile() {
    const theid = document.getElementById("myDropdownUsoMobile");
    theid.classList.toggle("show");
}


document.getElementById('dropbtn_filter_makinaria').addEventListener('click', function(e) {
    var elt = document.getElementById("dropdown_content_makinaria");
    if (elt.style.display === "none") {
        elt.style.display = "block";
      } else {
        elt.style.display = "none";
      }
})

var elements = document.getElementsByClassName("makinaria_close");
