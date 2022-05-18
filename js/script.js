//tangkap element html
let waktu = document.querySelector('#waktu')
let cari = document.querySelector('#cari')
let salam = document.querySelector('#salam')
let detiks = document.querySelector('.detik')

cari.addEventListener('keyup', function(e){
  if(e.keyCode == 13){
    window.open('https://www.google.com/search?q='+cari.value)
    cari.value = ''
  }
})

setInterval(function() {
  //ws = waktu-sekarang
  let ws = new Date();

  let jam = ws.getHours()
  let menit = ws.getMinutes()
  let detik = ws.getSeconds()

  //manipulasi elemen html
  waktu.innerHTML = `${jam}:${menit}`
  detiks.innerHTML = detik;
  //bg = background
  let bg = ''
  //slm = salam
  let slm = ''
  if (jam >= 3 && jam <= 10) {
    bg = 'bg/pagi.jpg'
    slm = 'pagi'
  } else if (jam >= 10 && jam <= 15) {
    bg = 'bg/siang.jpg'
    slm = 'siang'
  } else if (jam >= 15 && jam <= 18) {
    bg = 'bg/sore.jpg'
    slm = 'sore'
  } else {
    bg = 'bg/malam.jpg'
    slm = 'malam'
  }
  //ubah background body
  document.body.style.background = `url(${bg})`;
  document.body.style.backgroundSize = 'cover'
  //ubah teks salam
  salam.innerHTML = `Selamat ${slm}, Fidi`

}, 1000)
