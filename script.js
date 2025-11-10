const inputbox = document.getElementById("input-box");
        const listitems = document.getElementById("list-items");

        function addTask() {
            const taskText = inputbox.value.trim();
            if (taskText === "") {
                alert("You must write something!");
                return;
            }
            const li = document.createElement("li");

            const doneBtn = document.createElement("button");
            doneBtn.textContent = "Done";
            doneBtn.className = "done-btn";

            const span = document.createElement("span");
            span.textContent = taskText;

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "delete-btn";

            li.appendChild(doneBtn);
            li.appendChild(span);
            li.appendChild(deleteBtn);

            listitems.appendChild(li);

            inputbox.value = "";

            doneBtn.addEventListener("click", () => {
                li.classList.toggle("completed");
            });

            deleteBtn.addEventListener("click", () => {
                li.remove();
            });
        }

        document.querySelectorAll(".done-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                btn.closest("li").classList.toggle("completed");
            });
        });

        document.querySelectorAll(".delete-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                btn.closest("li").remove();
            });
        });