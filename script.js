function openModal(serviceName, price) {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function calculateTotal() {
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    // Perform any necessary calculations based on the selected date, time, and service price
    const totalPrice = 100; // Example total price
    document.getElementById("total-price").innerText = `Total: R$ ${totalPrice.toFixed(2)}`;
}
