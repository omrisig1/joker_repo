document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const randomActivityInput = document.getElementById('randomActivity');

    generateBtn.addEventListener('click', async () => {
        const response = await fetch('/generate');
        const data = await response.json();
        const activity = data.activity; // Access the 'activity' property
        randomActivityInput.value = activity; // Assign the 'activity' value to the input element
    });
});