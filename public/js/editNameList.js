export default function editNameList(liElement) {

    liElement.addEventListener("click", (event) => {
        const nameElement = event.currentTarget.querySelector(".item-name");

        if (event.target !== nameElement) {
            return;
        }

        const buttonDeleteElement = event.currentTarget.querySelectorAll("button")[0];
        const currentName = nameElement.innerText;

        const inputEditElement = document.createElement("input");
        inputEditElement.setAttribute("type", "text");
        inputEditElement.setAttribute("value", currentName);
        inputEditElement.classList.add("form-control", "form-control-sm", "me-2");

        const buttonEditElement = document.createElement("button");
        buttonEditElement.setAttribute("type", "button");
        buttonEditElement.classList.add("btn", "btn-success", "btn-sm");
        buttonEditElement.innerText = "Alterar";

        nameElement.remove();
        buttonDeleteElement.remove();
        event.currentTarget.append(inputEditElement, buttonEditElement);
        inputEditElement.focus();

        const confirmEdit = () => {
            const newName = inputEditElement.value.trim();

            if (newName === "") {
                return;
            }

            nameElement.innerText = newName;
            inputEditElement.remove();
            buttonEditElement.remove();
            liElement.append(nameElement, buttonDeleteElement);
        };

        buttonEditElement.addEventListener("click", (buttonEvent) => {
            buttonEvent.preventDefault();
            confirmEdit();
        });

        inputEditElement.addEventListener("keydown", (inputEvent) => {
            if (inputEvent.key !== "Enter") {
                return;
            }

            inputEvent.preventDefault();
            confirmEdit();
        });
    });

}
