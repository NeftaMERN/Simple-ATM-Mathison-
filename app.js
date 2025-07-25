

const pin_btn = document.getElementById("pin_btn");
const login_btn = document.getElementById("login_btn");
const container = document.getElementById("container");
let balance = 1000;

login_btn.addEventListener("click", () => {

  const pin = pin_btn.value;

  if(pin === "1234") {

    let deposit_btn = document.createElement("button");
    let withdrow_btn = document.createElement("button");

    withdrow_btn.innerText = "withdrow"

    deposit_btn.innerText = "diposit"

    deposit_btn.className = "dipo"

    withdrow_btn.className = "withdo"

    withdrow_btn.addEventListener("click", () => {

      let withdrow_input = document.createElement("input");
      withdrow_input.placeholder = "Enter Amount";

      withdrow_input.className = "type_input"

      let btn_withdrow = document.createElement("button");
      btn_withdrow.innerText = "withdrow"

      btn_withdrow.className = "pyment_btn"

      btn_withdrow.addEventListener("click", () => {

        const withdrow = parseFloat(withdrow_input.value)

        if(withdrow < balance) {

          balance -= withdrow

          alert("You withdrow" + withdrow + "birr\n curent balance" + balance + "birr")

        }

      });

      
      container.appendChild(withdrow_input);
      container.appendChild(btn_withdrow)

    });

    deposit_btn.addEventListener("click", () => {


      let inpu = document.createElement("input")
      inpu.placeholder = "enter amount Neftalem"

      inpu.className = "type_input"

      let input_btn = document.createElement("button")
      input_btn.innerText = "deposit"

      input_btn.className = "pyment_btn"

      input_btn.addEventListener("click", () => {
      
        const dipo_btn = parseFloat(inpu.value);

        if(dipo_btn > 0) {

          balance += dipo_btn

          alert("depositt" + dipo_btn + "birr\n curent balance" + balance)

        }

      })

      container.appendChild(inpu);
      container.appendChild(input_btn);

     

    })


    container.appendChild(withdrow_btn)
    container.appendChild(deposit_btn)

  } else {

    alert("wrong pin")

  }

})



