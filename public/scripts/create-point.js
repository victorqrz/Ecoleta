function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {
            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        });
}

populateUFs();

function getCities(ev) {
    const citySelect = document.querySelector("[name=city]");
    const stateInput = document.querySelector("[name=state]");
    const ufValue = ev.target.value;

    const indexOfSelectedState = ev.target.selectedIndex;
    stateInput.value = ev.target.options[indexOfSelectedState].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    fetch(url)
        .then((res) => res.json())
        .then((cities) => {
            citySelect.innerHTML = '<option value="">Selecione a cidade</option>';
            citySelect.disabled = true;

            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            };

            citySelect.disabled = false;
        })
}

document.querySelector("select[name=uf]").addEventListener("change", getCities);

//Itens de coleta

const itensToCollect = document.querySelectorAll(".itens-grid li");

for (const item of itensToCollect)
    item.addEventListener("click", handleSelectedItem);

let selectedItems = [];
const itemsToSend = document.querySelector("input[name=items]");

function handleSelectedItem(event) {
    const itemLi = event.target;
    itemLi.classList.toggle("selected");

    const itemId = itemLi.dataset.id;

    //console.log("ITEM ID: ", itemId);

    //verificação se já existem itens selecionados
    const alreadySelected = selectedItems.findIndex(item => item == itemId);

    if (alreadySelected == -1) {
        selectedItems.push(itemId);
    } else {
        const filteredItems = selectedItems.filter(item => item != itemId);

        selectedItems = filteredItems;
    }

    //console.log("SELECTED ITEMS: ", selectedItems);

    itemsToSend.value = selectedItems;
}