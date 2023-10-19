const imageUrls = [
  'https://res.cloudinary.com/dqqou4dzd/image/upload/v1696161856/JP/GIF-2_nkturc.gif',
  'https://res.cloudinary.com/dqqou4dzd/image/upload/v1696160878/JP/GIF-1_ubqs4m.gif', 
  'https://res.cloudinary.com/dqqou4dzd/image/upload/v1696163063/JP/GIF-3_heom11.gif', 
  'https://res.cloudinary.com/dqqou4dzd/image/upload/v1696163079/JP/GIF-4_tmm6v8.gif', 
  'https://res.cloudinary.com/dqqou4dzd/image/upload/v1696163748/JP/GIF-5_jcd91u.gif'
]

const poem = [
  "AFFECTIONATE SHEPHEARD.",
  "Scarce had the morning starre hid from the light",
  "Heavens crimson canopie with stars bespangled,", 
  "But I began to rue th' unhappy sight", 
  "Of that faire boy that had my hart intangled;", 
  "Cursing the time, the place, the sense, the sin;",
  "I came, I saw, I viewd, I slipped in.", 
  "If it be sinne to love a sweet-fac'd boy,", 
  "Whose amber locks trust up in golden tramels", 
  "If it be sinne to love a sweet-fac'd boy,", 
  "Whose amber locks trust up in golden tramels", 
  "Dangle adowne his lovely cheekes with joy,", 
  "When pearle and flowers his faire haire enamels;", 
  "If it be sinne to love a lovely lad,", 
  "Oh then sinne I, for whom my soule is sad."
]

let currentIndex = 0
let poemVerse = 0

function changeImage(e) {
  const x = e.clientX
  const y = e.clientY

  const imageElement = document.getElementById('changeable-image')
  const canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d')

  context.drawImage(imageElement, 0, 0, imageElement.width, imageElement.height)

  imageElement.onload = () => {
    if (x < imageElement.width && y < imageElement.height) {
      // const pixelData = context.getImageData(x, y, 1, 1).data

      const pixelData = context.getImageData(100, 100, 1, 1).data
      const red = pixelData[0]
      const green = pixelData[1]
      const blue = pixelData[2]
      const alpha = pixelData[3]
    
      const bgColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`
    
      document.getElementById('title').style.color = bgColor
    }
  }

  imageElement.src = imageUrls[currentIndex]

  currentIndex = (currentIndex + 1) % imageUrls.length
  poemVerse = (poemVerse + 1) % poem.length
  document.getElementById('title').innerText = poem[poemVerse]
}

document.addEventListener('click', function(e) {
  changeImage(e) 
})
