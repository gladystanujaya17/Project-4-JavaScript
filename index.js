var cars = [
    [
    'Ayla',
    'Agya',
    'Calya',
    'Sigra',
    'Innova',
    'Kijang'
    ],
    [
        0,1,2,3,4,5,6
    ],
    [
        'Ani','Budi','Caca','Didi','Eka',"Fani"
    ]
]
//const dan let -> ini pengembangan baru dari var

// console.log(cars)
// //console.log(cars[2])
// console.log(cars.length)
// console.log(cars[1][3])

var mobil = [
    'Ayla',
    'Agya',
    'Calya',
    'Sigra',
    'Innova',
    'Kijang'
]

//console.log('JOIN', mobil.join( '-' ))
//Hapus data di index terakhir
//console.log('POP', mobil.pop())
//console.log(mobil)

var groupCar = cars.concat(mobil)
console.log(groupCar)

// mobil.push('BMW')
// mobil.reverse()
// //console.log(mobil)

// document.write(mobil + '<br>')

//LOOP
// for(i = 0; i < mobil.length; i += 1){
//     document.write(mobil[i] + '<br>')
// }

// var a = 'AGYA'
// var b = 'CALYA'
// console.log(a)

// const usiaAyah = 60
// const usiaIbu = 55
// console.log(usiaAyah*usiaIbu)
// console.log(usiaAyah/usiaIbu)
// console.log(usiaAyah+usiaIbu)

// const number1 = prompt('Number 1')
// const number2 = prompt('Number 2')
// const hasilBagi = number1 / number2
// alert('Hasil Bagi: ' + hasilBagi)

// const text = prompt('Masukkan Kata Apapun')
// console.log('Jumlah Text: ', text.length)
// alert('Jumlah Huruf: ' + text.length)

const score = true
const attendance = false
// const attitude = false
// //const result = score && attendance
// const result = score || attendance
// console.log(result)

// if(!!score){
//     console.log('LULUS')
// }

// if(score !== false){
//     console.log('LULUS')
// }

const result2 = score && attendance
if(result2){
    console.log('LULUS')
}
else{
    console.log('TIDAK LULUS')
}

const nilai2 = 60
if(nilai2 >= 70){
    console.log('LULUS')
}
else{
    console.log('TIDAK LULUS')
}

const nilai = 60
const hasil = nilai > 80 ? 'LULUS' : 'TIDAK LULUS'
console.log(hasil)


const number = 8
if(number % 3 === 0 && number % 5 === 0){
    console.log('FIZZ BUZZ')
}else if(number % 5 === 0){
    console.log('BUZZ')
}else if(number % 3 === 0){
    console.log('FIZZ')
}else{
    console.log('BOOOM')
}

const job = 'Ilustrator'
switch (job){
    case 'Designer':
        console.log('Mendesign')
        break
    case 'Programmer':
        console.log('Membuat Aplikasi')
        break
    case 'Ilustrator':
        console.log('Menggambar')
        break
    default:
        console.log('Mengajar')
}

function logger(name, age){
    console.log(name, age)
}

logger('Gladys', 19)

