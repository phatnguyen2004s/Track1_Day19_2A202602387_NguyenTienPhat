// Khung dùng chung (phần 70%) cho common context và cả ba option A/B/C.
// Mỗi option chỉ thêm lớp tương tác riêng lên trên khung này.
(function () {
  const params = new URLSearchParams(location.search);
  // Hai điểm vào AI có sẵn trên nền tảng: nút "Đặt câu hỏi với AI" và nút sparkle trên slide.
  const showExistingAi = params.get("ai") !== "off";

  // Các trang slide của bài học (trang 5 là slide Double Diamond; trang 6 và 7 là hai slide liền sau).
  // Toạ độ tính trong khung slide 1400 x 788.
  const SLIDE_5 = `
            <h1 class="slide-title">Evidence về <span class="p">problem</span> không phải evidence về <span class="s">solution</span></h1>

            <svg width="1400" height="788" viewBox="0 0 1400 788" aria-label="Double Diamond: Day 17 Finding the problem, Day 18 Finding the solution">
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                  <path d="M1 1 L9 5 L1 9" fill="none" stroke="#8b8a86" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </marker>
              </defs>
              <g font-size="19" text-anchor="middle">
                <text x="319" y="146" fill="#8b8a86">Divergence</text>
                <text x="573" y="146" fill="#8b8a86">Convergence</text>
                <text x="836" y="146" fill="#2f7a56">Divergence</text>
                <text x="1091" y="146" fill="#2f7a56">Convergence</text>
              </g>
              <g stroke="#cfccc4" stroke-width="1.5" stroke-dasharray="5 5">
                <line x1="192" y1="168" x2="192" y2="476"/>
                <line x1="705" y1="168" x2="705" y2="476"/>
                <line x1="1219" y1="168" x2="1219" y2="476"/>
                <line x1="447" y1="168" x2="447" y2="182"/>
                <line x1="963" y1="168" x2="963" y2="182"/>
              </g>
              <polygon points="192,321 447,179 705,321 447,463" fill="#f1efe9" stroke="#e1ded6" stroke-width="1.5"/>
              <polygon points="705,321 963,178 1219,321 963,463" fill="#d9eadf" stroke="#2f6f4f" stroke-width="2.5" stroke-linejoin="round"/>
              <g text-anchor="middle">
                <text x="447" y="303" data-term="Finding the PROBLEM" font-size="16" letter-spacing="1.5" fill="#8b8a86">DAY 17</text>
                <text x="447" y="332" data-term="Finding the PROBLEM" font-size="23" font-weight="500" fill="#8b8a86">Finding the</text>
                <text x="447" y="361" data-term="Finding the PROBLEM" font-size="23" font-weight="500" fill="#8b8a86">PROBLEM</text>
                <text x="963" y="302" data-term="Finding the SOLUTION" font-size="16" letter-spacing="1.5" fill="#6b6b68">DAY 18</text>
                <text x="963" y="331" data-term="Finding the SOLUTION" font-size="26" font-weight="700" fill="#262626">Finding the</text>
                <text x="963" y="360" data-term="Finding the SOLUTION" font-size="26" font-weight="700" fill="#262626">SOLUTION</text>
              </g>
              <g font-size="19" text-anchor="middle">
                <text transform="translate(316 242) rotate(-29)" fill="#8b8a86">discover</text>
                <text transform="translate(576 244) rotate(29)" fill="#8b8a86">define</text>
                <text transform="translate(833 242) rotate(-29)" fill="#2f7a56">develop</text>
                <text transform="translate(1095 244) rotate(29)" fill="#2f7a56">deliver</text>
              </g>
              <circle cx="162" cy="321" r="10" fill="#d4d1c9"/>
              <text x="162" y="290" font-size="19" text-anchor="middle" fill="#8b8a86">Pain</text>
              <circle cx="705" cy="321" r="12" fill="#c8553d"/>
              <g font-size="19" font-weight="500" text-anchor="middle" fill="#c8553d">
                <text x="705" y="387" data-term="Chosen opportunity">Chosen</text>
                <text x="705" y="410" data-term="Chosen opportunity">opportunity</text>
              </g>
              <circle cx="1248" cy="321" r="12" fill="#2f7a56"/>
              <text x="1248" y="290" font-size="19" font-weight="500" text-anchor="middle" fill="#2f6f4f">Next</text>
              <line x1="110" y1="468" x2="110" y2="173" stroke="#8b8a86" stroke-width="1.5" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
              <text transform="translate(82 320) rotate(-90)" font-size="19" text-anchor="middle" fill="#8b8a86">Alternatives</text>
              <line x1="132" y1="502" x2="1258" y2="502" stroke="#8b8a86" stroke-width="1.5" marker-end="url(#arrow)"/>
              <text x="693" y="534" font-size="19" text-anchor="middle" fill="#8b8a86">Time</text>
            </svg>

            <ul class="col" style="left:134px"><h4>DISCOVER</h4>
              <li>Problem interview</li><li>Past story</li><li>Behavior &amp; workaround</li><li>Quan sát context</li></ul>
            <ul class="col" style="left:417px"><h4>DEFINE</h4>
              <li>Synthesis note</li><li>Pain pattern</li><li>Chọn opportunity</li><li>Learning Question</li></ul>
            <ul class="col on" style="left:700px"><h4>DEVELOP</h4>
              <li>Diverge cơ chế</li><li>Standard / ++ / Wild</li><li>Micro-prototype</li><li>Multi-option A/B/C</li></ul>
            <ul class="col on" style="left:983px"><h4>DELIVER</h4>
              <li>Prototype interview</li><li>Quan sát behavior</li><li>Compare trade-off</li><li>Next iteration</li></ul>
          
`;
  const SLIDE_6 = `
            <h1 class="s-title" style="left:70px;top:48px">Ta đã hiểu <span class="p">pain</span>. Bây giờ đến lượt <span class="s">solution</span></h1>

            <div class="s6-block" style="left:70px;top:336px;width:560px">
              <div class="s-kicker">DAY 17</div>
              <div class="s-head">Problem evidence</div>
              <p class="s-desc">Tìm evidence về người dùng, tình huống và pain.</p>
              <div class="s-tags"><span>story</span><span>behavior</span><span>workaround</span></div>
            </div>

            <svg style="left:648px;top:414px" width="112" height="16" viewBox="0 0 112 16" aria-hidden="true">
              <line x1="0" y1="8" x2="100" y2="8" stroke="#222" stroke-width="2"/>
              <polygon points="100,1 112,8 100,15" fill="#222"/>
            </svg>

            <div class="s6-block green" style="left:808px;top:322px;width:500px">
              <div class="s-kicker">DAY 18</div>
              <div class="s-head">Solution evidence?</div>
              <p class="s-desc">Khám phá các cách giải và tìm evidence cho bước tiếp theo.</p>
              <div class="s-tags"><span>options</span><span>experiment</span></div>
            </div>
`;
  const SLIDE_7 = `
            <h1 class="s-title" style="left:70px;top:44px">Cùng một <span class="p">pain</span> có thể dẫn tới nhiều cách giải</h1>
            <p class="s7-sub" style="left:70px;top:110px">Cách nào phù hợp hơn — và trong điều kiện nào?</p>

            <div class="s7-sit" style="left:70px;top:162px;width:1261px;height:63px">
              <span class="k">TÌNH HUỐNG</span><span class="t">Người học vừa trả lời sai lần thứ hai và không biết tiếp tục thế nào.</span>
            </div>

            <div class="s7-colh" style="left:285px;top:304px"><i>A</i><b>User-led</b></div>
            <div class="s7-colh" style="left:643px;top:304px"><i>B</i><b>Collaborative</b></div>
            <div class="s7-colh" style="left:999px;top:304px"><i>C</i><b>Proactive</b></div>

            <div class="s7-win" style="left:285px;top:348px">
              <div class="bar"><u></u><u></u><u></u></div>
              <div class="skel" style="left:12px;top:38px"></div>
              <div class="skel" style="left:12px;top:52px"></div>
              <div class="mbtn dark" style="left:243px;top:85px;width:75px;height:38px">Help</div>
            </div>
            <div class="s7-win" style="left:643px;top:348px">
              <div class="bar"><u></u><u></u><u></u></div>
              <div class="bubble blue" style="left:13px;top:38px;width:304px;height:40px">“Bạn đang lẫn hai công thức?”</div>
              <div class="mbtn" style="left:13px;top:87px;width:147px;height:35px">Đúng</div>
              <div class="mbtn" style="left:169px;top:87px;width:148px;height:35px">Không</div>
            </div>
            <div class="s7-win" style="left:999px;top:348px">
              <div class="bar"><u></u><u></u><u></u></div>
              <div class="bubble yellow" style="left:13px;top:38px;width:306px;height:40px">Sai 2 lần → ôn lại phần này?</div>
              <div class="mbtn" style="left:13px;top:87px;width:149px;height:35px">Xem</div>
              <div class="mbtn" style="left:171px;top:87px;width:148px;height:35px">Bỏ qua</div>
            </div>

            <div class="s7-table" style="left:70px;top:502px;width:1261px">
              <div class="rl">TRIGGER</div><div>Learner tự mở Help</div><div>AI hỏi khi thấy dấu hiệu</div><div>AI tự phát hiện, tự mở</div>
              <div class="rl">USER QUYẾT GÌ</div><div>Chọn loại trợ giúp</div><div>Xác nhận hoặc sửa chẩn đoán</div><div>Duyệt, bỏ qua hoặc sửa</div>
              <div class="rl">ĐÁNH ĐỔI</div><div class="dim">Phải tự biết mình cần gì</div><div class="dim">Thêm một bước hỏi–đáp</div><div class="dim">Dễ gián đoạn, dễ bị nghi</div>
            </div>
`;
  const SLIDES = { 5: SLIDE_5, 6: SLIDE_6, 7: SLIDE_7 };

  const SHELL = `
<div class="app">
  <header class="topbar">
    <button class="back" aria-label="Quay lại"><svg class="i" viewBox="0 0 24 24"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg></button>
    <div class="title">Ngày 3 · Day 18+19 Design the Experiment - Human-Centered AI Design</div>
    <div class="spacer"></div>
    <div class="lang"><span class="en">EN</span><span class="vi">VI</span></div>
    <div class="progress"><span>1/38 hoạt động</span><span class="bar"><i></i></span></div>
    <span class="vsep"></span>
    <button class="action" data-existing-ai>
      <svg class="i" viewBox="0 0 24 24" style="color:#2f6bd6;fill:currentColor;stroke-width:1.5"><path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z"/></svg>
      Đặt câu hỏi với AI
    </button>
    <button class="action">
      <svg class="i" viewBox="0 0 24 24"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>
      Gửi yêu cầu
    </button>
    <div class="avatar">N</div>
  </header>

  <div class="body">
    <aside class="sidebar">
      <div class="sb-head"><span>NỘI DUNG BÀI HỌC</span>
        <svg class="i" viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></div>
      <div class="sb-section"><span>DESIGN THE EXPERIMENT</span>
        <svg class="i" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></div>
      <div id="groups"></div>
    </aside>

    <main class="main">
      <div class="stage-wrap">
        <!-- Slide: Evidence về problem không phải evidence về solution (fixture dùng chung cho A/B/C) -->
        <div class="slide-card" id="slide-card">
          <div class="slide-stage" id="slide-stage"></div>

          <button class="slide-ai-btn" data-existing-ai aria-label="Hỏi AI về slide này">
            <svg class="i" viewBox="0 0 24 24"><path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z"/></svg>
          </button>
          <div id="option-root" data-option="none"></div>
        </div>

        <div class="toolbar">
          <div class="tgroup">
            <button class="tbtn sel" aria-label="Con trỏ"><svg class="i" viewBox="0 0 24 24"><path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"/></svg></button>
            <button class="tbtn" aria-label="Bút"><svg class="i" viewBox="0 0 24 24"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg></button>
            <button class="tbtn" aria-label="Bút nhấn"><svg class="i" viewBox="0 0 24 24"><path d="m9 11-6 6v3h9l3-3"/><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"/></svg></button>
            <button class="tbtn" aria-label="Hình tròn"><svg class="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg></button>
            <button class="tbtn" aria-label="Tẩy"><svg class="i" viewBox="0 0 24 24"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg></button>
            <span class="tsep"></span>
            <button class="tbtn" aria-label="Ghi chú nhanh"><svg class="i" viewBox="0 0 24 24"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg></button>
            <button class="tbtn" aria-label="Văn bản"><svg class="i" viewBox="0 0 24 24"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg></button>
          </div>
          <div class="tgroup">
            <span class="tseg on"><svg class="i" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>Từng trang</span>
            <span class="tseg"><svg class="i" viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>Cuộn dọc</span>
          </div>
          <div class="tgroup">
            <button class="tbtn" aria-label="Thu nhỏ"><svg class="i" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M8 11h6"/></svg></button>
            <span class="zoom-val">100%</span>
            <button class="tbtn" aria-label="Phóng to"><svg class="i" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/></svg></button>
          </div>
          <div class="tgroup">
            <button class="tbtn" aria-label="Hoàn tác"><svg class="i" viewBox="0 0 24 24"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/></svg></button>
            <span class="tsep"></span>
            <button class="tbtn danger" aria-label="Xoá nét vẽ"><svg class="i" viewBox="0 0 24 24"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></button>
            <span class="tsep"></span>
            <button class="tbtn" aria-label="Toàn màn hình"><svg class="i" viewBox="0 0 24 24"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/></svg></button>
          </div>
          <div class="tright">
            <button class="tbtn" id="nav-prev" aria-label="Trang trước"><svg class="i" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg></button>
            <span class="page-box" id="page-no">5</span><span>/ 23</span>
            <button class="tbtn" id="nav-next" aria-label="Trang sau"><svg class="i" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg></button>
            <button class="tbtn" aria-label="Lưới trang"><svg class="i" viewBox="0 0 24 24"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg></button>
            <span class="tseg"><svg class="i" viewBox="0 0 24 24"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>Sổ ghi chú</span>
          </div>
        </div>
      </div>

      <div class="feedback">
        <span>Nội dung này có hữu ích không?</span>
        <button class="tbtn" aria-label="Hữu ích"><svg class="i" viewBox="0 0 24 24"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg></button>
        <button class="tbtn" aria-label="Không hữu ích"><svg class="i" viewBox="0 0 24 24"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"/></svg></button>
        <button class="tbtn" aria-label="Báo cáo"><svg class="i" viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg></button>
      </div>
      <div class="footer">
        <span class="btn ghost"><svg class="i" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>Hoạt động trước</span>
        <span class="btn primary">Đi tới hoạt động tiếp theo<svg class="i" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg></span>
      </div>
    </main>

    <aside class="side-panel" id="side-panel" hidden></aside>
  </div>
</div>`;

  // Mục lục bài học. Tiêu đề bị cắt trong ảnh gốc được giữ nguyên dấu "…".
  const ICON = {
    slide: '<svg class="i" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>',
    video: '<svg class="i" viewBox="0 0 24 24"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>'
  };
  const slide = (label, extra = {}) => ({ type: "slide", label, ...extra });
  const video = (label, time) => ({ type: "video", label, time });
  const GROUPS = [
    { title: "Slide bài giảng", items: [
      slide("Slide: Design the experiment", { active: true, status: "Đang học" }),
      video("Video: Tổng quan ngày 18", "4 phút") ] },
    { title: "1. Prototype nhiều phương án", items: [
      slide("Slide: Design the experiment"),
      video("1.1 Hãy đưa prototype ra", "4 phút"),
      video("1.2 Parallel Prototype", "4 phút"),
      video("1.3 Thiết kế khác nhau thế n…", "5 phút"),
      video("1.4 Thí nghiệm không phải t…", "5 phút") ] },
    { title: "2. Thiết kế khi AI sai", items: [
      slide("Slide: Human-centered AI design"),
      video("2.0 Khoảng cách giữa người…", "6 phút"),
      video("2.1 Người dùng nghĩ AI làm…", "5 phút"),
      video("2.2a AI nên làm, hỏi, hay dừ…", "5 phút"),
      video("2.2b Hỏi cũng có giá", "5 phút"),
      video("2.3a Trust đúng mức", "5 phút"),
      video("2.3b AI đưa lời giải thích", "5 phút"),
      video("2.4a Thiết kế lối thoát", "5 phút"),
      video("2.4b Hai kiểu lỗi", "5 phút"),
      video("2.5 Feedback từ người dùng", "5 phút") ] },
    { title: "3. Prototype Scope", items: [] }
  ];

  function renderSidebar() {
    document.getElementById("groups").innerHTML = GROUPS.map(g => `
      <section class="group"><h3>${g.title}</h3>${g.items.map(it => `
        <div class="item${it.active ? " active" : ""}">
          <span class="ico ${it.type}">${ICON[it.type]}</span>
          <span class="label">${it.label}</span>
          ${it.status ? `<span class="status">${it.status}</span>` : ""}
          ${it.time ? `<span class="meta">${it.time}</span>` : ""}
        </div>`).join("")}
      </section>`).join("");
  }

  // Dựng khung vào `root` và trả về các điểm gắn cho option.
  function mount(root) {
    root.innerHTML = SHELL;
    document.body.classList.toggle("hide-existing-ai", !showExistingAi);
    renderSidebar();

    const card = document.getElementById("slide-card");
    const stage = document.getElementById("slide-stage");
    // Slide được vẽ trong khung 1400 x 788 rồi co theo chiều rộng thẻ slide.
    const fit = () => stage.style.setProperty("--s", card.clientWidth / 1400);
    new ResizeObserver(fit).observe(card);
    fit();

    // Điều hướng giữa các trang slide. Option nghe sự kiện "proto:slidechange" để gắn lại tương tác cho trang mới.
    const pageNo = document.getElementById("page-no");
    const prev = document.getElementById("nav-prev");
    const next = document.getElementById("nav-next");
    let page = 5;
    function goTo(n) {
      if (!SLIDES[n]) return;
      page = n;
      stage.innerHTML = SLIDES[n];
      stage.dataset.slide = String(n);
      pageNo.textContent = String(n);
      prev.disabled = !SLIDES[n - 1];
      next.disabled = !SLIDES[n + 1];
      document.dispatchEvent(new CustomEvent("proto:slidechange", { detail: { page: n, stage } }));
    }
    prev.addEventListener("click", () => goTo(page - 1));
    next.addEventListener("click", () => goTo(page + 1));
    goTo(5);

    return {
      params,
      card,
      stage,
      optionRoot: document.getElementById("option-root"),
      panel: document.getElementById("side-panel")
    };
  }

  window.Proto = { mount };
})();
