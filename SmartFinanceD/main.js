console.log('JavaScript file is loaded');

window.addEventListener('load', function() {
    console.log('DOM fully loaded and parsed');

    const submitButton = document.getElementById('submitButton');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    function checkFields() {
        const nameValue = nameField.value.trim();
        const emailValue = emailField.value.trim();
        const messageValue = messageField.value.trim();

        if (nameValue && emailValue && messageValue) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    nameField.addEventListener('input', checkFields);
    emailField.addEventListener('input', checkFields);
    messageField.addEventListener('input', checkFields);

    // Initial check to ensure the submit button is disabled if fields are empty
    checkFields();

    // Add event listener to the submit button
    submitButton.addEventListener('click', function() {
        console.log('Submit button clicked'); // Добавляем console.log для диагностики
        if (!submitButton.disabled) {
            window.location.href = 'submitted.html';
        }
        
    });
// Add event listener to all buttons except submit
document.querySelectorAll('button:not(#submitButton)').forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = 'working.html';
    });
});
});
