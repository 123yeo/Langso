class BBLottie {
    constructor() {
        this.init();
    }

    init() {
        this.animations();
        this.toggle();
    }

    toggle(){
        let toggleWrapper = document.querySelector('.bb-panel-nav');
        if (toggleWrapper) {
            let toggles = toggleWrapper.querySelectorAll('.et_pb_button');
            if (toggles && toggles.length > 0) {
                toggles.forEach((elm, key) => {
                    if (key === 0) {
                        elm.classList.add('active');
                    }
                    elm.addEventListener('click', (e) => {
                        e.preventDefault();
                        let target = e.target.getAttribute('href'), elmTarget = target ? document.querySelector(target) : false;
                        if (elmTarget) {
                            let activePanel = document.querySelectorAll('.bb-tab-panel.activated');
                            if (activePanel && activePanel.length > 0) {
                                activePanel.forEach((elm) => {
                                    elm.classList.remove('activated');
                                    elm.classList.remove('faded');
                                });
                            }

                            let activeButton = document.querySelectorAll('.bb-panel-nav .et_pb_button.active');
                            if (activeButton && activeButton.length > 0) {
                                activeButton.forEach((elm) => {
                                    elm.classList.remove('active');
                                });
                            }

                            elmTarget.classList.add('activated');
                            setTimeout(() => {
                                elmTarget.classList.add('faded');
                            }, 100);
                            elm.classList.add('active');

                            //scroll to target
                            let targetOffset = elmTarget.offsetTop - 100;
                            window.scrollTo({
                                top: targetOffset,
                                behavior: "smooth"
                            });
                        }
                        return false;
                    });
                });
            }
        }
    }

    animations() {
        let animations = document.querySelectorAll('.bb-tab-panel__animation:not(.initialized)'),
            lottieInstances = [];
        if (animations && animations.length > 0) {
            animations.forEach((elm, key) => {
                elm.classList.add('initialized');
                elm.setAttribute('data-key', key);
                let inner = elm.querySelector('.et_pb_text_inner'),
                    target = inner.innerHTML;
                inner.innerHTML = '';
                if (target !== '') {
                    // add new element next to inner
                    let newElm = document.createElement('div');
                    newElm.classList.add('bb-tab-panel__animation__container');
                    inner.appendChild(newElm);

                    // load animation
                    lottieInstances[key] = lottie.loadAnimation({
                        container: elm.querySelector('.bb-tab-panel__animation__container'),
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        path: target
                    });
                }
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let bblottie = new BBLottie();
});