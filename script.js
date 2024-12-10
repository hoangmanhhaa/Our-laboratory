// Thêm hiệu ứng menu
document.addEventListener('DOMContentLoaded', function() {
    // Hiệu ứng cho menu
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.transition = 'color 0.3s';
        });
    });

    // Hiệu ứng cuộn trang mượt
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Thêm nút "Về đầu trang"
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.style.display = 'none';
    document.body.appendChild(backToTop);

    // Hiển thị/ẩn nút "Về đầu trang"
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    // Xử lý khi nhấn nút "Về đầu trang"
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
