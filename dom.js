//document.write('Merhaba') bağlantı kontrol

//HTMl tarafından eleman çekerken uyulacak aşamalar

//1-çekilecek eleman için bir değişken tanımlıyoruz
//2-değişkenimize değer olarak document içierisinden verilen id vyea class ile elemeanı çekiyoru
//3 ****EN ÖNEMLİSİ****
//çekilen elemanın atandığı değişkeni consolo yazadıryoruz ve orda elemanızı görmeliyiz

const tryDiv = document.getElementById("newDiv");
//console.log(tryDiv)

tryDiv.innerText = `selam`; //innerText içerisinde string döndürür
tryDiv.innerHTML = `<p>Selam</p>`; //innerHTML içerisinde hem text hemde html tagi döndürür

const myNameElement = document.querySelector("#nameElement");
//console.log(myNameElement)
//let newName='Hasan'
let last = "Çelik";

const myLastNameElement = document.getElementById("lastNameElement");

//console.log(myLastNameElement)
myLastNameElement.innerHTML = `<h1>${last}</h1>`;

const pElementiID = document.getElementById("pTagId");
//console.log(pElementiID)
const pElementiClass = document.getElementsByClassName("pTagClass");
//console.log(pElementiClass)
const divElementId = document.querySelector("#divId");
//console.log(divElementId)
const divElementClass = document.querySelector(".divClass");
//console.log(divElementClass)

const changeName = (willName) => {
 console.log('changeName fonkisyonu çalıştı')//hata tespit logu
 //console.log('newName değişkeni kontrol',newName)//hata tespit logu
  //console.log(newName);//normal kod

  console.log('console newName yazdıran kod çalışıyor')//hata tespit logu
  myNameElement.innerText = `${willName}`;
};

myNameElement.addEventListener("click", () => {
    console.log('İsme Tıklandı') //Hata tespit logu
  changeName("Umut");
});
