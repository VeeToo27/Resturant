document.addEventListener('DOMContentLoaded', () => {
    // Select all the add and remove buttons
    const addItemButtons = document.querySelectorAll('.add-item');
    const removeItemButtons = document.querySelectorAll('.remove-item');
    const itemListContainer = document.querySelector('.item-names');

    // Function to update the item names and quantities
    const updateItemNames = () => {
        let itemNamesHTML = ''; // Initialize an empty string for item names HTML
        document.querySelectorAll('.menu-item').forEach(item => {
            const itemName = item.querySelector('h3').textContent;
            const itemCount = parseInt(item.querySelector('.item-count').textContent);
            if (itemCount > 0) {
                itemNamesHTML += `${itemCount}x ${itemName}, `;
            }
        });
        // Remove the trailing comma and space
        itemNamesHTML = itemNamesHTML.slice(0, -2);
        itemListContainer.textContent = itemNamesHTML; // Set the item names HTML
    };

    // Add event listeners to all add buttons
    addItemButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemCountElement = button.previousElementSibling;
            let itemCount = parseInt(itemCountElement.textContent);
            itemCountElement.textContent = ++itemCount;
            updateItemNames();
        });
    });

    // Add event listeners to all remove buttons
    removeItemButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemCountElement = button.nextElementSibling;
            let itemCount = parseInt(itemCountElement.textContent);
            if (itemCount > 0) {
                itemCountElement.textContent = --itemCount;
                updateItemNames();
            }
        });
    });
});
