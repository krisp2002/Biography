function shtoShpenzime() {
    // merr vlerat nga inputet
    const qera = parseFloat(document.getElementById('qera').value);
    const ushqim = parseFloat(document.getElementById('ushqim').value);
    const transport = parseFloat(document.getElementById('transport').value);
    const tetjera = parseFloat(document.getElementById('tetjera').value);

    // alert per plotesimin e te gjitha fushave
    if (isNaN(qera) || isNaN(ushqim) || isNaN(transport) || isNaN(tetjera)) {
        alert("Duhet te plotesohen te gjitha fushat!");
        return;
    }

      // alert per te mos lejuar vlerat negative
      if (qera < 0 || ushqim < 0 || transport < 0 || tetjera < 0) {
        alert("Vlerat nuk mund te jene negative!");
        return;
    }

    // update i tabeles me vlerat
    document.getElementById('qeraShuma').textContent = 
    (parseFloat(document.getElementById('qeraShuma').textContent)) + qera;

document.getElementById('ushqimShuma').textContent = 
    (parseFloat(document.getElementById('ushqimShuma').textContent)) + ushqim;

document.getElementById('transportShuma').textContent = 
    (parseFloat(document.getElementById('transportShuma').textContent)) + transport;

document.getElementById('tetjeraShuma').textContent = 
    (parseFloat(document.getElementById('tetjeraShuma').textContent)) + tetjera;


    // totali dhe update i tabeles me totalin
    const totali = 
    (parseFloat(document.getElementById('qeraShuma').textContent)) +
    (parseFloat(document.getElementById('ushqimShuma').textContent) ) +
    (parseFloat(document.getElementById('transportShuma').textContent)) +
    (parseFloat(document.getElementById('tetjeraShuma').textContent));

    document.getElementById('totaliShuma').textContent = totali;


}


let count = 0;

function pastro() {
    count++;

    if (count === 1) {
        // pastrim i formes kur klikon nje here
        document.getElementById('form').reset();
    } else if (count === 2) {
        // pastrim i tabeles kur klikon dy here
        document.getElementById('qeraShuma').textContent = '0';
        document.getElementById('ushqimShuma').textContent = '0';
        document.getElementById('transportShuma').textContent = '0';
        document.getElementById('tetjeraShuma').textContent = '0';
        document.getElementById('totaliShuma').textContent = '0';
        count = 0;
    }
}