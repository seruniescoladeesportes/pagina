const pi = Math.PI //---> Constante de Arquimedes (Pi), razão do perímetro pelo diâmetro de uma circunferência
    let set
    const quantSet = 100
    let numSet = quantSet
    let videodiv = document.querySelector("#videodiv")
    let imgH = videodiv.querySelector("img")
    let maxWYT = 720
    let maxHYT = 540
    let angle = 0
    let condIframe = false
    let iframe
    let IDYT = "nUPubUO4Qgw" //---> Aqui tu coloca o ID do YouTube!
    let numScroll = 1 - Math.pow(0, window.scrollY)
    let scrollVid = function() {
      if(numScroll == 0) {
        window.removeEventListener("scroll", scrollVid)
        iframe = document.createElement("iframe")
        iframe.src = "http://www.youtube.com/embed/" + IDYT + "?autoplay=1"
        iframe.width = maxWYT
        iframe.height = maxHYT
        iframe.style.width = maxWYT
        iframe.style.height = maxHYT
        iframe.frameBorder = 0
        iframe.allowFullscreen = true
        videodiv.appendChild(iframe)
        redimensIFrame()
        window.addEventListener("resize", redimensIFrame)
        functTransition(-1, () => {})
      } numScroll--
    }; let closeHeader = function() {
      imgH.removeEventListener("click", closeHeader)
      functTransition(1, () => {
        window.removeEventListener("resize", redimensIFrame)
        document.body.removeChild(videodiv)
      })
    }; let redimensIFrame = function() {
      let Wu = window.innerWidth - 77
      let Hu = window.innerHeight - 60
      if(Wu >= maxWYT && Hu >= maxHYT) {
        iframe.style.transform = "scale(1)"
      } else {
        let vT
        if(Wu/maxWYT >= Hu/maxHYT) {
          vT = Hu/maxHYT
        } else {
          vT = Wu/maxWYT
        } if(vT < 0.3) {
          vT = 0.3
        } iframe.style.transform = "scale(" + vT + ")"
      }
    }; function functTransition(numAdd, functSet) {
      set = setInterval(function() {
        numSet += numAdd
        if(numSet == 0) {
          clearInterval(set)
          imgH.addEventListener("click", closeHeader)
        } else if(numAdd == -1 && numSet == quantSet - 1) {
          videodiv.style.display = "flex"
        } else if(numSet == quantSet) {
          clearInterval(set)
          functSet()
          return
        } videodiv.style.right = window.innerWidth*(1 - Math.cos(Math.PI*numSet/(quantSet*2))) + "px"
      }, 10)
    } window.addEventListener("scroll", scrollVid)