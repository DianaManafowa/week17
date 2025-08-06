// Классы
class Transport {
    constructor({ type, price, brand, image }) {
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.image = image;
    }

    getPriceFormatted() {
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            maximumFractionDigits: 0
        }).format(this.price);
    }

    render() {
        return `
            <div class="transport-card">
                <img src="${this.image}" alt="${this.brand}">
                <h2>${this.brand}</h2>
                <p>Тип: ${this.type}</p>
                <p class="price">${this.getPriceFormatted()}</p>
        `;
    }
}

class Car extends Transport {
    constructor({ doors, ...props }) {
        super(props);
        this.doors = doors;
    }

    render() {
        return `
            ${super.render()}
            <p>Количество дверей: ${this.doors}</p>
            </div>
        `;
    }
}

class Bike extends Transport {
    constructor({ maxSpeed, ...props }) {
        super(props);
        this.maxSpeed = maxSpeed;
    }

    render() {
        return `
            ${super.render()}
            <p>Макс. скорость: ${this.maxSpeed} км/ч</p>
            </div>
        `;
    }
}

// Данные
const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    // ... остальные данные из задания
];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('transport-container');
    
    data.forEach(item => {
        let transport;
        
        if (item.type === 'car') {
            transport = new Car(item);
        } else if (item.type === 'bike') {
            transport = new Bike(item);
        }
        
        container.insertAdjacentHTML('beforeend', transport.render());
    });
});