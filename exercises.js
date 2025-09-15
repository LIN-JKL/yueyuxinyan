// Bank Cloze 填空练习数据
// 填空练习数据
const clozeExercises = [
    {
        id: 1,
        sentence: "今日天气好（  ），不如我哋去公园（  ）。",
        blanks: 2,
        options: ["mat1 (热)", "mou5 (无)", "lek1 (叻)", "waak6 (滑)", "taai3 (晒)"],
        answers: ["mat1 (热)", "taai3 (晒)"]
    },
    {
        id: 2,
        sentence: "呢本书好（  ），我睇咗三次。",
        blanks: 1,
        options: ["ho2 (好)", "sing3 (成)", "hou2 (好)", "sin1 (新)", "fun6 (闷)"],
        answers: ["hou2 (好)"]
    },
    {
        id: 3,
        sentence: "你（  ）唔（  ）去睇电影？",
        blanks: 2,
        options: ["jyun4 (愿)", "soeng2 (想)", "dak1 (得)", "m4 (唔)", "sik1 (识)"],
        answers: ["soeng2 (想)", "m4 (唔)"]
    },
    {
        id: 4,
        sentence: "佢份人好（  ），成日帮人。",
        blanks: 1,
        options: ["hou2 (好)", "hoeng1 (香)", "bat1 (拔)", "bin6 (便)", "faai3 (快)"],
        answers: ["hou2 (好)"]
    },
    {
        id: 5,
        sentence: "呢度嘅野食好（  ），但系好（  ）。",
        blanks: 2,
        options: ["seoi2 (水)", "hou2 (好)", "gui2 (贵)", "fan1 (翻)", "sin1 (新)"],
        answers: ["hou2 (好)", "gui2 (贵)"]
    }
];

// 句子排序练习数据
const sentenceSortingExercises = [
    {
        id: 1,
        sentences: [
            "你今日返工忙唔忙啊？",
            "系啊，今日真系好忙。",
            "咁你今晚想唔想出去食饭？",
            "好啊，我哋去食火锅啦！"
        ],
        answerOrder: [0, 1, 2, 3]
    },
    {
        id: 2,
        sentences: [
            "请问，呢度点样去地铁站啊？",
            "你直行转左，再行大概500米就到啦。",
            "唔该晒你啊！",
            "唔使客气，再见！"
        ],
        answerOrder: [0, 1, 2, 3]
    },
    {
        id: 3,
        sentences: [
            "早晨，请问有咩可以帮到你？",
            "我想睇下呢件衫，可唔可以试下？",
            "当然可以，试衣间响果边。",
            "好嘅，唔该晒。"
        ],
        answerOrder: [0, 1, 2, 3]
    },
    {
        id: 4,
        sentences: [
            "你最近有无睇过部新电影？",
            "未啊，你有冇兴趣一齐去睇？",
            "好啊，听日下昼得唔得？",
            "得，听日三点我嚟接你。"
        ],
        answerOrder: [0, 1, 2, 3]
    },
    {
        id: 5,
        sentences: [
            "呢个蛋糕系你整嘅？",
            "系啊，第一次整，唔知好唔好食。",
            "好味啊，你真系好叻！",
            "多谢赞赏，你钟意就好。"
        ],
        answerOrder: [0, 1, 2, 3]
    }
];

// 当前练习索引
let currentClozeIndex = 0;
let currentSentenceIndex = 0;

// 用户答案存储
let userAnswers = {
    cloze: [],
    sentence: []
};

// 初始化Bank Cloze练习
function initClozeExercise() {
    const exercise = clozeExercises[currentClozeIndex];
    
    // 更新句子
    const sentenceElement = document.getElementById('cloze-sentence');
    sentenceElement.textContent = exercise.sentence;
    
    // 更新选项
    const optionsContainer = document.getElementById('cloze-options');
    optionsContainer.innerHTML = '';
    
    exercise.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'cloze-option px-3 py-2 bg-white border border-gray-200 rounded-md text-gray-700 hover:border-primary hover:text-primary transition-colors duration-200 text-center';
            button.textContent = option;
            
            button.addEventListener('click', function() {
                // 找到下一个空格
                const currentText = sentenceElement.textContent;
                const firstBlankIndex = currentText.indexOf('（  ）');
                
                if (firstBlankIndex !== -1) {
                    // 添加点击后的颜色加深效果
                    this.classList.add('bg-primary/10', 'border-primary', 'text-primary');
                    
                    // 替换空格为选项
                    const newText = currentText.replace('（  ）', `「${option}」`);
                    sentenceElement.textContent = newText;
                    
                    // 存储用户答案
                    if (!userAnswers.cloze[currentClozeIndex]) {
                        userAnswers.cloze[currentClozeIndex] = [];
                    }
                    userAnswers.cloze[currentClozeIndex].push(option);
                    
                    // 禁用已选择的选项
                    this.disabled = true;
                    
                    // 检查是否所有空格都已填满
                    if (!newText.includes('（  ）')) {
                        // 启用提交按钮
                        const submitButton = document.getElementById('submit-cloze-btn');
                        submitButton.disabled = false;
                    }
                }
            });
            
            optionsContainer.appendChild(button);
        });
    
    // 禁用提交按钮
    const submitButton = document.getElementById('submit-cloze-btn');
    submitButton.disabled = true;
    
    // 绑定换一题按钮
    const changeButton = document.getElementById('next-cloze-btn');
    changeButton.addEventListener('click', function() {
        nextClozeExercise();
    });
    
    // 绑定提交答案按钮
    submitButton.addEventListener('click', function() {
        checkClozeAnswer();
    });
}

// 初始化句子排序练习
function initSentenceSortingExercise() {
    const exercise = sentenceSortingExercises[currentSentenceIndex];
    
    // 随机打乱句子顺序
    const shuffledSentences = [...exercise.sentences].sort(() => Math.random() - 0.5);
    
    // 更新句子列表
    const sentencesContainer = document.getElementById('sortable-sentences');
    sentencesContainer.innerHTML = '';
    
    shuffledSentences.forEach((sentence, index) => {
        const sentenceItem = document.createElement('div');
        sentenceItem.className = 'sentence-item p-4 bg-white border border-gray-200 rounded-md cursor-move hover:border-primary transition-colors duration-200 flex items-center';
        sentenceItem.setAttribute('draggable', 'true');
        sentenceItem.setAttribute('data-index', index);
        
        sentenceItem.innerHTML = `
            <span class="sentence-number w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">${index + 1}</span>
            <p class="sentence-content text-gray-700">${sentence}</p>
        `;
        
        // 添加拖拽事件
        sentenceItem.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', this.getAttribute('data-index'));
            this.classList.add('opacity-50');
        });
        
        sentenceItem.addEventListener('dragend', function() {
            this.classList.remove('opacity-50');
        });
        
        sentenceItem.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
        
        sentenceItem.addEventListener('drop', function(e) {
            e.preventDefault();
            const draggedIndex = e.dataTransfer.getData('text/plain');
            const draggedElement = document.querySelector(`[data-index="${draggedIndex}"]`);
            
            // 插入到目标位置
            const container = this.parentElement;
            const children = Array.from(container.children);
            const dropIndex = children.indexOf(this);
            
            if (draggedElement !== this) {
                container.removeChild(draggedElement);
                container.insertBefore(draggedElement, children[dropIndex]);
                
                // 更新序号
                updateSentenceNumbers();
            }
        });
        
        sentencesContainer.appendChild(sentenceItem);
    });
    
    // 绑定换一题按钮
    const changeButton = document.getElementById('next-sentence-btn');
    changeButton.addEventListener('click', function() {
        nextSentenceExercise();
    });
    
    // 绑定提交答案按钮
    const submitButton = document.getElementById('submit-sentence-btn');
    submitButton.addEventListener('click', function() {
        checkSentenceAnswer();
    });
}

// 更新句子序号
function updateSentenceNumbers() {
    const sentenceItems = document.querySelectorAll('#sentence-tab .flex.flex-col.gap-3 > div');
    sentenceItems.forEach((item, index) => {
        const numberSpan = item.querySelector('span:first-child');
        numberSpan.textContent = index + 1;
    });
}

// 下一个Bank Cloze练习
function nextClozeExercise() {
    currentClozeIndex = (currentClozeIndex + 1) % clozeExercises.length;
    initClozeExercise();
}

// 下一个句子排序练习
function nextSentenceExercise() {
    currentSentenceIndex = (currentSentenceIndex + 1) % sentenceSortingExercises.length;
    initSentenceSortingExercise();
}

// 显示答案解析
function showAnswerContainer(tabId, title, content) {
    // 移除已存在的答案容器
    const existingContainer = document.querySelector(`#${tabId}-tab .answer-container`);
    if (existingContainer) {
        existingContainer.remove();
    }
    
    // 创建新的答案容器
    const answerContainer = document.createElement('div');
    answerContainer.className = 'answer-container fade-in';
    answerContainer.innerHTML = `
        <h4 class="answer-title">${title}</h4>
        <div class="answer-content">${content}</div>
    `;
    
    // 添加到对应的标签页
    const tabContent = document.querySelector(`#${tabId}-tab`);
    const practiceExample = document.querySelector(`#${tabId}-tab .mb-8`);
    practiceExample.parentNode.insertBefore(answerContainer, practiceExample.nextSibling);
    
    // 滚动到答案容器
    setTimeout(() => {
        answerContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// 检查Bank Cloze答案
function checkClozeAnswer() {
    const exercise = clozeExercises[currentClozeIndex];
    const userAnswersForThisExercise = userAnswers.cloze[currentClozeIndex] || [];
    
    let isCorrect = true;
    
    // 检查答案
    if (userAnswersForThisExercise.length !== exercise.answers.length) {
        isCorrect = false;
    } else {
        for (let i = 0; i < exercise.answers.length; i++) {
            if (userAnswersForThisExercise[i] !== exercise.answers[i]) {
                isCorrect = false;
                break;
            }
        }
    }
    
    // 构建正确句子
    const originalSentence = exercise.sentence;
    
    // 将（  ）替换为正确答案
    let formattedDisplaySentence = originalSentence;
    exercise.answers.forEach(answer => {
        formattedDisplaySentence = formattedDisplaySentence.replace('（  ）', `「${answer}」`);
    });
    
    // 更新用户界面上的答案显示
    const options = document.querySelectorAll('.cloze-option');
    options.forEach((option, index) => {
        const optionText = option.textContent;
        // 标记正确答案
        if (exercise.answers.includes(optionText)) {
            // 如果是正确答案但用户没有选择
            if (!option.disabled) {
                option.classList.add('bg-green-100', 'border-green-500');
            }
        } else if (option.disabled && !exercise.answers.includes(optionText)) {
            // 如果用户选择了错误的答案
            option.classList.add('bg-red-100', 'border-red-500');
        }
    });
    
    // 获取答案解析元素
    const explanationElement = document.getElementById('cloze-explanation');
    const correctAnswerElement = document.getElementById('correct-cloze-answer');
    
    // 设置正确答案
    correctAnswerElement.textContent = formattedDisplaySentence;
    
    // 显示答案解析
    explanationElement.classList.remove('hidden');
    
    // 显示结果提示
    const resultMessage = document.createElement('div');
    resultMessage.className = 'mt-4 p-3 rounded-md text-center';
    
    if (isCorrect) {
        resultMessage.classList.add('bg-green-100', 'text-green-800');
        resultMessage.textContent = '恭喜你，答案正确！';
    } else {
        resultMessage.classList.add('bg-red-100', 'text-red-800');
        resultMessage.textContent = '答案有错误，请查看解析并继续学习！';
    }
    
    // 检查是否已经有结果消息，如果有则移除
    const existingResult = explanationElement.querySelector('.mt-4.p-3');
    if (existingResult) {
        existingResult.remove();
    }
    
    explanationElement.appendChild(resultMessage);
}

// 检查句子排序答案
function checkSentenceAnswer() {
    const exercise = sentenceSortingExercises[currentSentenceIndex];
    const sentenceItems = document.querySelectorAll('.sentence-item');
    
    let isCorrect = true;
    
    // 检查排序是否正确
    sentenceItems.forEach((item, index) => {
        const sentenceText = item.querySelector('.sentence-content').textContent;
        const correctSentence = exercise.sentences[exercise.answerOrder[index]];
        
        if (sentenceText !== correctSentence) {
            isCorrect = false;
        }
    });
    
    // 获取答案解析元素
    const explanationElement = document.getElementById('sentence-explanation');
    
    // 显示答案解析
    explanationElement.classList.remove('hidden');
}

// 初始化练习
function initExercises() {
    // 初始化Bank Cloze练习
    initClozeExercise();
    
    // 初始化句子排序练习
    initSentenceSortingExercise();
    
    // 练习标签切换
    const tabs = document.querySelectorAll('[data-tab]');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // 切换按钮样式
            tabs.forEach(t => {
                t.classList.remove('bg-primary', 'text-white');
                t.classList.add('bg-white', 'text-gray-600', 'hover:bg-gray-100');
            });
            
            this.classList.remove('bg-white', 'text-gray-600', 'hover:bg-gray-100');
            this.classList.add('bg-primary', 'text-white');
            
            // 切换内容
            document.querySelectorAll('#cloze-tab, #sentence-tab').forEach(content => {
                content.classList.add('hidden');
            });
            
            const activeTab = document.getElementById(tabId + '-tab');
            activeTab.classList.remove('hidden');
        });
    });
}

// 当页面加载完成后初始化练习
document.addEventListener('DOMContentLoaded', function() {
    initExercises();
});