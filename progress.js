// 图表初始化功能
function initCharts() {
    // 检查Chart是否已加载
    if (typeof Chart === 'undefined') {
        console.error('Chart.js 未加载');
        return;
    }
    
    // 练习完成情况图表
    const progressCtx = document.getElementById('progressChart');
    if (progressCtx) {
        const progressChart = new Chart(progressCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['已完成', '未完成'],
                datasets: [{
                    data: [15, 85],
                    backgroundColor: ['#e83e8c', '#f1f3f4'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.raw + '%';
                            }
                        }
                    }
                }
            }
        });
    }
    
    // 学习时间统计图表
    const studyTimeCtx = document.getElementById('studyTimeChart');
    if (studyTimeCtx) {
        const studyTimeChart = new Chart(studyTimeCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                datasets: [{
                    label: '学习时间 (分钟)',
                    data: [45, 30, 60, 40, 75, 90, 65],
                    backgroundColor: '#6f42c1',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

// 初始化学习进度页面功能
function initProgressFeatures() {
    // 等待DOM加载完成后初始化图表
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCharts);
    } else {
        initCharts();
    }
}

// 当DOM加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProgressFeatures);
} else {
    initProgressFeatures();
}