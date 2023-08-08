//document.write('Merhaba') Scriptimiizn Bağlantısını kontrol ettik
// let a = 2; // Bu şekilde fonskiyon dışı tanımlanan değişkenler global değişkendir

// const myFunction = () => {
//   let b = 5; //Local variables sadece fonksiyon içerinde etkili olan değişkenledir
//   document.write(`Fonksiyon içindeki b' yim ${b} <br/>`);
//   return b * b;
// };

// myFunction();

// document.write(myFunction())

//document.write(a);
//document.write(b);

//let counter=0 //ilk başta sayaç değişkenmizi 0 olarak tanımlıyoruz

// function add(){
//     counter +=1//Fonksiyon Çalıştığında sayaçımızı 1 artırıyor

//     document.write(`${counter} <br/>`)
// }

// add()//ilk çalışmada değer 1 oluyor
// add()// ikinci çalışmada 2 şeklinde bir önceki değer değişiyor
// add()

// let counter=0

// function add(){
//     let counter=0
//     counter +=1 //aynı isimde fonksiyon içindeki değişkeni baz alır
//     document.write(` <br/> Fonksiyon içinden counter ${counter}`)
// }

// document.write(counter) //burda global olarak tnaımladığımız değişkeni alıyor

// add()

// let sayac1=1 // global saayaç

// function sayaciArttir(){

//     let sayac2=0

//     sayac1 +=1
//     sayac2 +=3

//     document.write(`<br/> ${sayac1} ${sayac2}`)
// }

// sayaciArttir()
// sayaciArttir()

// const add = () => {
//   document.write(`add Fonksiyonunu çalıştırıdım`);

//   let counter = 0; //add fonskiyonu içinde local bir counter değişkeni oluştruyoruz
//   document.write(` <br/> counter değişkenini ${counter} olarak hafızama aldım`);

//   //burda counter +1 artıracak fonksşyonu tanımlıyoruz

//   const plus = () => {
//     document.write("<br/> plus fonksiyonu çalıştırdım 1.çalışıyor "); //1
//     counter += 1;
//   };
//   document.write("<br/>plus fonksiyonu hafızama aldım 2.çalışıyor"); //2

//   //plus fonksiyonunu çalıştıryoruz
//   plus();
//   document.write(counter);
//   document.write(`<br/>counter değişkenini ${counter} olarak değiştirdim`);
// };

// JavaScriptte çalışmasını istemediğimiz kodları yorum satırna // işaretle alıyoruz

//add()

//Burada içine aldığı değeri ekrana basan fonksiyon tanımlıyoruz
// const ekranaBasanFonksiyon=(basilacakArgument)=>{

//     document.write(`<br/> ${basilacakArgument}`)

// }
// const secondFunc=()=>{
//     ekranaBasanFonksiyon('ikinci fonksiyon')
// }

// const firstFunc=()=>{

//     //burada yukarda tanımladığımız fonksiyonu çalıştıırp içine basılacak ifadeyi giryuz
// ekranaBasanFonksiyon('birinci Fonksiyon')
// }

// //JavaScriptte tanımlandığı sıraya göre değil çağrıldığı sıraya göre çalışır

// firstFunc()
// secondFunc()

//Burada içine aldığı değeri ekrana basan fonksiyon tanımlıyoruz
// const ekranaBasanFonksiyon=(basilacakArgument)=>{

//     document.write(`<br/> ${basilacakArgument}`)

// }

// function hesabMakinesi(sayi1,sayi2){
// let toplam=sayi1+sayi2
// return toplam
// }

// let result=hesabMakinesi(2,4)

// ekranaBasanFonksiyon(result)

//Burada içine aldığı değeri ekrana basan fonksiyon tanımlıyoruz
// const ekranaBasanFonksiyon = (basilacakArgument) => {
//   document.write(`<br/> ${basilacakArgument}`);
// };

// const hesablayici = (sayi1, sayi2) => {
//   let toplam = sayi1 + sayi2;

//   ekranaBasanFonksiyon(toplam);
// };

// hesablayici(5, 2);

//callback fonksiyonlar

// const ekranaBasanFonksiyon = (basilacakArgument) => {
//   document.write(`<br/> ${basilacakArgument}`);
// };

// function hesabMakinesi(sayi1,sayi2,cagrilacakFonksiyon){
//     let toplam=sayi1+sayi2

//     cagrilacakFonksiyon(toplam)
// }

// hesabMakinesi(2,4,ekranaBasanFonksiyon)

//ekrana basan fonksiyon

// function displayer(willDisplay){
//     document.write(`<br/> ${willDisplay}`)
// }

// function myCalculator(num1,num2,myCallBack){
//     let sum=num1+num2;
//     myCallBack(sum)
// }

//myCalculator(5,7,displayer)

//bir işi x saniye sonra yaptırmak için bu fonksiyonu kullanırz
// setTimeout(myFunction,5000)

// function myFunction(){
//     document.write('5 Saniye sonra çalıştırm')
// }

// const myFunction = (params) => {
//     document.write(`${params}`)
//   }

// setTimeout(()=>{myFunction('değer')}, 3000);

//x saniye aralıklarla içindeki fonksiyonu çalıştırır
//  setInterval(myFunction,1000)
//  let counter =''
// function myFunction(){

//     counter += 'merhaba'
//      document.write(`<br/> ${counter}`)
//  }

// document.write('22:30:35')

// function myFunction(){
//     let date=new Date()

//     document.write(`
//     ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}

//     <br/>
//     `)
// }

// setInterval(myFunction,1000)

//Promise Fonksiyonlar

//()=>void ====>fonksiyon demek
// let myPromise = new Promise(function(myResolve,myReject){

//     myResolve()
//     myReject()

// })

// myPromise.then((value)=>console.log(value))

// const displayer = (willDisplay) => {
//   document.write(`${willDisplay}`);
// };

// let myPromise = new Promise(function (myResolve, myReject) {
//   let x = 0;

//   if (x == 0) {
//     myResolve("x sıfır");
//   } else {
//     myReject("Hata mevcut");
//   }
// });

// myPromise.then((sonuc) => displayer(sonuc)).catch((error) => displayer(error));

//Veri tabanlarına ,API lara , Server taraflarına veri almak için kullanılan fonskiyonlar asenkron fonksiyondur
//eğer fonksiyon function x(){} şeklinde tanımlıynursa başına async ifadesi gelir
//async function x(){}
//eğer fonskiyon const x =()=>{} şeklinde tanımlanmışsa
//const x=async()=>{} şeklinde yazılır

//ve fonksiyon içerisinde beklenen sonuçlara await eklenir

// async function myFunction1(){
//     let response= await Promise;
//     return 'Merhaba'
// }

// function myFunction2(){
//     return Promise.resolve('Hello')
// }