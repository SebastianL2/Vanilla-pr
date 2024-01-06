window.onload = function() {
    const texto1 = document.querySelector("#texto1");

    if (texto1) {
        texto1.addEventListener("mouseover", function() {
            texto1.textContent = "Sebastian Cely Peña";
        });

        texto1.addEventListener("mouseout", function() {
            texto1.textContent = "[S.C.P]";
        });
    }
};