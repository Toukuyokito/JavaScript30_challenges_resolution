class VideoPlayer {

    constructor() {

        this.video             = document.querySelector(".player .viewer");
        this.progressBar       = document.querySelector(".player .progress__filled");
        this.updateProgressBar = this.updateProgressBar.bind(this);
        this.video.addEventListener("timeupdate", this.updateProgressBar);
        
        this.progressContaineur = document.querySelector(".player .progress");
        this.dragProgressBar = this.dragProgressBar.bind(this);
        this.progressContaineur.addEventListener("mousemove", this.dragProgressBar)

        this.volumeSlide  = document.querySelector(".player input[name=volume]");
        this.setVolume    = this.setVolume.bind(this);
        this.volumeSlide.addEventListener("input", this.setVolume);

        
        this.speedSlide = document.querySelector(".player input[name=playbackRate]");
        this.setSpeed   = this.setSpeed.bind(this);
        this.speedSlide.addEventListener("input", this.setSpeed); 

        this.playButton = document.querySelector(".player .toggle");
        this.playOrStop = this.playOrStop.bind(this);
        this.playButton.addEventListener("click", this.playOrStop);

        this.skipButtons = document.querySelectorAll("[data-skip]");
        this.skip        = this.skip.bind(this);
        this.skipButtons.forEach(button=> button.addEventListener("click", this.skip));
    }
    
    updateProgressBar() {
        document.documentElement.style.setProperty("--video-progress", 
                                                   `${this.video.currentTime * 100 / this.video.duration}%`);
    }

    dragProgressBar(e) {
        
        if(e.buttons !== 1) return;
        let mousePositionInPourcent = e.layerX * 100 / this.progressContaineur.offsetWidth; 

        this.video.currentTime = mousePositionInPourcent * this.video.duration / 100;
    }

    playOrStop() {
        
        if(this.video.paused) {
            
            this.video.play();
            this.playButton.textContent = "❚ ❚";
        }
        else {
            
            this.video.pause();
            this.playButton.textContent = "►";
        }   
    }

    setVolume() {
        if (this.volumeSlide.value < 1 &&
            this.volumeSlide.value >= 0) {
            
            this.video.volume = this.volumeSlide.value;
        }    
        
    }

    setSpeed() {
        if(this.speedSlide.value <= 4.0 &&
           this.speedSlide.value >= 0.25) {

                this.video.playbackRate = this.speedSlide.value;
           }
    }
    
    skip(e) {
        this.video.currentTime += parseFloat(e.target.dataset.skip); 
    }
}

const video = new VideoPlayer();