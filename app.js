// Retrieve DOM elements
const randomizeButton = document.getElementById('randomize');
const submitButton = document.getElementById('submit');

// Array of predefined poster objects
const posters = [
    {
        image: 'https://media.istockphoto.com/id/541001004/photo/business-concepts-unlock-your-potential.jpg?s=612x612&w=0&k=20&c=eD33GB-UegPPxrd2nP5822LDzLMCznnihpP5ueq0dVk=',
        title: 'Unlock Your Potential',
        quote: 'Believe you can and you\'re halfway there. - Theodore Roosevelt'
    },
    {
        image: 'https://cdn11.bigcommerce.com/s-xxn06a469f/images/stencil/1280x1280/products/3869/5970/DL2004__83135.1550092384.jpg?c=2',
        title: 'Embrace the Journey',
        quote: 'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt'
    },
    {
        image: 'https://static.wixstatic.com/media/c1d7cf_3f264a3f4e1649cf8cc0b01dfc088800~mv2.png',
        title: 'Rise Above',
        quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill'
    },
    {
        image: 'https://i.etsystatic.com/10082967/r/il/6fdda0/1771896354/il_fullxfull.1771896354_k30e.jpg',
        title: 'Chase Your Dreams',
        quote: 'Don\'t watch the clock; do what it does. Keep going. - Sam Levenson'
    },
    {
        image: 'https://media.istockphoto.com/id/636557644/vector/be-fearless-postcard.jpg?s=612x612&w=0&k=20&c=MsHTrr9n00CsztB7OsKekg9yXKD_3Ige2QhTf5341j0=',
        title: 'Be Fearless',
        quote: 'In the middle of every difficulty lies opportunity. - Albert Einstein'
    }
    // Add more poster objects as needed
];

// Event listener for randomize button
randomizeButton.addEventListener('click', generateRandomPoster);

// Event listener for submit button
submitButton.addEventListener('click', generateCustomPoster);

// Function to generate a random poster
function generateRandomPoster() {
    const randomIndex = Math.floor(Math.random() * posters.length);
    const randomPoster = posters[randomIndex];
    updatePoster(randomPoster);
}

// Function to generate a custom poster
function generateCustomPoster(event) {
    event.preventDefault();
    const quote = document.getElementById('poster-form-quote').value;
    const title = document.getElementById('poster-form-title').value;
    
    const customPoster = {
        image: 'https://i.pinimg.com/originals/3d/61/73/3d6173df3343d11273deab8e842c0f4b.jpg',
        title: title,
        quote: quote
    };
    updatePoster(customPoster);
}

// Function to update the poster content in the DOM
function updatePoster(poster) {
    const posterImage = document.getElementById('poster-image');
    const posterTitle = document.getElementById('poster-title');
    const posterQuote = document.getElementById('poster-quote');

    posterImage.src = poster.image;
    posterTitle.textContent = poster.title;
    posterQuote.textContent = poster.quote;
}
