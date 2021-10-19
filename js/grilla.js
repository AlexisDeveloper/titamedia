const masonryLayout = (containerElem, itemsElems, columns) => {
    containerElem.classList.add('masonry-layout', `columns-${columns}`)
    let columnsElements = []
    
    for( let i = 1; i <= columns; i++){
      let column = document.createElement('div')
      column.classList.add('masonry-column', `column-${i}`)
      containerElem.appendChild(column)
      columnsElements.push(column)
    }
    
    for(let m = 0; m < Math.ceil(itemsElems.length / columns); m++){
      for(let n = 0; n < columns; n++){
        let item = itemsElems[ m * columns + n]
        columnsElements[n].appendChild(item)
        item.classList.add('masonry-item')
      }
    }
  }
  
  masonryLayout(document.getElementById('gallery'),
                document.querySelectorAll('.gallery-item'), 4)



 function traerdatos() {
  
    
 
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','resources/img.json',true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#gallery');
            //res.innerHTML = '';
            let img = '';

            for (let item of datos) {
                console.log('esta es la Info ->' + item.url);
                
                img += `
                <div class="gallery-item">                
                    <img src="${item.url}" alt="${item.texto}" >
                </div>
                `;
    
            }

            res.innerHTML = img;
        }
    }
}


traerdatos();