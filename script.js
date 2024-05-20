document.addEventListener('DOMContentLoaded', () => {
    const addItemButtons = document.querySelectorAll('.add-item');
    const removeItemButtons = document.querySelectorAll('.remove-item');
    const itemListContainer = document.querySelector('.item-names');
    const checkoutButton = document.getElementById('checkout-button');

    const updateItemNames = () => {
        let itemNamesHTML = ''; 
        document.querySelectorAll('.menu-item').forEach(item => {
            const itemName = item.querySelector('h3').textContent;
            const itemCount = parseInt(item.querySelector('.item-count').textContent);
            if (itemCount > 0) {
                itemNamesHTML += `${itemCount}x ${itemName}, `;
            }
        });
        itemNamesHTML = itemNamesHTML.slice(0, -2);
        itemListContainer.textContent = itemNamesHTML; 
    };

    addItemButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemCountElement = button.parentElement.querySelector('.item-count');
            let itemCount = parseInt(itemCountElement.textContent);
            itemCountElement.textContent = ++itemCount;
            updateItemNames();
        });
    });

    removeItemButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemCountElement = button.parentElement.querySelector('.item-count');
            let itemCount = parseInt(itemCountElement.textContent);
            if (itemCount > 0) {
                itemCountElement.textContent = --itemCount;
                updateItemNames();
            }
        });
    });

    checkoutButton.addEventListener('click', () => {
        let selectedItems = [];
        document.querySelectorAll('.menu-item').forEach(item => {
            const itemName = item.querySelector('h3').textContent;
            const itemCount = parseInt(item.querySelector('.item-count').textContent);
            if (itemCount > 0) {
                selectedItems.push({ name: itemName, count: itemCount });
            }
        });

        if (selectedItems.length > 0) {
            // Use a placeholder URL for testing
            const placeholderURL = 'https://veetoo27.github.io/ResturantServer/'; 
            fetch(placeholderURL, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ items: selectedItems })
            })
            .then(response => response.text())
            .then(data => {
                alert(`Order confirmed: ${data}`);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while placing the order.');
            });
        } else {
            alert('No items selected.');
        }
    });
});

            alert('No items selected.');
        }
    });
});
