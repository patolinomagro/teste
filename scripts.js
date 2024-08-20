const pizzas = {
    '!1': { name: 'Margherita', ingredients: 'molho de tomate, mozzarella, manjericão' },
    '!2': { name: 'Pepperoni', ingredients: 'molho de tomate, mozzarella, pepperoni' },
    '!3': { name: 'Quatro Queijos', ingredients: 'molho de tomate, mozzarella, parmesão, gorgonzola, provolone' },
    '!4': { name: 'Calabresa', ingredients: 'molho de tomate, mozzarella, calabresa, cebola' },
    '!5': { name: 'Portuguesa', ingredients: 'molho de tomate, mozzarella, presunto, queijo, ovos, azeitonas' },
    '!6': { name: 'Vegetariana', ingredients: 'molho de tomate, mozzarella, pimentão, cebola, cogumelos, azeitonas' },
    '!7': { name: 'Frango com Catupiry', ingredients: 'molho de tomate, mozzarella, frango desfiado, catupiry' },
    '!8': { name: 'Napolitana', ingredients: 'molho de tomate, mozzarella, anchovas, azeitonas' },
    '!9': { name: 'Carbonara', ingredients: 'molho branco, mozzarella, bacon, parmesão' },
    '!10': { name: 'Havaiana', ingredients: 'molho de tomate, mozzarella, presunto, abacaxi' },
    '!11': { name: 'Alho e Óleo', ingredients: 'molho de tomate, mozzarella, alho, azeite' },
    '!12': { name: 'Mexicana', ingredients: 'molho de tomate, mozzarella, carne moída, jalapeños, cebola' }
};

function showPizza() {
    const code = document.getElementById('pizzaCode').value.trim();
    const pizzaInfo = document.getElementById('pizzaInfo');
    
    if (pizzas[code]) {
        const pizza = pizzas[code];
        pizzaInfo.innerHTML = `
            <h3>${pizza.name}</h3>
            <p>Ingredientes: ${pizza.ingredients}</p>
        `;
    } else {
        pizzaInfo.innerHTML = '<p>Pizza não encontrada. Por favor, insira um código válido.</p>';
    }
}
