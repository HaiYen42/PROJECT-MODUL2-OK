const fileTypeImage=['image/png','image/jpg','image/jpeg']
 export const toBase64 = (file) => 
    new Promise((resolve,reject) => {
      const reader = new FileReader();
        if(fileTypeImage.includes(file.type)) {
           console.log("Thanh Cong");
        }else {
          alert("Xem lai di")
          return;
        }
        let fileSize=file.size/(1024*1024)
        if(fileSize > 1) {
          alert("Xem lai can nang file")
          return;
        }else {
          console.log("THanh Cong");
        }
        reader.readAsDataURL(file);
        reader.onload=() => resolve(reader.result);
        reader.onerror=(err) => reject(console.err);
    })
