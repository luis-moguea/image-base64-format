const fileInput = document.querySelector("#file-js")

fileInput.addEventListener("click", ()=>{
    const file = fileInput.files[0]
    const reader = new FileReader()

    reader.addEventListener("load", () => {
        console.log(reader.result)
    })

    if(file){
        reader.readAsDataURL(file)
    }

})