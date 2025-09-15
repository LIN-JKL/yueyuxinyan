// 影视片段数据
const videoData = [
    {
        id: 1,
        title: "《喜剧之王》中的完成时态",
        description: "学习粤语中'咗'的用法，表示动作已经完成。",
        duration: "2:45",
        difficulty: "初级",
        category: "语法讲解",
        image: "https://picsum.photos/600/340?random=1",
        transcript: "\n尹天仇：我已经睇咗呢本书三次啦。\n柳飘飘：系咩？咁你一定好熟啦。\n尹天仇：梗系啦，我仲做咗笔记添。\n",
        grammarExplanation: "\n在粤语中，'咗'是一个非常常用的助词，用于表示动作已经完成。它的用法类似于普通话中的'了'。\n\n例如：\n- 我已经睇咗呢本书。(我已经看了这本书。)\n- 佢食咗饭未？(他吃饭了吗？)\n- 今日落咗大雨。(今天下了大雨。)\n\n注意：'咗'通常放在动词后面，表示动作的完成状态。\n"
    },
    {
        id: 2,
        title: "《无间道》中的礼貌用语",
        description: "学习粤语中常用的礼貌表达方式，提升日常交流能力。",
        duration: "3:12",
        difficulty: "中级",
        category: "日常对话",
        image: "https://picsum.photos/600/340?random=2",
        transcript: "\n陈永仁：早晨，刘Sir。\n刘建明：早晨，陈生。有冇饮咗茶啊？\n陈永仁：未啊，等阵去饮。刘Sir，呢个系我嘅报告。\n刘建明：唔该晒，你真系细心。\n陈永仁：小事啫，应该嘅。\n",
        grammarExplanation: "\n粤语中有很多常用的礼貌用语，以下是一些例子：\n\n- 早晨/早晨啊 (早上好)\n- 唔该/唔该晒 (谢谢/非常感谢)\n- 对唔住/唔好意思 (对不起/不好意思)\n- 请问 (请问)\n- 劳驾 (劳驾)\n\n在粤语中，礼貌用语的使用非常普遍，尤其是在正式场合或与陌生人交流时。\n"
    },
    {
        id: 3,
        title: "《射雕英雄传》中的武侠术语",
        description: "了解粤语中特有的武侠词汇和表达，感受语言的魅力。",
        duration: "4:05",
        difficulty: "高级",
        category: "方言词汇",
        image: "https://picsum.photos/600/340?random=3",
        transcript: "\n郭靖：黄药师嘅弹指神通真系犀利！\n黄蓉：梗系啦，佢系天下五绝之一。\n郭靖：如果我都可以学到咁嘅武功就好啦。\n黄蓉：你咁勤力，一定得嘅。\n",
        grammarExplanation: "\n在武侠小说和影视作品中，粤语有很多特有的术语和表达：\n\n- 武功 (武术技能)\n- 招式 (武术动作)\n- 内力 (内在的力量)\n- 轻功 (轻身功夫)\n- 点穴 (点穴位)\n\n这些术语不仅在武侠作品中使用，在日常生活中有时也会被用来比喻。\n"
    },
    {
        id: 4,
        title: "《春娇与志明》中的比较句式",
        description: "学习粤语中比较级的表达方式，掌握地道的比较句式。",
        duration: "2:58",
        difficulty: "中级",
        category: "语法讲解",
        image: "https://picsum.photos/600/340?random=4",
        transcript: "\n张志明：呢间餐厅嘅食物好食过上次果间。\n余春娇：我都觉得，而且环境都舒服D。\n张志明：但系价钱贵D。\n余春娇：贵D都值得，毕竟一分钱一分货。\n",
        grammarExplanation: "\n粤语中表示比较的方式有几种：\n\n1. 用'过'表示比较：A + 形容词 + 过 + B\n   例如：呢本书厚过果本书。(这本书比那本书厚。)\n\n2. 用'D'或'啲'表示'更'：A + 形容词 + D/啲\n   例如：今日热D。(今天更热。)\n\n3. 用'最'表示最高级：最 + 形容词\n   例如：佢系我最好嘅朋友。(他是我最好的朋友。)\n"
    },
    {
        id: 5,
        title: "《使徒行者》中的职场用语",
        description: "学习粤语中职场环境的常用表达，提升专业交流能力。",
        duration: "3:30",
        difficulty: "中级",
        category: "日常对话",
        image: "https://picsum.photos/600/340?random=5",
        transcript: "\n上司：陈生，份报告你做得几好，不过有D细节需要修改下。\n陈生：好嘅，我听日晏昼之前改好俾你。\n上司：唔该晒，你效率真系高。\n陈生：应该嘅，我会尽快完成。\n",
        grammarExplanation: "\n在职场环境中，粤语有一些常用的表达方式：\n\n- 份报告 (这份报告)\n- 做得几好 (做得不错)\n- 需要修改下 (需要修改一下)\n- 晏昼 (下午)\n- 效率高 (效率高)\n\n这些表达在职场沟通中非常实用，能够帮助你更好地与同事和上司交流。\n"
    },
    {
        id: 6,
        title: "《食神》中的饮食文化词汇",
        description: "了解粤语中与饮食文化相关的特色词汇，丰富你的粤语表达。",
        duration: "3:22",
        difficulty: "初级",
        category: "方言词汇",
        image: "https://picsum.photos/600/340?random=6",
        transcript: "\n周星驰：呢碗叉烧饭嘅叉烧好正啊，肥而不腻，入口即溶。\n评委：系啊，而且饭煮得软硬适中，真系一流。\n周星驰：仲有个汁，捞饭最好食啦。\n",
        grammarExplanation: "\n粤语中有很多与饮食文化相关的特色词汇：\n\n- 正 (好吃、棒)\n- 肥而不腻 (肥而不腻)\n- 入口即溶 (入口即化)\n- 软硬适中 (软硬适中)\n- 捞饭 (拌饭)\n\n广东菜以其丰富多样和精致美味而闻名，这些词汇能够帮助你更好地描述和评价食物。\n"
    },
    {
        id: 7,
        title: "《重庆森林》中的情感表达",
        description: "学习粤语中表达情感的方式，提升你的情感交流能力。",
        duration: "3:05",
        difficulty: "中级",
        category: "日常对话",
        image: "https://picsum.photos/600/340?random=7",
        transcript: "\n何志武：我好挂住佢，但系我知道佢已经唔钟意我啦。\n店员：时间可以冲淡一切，你会慢慢忘记佢嘅。\n何志武：可能啦，但系而家我仲系好难过。\n",
        grammarExplanation: "\n粤语中表达情感的常用词汇和句式：\n\n- 挂住 (想念)\n- 钟意 (喜欢)\n- 难过 (难过)\n- 开心 (开心)\n- 失望 (失望)\n\n例如：\n- 我好挂住你。(我很想念你。)\n- 佢钟意食巧克力。(他喜欢吃巧克力。)\n- 听到呢个消息，我好开心。(听到这个消息，我很开心。)\n"
    },
    {
        id: 8,
        title: "《英雄本色》中的口语表达",
        description: "学习粤语中地道的口语表达，让你的粤语更自然。",
        duration: "2:48",
        difficulty: "中级",
        category: "方言词汇",
        image: "https://picsum.photos/600/340?random=8",
        transcript: "\n小马哥：阿豪，你返嚟啦！我以为你唔会返嚟啊。\n宋子豪：系啊，我返嚟啦。呢几年你点过啊？\n小马哥：几好啊，不过有时都会谂起以前嘅日子。\n",
        grammarExplanation: "\n粤语中有很多地道的口语表达：\n\n- 返嚟 (回来)\n- 点过 (过得怎么样)\n- 几好 (不错)\n- 谂起 (想起)\n- 以前 (以前)\n\n这些口语表达能够让你的粤语听起来更自然、更地道。\n"
    },
    {
        id: 9,
        title: "《大话西游》中的夸张表达",
        description: "学习粤语中夸张的表达方式，丰富你的语言表现力。",
        duration: "3:15",
        difficulty: "高级",
        category: "语法讲解",
        image: "https://picsum.photos/600/340?random=9",
        transcript: "\n至尊宝：我对你嘅爱，有如滔滔江水，连绵不绝；又有如黄河泛滥，一发不可收拾。\n紫霞仙子：真系咁架？你唔好呃我啊。\n至尊宝：我点会呃你啊，我对天发誓！\n",
        grammarExplanation: "\n粤语中常用的夸张表达方式：\n\n- 有如滔滔江水，连绵不绝 (像滔滔江水，连绵不绝)\n- 一发不可收拾 (一发不可收拾)\n- 对天发誓 (对天发誓)\n- 笑到见牙唔见眼 (笑得合不拢嘴)\n- 累到抬不起头 (累得抬不起头)\n\n这些夸张的表达方式能够增强语言的表现力，让你的表达更加生动有趣。\n"
    },
    {
        id: 10,
        title: "《家有喜事》中的家庭用语",
        description: "学习粤语中家庭生活的常用词汇和表达。",
        duration: "2:52",
        difficulty: "初级",
        category: "日常对话",
        image: "https://picsum.photos/600/340?random=10",
        transcript: "\n妈妈：食饭啦，今日煮咗你最钟意食嘅豉油鸡。\n儿子：好啊，我要食两大碗饭！\n爸爸：食多D菜，唔好净系食饭。\n女儿：我要饮汤，今日嘅汤好甜啊！\n",
        grammarExplanation: "\n粤语中家庭生活的常用词汇和表达：\n\n- 食饭 (吃饭)\n- 煮咗 (煮了)\n- 钟意食 (喜欢吃)\n- 豉油鸡 (酱油鸡)\n- 食多D (多吃点)\n- 净系 (只是)\n- 饮汤 (喝汤)\n\n这些词汇和表达在家庭生活中非常常用，能够帮助你更好地与家人交流。\n"
    }
];

// 当前选中的视频ID
let currentVideoId = null;

// 初始化视频列表
function initVideoList() {
    const videoContainer = document.querySelector('#videos .grid');
    
    // 清空现有视频列表
    videoContainer.innerHTML = '';
    
    // 添加视频卡片
    videoData.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group';
        
        // 设置卡片内容
        videoCard.innerHTML = `
            <div class="relative">
                <img src="${video.image}" alt="${video.title}" class="w-full h-48 object-cover">
                <div class="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button class="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary video-play-button" data-id="${video.id}">
                        <i class="fa fa-play text-xl"></i>
                    </button>
                </div>
                <div class="absolute top-3 right-3 bg-${getCategoryColor(video.category)}/90 text-white text-xs px-2 py-1 rounded">
                    ${video.category}
                </div>
            </div>
            <div class="p-4">
                <h3 class="font-bold text-dark mb-2 group-hover:text-primary transition-colors">${video.title}</h3>
                <p class="text-sm text-gray-600 mb-3">${video.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-xs text-gray-500">时长: ${video.duration}</span>
                    <span class="text-xs text-gray-500">难度: ${video.difficulty}</span>
                </div>
            </div>
        `;
        
        videoContainer.appendChild(videoCard);
    });
    
    // 添加视频播放事件监听
    document.querySelectorAll('.video-play-button').forEach(button => {
        button.addEventListener('click', function() {
            const videoId = parseInt(this.getAttribute('data-id'));
            showVideoDetail(videoId);
        });
    });
    
    // 添加加载更多按钮事件监听
    const loadMoreButton = document.querySelector('#videos .mt-10 button');
    loadMoreButton.addEventListener('click', function() {
        loadMoreVideos();
    });
}

// 根据分类获取颜色
function getCategoryColor(category) {
    const colorMap = {
        '语法讲解': 'primary',
        '日常对话': 'secondary',
        '方言词汇': 'accent'
    };
    
    return colorMap[category] || 'primary';
}

// 显示视频详情
function showVideoDetail(videoId) {
    const video = videoData.find(v => v.id === videoId);
    currentVideoId = videoId;
    
    // 创建视频详情模态框
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/70';
    modal.setAttribute('id', 'video-modal');
    
    // 设置模态框内容
    modal.innerHTML = `
        <div class="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div class="relative w-full" style="height: 0; padding-bottom: 56.25%;">
                <img src="${video.image}" alt="${video.title}" class="absolute inset-0 w-full h-full object-cover">
                <div class="absolute inset-0 flex items-center justify-center">
                    <button class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-primary">
                        <i class="fa fa-play text-2xl"></i>
                    </button>
                </div>
                <button class="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-700 close-modal">
                    <i class="fa fa-times"></i>
                </button>
            </div>
            <div class="p-6">
                <h2 class="text-2xl font-bold text-dark mb-3">${video.title}</h2>
                <div class="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span><i class="fa fa-clock-o mr-1"></i>${video.duration}</span>
                    <span><i class="fa fa-signal mr-1"></i>${video.difficulty}</span>
                    <span><i class="fa fa-tag mr-1"></i>${video.category}</span>
                </div>
                <p class="text-gray-600 mb-6">${video.description}</p>
                
                <!-- 台词 -->
                <div class="mb-6">
                    <h3 class="text-lg font-bold text-dark mb-2">台词</h3>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <pre class="whitespace-pre-wrap text-gray-700">${video.transcript}</pre>
                    </div>
                </div>
                
                <!-- 语法讲解 -->
                <div>
                    <h3 class="text-lg font-bold text-dark mb-2">语法讲解</h3>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <pre class="whitespace-pre-wrap text-gray-700">${video.grammarExplanation}</pre>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // 添加到页面
    document.body.appendChild(modal);
    
    // 添加关闭模态框事件
    document.querySelector('.close-modal').addEventListener('click', function() {
        closeVideoModal();
    });
    
    // 点击模态框背景关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeVideoModal();
        }
    });
    
    // 按ESC键关闭
    document.addEventListener('keydown', handleEscKey);
}

// 关闭视频模态框
function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    if (modal) {
        modal.remove();
    }
    
    // 移除ESC键监听
    document.removeEventListener('keydown', handleEscKey);
}

// 处理ESC键
function handleEscKey(e) {
    if (e.key === 'Escape') {
        closeVideoModal();
    }
}

// 加载更多视频
function loadMoreVideos() {
    // 复制现有视频数据，修改ID和图片，模拟加载更多
    const newVideos = videoData.slice(0, 6).map((video, index) => ({
        ...video,
        id: video.id + 10 + index,
        image: `https://picsum.photos/600/340?random=${11 + index}`
    }));
    
    // 添加到现有视频数据
    videoData.push(...newVideos);
    
    // 重新初始化视频列表
    initVideoList();
    
    // 显示加载成功提示
    const loadMoreButton = document.querySelector('#videos .mt-10 button');
    loadMoreButton.innerHTML = '<i class="fa fa-check mr-2"></i><span>已加载全部视频</span>';
    loadMoreButton.disabled = true;
    loadMoreButton.classList.add('opacity-70', 'cursor-not-allowed');
}

// 初始化视频功能
document.addEventListener('DOMContentLoaded', function() {
    initVideoList();
});