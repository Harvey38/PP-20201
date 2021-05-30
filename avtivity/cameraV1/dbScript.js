let request = indexedDB.open('Camera',1);
let db;

request.onsuccess=function(e)
{
    db = request.result;
}
request.onerror=function(e)
{
    console.log('error');
}
request.onupgradeneeded =function(e)
{
    db = request.result;
    db.createObjectStore('gallery',{keyPath:'mId'});

}
function addMediaToGallery(data,type)
{
    let tx = db.transaction('gallery','readwrite');
    let gallery = tx.objectStore('gallery');
    gallery.add({mId:Date.now(),type,media:data});
}
function viewMedia()
{
    let body = document.querySelector('body');
    let tx = db.transaction('gallery','readonly');
    let gallery = tx.objectStore('gallery');
    let req = gallery.openCursor();
    req.onsuccess=function()
    {
        let cursor = req.result;
        if(cursor)
        {
            if(cursor.value.type=='video')
            {
                let vidContainer = document.createElement('div');
                vidContainer.setAttribute('data-mId',cursor.value.mId);
                vidContainer.classList.add('gallery-vid-container');
                let video = document.createElement('video');
                vidContainer.appendChild(video);
                let deleteBtn = document.createElement('button');
                deleteBtn.classList.add('gallery-delete-button');
                deleteBtn.innerText='Delete';
                let downloadBtn = document.createElement('button');
                downloadBtn.classList.add('gallery-download-button');
                downloadBtn.innerText='Download';
                vidContainer.appendChild(deleteBtn);
                vidContainer.appendChild(downloadBtn);
                video.controls=true;
                video.autoplay= true;
                
                video.src = URL.createObjectURL(cursor.value.media);

                body.appendChild(vidContainer);
            }
            else{
                let imgContainer = document.createElement('div');
                imgContainer.setAttribute('data-mId',cursor.value.mId);
                imgContainer.classList.add('gallery-img-container');
                let img = document.createElement('img');
                img.src = cursor.value.media;
                imgContainer.appendChild(img);
                let deleteBtn = document.createElement('button');
                deleteBtn.classList.add('gallery-delete-button');
                deleteBtn.innerText='Delete';
                let downloadBtn = document.createElement('button');
                downloadBtn.classList.add('gallery-download-button');
                downloadBtn.innerText='Download';
                imgContainer.appendChild(deleteBtn);
                imgContainer.appendChild(downloadBtn);
                body.appendChild(imgContainer);

            }
            cursor.continue();
        }
    }
    
}