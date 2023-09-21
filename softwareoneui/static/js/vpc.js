let customer;
let region;
let currentSelects;
let privateInputElements;
let publicInputElements;
$(document).ready(function() {
    const selectContainer = document.getElementById('select-container');
    OneAppSelect2({
        api: S_ONE_APIS.customers,
        elementSelector: '#customer',
        placeholder: 'Select a Customer',
        textField: "username"
    });
    $("#customer").change(function(){
        customer=$(this).val()
        OneAppSelect2({
            api: S_ONE_APIS.getRegions.format({customer}),
            elementSelector: '#region',
            placeholder: 'Select a Region',
        });
    })
    $("#region").change(function(){
        selectContainer.innerHTML = '';
        region=$(this).val()
    })

const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');
        const btn3 = document.getElementById('btn3');
        function createSelects(num) {
            currentSelects = []
            selectContainer.innerHTML = '';
        if (region){
            for (let i = 0; i < num; i++) {
                const select = document.createElement('select');
                select.classList.add("input_field");
                select.style.marginRight = '3px';
                
                if(i==0){
                select.innerHTML = `<option value="${region}a" selected>${region}a</option><option value="${region}b" >${region}b</option><option value="${region}c" >${region}c</option>`;
                }else if (i==1){
                select.innerHTML = `<option value="${region}a" >${region}a</option><option value="${region}b" selected>${region}b</option><option value="${region}c" >${region}c</option>`;
                }else if(i==2){
                select.innerHTML = `<option value="${region}a" >${region}a</option><option value="${region}b" >${region}b</option><option value="${region}c" selected>${region}c</option>`;
                }
                selectContainer.appendChild(select);
                currentSelects.push(select);
            }
            currentSelects.forEach((selectElement) => {
                selectElement.addEventListener('change', updateSelects);
            });
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

        function updateSelects() {
            currentSelects.forEach((selectElement, index) => {
                const selectedValuesInOtherSelects = [];
                
                currentSelects.forEach((otherSelectElement, otherIndex) => {
                  if (index !== otherIndex) { 
                    const selectedOption = otherSelectElement.options[otherSelectElement.selectedIndex];
                    if (selectedOption) {
                      selectedValuesInOtherSelects.push(selectedOption.value);
                    }
                  }
                });
            
                selectElement.querySelectorAll('option').forEach((option) => {
                  option.disabled = selectedValuesInOtherSelects.includes(option.value);
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
            publicInputElements=[]
            clearInputContainer(publicInputContainer);
        });

        publicBtn1.addEventListener('click', () => {
            publicInputElements=[]
            clearInputContainer(publicInputContainer);
            const input = document.createElement('input');
            input.style.marginRight = '3px';
            input.classList.add("input_field")
            input.setAttribute('type', 'text');
            input.setAttribute('placeholder', 'Public Input');
            publicInputContainer.appendChild(input);
            publicInputElements.push(input)
        });

        privateBtn0.addEventListener('click', () => {
            privateInputElements=[]
            clearInputContainer(privateInputContainer);
        });

        privateBtn1.addEventListener('click', () => {
            clearInputContainer(privateInputContainer);
            privateInputElements=[]
            const input = document.createElement('input');
            input.classList.add("input_field")
            input.setAttribute('type', 'text');
            input.setAttribute('placeholder', 'Private Input');
            privateInputContainer.appendChild(input);
            privateInputElements.push(input)
        });

        privateBtn2.addEventListener('click', () => {
            clearInputContainer(privateInputContainer);
            privateInputElements=[]
            for (let i = 0; i < 2; i++) {
                const input = document.createElement('input');
                input.classList.add("input_field")
                input.setAttribute('type', 'text');
                input.setAttribute('placeholder', 'Private Input ' + (i + 1));
                privateInputContainer.appendChild(input);
                privateInputElements.push(input)
            }
        });
        $("#vpcSubBtn").click(function () {
            let data = {};
            data.vpc = $("#vpc-name").val();
            data.region = $("#region").val();
            data.cidr = $("#cidr").val();
            data.tenancy = $("#tenancy").val();
            if(currentSelects){
            currentSelects.forEach((selectElement, index) => {
              data[`zone${index}`] = $(selectElement).val();
            });
        }
            if(privateInputElements){
                privateInputElements.forEach((private, index) => {
                    data[`private${index}`] = $(private).val();
                  });
            }

            if (publicInputElements){
            publicInputElements.forEach((public, index) => {
              data["public"] = $(public).val();
            });
        }
            console.log("data",data)
            let valid = true
            let formatted_data={"private": [], "zone": []}
            for (let d in data) {
              if (data[d] === null || typeof data[d] === "undefined" || data[d]=='') {
                toastr.error(`Please provide input for ${d}`);
                valid = false
                break; 
              }else if(d.startsWith("private")){
                formatted_data.private.push(data[d])
              }else if(d.startsWith("zone")){
                formatted_data.zone.push(data[d])
              }else{
                formatted_data[d]=data[d]
              }
            }
            console.log("formatted",formatted_data)
            if (valid){
                $.ajax({
                    type:"POST",
                    data:formatted_data,
                    url:  S_ONE_APIS.createVpc.format({customer}),
                }).done(function (data) {
                    $("input, #select2, select").val(null).trigger("change");
                    const { VPCId, PublicSubnetIds, PrivateSubnetIds } = data;
                    toastr.success(`Created VPC with VPCId: ${VPCId} \n Public Subnet IDs: ${PublicSubnetIds.join(', ')} \n Private Subnet IDs: ${PrivateSubnetIds.join(', ')}`);

                }).fail(function (data) {
                    if (data.responseJSON && data.responseJSON.detail){
                        toastr.error(data.responseJSON.detail);
                    }else{
                        toastr.error(`error ${data.responseJSON}`)
                    }
                })
            }
          });
    })