import './index.less';


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
  const dom = document.getElementById('mask');
  if (dom) {
    dom.style.display = 'none';
  }
};
