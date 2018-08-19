import './index.less';
import a from '../../assets/images/w_hongbaoMain.png';
import b from '../../assets/images/w_index_main.png';
import c from '../../assets/images/w_indexBg.jpg';
import d from '../../assets/images/w_page1_bg.jpg';
import e from '../../assets/images/w_page02.png';
import f from '../../assets/images/w_turntableBg.jpg';
import g from '../../assets/images/w_turntablePan.png';
import h from '../../assets/images/w_answerBg.jpg';

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
    img1.src = a;
    img2.src = b;
    img3.src = c;
    img4.src = d;
    img5.src = e;
    img6.src = f;
    img7.src = g;
    img8.src = h;
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
