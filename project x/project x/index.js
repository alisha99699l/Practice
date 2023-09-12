
        const chocolates = [
            { name: 'Chocolate 1', price: 2.50 },
            { name: 'Chocolate 2', price: 2.00 },
            { name: 'Chocolate 3', price: 3.00 },
            { name: 'Chocolate 4', price: 1.75 },
            { name: 'Chocolate 5', price: 2.25 },
            { name: 'Chocolate 6', price: 2.90 },
            { name: 'Chocolate 7', price: 1.50 },
            { name: 'Chocolate 8', price: 2.75 },
            { name: 'Chocolate 9', price: 7 },
            { name: 'Chocolate 10', price: 8.75 },
            { name: 'Chocolate 11', price: 2 },
            { name: 'Chocolate 12', price: 2.7 },
            { name: 'Chocolate 13', price: 2.5 },
        ];

        const chocolateList = document.getElementById('chocolate-list');
        const selectedChocolates = document.getElementById('selected-chocolates');
        const totalPriceSpan = document.getElementById('total-price');

        let selectedItems = [];
        let totalPrice = 0;

        function updateTotalPrice() {
            totalPrice = selectedItems.reduce((total, item) => total + item.price, 0);
            totalPriceSpan.textContent = totalPrice.toFixed(2);
        }

        function selectChocolate(chocolate) {
            if (selectedItems.length < 8) {
                selectedItems.push(chocolate);
                updateTotalPrice();
                renderSelectedChocolates();
            } else {
                alert('You can only select up to 8 chocolates.');
            }
        }

        function renderChocolateList() {
            chocolates.forEach(chocolate => {
                const chocolateItem = document.createElement('div');
                chocolateItem.classList.add('chocolate-item');
                chocolateItem.textContent = `${chocolate.name} - $${chocolate.price.toFixed(2)}`;
                chocolateItem.addEventListener('click', () => selectChocolate(chocolate));
                chocolateList.appendChild(chocolateItem);
            });
        }

        function renderSelectedChocolates() {
            selectedChocolates.innerHTML = '';
            selectedItems.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
                selectedChocolates.appendChild(listItem);
            });
        }

        renderChocolateList();
   