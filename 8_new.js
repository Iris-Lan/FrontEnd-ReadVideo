function doFirst(){
    document.getElementById('theFile').onchange = fileChange;

}
function fileChange(){
    let file = document.getElementById('theFile').files[0];
    // console.log(file);  可以找到以下的可輸出Info

    let message = '';
    message += `File name: ${file.name}\n`;
    message += `File type: ${file.type}\n`;  //html: text/html  jpg: xxx/jepg 也可能沒有type 因為html沒定義的type
    message += `File size: ${file.size} byte(s)\n`;
    message += `Last modified: ${file.lastModifiedDate} \n`;
    document.getElementById('fileInfo').value = message;

    //=======
    let readFile = new FileReader();
    readFile.readAsDataURL(file);
    readFile.addEventListener('load', function(){     //記得寫事件抓value
        let myMovie = document.getElementById('myMovie');  
        myMovie.src = readFile.result;  //抓路徑加檔名
        myMovie.width = 575;  
        // myMovie.controls = 'controls';  //p155
        myMovie.controls = true;  //通常是這樣寫 是否要使用controls
    });
}
window.addEventListener('load', doFirst);