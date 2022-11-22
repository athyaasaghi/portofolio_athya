// fetch('https://equran.id/api/surat')
// .then(response => response.json())
// .then(response => {
//     let cardSurat = '';
//     response.forEach(surat => {
//         cardSurat += `<div class="col-md-3 my-4">
//         <div class="card">
//         <img src="img/quran1.png" class="card-img-top">
//             <div class="card-body onclick="location.href='api.html?nomorsurat=${surat.nomor}'">
//             <h5 class="card-title">${surat.nama_latin}</h5>
//             <h6 class="card-subtitle mb-2 text-muted">Surat: ${surat.nama}</h6>
//             <h6 class="card-subtitle mb-2 text-muted">Total Surat: ${surat.jumlah_ayat}</h6>
//             </div>
//         </div>
//     </div>`
        
//     })
// })



$.ajax({
        url: 'https://equran.id/api/surat',
        success: results => {
            const ngaji = results;
            let cards= '';
            ngaji.forEach(m => {
                cards += showCards(m);
            });
            $('.quran-container').html(cards);
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });

  
function showCards(m) {
    return `<div class="col-md-3 my-4">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">${m.nama_latin}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Surat: ${m.nama}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Total Surat: ${m.jumlah_ayat}</h6>
                <a onclick="location.href='file/api.html?nomorsurat=${m.nomor}'" target="_blank" >lihat...</a>
                </div>
                <img src="img/quran1.png" class="card-img-top">
            </div>
        </div>`;
}

// function showNgajiDetails(m) {
//             return  `<div class="container-fluid">
//                         <div class="row">
//                             <div class="col-md">
//                                 <ul class="list-group">
//                                     <li class="list-group-item">
//                                         <h4>${a[0].ar}</h4>
//                                     </li>
//                                     <li class="list-group-item">
//                                         <strong>Director: </strong>
//                                         ${a[0].id}
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>`;
// }