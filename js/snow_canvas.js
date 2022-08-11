export default class SnowCanvas {
    constructor() {
        this.canvas = document.querySelector("canvas").getContext('2d')
        this.maxArticles = 250
        this.articlesArr = []
        this.interval = 50
        this.initialSetup()
    }

    initialSetup() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        this.createSnowFlakes()
        setInterval(() => {
            this.updateSnows()
        }, this.interval)
    }

    randomWithMinMax(min, max) {
        return min + Math.random() * (max - min + 1)
    }

    createSnowFlakes() {
        for (let i=0; i<this.maxArticles; i++) {
            this.articlesArr.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                opacity: this.randomWithMinMax(.6, 1.),
                speedX: this.randomWithMinMax(-6, 6),
                speedY: this.randomWithMinMax(2, 5),
                radius: this.randomWithMinMax(0.3, 2.2)
            })
        }
    }

    drawFlakes() {
        this.articlesArr.forEach(curr => {
            const gradient = this.canvas.createRadialGradient(curr.x, curr.y, 0, curr.x, curr.y, curr.radius)

        gradient.addColorStop(0, "rgba(255, 255, 255, " + curr.opacity + ")")
        gradient.addColorStop(0.8, "rgba(210, 236, 242, " + curr.opacity + ")")
        gradient.addColorStop(1, "rgba(237, 247, 249, " + curr.opacity + ")")
        this.canvas.beginPath()
        this.canvas.arc(curr.x, curr.y, curr.radius, 0, Math.PI*2, false)
        this.canvas.fillStyle = gradient
        this.canvas.fill()
        })
    }

    moveSnows() {
        this.articlesArr.forEach(curr => {
            curr.x += curr.speedX
            curr.y += curr.speedY

            if (curr.y > this.canvas.height) {
                curr.x = Math.random() * 1.5 * this.canvas.width
                curr.y = -50
            }
        })
    }

    updateSnows() {
        this.canvas.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.drawFlakes()
        this.moveSnows()
    }
}
