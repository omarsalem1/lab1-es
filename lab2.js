function customprompt(msg) {
    return new Promise(function (resolve, reject) {
        try {
            const mainel = document.createElement("div");
            
            mainel.innerHTML = `<h3>${msg}</h3>  <br/>`;
            let inpel = document.createElement("input");
            inpel.placeholder = `${msg}`;
            let yesBtn = document.createElement("button");
            yesBtn.innerHTML = "YES";

            let canBtn = document.createElement("button");
            canBtn.innerHTML = "Cancel";
            mainel.appendChild(inpel);
            mainel.appendChild(yesBtn);
            mainel.appendChild(canBtn);
            document.body.appendChild(mainel);
            yesBtn.onclick = function () {
                resolve(inpel.value);
                document.body.removeChild(mainel);


            }
            canBtn.onclick = function () {
                let m = 'you cancelled';
                resolve(m)
                document.body.removeChild(mainel);



            }





        } catch (error) {
            reject(error);

        }

    })

}

async function knowname() {
    let res = await customprompt("your name?");
    alert(res);
}
knowname();