# Chặng 1 — Tổng hợp evidence (Evidence huddle + Hypothesis Problem)

> **Trạng thái: BẢN NHÁP, chưa phải kết luận.** Mọi nội dung dưới đây là hypothesis, chưa validated.
> Đã tổng hợp đủ 3/3 Practice Notes (Phát, Bình, Khang). Mỗi note là một người được phỏng vấn, một cuộc.
> Phạm vi: chỉ nhìn từ phía học viên (Case A: AI Tutor — Diagnostic Refresher).

**Nguồn:**
- Note 1 (Phát → P1): [practice-note.md](https://github.com/phatnguyen2004s/Track1-Day17-2A202602387-NguyenTienPhat/blob/main/03-interview/practice-note.md), [01-problem-hypothesis.md](https://github.com/phatnguyen2004s/Track1-Day17-2A202602387-NguyenTienPhat/blob/main/01-problem-hypothesis.md)
- Note 2 (Bình → P01): [notes.md](https://github.com/dotrongbinhf/Track1_Day17_2A202602855_DoTrongBinh/blob/main/interview/notes.md), [README.md](https://github.com/dotrongbinhf/Track1_Day17_2A202602855_DoTrongBinh/blob/main/README.md)
- Note 3 (Khang → người được phỏng vấn): [interview/notes.md](https://github.com/khangdaotr/Track1_Day17_2A202602974_DaoTrongKhang/blob/main/Track1_Day17_2A202602974_DaoTrongKhang/interview/notes.md) (transcript), [README.md](https://github.com/khangdaotr/Track1_Day17_2A202602974_DaoTrongKhang/blob/main/Track1_Day17_2A202602974_DaoTrongKhang/README.md) (bảng evidence)

---

## 1. Evidence huddle

| Practice Note | User đã thực sự làm/nói gì? | Điều nhóm đang diễn giải |
|---|---|---|
| **1. Phát → P1** | Gặp phần không hiểu thì search Google (có AI hỗ trợ). Nói cách này "nhanh nhất trong những cách mà anh biết" và "không có gọi là quá mất thời gian". Dùng 2–3 lần thì thường nhớ, "đôi khi là mình quên luôn", nên "thường là mình phải search lại". Không kể sự kiện cụ thể, không kể hậu quả. | Giả thuyết C yếu (xử lý nhanh, không phiền). Có pain mới ngoài A/B/C: kiến thức không đọng lại nên phải tra lặp (gọi tạm là D). |
| **2. Bình → P01** | Trong 7 ngày qua có phần không hiểu khi học trên lớp. Có thời gian thì tra ChatGPT/Claude. Bài giảng tiếp tục thì ghi lại để xem sau. Nói "ngày nào mình cũng gặp". Mang bài tập về thì "sẽ không có thời gian để mình có thể tìm hiểu sâu". Tự nói mình "ngại khi mà hỏi người khác", "sợ làm phiền". | H3 (Bình đề xuất): rào cản là thời gian và nhịp bài giảng, cộng thêm chi phí xã hội của việc hỏi. Bình ghi rõ là chưa xác nhận hay bác bỏ A/B. |
| **3. Khang → người được phỏng vấn** | **Có một sự kiện cụ thể:** "ngày hôm qua" học bài mới về Double Diamond và chưa hiểu cách hoạt động. Làm: "chụp màn hình cái phần đấy, rồi xong mình hỏi AI để AI giải thích". Phải chuyển sang tab khác, chụp màn hình, viết câu hỏi và mô tả ngữ cảnh để AI hiểu phần đó nằm ở đâu. Nói AI "có một số lần sai và một số lần mình phải tìm hiểu lại kỹ rất là lâu". Cuối cùng hiểu được, nhưng "mình lại mất nhiều thời gian hơn". Nói mất thời gian "sẽ kéo theo các cái bài học khác bị chậm trễ". | Workaround có ma sát: rời luồng bài, tự chuyển ngữ cảnh, kết quả AI chưa ổn định. Đây là note duy nhất có sự kiện cụ thể kèm hậu quả (trễ các bài sau). Cho thấy pain về việc chuyển ngữ cảnh, không phải thiếu kiến thức nền. |

**Lưu ý về độ tin cậy của evidence**
- Quote trong note của Phát do NotebookLM trích từ ghi âm, **chưa nghe lại để đối chiếu**. Có chỗ trông như lỗi nhận dạng giọng nói (như "disệch", "file lock"). Phải nghe lại và sửa trước khi dùng làm bằng chứng.
- Note của Bình ghi chưa đối chiếu từng câu giữa audio và transcript. Khang chỉ đính kèm transcript và file ghi âm; chưa thấy ghi chú về việc đối chiếu.
- Transcript của Khang có nhãn người nói bị đảo: người được phỏng vấn mang nhãn "Interviewer", người phỏng vấn mang nhãn "Người phỏng vấn". Khang chưa có Practice Note theo mẫu riêng (file `notes.md` ghi "ghi chú chi tiết: chưa có"); cột "làm/nói gì" ở hàng 3 trên đây do mình lấy từ transcript và bảng evidence trong README của Khang.
- **Hậu quả trong note của Khang xuất hiện sau câu hỏi dẫn dắt** ("bạn có thấy nó bị phức tạp và tốn thời gian không?", "ảnh hưởng đến quá trình học của bạn nhiều không?"). Nên coi là tín hiệu, chưa phải bằng chứng chắc. Phần mô tả các bước (chụp màn hình, chuyển tab, mô tả ngữ cảnh) là người được phỏng vấn tự kể.
- Người được phỏng vấn của Khang mở đầu bằng "mình cũng gặp khó khăn trong việc tìm hiểu các nội dung trên slide khi học online", tức là có thể đã được tuyển theo đúng vấn đề này. Tình trạng "ngoài nhóm" của note Khang chưa được xác nhận, note Bình cũng chưa xác nhận.
- Phần phản hồi với công cụ mới và AI Tutor ở cả ba cuộc là feature request hoặc dự đoán, đã loại khỏi evidence về pain.

## 2. Thảo luận nhanh

**Có situation, behavior hoặc workaround nào xuất hiện nhiều hơn một lần?**
- **Cả ba** đều xử lý bằng công cụ bên ngoài bài học: Google/AI (P1), ChatGPT/Claude (P01), chụp màn hình hỏi AI (Khang).
- **Cả ba** đều có việc làm rõ bị tách khỏi bài đang học: tra lại (P1), ghi lại để xem sau (P01), chuyển tab và mô tả lại ngữ cảnh (Khang).
- Hai trong ba (P01, Khang) nhắc đến việc tốn thời gian hoặc không đủ thời gian khi làm rõ.
- Cả ba đều gặp tình huống này thường xuyên theo lời tự nói, nhưng chỉ Khang kể được một sự kiện cụ thể.

**Evidence nào mâu thuẫn hoặc làm nhóm bất ngờ?**
- Cùng một cách xử lý (hỏi AI hoặc Google), P1 nói "nhanh, không mất thời gian" còn người của Khang nói "mất nhiều thời gian hơn". Có thể khác nhau ở mức độ đào sâu (P1 tra nhanh, người của Khang "tìm hiểu rất là sâu"), nhưng chưa kiểm chứng.
- P01 gặp rào cản trước khi tra (không có thời gian trong lớp, ngại hỏi), còn người của Khang gặp rào cản trong khi tra (chuyển ngữ cảnh, AI sai). Hai điểm rào cản khác nhau.
- Chưa ai nói thẳng "không biết mình thiếu khái niệm nền nào". Chỉ có một câu mơ hồ: người của Khang nói phần khó nhất là "tìm được đúng cái phần kiến thức mà mình đang vướng mắc". Câu này có thể là tín hiệu yếu cho A (khó xác định chỗ vướng), nhưng trả lời cho câu hỏi "phần nào khó nhất" và không kiểm tra kiến thức nền, nên chưa dùng làm evidence cho A.
- Hậu quả chỉ có một nguồn, và nguồn đó nằm sau câu hỏi dẫn dắt.
- Người của Khang nói vẫn tiếp tục tìm cho đến khi hiểu "để mình có thể đi đến các cái phần khác". Nghĩa là họ không bỏ phần chưa hiểu lại phía sau, nên lời kể này cho thấy bài sau bị trễ chứ chưa cho thấy lỗ hổng kiến thức tích tụ. Chỉ P01 có hành vi trì hoãn (ghi lại để xem sau), nhưng P01 chưa kể phần ghi lại đó có được xem lại hay không.

**Điều gì vẫn chỉ là suy đoán của nhóm?**
- A (thiếu kiến thức nền, không xác định được khái niệm nào) chưa có evidence ở cả ba note.
- B (cách giải thích của bài chưa phù hợp) chưa có evidence trực tiếp. Người của Khang cần mô tả nhiều ngữ cảnh cho AI, nhưng đó là ma sát của công cụ bên ngoài, chưa chắc là lỗi của bài giảng.
- Mức độ phổ biến: mỗi note là một người, "nhiều người cũng giống mình" (P01) chưa được kiểm chứng.
- Chuỗi hậu quả: mất thêm thời gian → trì hoãn việc làm rõ → kiến thức chưa hiểu tích tụ thành lỗ hổng → lâu dài chậm các bài sau. Mới có evidence cho hai mắt xích đầu (mức yếu), chưa note nào kể về lỗ hổng kiến thức tích tụ.
- Việc kiến thức không đọng lại nên phải tra lặp (D, chỉ có từ P1).

**Hypothesis Problem nào đủ cụ thể để làm điểm xuất phát?**
- Ba note cùng chỉ ra một điểm chung: việc làm rõ phần chưa hiểu diễn ra **ngoài luồng bài học**, tách khỏi ngữ cảnh, tốn thời gian hoặc bị trì hoãn. Đây là phần có nhiều evidence nhất, nên bản nháp bên dưới dựa vào đó.
- **Nhóm cần thống nhất định nghĩa A/B.** Khang và Bình dùng A = kiến thức nền chưa vững, B = cách giải thích/nội dung chưa phù hợp. Phát dùng A = không biết mình thiếu gì, B = biết nhưng chi phí xử lý cao, C = pain không đủ lớn.

---

## 3. Chốt Hypothesis Problem

> Khi **đang học (trên lớp hoặc trực tuyến) và gặp phần chưa hiểu trong lúc bài giảng vẫn tiếp tục**, **học viên** gặp khó khăn trong việc **làm rõ phần đó ngay trong ngữ cảnh bài học** vì **phải rời luồng bài sang công cụ bên ngoài (chụp màn hình, chuyển tab, tự mô tả lại ngữ cảnh) hoặc ghi lại để xem sau**. Quá trình này **làm mất thêm thời gian và trì hoãn việc làm rõ, khiến những kiến thức chưa hiểu dần tích tụ, tạo thành các lỗ hổng kiến thức và lâu dài làm chậm tiến độ học các bài tiếp theo**.

**Consequence được viết thành một chuỗi, mỗi mắt xích có mức evidence khác nhau:**

| Mắt xích của consequence | Evidence hiện có | Mức |
|---|---|---|
| Mất thêm thời gian | Người của Khang: hiểu được nhưng "mất nhiều thời gian hơn" (sau câu hỏi dẫn dắt). P01: không có thời gian tìm hiểu sâu khi phải làm bài tập (có điều kiện). | Yếu |
| Trì hoãn việc làm rõ | P01: bài giảng tiếp tục thì ghi lại để xem sau. Chưa biết phần ghi lại có được xem lại không. | Yếu |
| Kiến thức chưa hiểu tích tụ thành lỗ hổng | Chưa note nào kể. Người của Khang còn nói vẫn tìm cho đến khi hiểu mới sang phần khác. | **Chưa có (giả thuyết)** |
| Lâu dài chậm tiến độ các bài tiếp theo | Người của Khang: mất thời gian "sẽ kéo theo các cái bài học khác bị chậm trễ" (sau câu hỏi dẫn dắt). Đây là chậm vì tốn thời gian, chưa phải chậm vì lỗ hổng tích tụ. | Yếu |

**Khác với bản nháp trước:**
- Khi có note của Khang, nhóm bỏ barrier "kiến thức đã tra không đọng nên phải tra lại" khỏi câu chính (chỉ có từ P1, và P1 nói cách xử lý không mất thời gian), thay bằng barrier "rời luồng và chuyển ngữ cảnh" có từ cả ba note. D được giữ ở danh sách điều chưa chứng minh.
- Consequence được nhóm viết lại thành chuỗi trên, thêm hai mắt xích "kiến thức tích tụ thành lỗ hổng" và "lâu dài chậm các bài sau". Hai mắt xích này là suy luận của nhóm, cần kiểm chứng ở vòng sau.

**Hypothesis Problem nhóm tiếp tục:** câu trên (nháp, nhóm đọc lại và chỉnh).

**Evidence ban đầu hỗ trợ giả thuyết:**
- Người của Khang: chụp màn hình, chuyển tab, viết prompt và mô tả ngữ cảnh để hỏi AI; AI có lúc sai nên phải tìm hiểu lại lâu; hiểu được nhưng mất nhiều thời gian hơn (note Khang).
- P01: ghi lại để xem sau khi bài giảng tiếp tục, và bài tập mang về làm mất thời gian tìm hiểu sâu (note Bình).
- P1: xử lý bằng cách tra bên ngoài và "thường là mình phải search lại" (note Phát).

**Điều vẫn chưa được chứng minh:**
- Mức độ phổ biến: mỗi note chỉ một người, chưa biết có đại diện không.
- Kiến thức chưa hiểu có thật sự tích tụ thành lỗ hổng không: chưa note nào kể về việc bỏ lại phần chưa hiểu rồi bị ảnh hưởng ở bài sau.
- Hậu quả "chậm tiến độ các bài sau": chỉ có một lời kể, sau câu hỏi dẫn dắt, và lời kể đó là chậm vì tốn thời gian chứ chưa phải vì lỗ hổng kiến thức.
- A và B: chưa có dữ liệu hỗ trợ hoặc bác bỏ ở cả ba note.
- Bối cảnh: trên lớp (P01) hay trực tuyến (Khang) chưa thống nhất, P1 chưa nêu.
- Vì sao P1 coi cách xử lý là nhanh còn người của Khang coi là tốn thời gian.
- Tần suất: chỉ Khang kể được một sự kiện cụ thể, chưa ai kể lần trước đó để so sánh.

## 4. Kiểm tra GATE 1 — Evidence continuity

- [x] Có đủ năm thành phần: user (học viên), situation (đang học, bài giảng tiếp tục), job (làm rõ phần chưa hiểu ngay trong ngữ cảnh bài), barrier (rời luồng, chuyển ngữ cảnh, hoặc ghi lại xem sau), consequence (mất thêm thời gian và trì hoãn việc làm rõ, kiến thức chưa hiểu tích tụ thành lỗ hổng, lâu dài chậm các bài tiếp theo).
- [x] Có ít nhất một observation Day 17: người của Khang chụp màn hình hỏi AI về Double Diamond "ngày hôm qua"; P01 ghi lại để xem sau; P1 phải search lại.
- [x] Có ít nhất một điều chưa biết (xem danh sách ở mục 3).
- [ ] Điểm yếu còn lại: consequence là một chuỗi mà chỉ hai mắt xích đầu (mất thời gian, trì hoãn) có evidence yếu. Mắt xích "tích tụ thành lỗ hổng kiến thức" chưa có evidence, và "chậm các bài sau" chỉ có một nguồn sau câu hỏi dẫn dắt. Gate 1 chỉ yêu cầu hypothesis có đủ thành phần và chỉ ra điều chưa biết, nên nhóm vẫn qua được nếu ghi rõ các mắt xích này là giả thuyết, và cần hỏi lại ở vòng sau bằng câu hỏi trung tính.

## 5. Việc cần làm tiếp

1. Nghe lại audio của Phát (voice_1, voice_2) và sửa quote cho đúng âm thanh. Khang và Bình đối chiếu audio với transcript nếu chưa làm.
2. Nhóm thống nhất định nghĩa Pain A/B/C/D và cách gọi chung (hiện Phát khác Bình và Khang).
3. Thống nhất bối cảnh học: trên lớp hay trực tuyến, và ghi rõ trong Hypothesis Problem.
4. Ở vòng sau, hỏi theo sự kiện cụ thể và tránh câu dẫn dắt: một buổi học gần đây, đã làm gì, kết quả ra sao, hậu quả với tiến độ. Có thể hỏi riêng một probe về kiến thức tiên quyết để kiểm tra A.
5. Thêm probe để kiểm tra chuỗi consequence: phần đã ghi lại hoặc bỏ qua sau đó có được quay lại không, khi nào; có lần nào phần chưa hiểu từ trước khiến bài sau khó theo hơn không; kể một lần cụ thể. Nếu không ai kể được, nhóm nên bỏ hoặc làm nhẹ hai mắt xích cuối của consequence.
