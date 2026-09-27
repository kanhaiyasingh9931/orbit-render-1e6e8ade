// State Management
let count = 0;

// DOM Elements
const root = document.getElementById('root');

// UI Components
function createDisplay() {
    const display = document.createElement('div');
    display.id = 'count-display';
    display.textContent = count;
    return display;
}

function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Increment';
    return button;
}

// Interaction Logic
function handleIncrement() {
    count += 1;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('count-display');
    if (display) {
        display.textContent = count;
    }
}

// Initialization
function init() {
    // Clear root
    root.innerHTML = '';

    // Create container
    const container = document.createElement('div');
    container.className = 'container';

    // Create heading
    const heading = document.createElement('h1');
    heading.textContent = 'Counter App';

    // Create display
    const display = createDisplay();

    // Create button
    const button = createButton();
    button.addEventListener('click', handleIncrement);

    // Assemble UI
    container.appendChild(heading);
    container.appendChild(display);
    container.appendChild(button);

    root.appendChild(container);
}

// Start the app
init();