/*
==============================================
LearnSmart Academy - Course Filter & Search
==============================================
*/

// Sample course data
const coursesData = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp",
        category: "web-development",
        level: "beginner",
        price: 2999,
        rating: 4.8,
        reviews: 12456,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
        badge: "Bestseller",
        badgeClass: "success",
        instructor: "Raj Kumar",
        duration: "45 hours"
    },
    {
        id: 2,
        title: "Data Science Masterclass",
        category: "data-science",
        level: "intermediate",
        price: 4999,
        rating: 4.9,
        reviews: 8234,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        badge: "New",
        badgeClass: "warning",
        instructor: "Priya Sharma",
        duration: "60 hours"
    },
    {
        id: 3,
        title: "Digital Marketing Complete",
        category: "digital-marketing",
        level: "all-levels",
        price: 1999,
        rating: 4.7,
        reviews: 9876,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        badge: null,
        instructor: "Amit Gupta",
        duration: "35 hours"
    },
    {
        id: 4,
        title: "Python Programming Complete",
        category: "web-development",
        level: "beginner",
        price: 2499,
        rating: 4.6,
        reviews: 15234,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
        badge: null,
        instructor: "Vikram Singh",
        duration: "40 hours"
    },
    {
        id: 5,
        title: "UI/UX Design Mastery",
        category: "design",
        level: "intermediate",
        price: 3499,
        rating: 4.8,
        reviews: 6789,
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=250&fit=crop",
        badge: "Trending",
        badgeClass: "info",
        instructor: "Sneha Reddy",
        duration: "50 hours"
    },
    {
        id: 6,
        title: "Machine Learning A-Z",
        category: "data-science",
        level: "advanced",
        price: 5999,
        rating: 4.9,
        reviews: 11345,
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop",
        badge: null,
        instructor: "Dr. Anil Kapoor",
        duration: "80 hours"
    },
    {
        id: 7,
        title: "React.js Complete Guide",
        category: "web-development",
        level: "intermediate",
        price: 3299,
        rating: 4.7,
        reviews: 8945,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
        badge: "Bestseller",
        badgeClass: "success",
        instructor: "Raj Kumar",
        duration: "38 hours"
    },
    {
        id: 8,
        title: "SEO & Content Marketing",
        category: "digital-marketing",
        level: "beginner",
        price: 1499,
        rating: 4.5,
        reviews: 5678,
        image: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=400&h=250&fit=crop",
        badge: null,
        instructor: "Amit Gupta",
        duration: "25 hours"
    },
    {
        id: 9,
        title: "Business Analytics with Excel",
        category: "business",
        level: "beginner",
        price: 1799,
        rating: 4.6,
        reviews: 7234,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        badge: null,
        instructor: "Divya Iyer",
        duration: "30 hours"
    },
    {
        id: 10,
        title: "Android App Development",
        category: "web-development",
        level: "intermediate",
        price: 3999,
        rating: 4.7,
        reviews: 6543,
        image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=400&h=250&fit=crop",
        badge: "New",
        badgeClass: "warning",
        instructor: "Arjun Patel",
        duration: "55 hours"
    },
    {
        id: 11,
        title: "Graphic Design Fundamentals",
        category: "design",
        level: "beginner",
        price: 2299,
        rating: 4.8,
        reviews: 8976,
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=250&fit=crop",
        badge: null,
        instructor: "Sneha Reddy",
        duration: "32 hours"
    },
    {
        id: 12,
        title: "Financial Management",
        category: "business",
        level: "intermediate",
        price: 2799,
        rating: 4.5,
        reviews: 4321,
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
        badge: null,
        instructor: "Rohit Sharma",
        duration: "42 hours"
    }
];

// Filter state
let filters = {
    categories: [],
    levels: [],
    priceRange: 'all',
    search: '',
    sortBy: 'popularity'
};

// Initialize filters on page load
document.addEventListener('DOMContentLoaded', function() {
    renderCourses(coursesData);
    setupFilterListeners();
    updateCourseCount(coursesData.length);
});

// Setup all filter event listeners
function setupFilterListeners() {
    // Category checkboxes
    document.querySelectorAll('input[type="checkbox"][id^="webdev"], input[type="checkbox"][id^="datascience"], input[type="checkbox"][id^="marketing"], input[type="checkbox"][id^="business"], input[type="checkbox"][id^="design"]').forEach(checkbox => {
        checkbox.addEventListener('change', handleCategoryFilter);
    });
    
    // Level checkboxes
    document.querySelectorAll('input[type="checkbox"][id^="beginner"], input[type="checkbox"][id^="intermediate"], input[type="checkbox"][id^="advanced"]').forEach(checkbox => {
        checkbox.addEventListener('change', handleLevelFilter);
    });
    
    // Price radio buttons
    document.querySelectorAll('input[type="radio"][name="price"]').forEach(radio => {
        radio.addEventListener('change', handlePriceFilter);
    });
    
    // Search input
    const searchInput = document.getElementById('searchCourses');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Sort dropdown
    const sortSelect = document.querySelector('select.form-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSort);
    }
    
    // Apply filters button
    const applyBtn = document.querySelector('.btn-primary.w-100');
    if (applyBtn) {
        applyBtn.addEventListener('click', applyFilters);
    }
}

// Handle category filter
function handleCategoryFilter(e) {
    const category = e.target.id.replace('webdev', 'web-development')
                                .replace('datascience', 'data-science')
                                .replace('marketing', 'digital-marketing');
    
    if (e.target.checked) {
        if (!filters.categories.includes(category)) {
            filters.categories.push(category);
        }
    } else {
        filters.categories = filters.categories.filter(c => c !== category);
    }
}

// Handle level filter
function handleLevelFilter(e) {
    const level = e.target.id;
    
    if (e.target.checked) {
        if (!filters.levels.includes(level)) {
            filters.levels.push(level);
        }
    } else {
        filters.levels = filters.levels.filter(l => l !== level);
    }
}

// Handle price filter
function handlePriceFilter(e) {
    filters.priceRange = e.target.id;
}

// Handle search
function handleSearch(e) {
    filters.search = e.target.value.toLowerCase();
    applyFilters();
}

// Handle sort
function handleSort(e) {
    filters.sortBy = e.target.value;
    applyFilters();
}

// Apply all filters
function applyFilters() {
    let filteredCourses = [...coursesData];
    
    // Filter by category
    if (filters.categories.length > 0) {
        filteredCourses = filteredCourses.filter(course => 
            filters.categories.includes(course.category)
        );
    }
    
    // Filter by level
    if (filters.levels.length > 0) {
        filteredCourses = filteredCourses.filter(course => 
            filters.levels.includes(course.level) || course.level === 'all-levels'
        );
    }
    
    // Filter by price
    if (filters.priceRange === 'free') {
        filteredCourses = filteredCourses.filter(course => course.price === 0);
    } else if (filters.priceRange === 'paid') {
        filteredCourses = filteredCourses.filter(course => course.price > 0);
    }
    
    // Filter by search
    if (filters.search) {
        filteredCourses = filteredCourses.filter(course =>
            course.title.toLowerCase().includes(filters.search) ||
            course.category.toLowerCase().includes(filters.search) ||
            course.instructor.toLowerCase().includes(filters.search)
        );
    }
    
    // Sort courses
    filteredCourses = sortCourses(filteredCourses, filters.sortBy);
    
    // Render filtered courses
    renderCourses(filteredCourses);
    updateCourseCount(filteredCourses.length);
}

// Sort courses
function sortCourses(courses, sortBy) {
    const sorted = [...courses];
    
    switch(sortBy) {
        case 'Sort by: Popularity':
            return sorted.sort((a, b) => b.reviews - a.reviews);
        case 'Price: Low to High':
            return sorted.sort((a, b) => a.price - b.price);
        case 'Price: High to Low':
            return sorted.sort((a, b) => b.price - a.price);
        case 'Rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'Newest':
            return sorted.reverse();
        default:
            return sorted.sort((a, b) => b.reviews - a.reviews);
    }
}

// Render courses to the grid
function renderCourses(courses) {
    const grid = document.getElementById('coursesGrid');
    if (!grid) return;
    
    if (courses.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-4x text-muted mb-3"></i>
                <h4 class="fw-bold mb-2">No Courses Found</h4>
                <p class="text-muted">Try adjusting your filters or search terms</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = courses.map(course => createCourseCard(course)).join('');
}

// Create course card HTML
function createCourseCard(course) {
    const badge = course.badge ? 
        `<span class="badge bg-${course.badgeClass} position-absolute top-0 start-0 m-2">${course.badge}</span>` : '';
    
    const stars = '★'.repeat(Math.floor(course.rating)) + 
                  (course.rating % 1 >= 0.5 ? '½' : '') +
                  '☆'.repeat(5 - Math.ceil(course.rating));
    
    const levelBadge = course.level === 'beginner' ? 'primary' :
                       course.level === 'intermediate' ? 'warning' :
                       course.level === 'advanced' ? 'danger' : 'success';
    
    const levelText = course.level.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    return `
        <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm course-card">
                <div class="position-relative">
                    <img src="${course.image}" 
                         class="card-img-top" alt="${course.title}" 
                         style="height: 180px; object-fit: cover;">
                    ${badge}
                </div>
                <div class="card-body">
                    <span class="badge bg-${levelBadge} mb-2">${levelText}</span>
                    <h6 class="fw-bold mb-2">${course.title}</h6>
                    <div class="d-flex align-items-center mb-2">
                        <div class="text-warning me-2">
                            ${'<i class="fas fa-star"></i>'.repeat(Math.floor(course.rating))}
                            ${course.rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                            ${'<i class="far fa-star"></i>'.repeat(5 - Math.ceil(course.rating))}
                        </div>
                        <small class="text-muted">${course.rating} (${course.reviews.toLocaleString('en-IN')})</small>
                    </div>
                    <div class="mt-auto">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="h6 text-primary mb-0">₹${course.price.toLocaleString('en-IN')}</span>
                        </div>
                        <a href="course-details.html" class="btn btn-primary w-100">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Update course count display
function updateCourseCount(count) {
    const countDisplay = document.querySelector('.text-muted.mb-0');
    if (countDisplay) {
        countDisplay.textContent = `Showing 1-${Math.min(count, 12)} of ${count} courses`;
    }
}

// Add smooth scroll animation for course cards
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .course-card {
            transition: all 0.3s ease;
        }
        .course-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.2) !important;
        }
    `;
    document.head.appendChild(style);
});

