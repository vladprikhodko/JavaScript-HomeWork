
// ДЗ №2 1.1 // Первая часть первого задания



/*
var data =[
    {
    memory:64,
    price:800
    },

    {
    memory:128,
    price:1000
    },

    {
    memory:256,
    price:1200
    }
    ];
    
    var result;
    
     while(true){
         var memory = prompt('Choose memory: 64/128/256 Gb');
         for(var j=0; j<data.length; j++){
              if(+memory === data[j].memory){
                  result = data[j].price;
                  break;
         }
         }
      if(result){
          break;
      }
         if(memory === null){
             break;
         }
     }
     document.write('<h1>' + result + '$</h1>');

*/



// ДЗ №2 1.2 // Вторая часть первого задания

/*
var img1 = 'Silver.png';
var img2 = 'Gold.png';
var img3 = 'Black.png';
var img4 = 'Default.png';

var data =[
{
    color:'Silver',
    img: '<img src="./img/' + img1 + '" alt="">'
},
{
    color:'Gold',
    img: '<img src="./img/' + img2 + '" alt="">'
},
{
    color:'Black',
    img: '<img src="./img/' + img3 + '" alt="">'
}
];

var result;

while(true){
    var color = prompt('Choose color: Silver/Gold/Black');
    for(var j=0; j<data.length; j++){
         if(color === data[j].color){
             result = data[j].img;
             break;
    }
    }
 if(result){
     break;
 }
    if(color === null){
        break;
    }
}
document.write('<h1>' + result + '</h1>');

*/




// ДЗ №2 2. // Второе задание


	 var data1 =[
    {
    memory:64,
    price:800
    },

    {
    memory:128,
    price:1000
    },

    {
    memory:256,
    price:1200
    }
    ];
    
    var img1 = 'Silver.png';
    var img2 = 'Gold.png';
    var img3 = 'Black.png';
    var img4 = 'Default.png';
    
    var data2 =[
    {
        color:'Silver',
        img: '<img src="./img/' + img1 + '" alt="">',
		coefficient: 20
    },
    {
        color:'Gold',
        img: '<img src="./img/' + img2 + '" alt="">',
		coefficient: 40
    },
    {
        color:'Black',
        img: '<img src="./img/' + img3 + '" alt="">',
		coefficient: 60
    }
    ];
    var result1;
    var result2;
	var totalprice;
    
    while(true){
        var memory = prompt('Choose memory: 64/128/256 Gb');
        for(var j=0; j<data1.length; j++){
            if(+memory === data1[j].memory){
            result1 = data1[j].price;
            break;
        }
    }
        var color = prompt('Choose color: Silver/Gold/Black');
        for(var i=0; i<data2.length; i++){
                if(color === data2[i].color){
                result2 = data2[i].img;
				coeff = data2[i].coefficient;
				totalprice = result1 + coeff;
                break;
         }
         }
        if(result1 || result2){
          break;
      }
         if(memory && color === null){
             break;
         }
     }
     document.write('<h1>' + totalprice + '</h1>','<h1>' + result2 + '</h1>');
