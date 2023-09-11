let customer;
let region
$(document).ready(function() {

    OneAppSelect2({
        api: ONE_APP_APIS.customers,
        elementSelector: '#customer',
        placeholder: 'Select a Customer',
        textField: "username"
    });
    $("#customer").change(function(){
        customer=$(this).val()
        OneAppSelect2({
            api: ONE_APP_APIS.getRegions.format({customer}),
            elementSelector: '#region',
            placeholder: 'Select a Region',
        });
    })
    $("#region").change(function(){
        region=$(this).val()
    })

const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');
        const btn3 = document.getElementById('btn3');
        const selectContainer = document.getElementById('select-container');
        let currentSelects = [];
        console.log("reg",region)
        // Function to create and display select tags
        function createSelects(num) {
            // Clear the container
            selectContainer.innerHTML = '';
        if (region){
            for (let i = 0; i < num; i++) {
                const select = document.createElement('select');
                select.classList.add("input_field");
                select.style.marginRight = '3px';
                if(i==0){
                select.innerHTML = `<option value="${region}a" selected>${region}a</option><option value="${region}b">${region}b</option><option value="${region}c">${region}c</option>`;
                }else if (i==1){
                select.innerHTML = `<option value="${region}a" disabled=true>${region}a</option><option value="${region}b" selected>${region}b</option><option value="${region}c">${region}c</option>`;
                }else if(i==2){
                select.innerHTML = `<option value="${region}a" disabled=true>${region}a</option><option value="${region}b" disabled=true>${region}b</option><option value="${region}c" selected>${region}c</option>`;
                }
                selectContainer.appendChild(select);
                currentSelects.push(select);
            }
        }else{
            toastr.error("Please select region")
        }
    }
        btn1.addEventListener('click', () => {
            createSelects(1);
            updateSelects();
        });

        btn2.addEventListener('click', () => {
            createSelects(2);
            updateSelects();
        });

        btn3.addEventListener('click', () => {
            createSelects(3);
            updateSelects();
        });

        // Function to update select options
        function updateSelects() {
            currentSelects.forEach((select, index) => {
                select.addEventListener('change', (event) => {
                    const selectedValue = event.target.value;
                    console.log("sele",select, selectedValue)
                    currentSelects.forEach((s, i) => {
                        if (i !== index) {
                            // Disable the same option in other select tags
                            s.querySelector(`option[value="${selectedValue}"]`).disabled = true;
                        }
                    });
                });
            });
        }

        const publicBtn0 = document.getElementById('public-btn-0');
        const publicBtn1 = document.getElementById('public-btn-1');
        const publicInputContainer = document.getElementById('public-input-container');

        const privateBtn0 = document.getElementById('private-btn-0');
        const privateBtn1 = document.getElementById('private-btn-1');
        const privateBtn2 = document.getElementById('private-btn-2');
        const privateInputContainer = document.getElementById('private-input-container');

        function clearInputContainer(container) {
            container.innerHTML = '';
        }

        publicBtn0.addEventListener('click', () => {
            clearInputContainer(publicInputContainer);
        });

        publicBtn1.addEventListener('click', () => {
            clearInputContainer(publicInputContainer);
            const input = document.createElement('input');
            input.style.marginRight = '3px';
            input.classList.add("input_field")
            input.setAttribute('type', 'text');
            input.setAttribute('placeholder', 'Public Input');
            publicInputContainer.appendChild(input);
        });

        privateBtn0.addEventListener('click', () => {
            clearInputContainer(privateInputContainer);
        });

        privateBtn1.addEventListener('click', () => {
            clearInputContainer(privateInputContainer);
            const input = document.createElement('input');
            input.classList.add("input_field")
            input.setAttribute('type', 'text');
            input.setAttribute('placeholder', 'Private Input');
            privateInputContainer.appendChild(input);
        });

        privateBtn2.addEventListener('click', () => {
            clearInputContainer(privateInputContainer);
            for (let i = 0; i < 2; i++) {
                const input = document.createElement('input');
                input.classList.add("input_field")
                input.setAttribute('type', 'text');
                input.setAttribute('placeholder', 'Private Input ' + (i + 1));
                privateInputContainer.appendChild(input);
            }
        });

    })