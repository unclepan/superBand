import './index.less';

const html = `
<div class="loading">
    <img class="logo" src="/static/images/loading-01.png">
    <div class="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
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
