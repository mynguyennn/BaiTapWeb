//chitietsp
function changeImage(obj){
    var path=obj.src
    var img= document.getElementById("mainImg")
    img.src=path
    //img.setAttribute("src", path)
}
//chitietsp
//function init(){
  //  var images=document.querySelectorAll("div.thumb img")
    //for (var i=0; i < images.length; i++)
      //  images[i].onclick=function(){
        //    var path=this.src
          //  var img= document.getElementById("mianImg")  
            //img.setAttribute("src".path)  
  //       }
//}

//zoom img sp
function zoomImg(obj)
{
    var img = obj.src;
    var lightbox = document.getElementById("boder");
    var imageZoom = document.getElementById("imageZoom");
    imageZoom.src = img;
    lightbox.style.display="block";
    var closeImg = document.getElementById("close-icon");
    closeImg.onclick = function(){
        lightbox.style.display="none";
    }
}
//them gio hang
function submit(obj){
   var  infor=confirm("Thêm vào giỏ hàng?")
   if(infor==1)
   {
       alert("Đã thêmm vào giỏ hàng ")
   }
    
}
//nhap thong tin dat hang

function submit1(obj){
    var arr= document.getElementsByTagName('input');
    //var init = arr[0].value;
    var email = arr[0].value;
    var ten = arr[1].value;
    var sdt = arr[2].value;
    var diachi = arr[3].value;
    var tinhhuyen = arr[4].value;

    if(email == "" || ten == "" || sdt == "" || diachi == "" || tinhhuyen == "" )
    {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    if(isNaN(sdt)) //kiemtra number
    {
        alert("Vui lòng nhập số điện thoại!")
        return;
    }
    var info = confirm('THÔNG TIN: \n' + 'Tên: '+ten + "\n" + 'Phone: '+sdt + "\n" +'Địa chỉ: ' + diachi + ' '+tinhhuyen)
    if (info == 1)
    {
        alert("Đặt hàng thành công!");
    }
}

//phan hoi
function submit2(obj){
    var arr= document.getElementsByTagName('input');
    //var init = arr[0].value;
    var ten = arr[0].value;
    var diachi = arr[1].value;
    var phone = arr[2].value;
    var email = arr[3].value;
    if(ten == "" || diachi == "" || phone == "" || email == "")
    {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    if(isNaN(phone)) //kiemtra number
    {
        alert("Vui lòng nhập số điện thoại!")
        return;
    }

    var arr= document.getElementsByTagName('textarea');
    var text = arr[0].value;
    if(text == "")
    {
        alert("Vui lòng nhập nội dung!");
        return;
    }
    alert("Cảm ơn bạn đã phản hồi!");
}

//login
function submit3(obj){
    alert("Đăng nhập thành công!")
}
function submit4(obj){
    alert("Đăng ký thành công!")
}


