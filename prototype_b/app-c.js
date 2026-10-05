'use strict';
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const variant = document.body.dataset.variant;
const labels = { text: 'C1 · Chọn văn bản', region: 'C2 · Khoanh vùng sơ đồ', block: 'C3 · Chọn khối nội dung' };
const instructions = {
  text: 'Bôi đen một đoạn văn bản trong slide bên trái (ví dụ tiêu đề hoặc mô tả giai đoạn). Kiểm tra phần được chọn, rồi gửi yêu cầu.',
  region: 'Nhấn giữ và kéo chuột trên sơ đồ bên trái để khoanh phần chưa hiểu. Kiểm tra ảnh vùng chọn, rồi gửi yêu cầu. Bạn cũng có thể dùng nút chọn vùng nhanh.',
  block: 'Bấm nút “Chọn khối này” ở tiêu đề, sơ đồ hoặc mô tả một giai đoạn. Kiểm tra toàn bộ nội dung khối, rồi gửi yêu cầu.'
};
const questionHint = 'Ví dụ: Cho tôi một ví dụ cụ thể, hoặc giải thích kỹ hơn vì sao hai loại evidence khác nhau…';
let step = 2, selected = '', question = '', selectionBox = null, dragStart = null, previousBox = null, activePointer = null;
let lessonIndex = 0;
const lessonTitles = ['Evidence về problem & solution', 'Từ pain đến solution', 'Cùng một pain, nhiều cách giải'];
function status(message) { $('#status').textContent = message; }
function bind(id, action) { const el = document.getElementById(id); if (el) el.onclick = action; }
function showPanel() {
  $('#ai-panel').hidden = false;
  $('.workspace').classList.add('panel-open');
}
function updateSteps() {
  $$('[data-step]').forEach(el => { const n = Number(el.dataset.step); el.classList.toggle('current', n === step); el.classList.toggle('finished', n < step); });
}
function selectionEnabled() { return lessonIndex === 0 && step === 2 && !$('#ai-panel').hidden; }
function selectionUI(enabled) {
  $('#selection-tools').hidden = !enabled;
  $('#slide').classList.toggle('selecting-text', enabled && variant === 'text');
  $('#diagram').classList.toggle('selecting-region', enabled && variant === 'region');
  $$('[data-block]').forEach(el => { el.hidden = !(enabled && variant === 'block'); });
}
function clearSelection() {
  selected = ''; selectionBox = null; dragStart = null;
  window.getSelection()?.removeAllRanges();
  $$('[data-region], [data-block]').forEach(el => { el.classList.remove('chosen'); el.setAttribute('aria-pressed', 'false'); });
  $$('.block-selected').forEach(el => el.classList.remove('block-selected'));
  drawBox(); updateSelection();
}
function reset() {
  step = 2; lessonIndex = 0; question = ''; clearSelection();
  $('.workspace').hidden = false; $('#completed').hidden = true;
  $('#slide').classList.remove('source-highlight');
  renderLesson(); returnToSelection();
}
function returnToSelection() {
  step = 2;
  showPanel(); selectionUI(true); updateSteps(); renderInteraction(); status(instructions[variant]);
}
function renderInteraction() {
  const content = $('#panel-content');
  content.innerHTML = `<div class="eyebrow">BẠN CHỌN NỘI DUNG</div><h3>Bạn chưa hiểu phần nào?</h3><p id="interaction-guide" class="panel-intro"></p><div id="selected-content" class="context-card"><b>Nội dung được chọn</b><p id="selected-text"></p><div id="selection-preview"></div></div><label for="question">Bạn muốn làm rõ điều gì? <span class="muted">(không bắt buộc)</span></label><textarea id="question" aria-describedby="question-help" autocomplete="off"></textarea><p id="question-help" class="muted">Để trống để giải thích phần đã chọn. Nhập thêm nếu bạn muốn hỏi kỹ hơn hoặc tập trung vào một ví dụ, khái niệm hay câu hỏi cụ thể.</p><div class="panel-actions"><button id="explain-selection" class="primary">Giải thích phần đã chọn →</button><button id="clear-selection" class="secondary">Chọn lại</button></div><p class="simulation">Bản thử dùng câu trả lời dựng sẵn về Double Diamond. AI chưa phân tích văn bản hoặc ảnh thật.</p>`;
  $('#question').placeholder = questionHint;
  $('#interaction-guide').textContent = instructions[variant]; $('#question').value = question;
  $('#question').oninput = e => { question = e.target.value; updateSelection(); };
  bind('explain-selection', () => { if (selected) showAnswer(); });
  bind('clear-selection', () => { clearSelection(); status('Đã bỏ lựa chọn. Hãy chọn lại nội dung trong slide.'); });
  updateSelection(); content.scrollTop = 0;
}
function updateSelection() {
  if (!$('#selected-text')) return;
  $('#selected-text').textContent = selected || 'Chưa chọn nội dung. Hãy chọn ở slide bên trái.';
  $('#explain-selection').disabled = !selected;
  $('#explain-selection').textContent = question.trim() ? 'Gửi câu hỏi về phần đã chọn →' : 'Giải thích phần đã chọn →';
  const preview = $('#selection-preview'); preview.replaceChildren();
  if (variant === 'region' && selectionBox) preview.append(regionPreview());
}
function choose(text) {
  if (!selectionEnabled()) return;
  selected = text.trim(); updateSelection(); status('Đã chọn nội dung. Kiểm tra phạm vi và bấm “Giải thích phần đã chọn”.');
}
function regionPreview() {
  const preview = $('#diagram').cloneNode(true);
  preview.removeAttribute('id'); preview.classList.remove('selecting-region');
  preview.querySelectorAll('defs, title, desc, #region-rect').forEach(el => el.remove());
  preview.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
  preview.querySelectorAll('[marker-start], [marker-end]').forEach(el => { el.removeAttribute('marker-start'); el.removeAttribute('marker-end'); });
  preview.removeAttribute('aria-labelledby'); preview.setAttribute('aria-label', 'Ảnh vùng sơ đồ đã chọn');
  const {x,y,w,h} = selectionBox; preview.setAttribute('viewBox', `${x} ${y} ${w} ${h}`);
  preview.classList.add('region-preview'); return preview;
}
// Chọn phản hồi dựng sẵn theo trọng tâm, không tự điền câu hỏi cho học viên.
function focusedAnswer(request) {
  const intent = request.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd');
  if (!intent) return null;
  if (/vi du|minh hoa|example/.test(intent)) return {
    title: 'Ví dụ cụ thể về hai loại evidence',
    text: 'Nhóm quan sát một học viên phải chuyển tab ba lần để tìm lời giải thích cho slide: đây là evidence về problem, cho thấy luồng học bị gián đoạn. Khi thử prototype chọn nội dung, học viên đọc lời giải thích, phân biệt được hai loại evidence và tiếp tục ngay trong bài: đây là evidence về solution từ lượt thử. Cần quan sát thêm nhiều học viên trước khi kết luận giải pháp hiệu quả.'
  };
  if (/cau hoi.*(kiem tra|on tap|tu kiem tra)|(?:kiem tra|on tap).*cau hoi|quiz/.test(intent)) return {
    title: 'Câu hỏi tự kiểm tra',
    text: '1. Quan sát học viên thường xuyên chuyển tab là evidence về problem hay solution? Vì sao?\n2. Cần quan sát điều gì khi học viên thử hỗ trợ AI để kiểm chứng giải pháp?\nGợi ý đáp án: (1) Problem, vì thể hiện khó khăn hiện tại. (2) Quan sát học viên có tự chọn đúng nội dung, hiểu lời giải thích và tiếp tục bài học được hay không.'
  };
  const stages = [
    ['discover', 'Discover — Khám phá', 'Tìm hiểu trải nghiệm thực tế qua phỏng vấn, quan sát hành vi, bối cảnh và cách xử lý hiện tại. Chưa chọn giải pháp; cần bằng chứng về khó khăn của người học.'],
    ['define', 'Define — Xác định', 'Tổng hợp bằng chứng để tìm pain pattern và chọn vấn đề quan trọng. Hypothesis Problem mô tả rõ người dùng, tình huống, nhiệm vụ và khó khăn; chưa khẳng định một giải pháp sẽ hiệu quả.'],
    ['develop', 'Develop — Phát triển', 'Tạo nhiều giả thuyết giải pháp cho cùng vấn đề. Ba cách chọn nội dung ở C1/C2/C3 là các biến thể có thể đưa vào prototype để so sánh độ chính xác của phạm vi chọn và khả năng kiểm soát.'],
    ['deliver', 'Deliver — Kiểm chứng', 'Cho người học thử prototype, quan sát hành vi và so sánh trade-off. Kết quả giúp kiểm chứng giả định về giải pháp và chọn thay đổi tiếp theo; một lượt thử chưa đủ để kết luận chung.']
  ];
  const matches = stages.filter(([name]) => intent.includes(name));
  if (matches.length === 1) return { title: matches[0][1], text: matches[0][2] };
  if (/chosen opportunity|chon opportunity|co hoi/.test(intent)) return {
    title: 'Chosen opportunity nằm ở đâu?',
    text: 'Đây là điểm chuyển từ Define sang Develop: nhóm đã thu hẹp bằng chứng để chọn vấn đề hoặc cơ hội cần giải quyết, rồi mở rộng các phương án giải pháp. Chọn cơ hội chưa chứng minh một giải pháp cụ thể sẽ hiệu quả.'
  };
  return {
    title: 'Làm rõ thêm nội dung đã chọn',
    text: 'Evidence về problem trả lời “Người học đang gặp khó khăn gì?”, còn evidence về solution trả lời “Phương án này có giúp người học không?”. Double Diamond tách hai việc: Discover và Define giúp tìm đúng vấn đề; Develop và Deliver giúp tạo và thử giải pháp. Biết người học phải chuyển tab chỉ là cơ sở để đề xuất hỗ trợ AI; hiệu quả của hỗ trợ cần được kiểm chứng qua prototype.'
  };
}
function showAnswer(simple = false) {
  step = 3; selectionUI(false); showPanel(); updateSteps();
  const content = $('#panel-content'); content.replaceChildren();
  const context = document.createElement('div'); context.className = 'context-card';
  const label = document.createElement('b'); label.textContent = 'Ngữ cảnh đã dùng · Slide 01';
  const text = document.createElement('p'); text.textContent = `Phần chọn: ${selected}\n${question.trim() ? 'Yêu cầu thêm: ' + question.trim() : 'Yêu cầu: Giải thích phần đã chọn'}`;
  text.style.whiteSpace = 'pre-line'; context.append(label,text);
  if (variant === 'region' && selectionBox) context.append(regionPreview());
  content.append(context);
  const focus = focusedAnswer(question);
  if (focus) {
    const focused = document.createElement('div'); focused.className = 'evidence';
    const heading = document.createElement('b'); heading.textContent = focus.title;
    const explanation = document.createElement('p'); explanation.textContent = focus.text; explanation.style.whiteSpace = 'pre-line';
    focused.append(heading, explanation); content.append(focused);
  }
  if (simple) {
    const revised = document.createElement('div'); revised.className = 'evidence';
    revised.innerHTML = '<b>Cách diễn đạt đơn giản hơn</b><p>Hãy nghĩ đến hai câu hỏi: “Học viên đang gặp khó khăn gì?” (problem) và “Cách hỗ trợ này có giúp họ không?” (solution). Chuyển tab là dấu hiệu của khó khăn; thử AI và quan sát người học mới giúp kiểm chứng giải pháp.</p>';
    content.append(revised);
  }
  content.append($('#answer-template').content.cloneNode(true));
  const actions = document.createElement('div'); actions.className = 'panel-actions';
  actions.innerHTML = '<button id="again" class="secondary">Giải thích lại</button><button id="edit" class="secondary">Sửa yêu cầu</button><button id="change-selection" class="secondary">Đổi phần chọn</button><button id="approve" class="primary">Đã hiểu · Tiếp tục →</button><button id="undo" class="secondary">Hủy kết quả · Quay lại</button>';
  content.append(actions);
  bind('source', () => { $('#slide').classList.add('source-highlight'); $('#slide').scrollIntoView({behavior:'smooth',block:'center'}); status('Đối chiếu slide: Chosen opportunity nối Define với Develop.'); });
  bind('again', () => { showAnswer(true); status('Đã hiển thị cách diễn đạt đơn giản hơn, kèm nội dung đối chiếu.'); });
  bind('edit', editRequest); bind('approve', advanceLesson);
  bind('change-selection', () => { clearSelection(); returnToSelection(); });
  bind('undo', () => { returnToSelection(); status('Đã hủy kết quả. Bạn có thể chọn lại nội dung hoặc gửi lại yêu cầu.'); });
  content.scrollTop = 0; status('Đọc giải thích và đối chiếu slide. Bạn quyết định sửa, hủy hoặc tiếp tục.');
}
function editRequest() {
  const content = $('#panel-content');
  content.innerHTML = '<div class="eyebrow">SỬA YÊU CẦU</div><h3>Bạn cần làm rõ thêm điều gì?</h3><label for="edited-question">Câu hỏi của bạn (không bắt buộc)</label><textarea id="edited-question" autocomplete="off"></textarea><p class="muted">Bạn có thể xóa câu hỏi để trở về giải thích chung cho phần đã chọn.</p><p class="simulation">Bản thử dùng phản hồi dựng sẵn theo trọng tâm: ví dụ, giai đoạn, câu hỏi tự kiểm tra hoặc giải thích thêm về hai loại evidence.</p><div class="panel-actions"><button id="send-edit" class="primary">Gửi yêu cầu đã sửa</button><button id="cancel-edit" class="secondary">Hủy sửa</button></div>';
  $('#edited-question').placeholder = questionHint;
  $('#edited-question').value = question;
  bind('send-edit', () => { question = $('#edited-question').value.trim(); showAnswer(); });
  bind('cancel-edit', () => showAnswer()); $('#edited-question').focus();
}
function renderLesson() {
  $('.workspace').hidden = false; $('#completed').hidden = true;
  $('#lesson-content').hidden = false;
  $('.steps').hidden = lessonIndex !== 0;
  $('#slide').hidden = lessonIndex !== 0;
  $('#lesson-slide-2').hidden = lessonIndex !== 1;
  $('#lesson-slide-3').hidden = lessonIndex !== 2;
  $('#lesson-heading-title').textContent = lessonTitles[lessonIndex];
  $('#slide-counter').textContent = `Slide 0${lessonIndex + 1} / 03 · Double Diamond`;
  $('#lesson-progress').textContent = `${lessonIndex + 1} / 3`;
  $('#lesson-progress-bar').style.width = `${(lessonIndex + 1) / 3 * 100}%`;
  $$('[data-lesson]').forEach(el => { const n = Number(el.dataset.lesson); el.classList.toggle('active', n === lessonIndex); el.classList.toggle('done', n < lessonIndex); });
  $('#previous-slide').hidden = lessonIndex === 0;
  $('#task').hidden = lessonIndex !== 0;
  $('#continue').hidden = false;
  $('#continue').textContent = lessonIndex === 2 ? 'Hoàn thành bài học ✓' : 'Tiếp tục bài học →';
}
function navigateLesson(index) {
  lessonIndex = Math.max(0, Math.min(2, index));
  showPanel(); selectionUI(false); renderLesson();
  if (lessonIndex === 0) {
    if (step === 3 && selected) showAnswer();
    else returnToSelection();
  } else renderContinuationPanel();
  status(`Slide ${lessonIndex + 1} / 3 · ${lessonTitles[lessonIndex]}`);
  $('.learning').scrollIntoView({behavior:'smooth', block:'start'});
}
function renderContinuationPanel() {
  const content = $('#panel-content');
  content.innerHTML = '<div class="eyebrow">BỐI CẢNH BÀI HỌC</div><h3 id="current-slide-name"></h3><p class="panel-intro">Trợ lý học tập vẫn ở đây. Để chọn nội dung cần giải thích trong sơ đồ Double Diamond, bạn có thể quay lại slide đầu.</p><button id="return-to-diamond" class="secondary">← Quay lại Double Diamond</button>';
  $('#current-slide-name').textContent = lessonTitles[lessonIndex];
  if (selected) {
    const context = document.createElement('div'); context.className = 'context-card';
    const label = document.createElement('b'); label.textContent = 'Phần đã chọn ở slide Double Diamond';
    const text = document.createElement('p'); text.textContent = selected;
    context.append(label,text); content.append(context);
  }
  bind('return-to-diamond', () => navigateLesson(0)); content.scrollTop = 0;
}
function advanceLesson() {
  if (lessonIndex < 2) navigateLesson(lessonIndex + 1);
  else complete();
}
function complete() { selectionUI(false); showPanel(); $('#lesson-content').hidden = true; $('.steps').hidden = true; $('#completed').hidden = false; status(`Đã hoàn thành 3 slide · ${labels[variant]}.`); }
function captureText() {
  if (variant !== 'text' || !selectionEnabled()) return;
  const selection = window.getSelection();
  if (selection && selection.rangeCount && $('#slide').contains(selection.anchorNode) && $('#slide').contains(selection.focusNode) && !$('#selection-tools').contains(selection.anchorNode)) {
    const text = selection.toString().trim(); if (text) choose(text);
  }
}
$('#slide').addEventListener('mouseup', captureText); $('#slide').addEventListener('keyup', captureText);
function point(event) {
  const r = $('#diagram').getBoundingClientRect();
  return {x: Math.max(0,Math.min(900,(event.clientX-r.left)/r.width*900)), y: Math.max(0,Math.min(350,(event.clientY-r.top)/r.height*350))};
}
function drawBox() {
  const rect = $('#region-rect'); rect.style.display = selectionBox ? '' : 'none';
  if (selectionBox) Object.entries({x:selectionBox.x,y:selectionBox.y,width:selectionBox.w,height:selectionBox.h}).forEach(([key,value]) => rect.setAttribute(key,value));
}
function regionLabel() {
  const mid = selectionBox.x + selectionBox.w/2;
  const area = selectionBox.x < 390 && selectionBox.x + selectionBox.w > 520 ? 'Double Diamond' : mid < 390 ? 'Discover / Define' : mid > 520 ? 'Develop / Deliver' : 'Chosen opportunity';
  return `Vùng sơ đồ ${area} · ${Math.round(selectionBox.w)} × ${Math.round(selectionBox.h)} (tọa độ slide)`;
}
$('#diagram').addEventListener('pointerdown', event => {
  if (variant !== 'region' || !selectionEnabled() || event.button !== 0) return;
  event.preventDefault(); previousBox = selectionBox; dragStart = point(event); activePointer = event.pointerId;
  $('#diagram').setPointerCapture(event.pointerId);
});
$('#diagram').addEventListener('pointermove', event => {
  if (!dragStart || event.pointerId !== activePointer) return;
  const end = point(event); selectionBox = {x:Math.min(dragStart.x,end.x),y:Math.min(dragStart.y,end.y),w:Math.abs(end.x-dragStart.x),h:Math.abs(end.y-dragStart.y)}; drawBox();
});
$('#diagram').addEventListener('pointerup', event => {
  if (!dragStart || event.pointerId !== activePointer) return;
  const end = point(event); selectionBox = {x:Math.min(dragStart.x,end.x),y:Math.min(dragStart.y,end.y),w:Math.abs(end.x-dragStart.x),h:Math.abs(end.y-dragStart.y)};
  dragStart = null; activePointer = null;
  if (selectionBox.w < 12 || selectionBox.h < 12) { selectionBox = previousBox; drawBox(); status('Vùng chọn quá nhỏ. Hãy nhấn giữ và kéo chuột để khoanh vùng rõ hơn.'); return; }
  $$('[data-region]').forEach(el => { el.classList.remove('chosen'); el.setAttribute('aria-pressed','false'); }); drawBox(); choose(regionLabel());
});
$('#diagram').addEventListener('pointercancel', () => { dragStart = null; activePointer = null; selectionBox = previousBox; drawBox(); });
const presets = { problem: {x:90,y:45,w:365,h:245}, opportunity: {x:395,y:140,w:120,h:115}, solution: {x:455,y:45,w:365,h:245}, all: {x:45,y:20,w:810,h:315} };
$$('[data-region]').forEach(el => el.onclick = () => {
  if (variant !== 'region' || !selectionEnabled()) return;
  selectionBox = {...presets[el.dataset.region]};
  $$('[data-region]').forEach(btn => { const chosen = btn === el; btn.classList.toggle('chosen', chosen); btn.setAttribute('aria-pressed', String(chosen)); }); drawBox(); choose(regionLabel());
});
$$('[data-block]').forEach(el => el.onclick = () => {
  if (variant !== 'block' || !selectionEnabled()) return;
  const block = document.getElementById(el.dataset.block);
  $$('.block-selected').forEach(node => node.classList.remove('block-selected')); block.classList.add('block-selected');
  $$('[data-block]').forEach(btn => { const chosen = btn === el; btn.classList.toggle('chosen', chosen); btn.setAttribute('aria-pressed', String(chosen)); });
  const content = el.dataset.block === 'diagram-block'
    ? 'Sơ đồ Double Diamond: Discover → Define → Chosen opportunity → Develop → Deliver. Viên kim cương 1 tìm đúng vấn đề; viên kim cương 2 tìm đúng giải pháp.'
    : [...block.querySelectorAll('h3,h4,p')].map(node => node.innerText).join('\n');
  choose(content);
});
bind('reset', reset); bind('restart-complete', reset);
bind('continue', advanceLesson);
bind('previous-slide', () => navigateLesson(lessonIndex - 1));
bind('review-slides', () => navigateLesson(2));
reset();
