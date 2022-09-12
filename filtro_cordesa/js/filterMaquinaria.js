const makinaria = [
        {'marca': 'MST', 'uso': 'Uso 1', 'tipo': 'Retroexcavadora', 'modelo': 'MST 542S', 'motor': '74.5 kw', 'peso': '8.800 kg', 'capacidad': '4.4 Lt3', 'logo': 'img/MST_logo.svg', 'imagen': 'img/MST 542S - Retroexcavadora.jpg', 'ver_producto_link': ''},
        {'marca': 'MST', 'uso': 'Uso 2', 'tipo': 'Excavadora', 'modelo': 'M220LC', 'motor': '116 kw', 'peso': '22.500 kg', 'capacidad': '1.10 m3', 'logo': 'img/MST_logo.svg', 'imagen': 'img/M220LC - Excavadora.jpg', 'ver_producto_link': ''},
        {'marca': 'MST', 'uso': 'Uso 1', 'tipo': 'Manipulador', 'modelo': 'ST940', 'motor': '74.5 kw', 'peso': '9.980 kg', 'capacidad': '4000 kg', 'logo': 'img/MST_logo.svg', 'imagen': 'img/ST940 - Manipulador.jpg', 'ver_producto_link': ''},
        {'marca': 'ZOOMLION', 'uso': 'Uso 2', 'tipo': 'Excavadora', 'modelo': 'ZE550EK-10', 'motor': '74.5 kw', 'peso': '8.800 kg', 'capacidad': '4.4 Lt3', 'logo': 'img/ZOOMLION_logo.svg', 'imagen': 'img/ZE550EK-10 - Excavadora.jpg', 'ver_producto_link': ''},
        {'marca': 'ZOOMLION', 'uso': 'Uso 2', 'tipo': 'Excavadora', 'modelo': 'ZE215E', 'motor': '112 kw', 'peso': '21.500 kg', 'capacidad': '1.0 m3', 'logo': 'img/ZOOMLION_logo.svg', 'imagen': 'img/ZE215E - Excavadora.jpg', 'ver_producto_link': ''},
        {'marca': 'ZOOMLION', 'uso': 'Uso 3', 'tipo': 'Excavadora', 'modelo': 'ZE60E-10', 'motor': '36.2 kw', 'peso': '6.050 kg', 'capacidad': '0.23 m3', 'logo': 'img/ZOOMLION_logo.svg', 'imagen': 'img/ZE490EK-10 - Excavadora.jpg', 'ver_producto_link': ''},
        {'marca': 'Basak', 'uso': 'Uso 4', 'tipo': 'Tractor', 'modelo': '2105 S', 'motor': '75 kw', 'peso': '3.900 kg', 'capacidad': '3.400 kg', 'logo': 'img/BASAK_logo.svg', 'imagen': 'img/2105 S - Tractor.jpg', 'ver_producto_link': ''},
        // {'marca': 'BASAK', 'uso': [], 'tipo': '', 'modelo': 'MST 542S', 'motor': '74.5 kw', 'peso': '8.800 kg', 'capacidad': '4.4 Lt3', 'logo': '', 'imagen': ''},
        // {'marca': 'BASAK', 'uso': [], 'tipo': '', 'modelo': 'MST 542S', 'motor': '74.5 kw', 'peso': '8.800 kg', 'capacidad': '4.4 Lt3', 'logo': '', 'imagen': ''},
    ]




const filtroMakinaria = (marca='Todas las marcas', tipo='Todos los tipos', uso='Todos los usos') => {
    var m1, m2, m3, t1, t2, t3, t4, u1, u2, u3, u4;

    m1 = marca
    t1 = tipo
    u1 = uso

    if (marca === 'Todas las marcas') {
        m1 = 'Basak'
        m2 = 'MST'
        m3 = 'ZOOMLION'
    }

    if (tipo === 'Todos los tipos') {
        t1 = 'Retroexcavadora'
        t2 = 'Excavadora'
        t3 = 'Manipulador'
        t4 = 'Tractor'
    }

    if (uso === 'Todos los usos') {
        u1 = 'Uso 1'
        u2 = 'Uso 2'
        u3 = 'Uso 3'
        u4 = 'Uso 4'
    }


    const filtro = makinaria.filter(el =>
                el.marca === m1 |
                el.marca === m2 |
                el.marca === m3
            ).filter(el =>
                el.tipo === t1 |
                el.tipo === t2 |
                el.tipo === t3 |
                el.tipo === t4
            )
            // .filter(el =>
            //     el.uso === u1 |
            //     el.uso === u2 |
            //     el.uso === u3 |
            //     el.uso === u4
            //     )

    newfiltro = filtro.filter(el =>
        el.uso === u1 |
        el.uso === u2 |
        el.uso === u3 |
        el.uso === u4
        )

    return newfiltro
}


filtroMakinaria()


const getMakinariaElement = (marca = "") => {
    try {
        value = makinaria.filter(el => el.marca === marca)[0]
    }
    catch {
        value = ""
    }
    return value
  }


const getLogo = (logoMarca) => {
    return getMakinariaElement(logoMarca).logo
}