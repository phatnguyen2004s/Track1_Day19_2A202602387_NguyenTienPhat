# Chặng 2 — Ba Solution Options (Case A: AI Tutor — Diagnostic Refresher)

> **Trạng thái: BẢN NHÁP do nhóm duyệt.** Ba option là solution hypotheses, chưa được kiểm chứng với người dùng.
> Cùng xuất phát từ Hypothesis Problem ở [group-feedback-synthesis.md](group-feedback-synthesis.md) (Chặng 1):
> *Khi đang học (trên lớp hoặc trực tuyến) và gặp phần chưa hiểu trong lúc bài giảng vẫn tiếp tục, học viên gặp khó khăn trong việc làm rõ phần đó ngay trong ngữ cảnh bài học vì phải rời luồng bài sang công cụ bên ngoài (chụp màn hình, chuyển tab, tự mô tả lại ngữ cảnh) hoặc ghi lại để xem sau. Quá trình này làm mất thêm thời gian và trì hoãn việc làm rõ, khiến những kiến thức chưa hiểu dần tích tụ, tạo thành các lỗ hổng kiến thức và lâu dài làm chậm tiến độ học các bài tiếp theo.*

---

## 1. Mở lại Solution Parking Lot

Hướng nhóm chọn so với pool đã park ở Day 17 (Parking Lot của Phát và Bình):

| Option | Gần với hướng nào trong pool Day 17 | Khác ở đâu |
|---|---|---|
| **A** | Bình #3 (ví dụ từng bước, cách diễn đạt khác cho đoạn bài hay vướng) | Ở Day 17 nội dung do người biên soạn viết sẵn và ghi là không dùng AI; ở A, AI tự sinh khi người học mở. |
| **B** | Bình #6 (hỗ trợ chẩn đoán bằng AI), Phát #1 (nút AI chẩn đoán, directive gốc) | Ở directive gốc người học bấm nút; ở B, AI chủ động đưa câu hỏi dựa trên phần người học dừng lâu. |
| **C** | Phát #3 (chat hỏi đáp với AI ngay trong bài) | C thêm cách người học chỉ đúng phần chưa hiểu bằng cách bôi đen hoặc chụp ảnh màn hình. |

Pool Day 17 còn có các hướng không dùng AI và hướng chuyển cho người (giảng viên, coach, bạn học), như Phát #2, #5 và Bình #1, #4. Nhóm chọn ba hướng đều có AI; các hướng còn lại chưa được chọn ở chặng này.

## 2. Những thứ phải giữ nguyên

| Thành phần | Quyết định chung cho A/B/C |
|---|---|
| **Target user** | Học viên đang học một bài (trên lớp hoặc trực tuyến). Phía giảng viên/coach chưa được kiểm chứng. |
| **Situation** | Gặp phần chưa hiểu trong lúc bài giảng vẫn tiếp tục. |
| **Task** | Làm rõ phần chưa hiểu ngay trong ngữ cảnh bài học, không phải rời luồng sang công cụ bên ngoài. |
| **Desired outcome** | Học viên hiểu đủ để theo tiếp (tự nói lại hoặc làm được bước kế), mất ít thời gian ngoài luồng, và phần chưa hiểu không bị bỏ tồn đọng. |
| **Content/data fixture** | Một slide cụ thể có phần dễ vướng. Đề xuất dùng slide Double Diamond từ cuộc phỏng vấn của Khang (sự kiện cụ thể duy nhất ở Chặng 1), kèm 1–2 phần chưa hiểu mẫu. |

## 3. Những thứ được phép khác

| Thành phần | **Option A** — Nút gợi ý theo yêu cầu | **Option B** — AI chủ động hỏi khi dừng lâu | **Option C** — Bôi đen/chụp màn hình rồi hỏi AI |
|---|---|---|---|
| **Solution mechanism** | Có nút gợi ý để bổ sung ví dụ và cách diễn đạt khác cho phần đang học. Người học chọn thì nội dung mới mở ra. AI tự sinh nội dung dựa trên kiến thức có sẵn. | Hỗ trợ chẩn đoán bằng AI dựa trên phần người học đã dừng lâu. AI chủ động đưa câu hỏi trợ giúp để tìm chỗ vướng. | Người học chủ động bôi đen hoặc chụp ảnh màn hình phần chưa hiểu và chọn giải thích bằng AI. AI hỗ trợ trả lời câu hỏi. |
| **User làm gì?** | Quyết định có mở nút gợi ý hay không, đọc ví dụ và cách diễn đạt khác, rồi quay lại bài. | Trả lời hoặc bỏ qua câu hỏi AI đưa ra, rồi tiếp tục bài. | Xác định và chọn đúng phần chưa hiểu, chọn giải thích bằng AI, đặt câu hỏi tiếp khi cần. |
| **AI làm gì?** | Tự sinh ví dụ bổ sung và cách diễn đạt khác cho phần đó khi được mở. Không hỏi lại người học. | Phát hiện phần người học dừng lâu, quyết định lúc nào hỏi, đưa câu hỏi chẩn đoán/trợ giúp. | Giải thích phần được chọn và trả lời các câu hỏi tiếp theo về phần đó. |
| **Trigger** | Người học chọn mở nút gợi ý. | Người học dừng lâu ở một phần của bài (ngưỡng thời gian chưa chốt). | Người học bôi đen hoặc chụp ảnh màn hình phần chưa hiểu. |
| **Trade-off chính** | Ít thao tác, không phải rời luồng, chỉ hiện khi người học muốn. Nhưng AI không biết người học vướng ở đâu nên gợi ý có thể chung chung, và nội dung AI sinh có thể sai. | Người học không cần tự nhận ra mình đang kẹt. Nhưng dừng lâu chưa chắc là chưa hiểu (có thể đang ghi chú hoặc đọc kỹ), nên dễ hỏi nhầm và gây gián đoạn; còn cần dữ liệu hành vi. | Phạm vi chính xác vì người học tự chỉ ra chỗ vướng, và người học giữ quyền kiểm soát. Nhưng đòi hỏi người học biết mình vướng ở đâu và tự đặt câu hỏi; vẫn còn thao tác chọn và chụp. |

**Ghi chú thêm (đề xuất, nhóm chỉnh nếu cần):**

| | A | B | C |
|---|---|---|---|
| Ai khởi xướng? | Người học | AI | Người học |
| Ai quyết định nội dung cần làm rõ? | AI (chọn ví dụ và cách diễn đạt) | AI (chọn câu hỏi) | Người học (chọn vùng và câu hỏi) |
| Barrier của Hypothesis Problem mà option nhắm tới | Rời luồng bài | Ghi lại xem sau / để phần chưa hiểu trôi qua | Chuyển tab, tự mô tả lại ngữ cảnh |

## 4. Distance check

- **A khác B vì:** ở A người học quyết định mở, còn AI sinh nội dung chung cho phần đó mà không tìm hiểu người học vướng ở đâu. Ở B, AI khởi xướng dựa trên tín hiệu hành vi (dừng lâu) và hỏi để xác định chỗ vướng trước khi hỗ trợ.
- **B khác C vì:** ở B, AI quyết định thời điểm can thiệp và người học chỉ phản hồi. Ở C, người học khởi xướng và tự định phạm vi cùng câu hỏi, AI chỉ trả lời theo.
- **A khác C vì:** ở A, người học chỉ quyết định mở hay không, còn AI chọn nội dung giải thích (ví dụ, cách diễn đạt khác). Ở C, người học quyết định chính xác phần cần giải thích và hỏi tiếp, nên quyền chọn nội dung thuộc về người học.

**Vị trí trên spectrum (xấp xỉ):**

```
USER CREATES / INITIATES            →  C (người học chỉ vùng và đặt câu hỏi)
        ↓
USER + AI CO-CREATE                 →  A (người học mở, AI sinh nội dung)
        ↓
AI CREATES / INITIATES, USER REVIEWS →  B (AI chủ động hỏi, người học phản hồi)
```

## 5. Kiểm tra GATE 2 — Meaningful options

- [x] Ba option cùng user, situation, task và desired outcome (mục 2).
- [x] Khác nhau ở cách chia công việc và quyền quyết định giữa người học với AI: ai khởi xướng, ai chọn phạm vi và nội dung (mục 3 và 4).
- [x] Không phải ba option chỉ khác UI hoặc wording; distance check không nhắc màu, layout hay wording.
- [ ] Lưu ý: cả ba option đều dùng AI sinh nội dung, nên khoảng cách nằm ở chỗ ai khởi xướng và ai quyết định. A và C gần nhau nhất (cùng do người học khởi xướng), khác ở chỗ ai chọn phạm vi và nội dung. Cần giữ khác biệt này rõ khi làm prototype.

## 6. Điểm cần nhóm làm rõ

1. **"Kiến thức có sẵn" ở Option A** là nội dung của bài học (slide, tài liệu) hay kiến thức nền của AI? Hai cách này khác nhau về độ chính xác và về dữ liệu AI cần.
2. **Ngưỡng "dừng lâu" ở Option B** là bao lâu, và đo ở đâu (cuộn, tua lại, không thao tác)? Chưa chốt nên chưa kiểm tra được trade-off hỏi nhầm.
3. **Lý do chọn ba hướng đều có AI** chưa được ghi. Nếu cần giải thích vì sao các hướng không dùng AI hoặc chuyển cho người (Phát #2, #5, Bình #1, #4) chưa được chọn, nhóm bổ sung ở đây.
