# Chặng 2–3 — Ba Solution Options và Human–AI Design (Case A: AI Tutor — Diagnostic Refresher)

> **Trạng thái: BẢN NHÁP do nhóm duyệt.** Ba option là solution hypotheses, chưa được kiểm chứng với người dùng.
> **Thứ tự A → B → C là mức sử dụng AI tăng dần:** từ AI chỉ giải thích đúng thuật ngữ người học bấm (A), đến AI tự chọn nội dung khi người học mở (B), đến AI tự quyết định thời điểm và câu hỏi (C). Nhãn đã đổi so với bản đã push trước đó: A cũ → B, B cũ → C, C cũ → A.
> **Option A đã đổi cơ chế theo prototype:** người học bấm vào một thuật ngữ trên slide thì pop-up giải thích hiện ngay bên dưới. Trước đây Option A là "bôi đen hoặc chụp màn hình rồi chọn giải thích bằng AI, AI trả lời câu hỏi"; phần chụp màn hình và hỏi tiếp không còn trong prototype (xem mục 6, điểm 4).
> Cùng xuất phát từ Hypothesis Problem ở [group-feedback-synthesis.md](group-feedback-synthesis.md) (Chặng 1):
> *Khi đang học (trên lớp hoặc trực tuyến) và gặp phần chưa hiểu trong lúc bài giảng vẫn tiếp tục, học viên gặp khó khăn trong việc làm rõ phần đó ngay trong ngữ cảnh bài học vì phải rời luồng bài sang công cụ bên ngoài (chụp màn hình, chuyển tab, tự mô tả lại ngữ cảnh) hoặc ghi lại để xem sau. Quá trình này làm mất thêm thời gian và trì hoãn việc làm rõ, khiến những kiến thức chưa hiểu dần tích tụ, tạo thành các lỗ hổng kiến thức và lâu dài làm chậm tiến độ học các bài tiếp theo.*

---

## 1. Mở lại Solution Parking Lot

Hướng nhóm chọn so với pool đã park ở Day 17 (Parking Lot của Phát và Bình):

| Option | Gần với hướng nào trong pool Day 17 | Khác ở đâu |
|---|---|---|
| **A** | Phát #6 (từ điển thuật ngữ mở nhanh bên cạnh bài), Bình #5 (bảng thuật ngữ liên quan) | Ở Day 17 đó là nội dung soạn sẵn và ghi là không dùng AI; ở A, AI giải thích đúng thuật ngữ người học bấm, ngay trên slide. |
| **B** | Bình #3 (ví dụ từng bước, cách diễn đạt khác cho đoạn bài hay vướng) | Ở Day 17 nội dung do người biên soạn viết sẵn và ghi là không dùng AI; ở B, AI tự sinh khi người học mở. |
| **C** | Bình #6 (hỗ trợ chẩn đoán bằng AI), Phát #1 (nút AI chẩn đoán, directive gốc) | Ở directive gốc người học bấm nút; ở C, AI chủ động đưa câu hỏi dựa trên phần người học dừng lâu. |

Pool Day 17 còn có các hướng không dùng AI và hướng chuyển cho người (giảng viên, coach, bạn học), như Phát #2, #5 và Bình #1, #4. Nhóm chọn ba hướng đều có AI; các hướng còn lại chưa được chọn ở chặng này.

## 2. Những thứ phải giữ nguyên

| Thành phần | Quyết định chung cho A/B/C |
|---|---|
| **Target user** | Học viên đang học một bài (trên lớp hoặc trực tuyến). Phía giảng viên/coach chưa được kiểm chứng. |
| **Situation** | Gặp phần chưa hiểu trong lúc bài giảng vẫn tiếp tục. |
| **Task** | Làm rõ phần chưa hiểu ngay trong ngữ cảnh bài học, không phải rời luồng sang công cụ bên ngoài. |
| **Desired outcome** | Học viên hiểu đủ để theo tiếp (tự nói lại hoặc làm được bước kế), mất ít thời gian ngoài luồng, và phần chưa hiểu không bị bỏ tồn đọng. |
| **Content/data fixture** | Slide Double Diamond ("Evidence về problem không phải evidence về solution") của bài Design the Experiment. Nội dung giải thích là văn bản Double Diamond do nhóm soạn, dùng chung cho cả ba option (trong prototype là canned AI output, file `prototype/content.js`). |

## 3. Những thứ được phép khác

| Thành phần | **Option A** — Bấm vào thuật ngữ để xem giải thích | **Option B** — Nút gợi ý theo yêu cầu | **Option C** — AI chủ động hỏi khi dừng lâu |
|---|---|---|---|
| **Solution mechanism** | Người học bấm vào một thuật ngữ ngay trên slide. Một pop-up nhỏ hiện ngay bên dưới thuật ngữ đó với phần giải thích của nó. Không có bước gọi AI riêng và không có ô nhập câu hỏi. | Có nút gợi ý để bổ sung ví dụ và cách diễn đạt khác cho phần đang học. Người học chọn thì nội dung mới mở ra. AI tự sinh nội dung dựa trên kiến thức có sẵn. | Hỗ trợ chẩn đoán bằng AI dựa trên phần người học đã dừng lâu. AI chủ động đưa câu hỏi trợ giúp để tìm chỗ vướng. |
| **User làm gì?** | Tự tìm và bấm vào thuật ngữ chưa hiểu, đọc pop-up, rồi đóng pop-up hoặc bấm thuật ngữ khác. | Quyết định có mở nút gợi ý hay không, đọc ví dụ và cách diễn đạt khác, rồi quay lại bài. | Trả lời hoặc bỏ qua câu hỏi AI đưa ra, rồi tiếp tục bài. |
| **AI làm gì?** | Giải thích đúng thuật ngữ được bấm. Không chọn thuật ngữ thay người học và không hội thoại. | Tự sinh ví dụ bổ sung và cách diễn đạt khác cho phần đó khi được mở. Không hỏi lại người học. | Phát hiện phần người học dừng lâu, quyết định lúc nào hỏi, đưa câu hỏi chẩn đoán/trợ giúp. |
| **Trigger** | Người học bấm vào một thuật ngữ trên slide. | Người học chọn mở nút gợi ý. | Người học dừng lâu ở một phần của bài (ngưỡng thời gian chưa chốt). |
| **Trade-off chính** | Phạm vi chính xác vì người học tự chọn thuật ngữ và giữ quyền kiểm soát; ít thao tác, không phải rời luồng bài. Nhưng chỉ làm rõ được các thuật ngữ có trên slide, người học phải biết mình vướng ở thuật ngữ nào, và không hỏi tiếp được nếu pop-up chưa đủ. | Ít thao tác, không phải rời luồng, chỉ hiện khi người học muốn. Nhưng AI không biết người học vướng ở đâu nên gợi ý có thể chung chung, và nội dung AI sinh có thể sai. | Người học không cần tự nhận ra mình đang kẹt. Nhưng dừng lâu chưa chắc là chưa hiểu (có thể đang ghi chú hoặc đọc kỹ), nên dễ hỏi nhầm và gây gián đoạn; còn cần dữ liệu hành vi. |

**Ghi chú thêm (đề xuất, nhóm chỉnh nếu cần):**

| | A | B | C |
|---|---|---|---|
| Mức sử dụng AI (tăng dần) | Thấp: AI chỉ giải thích đúng thuật ngữ người học bấm | Trung bình: AI tự chọn nội dung khi người học mở | Cao: AI tự quyết định thời điểm can thiệp và câu hỏi |
| Ai khởi xướng? | Người học | Người học | AI |
| Ai quyết định nội dung cần làm rõ? | Người học (chọn thuật ngữ) | AI (chọn ví dụ và cách diễn đạt) | AI (chọn câu hỏi) |
| Barrier của Hypothesis Problem mà option nhắm tới | Chuyển tab, tự mô tả lại ngữ cảnh | Rời luồng bài | Ghi lại xem sau / để phần chưa hiểu trôi qua |

## 4. Distance check

- **A khác B vì:** ở A, người học tự chọn đúng thuật ngữ cần làm rõ và nhận giải thích của chính thuật ngữ đó. Ở B, người học chỉ quyết định mở hay không, còn AI chọn nội dung giải thích (ví dụ, cách diễn đạt khác) cho cả phần đang học mà không biết người học vướng ở đâu.
- **B khác C vì:** ở B, người học quyết định mở và AI sinh nội dung chung cho phần đó. Ở C, AI khởi xướng dựa trên tín hiệu hành vi (dừng lâu), quyết định thời điểm can thiệp và hỏi để xác định chỗ vướng trước khi hỗ trợ.
- **A khác C vì:** ở A, người học khởi xướng và tự chọn thuật ngữ, AI chỉ giải thích. Ở C, AI khởi xướng và quyết định thời điểm lẫn câu hỏi, người học chỉ phản hồi; quyền quyết định chuyển hẳn từ người học sang AI.

**Vị trí trên spectrum (xấp xỉ), cũng là thứ tự mức sử dụng AI tăng dần:**

```
USER CREATES / INITIATES             →  A (người học chọn thuật ngữ cần làm rõ)
        ↓
USER + AI CO-CREATE                  →  B (người học mở, AI sinh nội dung)
        ↓
AI CREATES / INITIATES, USER REVIEWS →  C (AI chủ động hỏi, người học phản hồi)
```

## 5. Kiểm tra GATE 2 — Meaningful options

- [x] Ba option cùng user, situation, task và desired outcome (mục 2).
- [x] Khác nhau ở cách chia công việc và quyền quyết định giữa người học với AI: ai khởi xướng, ai chọn phạm vi và nội dung (mục 3 và 4).
- [x] Không phải ba option chỉ khác UI hoặc wording; distance check không nhắc màu, layout hay wording.
- [ ] Lưu ý: cả ba option đều dùng AI sinh nội dung, nên khoảng cách nằm ở chỗ ai khởi xướng và ai quyết định. A và B gần nhau nhất (cùng do người học khởi xướng), khác ở chỗ ai chọn phạm vi và nội dung. Sau khi Option A đổi thành bấm thuật ngữ, A cũng gần với một từ điển thuật ngữ; nếu nguồn giải thích của A là nội dung soạn sẵn thay vì AI thì A rơi ra khỏi nhóm "có AI" (mục 6, điểm 4). Cần giữ khác biệt này rõ khi làm prototype.

## 6. Điểm cần nhóm làm rõ

1. **"Kiến thức có sẵn" ở Option B** là nội dung của bài học (slide, tài liệu) hay kiến thức nền của AI? Hai cách này khác nhau về độ chính xác và về dữ liệu AI cần.
2. **Ngưỡng "dừng lâu" ở Option C** là bao lâu, và đo ở đâu (cuộn, tua lại, không thao tác)? Chưa chốt nên chưa kiểm tra được trade-off hỏi nhầm.
3. **Lý do chọn ba hướng đều có AI** chưa được ghi. Nếu cần giải thích vì sao các hướng không dùng AI hoặc chuyển cho người (Phát #2, #5, Bình #1, #4) chưa được chọn, nhóm bổ sung ở đây.
4. **Option A đã đổi so với mô tả ban đầu của nhóm.** Mô tả ở Chặng 2 là người học bôi đen hoặc chụp ảnh màn hình phần chưa hiểu, chọn giải thích bằng AI, và AI trả lời câu hỏi. Prototype chỉ còn: bấm thuật ngữ, pop-up hiện ngay, không chụp màn hình, không hỏi tiếp. Nhóm cần chốt: (a) giữ cơ chế bấm thuật ngữ làm Option A; (b) pop-up do AI sinh hay là nội dung biên soạn sẵn (prototype chỉ dùng văn bản dựng sẵn nên tester không phân biệt được); (c) có thêm hỏi tiếp hoặc chụp màn hình không.

---

# Chặng 3 — Human–AI Design pass

> **Trạng thái: BẢN NHÁP, chưa được nhóm xác nhận.** Các quyết định Act / Ask / Don't Act, cách thể hiện evidence và quyết định về dữ liệu dưới đây là đề xuất để nhóm chỉnh. Cột Option A đã cập nhật theo prototype hiện tại.
> Chỉ review critical interaction cần test của mỗi option. Không thiết kế toàn bộ sản phẩm và không thêm màn hình cho mỗi tiêu chí.

## 7. Critical interaction cần test

Cả ba dùng chung fixture ở mục 2 (slide Double Diamond) để so sánh được.

| Option | Critical interaction | Vì sao đây là điểm rủi ro |
|---|---|---|
| **A** | Người học tìm và bấm vào một thuật ngữ, rồi đọc pop-up. | Người học có thể không nhận ra thuật ngữ nào bấm được. Pop-up hiện giải thích ở mức cả giai đoạn (ví dụ bấm "Past story" ra đoạn Discover), nên có thể rộng hơn thuật ngữ đã bấm. |
| **B** | Người học mở nút gợi ý và đọc ví dụ, cách diễn đạt do AI sinh. | Người đang chưa hiểu khó tự phát hiện AI sinh sai. Người được Khang phỏng vấn từng nói AI "có một số lần sai" (Chặng 1). |
| **C** | AI chủ động đưa câu hỏi khi người học dừng lâu. | Dừng lâu có thể là đang ghi chú hoặc đọc kỹ, nên AI có thể ngắt mạch học nhầm lúc. |

## 8. Human–AI Decision Table

Bốn quyết định thiết kế (Expectation, Role and Agency, Evidence and Uncertainty, Control and Recovery) được trả lời qua năm hàng sau:

| Human–AI decision | **Option A** — Bấm vào thuật ngữ để xem giải thích | **Option B** — Nút gợi ý theo yêu cầu | **Option C** — AI chủ động hỏi khi dừng lâu |
|---|---|---|---|
| **User làm gì? AI làm gì?** | Người học bấm vào thuật ngữ chưa hiểu và đọc pop-up. AI giải thích đúng thuật ngữ đó. | Người học quyết định mở và đọc. AI sinh ví dụ, cách diễn đạt khác cho phần đó. | Người học trả lời hoặc bỏ qua câu hỏi. AI phát hiện dừng lâu, chọn thời điểm, đưa câu hỏi. |
| **AI Act / Ask / Don't Act? Vì sao?** | **Act, chỉ sau khi người học bấm một thuật ngữ.** Vì người học đã chỉ rõ thuật ngữ cần làm rõ và nội dung chỉ bổ sung, không đổi bài chính. **Don't Act** với phần người học không bấm. Không cần Ask vì thuật ngữ đã được chỉ rõ. | **Act, chỉ sau khi người học mở.** Vì người học đã yêu cầu, nội dung chỉ bổ sung và không đổi bài chính. Hậu quả khi sai là học sai một khái niệm, nên cần nhãn và căn cứ ở hai hàng dưới. | **Ask, không tự giải thích.** Vì tín hiệu dừng lâu mơ hồ và AI chưa biết chỗ vướng, nên chỉ hỏi nhẹ. **Don't Act** khi tín hiệu yếu hoặc người học đã tắt tính năng. |
| **User hiểu capability/limit bằng gì?** | Khi rê chuột, con trỏ đổi thành bàn tay và thuật ngữ được gạch chân, báo hiệu bấm được. Prototype chưa có dòng nói giới hạn của giải thích (đã bỏ khỏi bản trước; xem mục 11). | Nhãn trước khi mở: nội dung do AI tạo, có thể chưa chính xác, hãy đối chiếu với bài giảng. Giới hạn: AI không biết người học vướng ở đâu. | Lần đầu AI hỏi, nói rõ lý do ("bạn đã dừng ở phần này") và giới hạn ("dừng lâu chưa chắc là chưa hiểu"). |
| **Evidence/uncertainty được thể hiện thế nào?** | Tiêu đề trong pop-up (ví dụ "Define – Xác định") cho biết giải thích thuộc phần nào của nội dung bài. Prototype chưa có nguồn trích dẫn hay chỉ báo độ chắc chắn. | Nêu căn cứ của gợi ý. Nếu dựa trên nội dung bài thì trích đoạn bài làm căn cứ; nếu dựa trên kiến thức nền của AI thì ghi rõ chưa đối chiếu với bài giảng (xem mục 6, điểm 1). | Nêu rõ tín hiệu ("dừng khoảng N giây ở phần X"). Diễn đạt câu hỏi ở dạng không chắc ("Có phải phần này làm bạn vướng không?"), không khẳng định. |
| **User kiểm soát và recovery thế nào?** | Đóng pop-up bằng nút ×, bấm ra ngoài, bấm lại đúng thuật ngữ đang mở, hoặc phím Esc. Bấm thuật ngữ khác để đổi giải thích. Bài chính không đổi nên quay lại ngay. Nếu pop-up chưa đủ: chưa có hỏi tiếp, người học tự đối chiếu bài giảng hoặc hỏi giảng viên. | Mở/đóng gợi ý. "Thử ví dụ khác". Đánh dấu "gợi ý không đúng". Bài chính không đổi nên quay lại đúng đoạn. Nếu nghi ngờ sai: đối chiếu đoạn bài hoặc hỏi giảng viên. | Bỏ qua một lần; "đừng hỏi ở phần này"; tắt hoàn toàn. Câu hỏi không chặn bài. Nếu hỏi nhầm: bỏ qua và tiếp tục ngay. |

**Nếu AI sai:**

| | Người học mất gì? | Dễ phát hiện không? |
|---|---|---|
| **A** | Hiểu sai thuật ngữ, hoặc nhận giải thích rộng hơn thuật ngữ đã bấm. | **Khó với lỗi nội dung**, vì người đang chưa hiểu khó nhận ra giải thích sai. **Dễ với lệch phạm vi**, vì tiêu đề pop-up khác với thuật ngữ đã bấm. |
| **B** | Hiểu sai khái niệm, mất thời gian đọc. | **Khó.** Người đang chưa hiểu khó nhận ra ví dụ hoặc cách diễn đạt sai. |
| **C** | Bị ngắt mạch học; có thể tưởng mình chưa hiểu dù đã hiểu. | **Dễ.** Câu hỏi không cần thiết thấy ngay. |

## 9. Feedback and data check

Có liên quan với cả ba option. Đây là đề xuất mặc định cho prototype, nhóm xác nhận lại.

| Vấn đề | Option liên quan | Đề xuất |
|---|---|---|
| Thuật ngữ người học bấm (cho biết người học đang vướng ở đâu) | **A** | Chỉ dùng trong phiên hiện tại để hiện giải thích, không lưu lại. Nếu sau này thêm chụp màn hình thì chỉ xử lý để trả lời, không lưu, vì ảnh có thể chứa nhiều hơn slide. |
| Feedback "gợi ý không đúng/hữu ích" | **B**, và A, C nếu có | Chỉ ảnh hưởng phiên hiện tại, không ghi nhớ cho lần sau. |
| Dữ liệu hành vi (thời gian dừng) | **C** | Chỉ dùng trong phiên hiện tại, không lưu lại. Người học tắt được tính năng này. |

- **Feedback ảnh hưởng phiên hiện tại, lần sau hay được ghi nhớ?** Mặc định: chỉ phiên hiện tại.
- **Dữ liệu nào được dùng và người học có cách rút quyền không?** Thuật ngữ đã bấm (A) và dữ liệu hành vi (C) không được lưu nên không có gì để rút; người học vẫn tắt được C. Nếu nhóm muốn hệ thống học từ feedback ở các lần sau, phải bổ sung cách người học rút quyền.

## 10. Kiểm tra GATE 3 — Human control

- [x] Mỗi option nói rõ người học và AI làm gì (hàng 1 của mục 8).
- [x] Agency phù hợp với hậu quả khi sai: A Act sau khi người học bấm thuật ngữ; B Act sau khi người học mở, kèm nhãn và căn cứ; C chỉ Ask vì can thiệp chủ động có rủi ro ngắt mạch.
- [x] Mỗi option có đường kiểm soát hoặc phục hồi cụ thể (hàng 5 của mục 8): đóng pop-up hoặc bấm thuật ngữ khác, thử cách khác, bỏ qua/tắt.
- [ ] Rủi ro còn lại: ở A và B, người học khó phát hiện khi AI sai nội dung. Giảm thiểu hiện chỉ gồm tiêu đề/căn cứ trong nội dung và đường đối chiếu với bài giảng, chưa được kiểm thử. Cần chú ý khi chạy phiên test.

## 11. Điểm cần nhóm xác nhận cho Chặng 3

1. Mục 6, điểm 1 ("kiến thức có sẵn" ở Option B): quyết định cách thể hiện evidence ở hàng 4 của mục 8.
2. Mục 6, điểm 2 (ngưỡng "dừng lâu" ở Option C): quyết định C hỏi nhầm nhiều hay ít.
3. Các quyết định Act / Ask / Don't Act ở hàng 2 và các quyết định dữ liệu ở mục 9 là đề xuất, chưa được nhóm xác nhận.
4. Option A trong prototype hiện không có dòng nói giới hạn của giải thích (ví dụ "nội dung có thể chưa chính xác, hãy đối chiếu với bài giảng") và không có ô hỏi tiếp. Nhóm quyết định giữ prototype như vậy, hay bổ sung lại dòng giới hạn (liên quan hàng "capability/limit" ở mục 8).
5. Granularity của pop-up ở Option A: hiện giải thích ở mức giai đoạn (Discover, Define, Develop, Deliver) hoặc kim cương, chưa riêng cho từng thuật ngữ con như "Past story". Nhóm quyết định có cần nội dung riêng cho từng thuật ngữ không.
