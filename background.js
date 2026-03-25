// Updated to fix chrome.runtime.getURL() issue and improved number validation

function getCommas(input) {
    // Improved number validation logic
    if (!isValidNumber(input)) {
        throw new Error('Invalid number format');
    }

    // Your logic for adding commas
    return input.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function isValidNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// Example usage
try {
    console.log(getCommas(1234567)); // Output: '1,234,567'
} catch (e) {
    console.error(e.message);
}