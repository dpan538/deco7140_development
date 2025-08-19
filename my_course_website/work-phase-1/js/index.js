/**
 * DECO7140 Introduction to Web Design - Work Phase 1
 * Main page interactions 
 */

// Constants
const PAGE_NAME = "index.js";

// DOM Elements / 获取页面中的元素
const surpriseButton = document.getElementById("surprise-button"); // 获取“Next”按钮
const overlay = document.getElementById("overlay"); // 获取遮罩层
const typewriterText = document.querySelector(".typewriter-text"); // 获取打字机效果文字的容器
const linksSection = document.querySelector(".section-links"); // 获取左侧 Links 区域
const aboutSection = document.querySelector(".section-about"); // 获取 About 区域

// Variables / 变量
let message = "Page interactions loaded"; // 用于页面加载时的提示信息

/**
 * Typewriter effect function - preserving existing functionality
 * 打字机效果函数 - 保持现有功能
 */
function typewriterEffect(element, text, speed = 100) {
    if (!element) return; // 如果元素不存在就直接返回

    element.textContent = ""; // 清空元素内容
    let i = 0; // 记录当前输入的字符位置

    // 内部函数：逐个打印字符
    function typeChar() {
        if (i < text.length) {
            element.textContent += text.charAt(i); // 将字符逐个加入
            i++;
            setTimeout(typeChar, speed); // 递归调用，形成打字机效果
        }
    }

    typeChar(); // 启动打字效果
}

/**
 * Show overlay with typewriter effect
 * 显示遮罩层，并执行打字机效果
 */
function showOverlay() {
    overlay.classList.add("active"); // 给遮罩层加上 active 样式 → 显示
    const message =
        "This is a section that hasn't been edited yet, so check back later."; // 预设文字
    typewriterEffect(typewriterText, message, 80); // 调用打字机函数，速度为80ms
}

/**
 * Hide overlay
 * 隐藏遮罩层
 */
function hideOverlay() {
    overlay.classList.remove("active"); // 移除 active 样式 → 隐藏
}

/**
 * Handle Links section click - redirect to portfolio
 * 处理 Links 点击事件 → 打开作品集网站
 */
function handleLinksClick() {
    window.open("https://www.daiportfolio.com/", "_blank"); // 新窗口打开链接
}

/**
 * Handle About Me section click - placeholder for future About page
 * 处理 About 点击事件 → 目前用 alert 占位，未来跳转到 About 页面
 */
function handleAboutClick() {
    alert("About Me page coming soon!"); // 弹出提示框
}

/**
 * Initialize page interactions
 * 初始化页面交互逻辑
 */
function initializeInteractions() {
    // Surprise button click / 点击按钮时显示遮罩层
    if (surpriseButton) {
        surpriseButton.addEventListener("click", showOverlay);
    }

    // ESC key to close overlay / 按 ESC 键关闭遮罩层
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            hideOverlay();
        }
    });

    // Click outside overlay to close / 点击遮罩层空白处关闭
    if (overlay) {
        overlay.addEventListener("click", (event) => {
            if (event.target === overlay) {
                hideOverlay();
            }
        });
    }

    // Links section click / 点击 Links 区域 → 跳转作品集
    if (linksSection) {
        linksSection.addEventListener("click", handleLinksClick);
    }

    // About Me section click / 点击 About 区域 → 弹出提示
    if (aboutSection) {
        aboutSection.addEventListener("click", handleAboutClick);
    }
}

/**
 * Page load event - following course pattern
 * 页面加载完成事件 - 按课程要求绑定
 */
window.addEventListener("DOMContentLoaded", () => {
    // Log page load / 在控制台打印提示
    console.log(`${PAGE_NAME}: ${message}`);

    // Initialize interactions / 调用函数，初始化交互
    initializeInteractions();
});
