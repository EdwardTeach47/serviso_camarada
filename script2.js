function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    // Aqui você pode implementar a lógica para enviar os dados do formulário para o backend ou processá-los de alguma forma
    // Por enquanto, vamos apenas exibir um alerta de sucesso
    const successMessage = `Olá ${name}!\n\nSeu formulário foi enviado com sucesso.\n\nResponderemos em breve para o email ${email}.\n\nObrigado!`;
    alert(successMessage);

    document.getElementById("contact-form").reset();
}