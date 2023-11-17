let inp = document.querySelector("#inp");
let btn = document.querySelector("#btn");
let result = document.querySelector("#result");

let data = [];

let inp1 = document.querySelector("input");

let elem = [];

let ele = "";



function del(i) {   /// silme funksiyasi

    data.splice(i, 1);

    let datamap = data.reverse().map(function (el, i) {
        return ` <div class="d-flex justify-content-between">
        <div class="bg-primary rounded-2 my-3">${el}</div>
        <div class="d-flex justify-content-between g-2">

            <button class="bg-danger rounded-2 cursor-pointer" onclick="del(${i})">Delete</button>
            <button class="bg-warning rounded-2 cursor-pointer" onclick="edit(${i})">Edit</button>

        </div>
    </div>`;
    }).join("");

    result.innerHTML = datamap;
}



function edit(index) {   /// edit funksiyasi

    let datamap = data.map(function (el, i) {

        elem.push(data[index]);

         data[index] = inp1.value  ;

        if (index == i) {

            return ` <div class="d-flex justify-content-between"> 
            <input id="inp1" class="rounded-2" type="text" value=${inp1.value}/>
            <div  class="d-flex justify-content-between g-2">
    
                <button class="bg-danger rounded-2 cursor-pointer" onclick="del(${i})">Delete</button>
                <button class="bg-warning rounded-2 cursor-pointer" onclick="update(${i})">Update</button>
                </div>
            
            </div>`;
        } else {
            return ` <div class="d-flex justify-content-between">  <div  class="bg-primary rounded-2 my-3">${el}</div>
            <div  class="d-flex justify-content-between g-2">
    
                <button class="bg-danger rounded-2 cursor-pointer" onclick="del(${i})">Delete</button>
                <button class="bg-warning rounded-2 cursor-pointer" onclick="edit(${i})">Edit</button>
                </div>
          
            </div>`;
        }

        let inp1Val = inp1.value;

        ele = inp1Val;

        console.log(ele+"ele");

    }).join("");

    result.innerHTML = datamap;
}



function update(index) {    //update funksiyasi

    console.log(ele);

    // data.splice(index, 1, elem[0]);

    let datamap = data.map(function (el, i) {

        return ` <div class="d-flex justify-content-between">  
        
        <div class="bg-primary rounded-2 my-3">${el}</div>
           
            <div  class="d-flex justify-content-between g-2">
    
                <button class="bg-danger rounded-2 cursor-pointer" onclick="del(${i})">Delete</button>
                <button class="bg-warning rounded-2 cursor-pointer" onclick="edit(${i})">Edit</button>
                </div>
           
            </div>`;
    }).join("");

    result.innerHTML = datamap;
}



btn.addEventListener("click", function () { //Add funksiyasi
    
    data.push(inp.value);
    console.log(data);

    let datamap = data.reverse().map(function (el, i) {
        return ` <div class="d-flex justify-content-between">
        <div class="bg-primary rounded-2 my-3">${el}</div>
        <div class="d-flex justify-content-between g-2">

            <button class="bg-danger rounded-2 cursor-pointer" onclick="del(${i})">Delete</button>
            <button class="bg-warning rounded-2 cursor-pointer" onclick="edit(${i})">Edit</button>

        </div>
    </div>`;
    }).join("");

    result.innerHTML = datamap;
})

