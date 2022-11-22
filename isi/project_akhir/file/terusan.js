function getURl(e) {
    const pageURL = window.location.search.substring(1);
    const urlVariable = pageURL.split('&');

    for(let i = 0; i < urlVariable.length; i++) {
        const parameterName = urlVariable[i].split('=');
        if(parameterName[0] == e){
            return parameterName[1];
        }
    }
}

const nomorsurat = getURl('nomorsurat');
console.log(nomorsurat);

function getSurat() {
    fetch(`https://equran.id/api/surat/${nomorsurat}`)
    .then(response => response.json())
    .then(response => {

        // JUDUL SURAT
        const judulSurat = document.querySelector('.judul-surat');
        const cardJudulSurat = `<strong>${response.nama_latin}-</strong>
        <p>Jumlah Ayat: ${response.jumlah_ayat} (${response.arti})</p>
        <button class="btn btn-primary">Dengarkan</button>`;
        judulSurat.innerHTML = cardJudulSurat;

        //ISI SURAT
        const surat = response.ayat;
        let isiSurat = '';
        surat.forEach(s => {
            isiSurat += `
            <div class="card mb-3">
            <div class="card-body">
            <p>${s.nomor}</p>
            <h3 class="text-end">${s.ar}</h3>
            <p>${s.tr}</p>
            <p>${s.idn}</p>
          </div>
          </div>`;
        });

        const cardIsiSurat = document.querySelector('.card-isi-surat');
        cardIsiSurat.innerHTML = isiSurat;
    
        console.log(surat)
    });
}

getSurat();