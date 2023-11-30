document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle active class for main tabs
    function toggleMainTabs(target) {
        document.querySelectorAll('.main-tabs a').forEach(function (tab) {
            tab.classList.remove('active');
        });
        document.querySelector('.main-tabs a[data-target="' + target + '"]').classList.add('active');

        // Toggle active class for corresponding tab content
        document.querySelectorAll('.tab-content[data-tab="main"]').forEach(function (content) {
            content.classList.remove('active');
        });
        document.querySelector('.tab-content[data-tab="main"][id="' + target + '"]').classList.add('active');
    }

    // Function to toggle active class for nested tabs
    function toggleNestedTabs(target) {
        document.querySelectorAll('.nest-tabs a').forEach(function (tab) {
            tab.classList.remove('active');
        });
        document.querySelector('.nest-tabs a[data-target="' + target + '"]').classList.add('active');

        // Toggle active class for corresponding nested tab content
        document.querySelectorAll('.tab-content[data-tab="nest"]').forEach(function (content) {
            content.classList.remove('active');
        });
        document.querySelector('.tab-content[data-tab="nest"][id="' + target + '"]').classList.add('active');
    }

    // Function to initialize Masonry
    function initializeMasonry() {
        var masonryGrid = document.querySelector('.masonry-grid');
        var msnry = new Masonry(masonryGrid, {
            itemSelector: '.masonry-item',
            columnWidth: '.masonry-sizer',
            percentPosition: true,
        });
    }

    // Event listener for main tabs
    document.querySelectorAll('.main-tabs a').forEach(function (tab) {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            var target = this.getAttribute('data-target');
            toggleMainTabs(target);
        });
    });

    // Event listener for nested tabs
    document.querySelectorAll('.nest-tabs a').forEach(function (tab) {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            var target = this.getAttribute('data-target');
            toggleNestedTabs(target);
        });
    });

    // Event listener for galeria to initialize Masonry
    document.querySelector('[data-target="galeria"]').addEventListener('click', function (e) {
        e.preventDefault();
        initializeMasonry();
        toggleNestedTabs('tab-kids'); // Set the default active nested tab
    });

    // Set default active main tab
    toggleMainTabs('historia');
});
