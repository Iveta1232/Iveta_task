let first_selection = document.querySelector('#uznemuma-vieta');
let second_selection = document.querySelector('#uznemuma-veids');

first_selection.addEventListener('change', () => {
    mapChanger();
});

second_selection.addEventListener('change', () => {
    mapChanger();
});

function mapChanger() {
  if (first_selection.selectedIndex == '1' && second_selection.selectedIndex == '1') {
    document.querySelector('.map-image').classList.add('js-hidden-map');
    document.querySelector('.map-iframe').classList.remove('js-hidden-map');
    document.querySelector('.container-for-riga').classList.remove('js-hidden-map');
    document.querySelector('.info').style.display="none";
  }
  else {
    document.querySelector('.map-image').classList.remove('js-hidden-map');
    document.querySelector('.map-iframe').classList.add('js-hidden-map');
    document.querySelector('.container-for-riga').classList.add('js-hidden-map');
    document.querySelector('.info').style.display="flex";
  }
}
