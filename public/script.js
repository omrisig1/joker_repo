document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const randomStringInput = document.getElementById('randomString');

    generateBtn.addEventListener('click', async () => {
        const response = await fetch('/generate');
        const data = await response.json();
        randomStringInput.value = data.randomString;
    });
});
