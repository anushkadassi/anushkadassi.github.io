/* Fade In Animation */
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Parallax Effect */
.parallax {
    transition: transform 0.1s ease-out;
}

/* Scroll Progress */
.scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-color);
    z-index: 1001;
    transition: width 0.1s ease-out;
}

/* Hero Image Animation */
@keyframes float {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
}

.hero-image {
    animation: float 6s ease-in-out infinite;
}

/* Section Reveal Animation */
@keyframes revealFromBottom {
    0% {
        transform: translateY(100px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.section-reveal {
    animation: revealFromBottom 1s ease-out forwards;
}

/* Button Hover Animation */
.animated-button {
    position: relative;
    overflow: hidden;
}

.animated-button::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s ease-out, height 0.6s ease-out;
}

.animated-button:hover::after {
    width: 300px;
    height: 300