// gsap.to('#Robot_master', {
//   duration: 2,
//   ease: 'elastic.out(2.5,0.1)',
//   x: 50,
// });

let tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: 'power1.inOut',
  },
  repeat: -1,
  yoyo: true,
});

tl.set('#Shadow', {
  transformOrigin: '50% 100%',
})
  .fromTo(
    '#Robot',
    {
      y: 2.5,
    },
    {
      y: -2.5,
    }
  )
  .to(
    '#Shadow',
    {
      scale: 0.75,
    },
    '-=.75'
  );

const btnFast = document.querySelector('.js-fast');
const btnNormal = document.querySelector('.js-normal');
const btnSlow = document.querySelector('.js-slow');

const btnPause = document.querySelector('.js-pa');
const btnPlay = document.querySelector('.js-pl');

btnFast.onclick = () => tl.timeScale(4);
btnNormal.onclick = () => tl.timeScale(2);
btnSlow.onclick = () => tl.timeScale(1);

btnPlay.onclick = () => tl.pause();
btnPause.onclick = () => tl.resume();
