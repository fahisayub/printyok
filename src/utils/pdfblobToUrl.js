export const blobToFileUrl=async(pdfblob)=>{
    return await new Promise(resolve=>{
        const fileReader=new FileReader()
        fileReader.readAsDataURL(pdfblob)
        fileReader.onloadend=()=>{
            const basedata=fileReader.result
            resolve(basedata)
        }

    })
}