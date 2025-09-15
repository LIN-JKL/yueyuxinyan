// 练习标签切换功能
function setupPracticeTabs() {
    const clozeTab = document.getElementById('cloze-tab');
    const sentenceTab = document.getElementById('sentence-tab');
    const clozeExercise = document.getElementById('cloze-exercise');
    const sentenceExercise = document.getElementById('sentence-exercise');
    const clozeExplanation = document.getElementById('cloze-explanation');
    const sentenceExplanation = document.getElementById('sentence-explanation');
    
    if (!clozeTab || !sentenceTab || !clozeExercise || !sentenceExercise) return;
    
    clozeTab.addEventListener('click', function() {
        // 激活当前标签
        clozeTab.classList.add('bg-primary', 'text-white');
        clozeTab.classList.remove('text-gray-600', 'hover:bg-gray-200');
        
        // 取消激活另一个标签
        sentenceTab.classList.remove('bg-primary', 'text-white');
        
        // 隐藏句子排序相关内容
        sentenceExercise.classList.add('hidden');
        sentenceExplanation.classList.add('hidden');
        
        // 显示填空练习相关内容
        clozeExercise.classList.remove('hidden');
    });
    
    sentenceTab.addEventListener('click', function() {
        // 激活当前标签
        sentenceTab.classList.add('bg-primary', 'text-white');
        sentenceTab.classList.remove('text-gray-600', 'hover:bg-gray-200');
        
        // 取消激活另一个标签
        clozeTab.classList.remove('bg-primary', 'text-white');
        clozeTab.classList.add('text-gray-600', 'hover:bg-gray-200');
        
        // 隐藏填空练习相关内容
        clozeExercise.classList.add('hidden');
        clozeExplanation.classList.add('hidden');
        
        // 显示句子排序相关内容
        sentenceExercise.classList.remove('hidden');
    });
}

// 练习答案提交功能
function setupPracticeSubmission() {
    const submitClozeBtn = document.getElementById('submit-cloze-btn');
    const nextClozeBtn = document.getElementById('next-cloze-btn');
    const submitSentenceBtn = document.getElementById('submit-sentence-btn');
    const nextSentenceBtn = document.getElementById('next-sentence-btn');
    const clozeExplanation = document.getElementById('cloze-explanation');
    const sentenceExplanation = document.getElementById('sentence-explanation');
    const sentenceTab = document.getElementById('sentence-tab');
    
    // 提交填空答案
    if (submitClozeBtn && clozeExplanation) {
        submitClozeBtn.addEventListener('click', function() {
            // 显示答案解析
            clozeExplanation.classList.remove('hidden');
        });
    }
    
    // 换一题按钮
    if (nextClozeBtn && clozeExplanation) {
        nextClozeBtn.addEventListener('click', function() {
            // 隐藏答案解析
            clozeExplanation.classList.add('hidden');
        });
    }
    
    // 提交句子排序答案
    if (submitSentenceBtn && sentenceExplanation) {
        submitSentenceBtn.addEventListener('click', function() {
            // 显示答案解析
            sentenceExplanation.classList.remove('hidden');
        });
    }
    
    // 换一题按钮
    if (nextSentenceBtn && sentenceExplanation && sentenceTab) {
        nextSentenceBtn.addEventListener('click', function() {
            // 隐藏答案解析
            sentenceExplanation.classList.add('hidden');
            sentenceTab.classList.add('text-gray-600', 'hover:bg-gray-200');
        });
    }
}

// 初始化练习页面功能
function initPracticeFeatures() {
    setupPracticeTabs();
    setupPracticeSubmission();
}

// 当DOM加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPracticeFeatures);
} else {
    initPracticeFeatures();
}