
const pdfHandler = ()=>{
    console.log('Opening pdf...');
}
const wordHandler = ()=>{
    console.log('Opening word...');
}
const excelHandler = ()=>{
    console.log('Opening excel...');
}


const fileOpen = (cb)=>{

    console.log('Opening file... with editor..');
    cb();

}

var fileName = "abc.doc"
if(fileName.endsWith(".pdf")){
    fileOpen(pdfHandler)
}
else if(fileName.endsWith(".doc")){
    fileOpen(wordHandler)
}
else if(fileName.endsWith(".xls")){
    fileOpen(excelHandler)
}
else{
    console.log('File format not supported');
}