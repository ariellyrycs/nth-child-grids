(() => {
    let typeElem = document.querySelector('#type'),
    containerElem = document.querySelector('.container');
    currentType = 'type-1';
    containerElem.classList.add(currentType);

    




    typeElem.addEventListener('change', function (e) {
        if(currentType !== e.target.value) {
            containerElem.classList.remove(currentType);
            currentType = 'type-' + e.target.value;
            containerElem.classList.add(currentType)
            currentType = currentType;
        }
    });
})();



