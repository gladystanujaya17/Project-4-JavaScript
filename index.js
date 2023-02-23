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

// var bisa direplace ulang, const tidak bisa direplace atau dideclare ulang 
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

//FUNCTION EXPRESSION 1
// const logger2 = function(name, age){
//     const result = 'nama: ${name} dan usia: ${age}'
//     return result
// }

// const gladys = logger2('Gladys', 19)
// console.log(gladys)


//FUNCTION EXPRESSION 2
const logger3 = function(name, age){
    const result3 = "nama: " + name + " dan usia: " + age
    return result3
}

const gladyst = logger3('Gladys', 19)
console.log(gladyst)

// bisa pake cara 1 atau cara 2

// tes saja
const now = new Date() // ini nanti hasilnya ada tahun, bulan, tanggal, tp ga semua dibutuhkan kalau lg programming
const year = now.getFullYear() // untuk dapat tahunnya saja
console.log('TEST TAHUN', year)

// menghitung umur orang dengan menggunakan function
const checkAge = function(born){
    const now = new Date()
    const year = now.getFullYear()
    const result = year - born
    return result // expression butuh return supaya ga error
}
const agus = checkAge(2003)
console.log('umur agus: ' + agus)

// ARROW FUNCTION -> termasuk bagian dari expression, tp ada perbedaan cara panggilnya
const logger4 = (name, age)=>{
    const result = "nama: " + name + " dan usia: " + age
    return result
}
console.log(logger4('Gladys', 19))

// ini pakai rumus BMI ya (cari kategori badan ideal dari tinggi dan berat badan)
const bmiMan = (weight, height) => {
    const bmiManResult = weight/(height*height)
    let resultIndicator

    console.log(bmiManResult)

    if (bmiManResult < 17){
        resultIndicator = "Kurus Berat"
    }else if(bmiManResult >= 17 && bmiManResult <= 18.4){
        resultIndicator = "Kurus Ringan"
    }else if(bmiManResult >= 18.5 && bmiManResult <= 25){
        resultIndicator = "Normal"
    }else if(bmiManResult >= 25.1 && bmiManResult <= 27){
        resultIndicator = "Gemuk"
    }else{
        resultIndicator = "Ingat Berat Badan"
    }

    return resultIndicator
}
console.log(bmiMan(70, 1.7))

//MODULAR FUNCTION
function splitToArray(str){
    var tempArray = str.split(" ");
    return tempArray;
}

function jumlahKata(kalimat){
    var result = splitToArray(kalimat);
    var arrayLength = result.length;
    return arrayLength;
}

console.log(jumlahKata("Hello Selamat Pagi"));

// JavaScript DOM 
// detailnya bisa dilihat di w3schools

// DOM -> Document Object Model

// trigger DOM -> pakai id, class, dll