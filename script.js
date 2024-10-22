var articleList = [];
var index;

// fungsi untuk menampilkan form
function showForm(){
    document.getElementById("formBox").style.display = "block"    
}

// fungsi untuk menampilkan semua article
function showArticle(){
    for(let i = 0; i < articleList.length; i++){
        document.getElementById("title" + i).innerHTML = articleList[i].title;
        document.getElementById("time" + i).innerHTML = "Published at " + articleList[i].time;  
        document.getElementById("content" + i).innerHTML = articleList[i].content;
        document.getElementById("boxArticle"+ i).style.display = "block";
        }
}

// fungsi untuk submit form article dan mengirimkan data input
function submitArticle(){
    // menyimpan data input dari user
    var articleTitle = document.getElementById("articleTitle").value;
    var imageURL = document.getElementById("imageURL").value;
    var articleContent= document.getElementById("articleContent").value;

    // menghasilkan waktu saat submit dilakukan
    var d = new Date();   
    var timeNow = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

    // push article2 ke dalam 1 array
    articleList.push({
        title: articleTitle,
        time: timeNow,
        url: imageURL,
        content: articleContent
    })

    // mengosongkan form setelah submit dilakukan
    document.getElementById("articleTitle").value = "";
    document.getElementById("imageURL").value = "";
    document.getElementById("articleContent").value = "";
    document.getElementById("formBox").style.display = "none"

    showArticle();  
}

// fungsi untuk mendelete article
function deleteArticle(index){
    // cek tombol delete mana yang diklik dan mengeluarkan dari dalam array.
    switch (index) {
        case 0:
            articleList.splice(index, 1);
            break;

        case 1:
            articleList.splice(index, 1);
            break;

        case 2:
            articleList.splice(index, 1);
            break;
    
        default:
            break;
    }

    // menghilangkan seluruh display terlebih dahulu dan mengeluarkan nya lagi
    for(let i = 0; i < articleList.length + 1; i++){
        document.getElementById("boxArticle"+ i).style.display = "none";
    }
       
    showArticle();
}

