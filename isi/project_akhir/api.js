fetch('https://api.npoint.io/99c279bb173a6e28359c/data')
.then(response => response.json())
.then(response => {
    let cardSurat = '';
    response.forEach(surat => {
        cardSurat += `<div class="col-md-3 my-4">
        <div class="card">
        <img src="img/quran1.png" class="card-img-top">
            <div class="card-body onclick="location.href='surat.html?nomorsurat=${surat.nomor}'">
            <h5 class="card-title">${surat.asma}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Surat: ${surat.nama}</h6>
            <h6 class="card-subtitle mb-2 text-muted">Total Surat: ${surat.urut}</h6>
            </div>
        </div>
    </div>`
        
    })
})