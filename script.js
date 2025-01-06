// Toggle Navigation Menu for Mobile View
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-links_visible');
});

// Smooth Scrolling for Navigation Links
const links = document.querySelectorAll('.nav-links a');

for (const link of links) {
    link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
    });
}

// Dynamically Load Blog Posts
const blogPostsContainer = document.querySelector('.blog-posts');

const blogPosts = [
    {
        title: 'Understanding Responsive Web Design',
        image: 'images/responsive-design.jpg',
        excerpt: 'Learn the principles of responsive web design and how to apply them to create adaptable web pages.',
        link: '#'
    },
    {
        title: 'JavaScript ES6 Features You Should Know',
        image: 'images/es6-features.jpg',
        excerpt: 'Explore the essential ES6 features that modern JavaScript developers should be familiar with.',
        link: '#'
    },
    {
        title: 'CSS Grid vs. Flexbox: A Comparative Guide',
        image: 'images/css-grid-flexbox.jpg',
        excerpt: 'Understand the differences between CSS Grid and Flexbox, and when to use each layout system.',
        link: '#'
    }
];

function loadBlogPosts() {
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');

        postElement.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <div class="blog-post-content">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="${post.link}" class="read-more">Read More</a>
            </div>
        `;

        blogPostsContainer.appendChild(postElement);
    });
}

// Initialize Functions
document.addEventListener('DOMContentLoaded', () => {
    loadBlogPosts();
});
