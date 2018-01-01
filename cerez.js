var mongoose = require("mongoose");
var Yemek    = require("./models/yemek");
var Yorum    = require("./models/yorum");   

var data = [
    {
        adi:"Pizza",
        resim:"https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523__340.jpg",
        aciklama:"İtalyanın uzman aşçılarının hazırlamış olduğu enfes pizza sizlerle.",
    },
    {
        adi:"Abd Sosislisi",
        resim:"https://cdn.pixabay.com/photo/2017/09/02/16/35/hot-dog-2707798__340.jpg",
        aciklama:"Amerikanın enfes sosisleri burada.",
    },
    {
        adi:"Elma Kurabiyesi",
        resim:"https://cdn.pixabay.com/photo/2016/11/21/11/33/cheese-1844805__340.jpg",
        aciklama:"Elma ekstratı ile hazırlamış parmaklarını yiyeceğiniz kurabiyeler.",
    }
];

function cerezData(){
    //Butun yemekleri veritabanından sil.
    Yemek.remove({}, function(err){
        // if(err) {
        //     console.log(err);
        // }
        // console.log("Yemekler veritabanından silindi...");
        //  //yeni yemekleri ekle
        //  data.forEach(function(degisken){
        //     Yemek.create(degisken,function(err, yemek){
        //         if (err){
        //             console.log(err);
        //         } else {
        //            console.log("Yeni Yemek Eklendi.");
        //            //Yeni yorum ekle 
        //            Yorum.create({
        //                 text:"Bu bir deneme yorumudur.",
        //                 yazar:"Ugurcan Cetin"
        //            },function(err , yorum){
        //                 if (err){ 
        //                     console.log(err);
        //                 }else {
        //                     yemek.yorumlar.push(yorum);
        //                     yemek.save();
        //                     console.log("Yeni yorum eklendi.")
        //                 }
        //            });
        //         }
        //     });
        //  });
    });
};

module.exports = cerezData;