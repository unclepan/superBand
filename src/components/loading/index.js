import './index.less';


function preloader() {
  if (document.images) {
    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();
    const img4 = new Image();
    const img5 = new Image();
    const img6 = new Image();
    const img7 = new Image();
    const img8 = new Image();
    img1.src = '../../assets/images/w_hongbaoMain.png';
    img2.src = '../../assets/images/w_index_main.png';
    img3.src = '../../assets/images/w_indexBg.jpg';
    img4.src = '../../assets/images/w_page1_bg.jpg';
    img5.src = '../../assets/images/w_page02.png';
    img6.src = '../../assets/images/w_turntableBg.jpg';
    img7.src = '../../assets/images/w_turntablePan.png';
    img8.src = '../../assets/images/w_answerBg.jpg';
  }
}

const html = `
<div class="loading">
    <div class="text">正在加载</div>
    <div class="loader"></div>
</div>`;
const dom = document.createElement('div');
dom.id = 'mask';
dom.className = 'loading-mask';
dom.innerHTML = html;
if (window.location.href.indexOf('end') < 0) {
  document.getElementsByTagName('body')[0].appendChild(dom);
}
window.onload = () => {
  preloader();
  const dom = document.getElementById('mask');
  if (dom) {
    dom.style.display = 'none';
  }
};
