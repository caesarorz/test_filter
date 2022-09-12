copyDOMElement = (element) => {
    currentElement = document.getElementById(element)
    copyElement = currentElement.cloneNode(false)
    return copyElement
}

createImg = (imagen='', modelo='No imagen dispo') => {
    const img = document.createElement('img');

    if (imagen === undefined) {
        imagen = "No disp"
    }

    img.src = imagen;
    img.alt = modelo
    return img
}

createCard = (item) => {

    const card = document.createElement('div');
    card.classList.add('card')
    card.classList.add('mx-auto')

    img = createImg(item.imagen, item.modelo)
    img.classList.add('card-img-top')
    card.appendChild(img)

    const divBody = document.createElement('div');
    divBody.classList.add('card-body')

    // makinaria logo
    objectSVG = document.createElement('object')
    objectSVG.style.width = '15'
    objectSVG.style.height = '15'
    objectSVG.data = item.logo
    divBody.appendChild(objectSVG)

    // makinaria modelo y tipo
    const p = document.createElement('p')
    p.classList.add('card-text')
    p.classList.add('card_marca')
    p.textContent = item.modelo + " " + item.tipo
    divBody.appendChild(p)

    // makinaria features
    const featureRow = document.createElement('div');
    featureRow.classList.add('row')
    // makinaria features: motor
    const featureMotorDiv = document.createElement('div');
    featureMotorDiv.classList.add('col-4')
    const pFeatureMotorDiv = document.createElement('p')
    pFeatureMotorDiv.classList.add('feature_makinaria_p')
    pFeatureMotorDiv.textContent = 'Motor'
    featureMotorDiv.appendChild(pFeatureMotorDiv)
    const pFeatureMotorTextDiv = document.createElement('p')
    pFeatureMotorTextDiv.classList.add('feature_makinaria_text_p')
    pFeatureMotorTextDiv.textContent = item.motor
    featureMotorDiv.appendChild(pFeatureMotorTextDiv)
    featureRow.appendChild(featureMotorDiv)
    // makinaria features: peso
    const featurePesoDiv = document.createElement('div');
    featurePesoDiv.classList.add('col-4')
    const pfeaturePesoDiv = document.createElement('p')
    pfeaturePesoDiv.classList.add('feature_makinaria_p')
    pfeaturePesoDiv.textContent = 'Peso'
    featurePesoDiv.appendChild(pfeaturePesoDiv)
    const pfeaturePesoTextDiv = document.createElement('p')
    pfeaturePesoTextDiv.classList.add('feature_makinaria_text_p')
    pfeaturePesoTextDiv.textContent = item.peso
    featurePesoDiv.appendChild(pfeaturePesoTextDiv)
    featureRow.appendChild(featurePesoDiv)
    // makinaria features: capacidad
    const featureCapacidadDiv = document.createElement('div');
    featureCapacidadDiv.classList.add('col-4')
    const pfeatureCapacidadDiv = document.createElement('p')
    pfeatureCapacidadDiv.classList.add('feature_makinaria_p')
    pfeatureCapacidadDiv.textContent = 'Capacidad'
    featureCapacidadDiv.appendChild(pfeatureCapacidadDiv)
    const pfeatureCapacidadTextDiv = document.createElement('p')
    pfeatureCapacidadTextDiv.classList.add('feature_makinaria_text_p')
    pfeatureCapacidadTextDiv.textContent = item.capacidad
    featureCapacidadDiv.appendChild(pfeatureCapacidadTextDiv)
    featureRow.appendChild(featureCapacidadDiv)

    divBody.appendChild(featureRow)

    const btnContainer = document.createElement('div')
    btnContainer.classList.add('d-grid')
    btnContainer.classList.add('gap-2')
    divBody.appendChild(btnContainer)

    const btn = document.createElement('button')
    btn.setAttribute("id", "feature_makinaria_btn");
    btn.classList.add('btn')
    btn.classList.add('btn-warning')
    btn.textContent = "Ver más"
    btnContainer.appendChild(btn)


    card.appendChild(divBody)

    card.style.display = 'flex'
    return card

}


// must be more agnostic
showMakinariaFiltered = (data) => {
    theelements = document.getElementsByClassName('show_makinaria_filtered_col')
    Array.from(theelements).forEach(e => {
        e.remove()
    })

    data.forEach(item => {
        colOriginal = document.getElementById('show_makinaria_filtered_group')
        colOriginal.style.display = 'none'

        col = copyDOMElement('show_makinaria_filtered_group')
        col.removeAttribute('id')
        col.classList.add('show_makinaria_filtered_col')

        card = createCard(item)
        col.appendChild(card)
        col.style.display = 'flex'

        cardSection = document.getElementById('show_makinaria_filtered')
        cardSection.appendChild(col)
    })
}

const shiftDropDownMarca = (logo, marca, id) => {
    const elt = document.getElementById(id);
    elt.innerHTML = logo ? `<img src=${logo} alt="${marca}">` : marca
    filtro.marca = marca
}

//change text in dropdown btn and add to data
changeBtnTextMarca = (e) => {

    var logo = "";
    var marca = ""
    theid = "dropbtn_text_marca"
    if (e.target.tagName === 'IMG') {
        marca = e.target.alt
        logo = getLogo(marca)
        shiftDropDownMarca(logo, marca, theid)
        return
    }
    if (e.target.textContent === "Todas las marcas") {
        marca = e.target.textContent
        shiftDropDownMarca(logo, marca, theid)
        return
    }
    if (e.target.tagName === 'A') {
        marca = e.target.children[0] ? e.target.children[0].alt : e.target.textContent
        logo = getLogo(marca)
        shiftDropDownMarca(logo, marca, theid)
        return
    }

}
document.getElementById('myDropdownMarca').addEventListener('click', changeBtnTextMarca);

//change text in dropdown btn and add to data
changeBtnTextTipo = (e) => {
    filtro.tipo = e.target.textContent
    const elt = document.getElementById("dropbtn_text_tipo");
    elt.textContent = e.target.textContent
}
document.getElementById('myDropdownTipo').addEventListener('click', changeBtnTextTipo);

//change text in dropdown btn and add to data
changeBtnTextUso = (e) => {

    filtro.uso = e.target.textContent
    const elt = document.getElementById("dropbtn_text_uso");
    elt.textContent = e.target.textContent
}
document.getElementById('myDropdownUso').addEventListener('click', changeBtnTextUso);


//change text in dropdown btn and add to data
changeBtnTextMarcaMobile = (e) => {

    var logo = "";
    var marca = ""
    theid = "dropbtn_text_marca_mobile"
    if (e.target.tagName === 'IMG') {
        marca = e.target.alt
        logo = getLogo(marca)
        shiftDropDownMarca(logo, marca, theid)
        return
    }
    if (e.target.textContent === "Todas las marcas") {
        marca = e.target.textContent
        shiftDropDownMarca(logo, marca, theid)
        return
    }
    if (e.target.tagName === 'A') {
        marca = e.target.children[0] ? e.target.children[0].alt : e.target.textContent
        logo = getLogo(marca)
        shiftDropDownMarca(logo, marca, theid)
        return
    }

}
document.getElementById('myDropdownMarcaMobile').addEventListener('click', changeBtnTextMarcaMobile);

//change text in dropdown btn and add to data
changeBtnTextTipoMobile = (e) => {

    filtro.tipo = e.target.textContent
    const elt = document.getElementById("dropbtn_text_tipo_mobile");
    elt.textContent = e.target.textContent
}
document.getElementById('myDropdownTipoMobile').addEventListener('click', changeBtnTextTipoMobile);

//change text in dropdown btn and add to data
changeBtnTextUsoMobile = (e) => {

    filtro.uso = e.target.textContent
    const elt = document.getElementById("dropbtn_text_uso_mobile");
    elt.textContent = e.target.textContent
}
document.getElementById('myDropdownUsoMobile').addEventListener('click', changeBtnTextUsoMobile);




filtro = {
    marca: 'Todas las marcas',
    tipo: 'Todos los tipos',
    uso: 'Todos los usos'
}


// filter
btnFilter = (e) => {
    info = filtroMakinaria(marca=filtro.marca, tipo=filtro.tipo, uso=filtro.uso)
    showMakinariaFiltered(info)
}

document.getElementById('btn_buscar').addEventListener('click', btnFilter);
document.getElementById('btn_buscar_filter').addEventListener('click', btnFilter);
