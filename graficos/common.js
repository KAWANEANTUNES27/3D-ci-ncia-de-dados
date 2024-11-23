// Function to get a CSS variable value with a fallback option
const getCSS = (variavel, element = document.body, fallback = '') => {
    const styles = getComputedStyle(element);
    const value = styles.getPropertyValue(variavel).trim();
    return value !== '' ? value : fallback;
}

// Configuration object for 'tick' settings
const tickConfig = {
    family: getCSS('--font', document.body, 'Arial, sans-serif'), // Fallback to Arial if --font is not defined
    size: 16, // Static size
    color: getCSS('--primary-color', document.body, '#000000') // Fallback to black if --primary-color is not defined
}

// Example of how to get CSS variables from other elements, like a specific div:
const customDivConfig = {
    family: getCSS('--font', document.querySelector('.custom-div'), 'Verdana, sans-serif'),
    size: 14,
    color: getCSS('--primary-color', document.querySelector('.custom-div'), '#FF5733')
}

// Exporting functions and configurations
export { getCSS, tickConfig, customDivConfig };
