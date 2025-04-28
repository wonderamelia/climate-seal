// 语言切换功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取语言切换按钮
    const zhBtn = document.getElementById('zh-btn');
    const enBtn = document.getElementById('en-btn');
    
    // 切换到中文
    zhBtn.addEventListener('click', function() {
        document.body.classList.remove('en');
        zhBtn.classList.add('active');
        enBtn.classList.remove('active');
        localStorage.setItem('language', 'zh');
    });
    
    // 切换到英文
    enBtn.addEventListener('click', function() {
        document.body.classList.add('en');
        enBtn.classList.add('active');
        zhBtn.classList.remove('active');
        localStorage.setItem('language', 'en');
    });
    
    // 检查本地存储中的语言设置
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'en') {
        document.body.classList.add('en');
        enBtn.classList.add('active');
        zhBtn.classList.remove('active');
    }
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 