# VLearn — Ba micro-prototype riêng của Option C

Mở từng file HTML trực tiếp bằng Chrome hoặc Edge. Mỗi file C1/C2/C3 chứa sẵn CSS và JavaScript, không cần thư viện, backend, API hoặc file phụ để hoàn thành lượt thử. Có thể gửi riêng từng file. Khuyến nghị cửa sổ trình duyệt rộng từ 1280 px.

| Prototype | File | Tương tác then chốt |
|---|---|---|
| C1 — Chọn văn bản | [prototype-c1-text.html](prototype-c1-text.html) | Bôi đen phần chữ trong slide; panel xác nhận đúng đoạn đã chọn. |
| C2 — Khoanh vùng sơ đồ | [prototype-c2-region.html](prototype-c2-region.html) | Kéo chuột tạo khung vùng chọn; panel hiển thị ảnh phần sơ đồ đã khoanh. Có các vùng chọn nhanh bằng nút. |
| C3 — Chọn khối nội dung | [prototype-c3-block.html](prototype-c3-block.html) | Bấm chọn cả tiêu đề, sơ đồ hoặc khối Discover/Define/Develop/Deliver. |

[index.html](index.html) là trang danh sách để mở từng bản. C1/C2/C3 đều thuộc Option C, học viên chủ động chọn nội dung trước khi yêu cầu AI giải thích.

## Ba trạng thái và phạm vi chung

1. **Bối cảnh chung:** cùng slide “Evidence về problem không phải evidence về solution”, sơ đồ Double Diamond, bốn giai đoạn, Chosen opportunity và nhiệm vụ. Trợ lý học tập hiển thị ngay, có thể chọn nội dung và hỏi trực tiếp, không có bước bấm bắt đầu.
2. **Tương tác then chốt:** chọn nội dung theo cơ chế của C1/C2/C3, kiểm tra preview và bấm **Giải thích phần đã chọn**. Ô câu hỏi ban đầu trống, chỉ có gợi ý placeholder; nhập thêm là tùy chọn. Có thể yêu cầu ví dụ, hỏi sâu về một giai đoạn hoặc đặt câu hỏi cụ thể.
3. **Kết quả & quyết định:** cùng nội dung giải thích Double Diamond, ví dụ, ý chính và phân biệt hai loại evidence. Đối chiếu slide, giải thích lại, sửa câu hỏi, đổi phần chọn, hủy kết quả hoặc tiếp tục bài học.

## Tiếp tục bài học

Cả ba prototype có cùng chuỗi 3 slide. Hai slide mới được dựng lại bằng HTML/CSS theo hình tài liệu:

1. **Evidence về problem không phải evidence về solution** — slide ban đầu, có tương tác AI C1/C2/C3.
2. **Ta đã hiểu pain. Bây giờ đến lượt solution** — Problem evidence (story, behavior, workaround) → Solution evidence (options, experiment).
3. **Cùng một pain có thể dẫn tới nhiều cách giải** — tình huống người học trả lời sai lần thứ hai, so sánh User-led / Collaborative / Proactive theo trigger, quyền quyết định và đánh đổi.

**Tiếp tục bài học** và **Đã hiểu · Tiếp tục** chuyển sang slide tiếp theo. **Slide trước** quay lại nội dung trước đó. Trên slide cuối, **Hoàn thành bài học** kết thúc lượt; có thể xem lại hoặc reset. Các hình giao diện nhỏ trong slide 3 là minh họa tĩnh của tài liệu. Panel trợ lý luôn hiển thị, kể cả khi chuyển slide hoặc hoàn thành. Tương tác chọn nội dung được thực hiện trên slide Double Diamond; ở các slide tiếp theo panel có nút quay lại Double Diamond, giữ lựa chọn và câu hỏi trước đó. Khi quay lại, tự khôi phục biểu mẫu hoặc câu trả lời. **Bắt đầu lại** xóa toàn bộ trạng thái và trợ lý vẫn sẵn sàng ngay.

Áp dụng nguyên tắc 70/30 cho ba biến thể của C: fixture, nhiệm vụ, màn hình bối cảnh và đầu ra gốc giữ nguyên; chỉ cách chọn nội dung ở trạng thái tương tác khác nhau. Đây là tỷ lệ phạm vi thiết kế, không phải tỷ lệ dòng code.

AI dùng **canned output**. C2 cắt khung nhìn từ SVG của slide để mô phỏng chọn ảnh; không chụp màn hình máy tính, không OCR. Nếu không nhập câu hỏi, hiển thị giải thích chung. Nếu nhập, thêm phản hồi dựng sẵn theo trọng tâm (ví dụ, một giai đoạn, Chosen opportunity, câu hỏi tự kiểm tra hoặc giải thích thêm về hai loại evidence), rồi hiển thị nội dung tham khảo chung. Không tạo câu trả lời mới cho mọi câu hỏi tự do. Không lưu câu hỏi hoặc gửi dữ liệu qua mạng.

## Checklist kiểm thử thủ công

- Mở riêng từng file → cùng màn hình đầu tiên, panel trợ lý đã hiển thị và chọn nội dung được ngay, không cần nút bắt đầu.
- C1: bôi đen tiêu đề hoặc một đoạn mô tả → preview đúng đoạn đã chọn; bôi đen trong panel không đổi nội dung chọn.
- C2: kéo trái → phải hoặc phải → trái trên sơ đồ → khung chọn và ảnh preview đúng vùng; vùng quá nhỏ hiển thị hướng dẫn chọn lại. Thử các nút chọn vùng nhanh.
- C3: chọn từng khối → đúng khối được làm nổi bật, preview chứa toàn bộ nội dung; chọn khối khác thay thế lựa chọn cũ.
- Ban đầu câu hỏi trống và gợi ý chỉ ở placeholder. Chưa chọn nội dung → nút gửi bị khóa. Chọn nội dung rồi để câu hỏi trống hoặc chỉ nhập khoảng trắng → vẫn gửi được giải thích chung. **Chọn lại** xóa preview và khóa nút gửi.
- Nhập “Cho tôi một ví dụ” → nút đổi thành **Gửi câu hỏi về phần đã chọn**, kết quả ưu tiên ví dụ. Thử “Giải thích kỹ Discover” hoặc “Cho tôi câu hỏi tự kiểm tra” để xem trọng tâm tương ứng. Xóa câu hỏi ở bước sửa → gửi được giải thích chung.
- Gửi yêu cầu → hiển thị phần chọn / câu hỏi, giải thích, ví dụ và ý chính.
- **Giải thích lại** hiện cách diễn đạt đơn giản; **Sửa yêu cầu** → gửi hoặc hủy sửa; **Đổi phần chọn** xóa lựa chọn và quay lại tương tác.
- **Hủy kết quả** quay lại tương tác, giữ phần đã chọn để có thể gửi lại hoặc sửa.
- **Đối chiếu sơ đồ** làm nổi bật và cuộn tới slide. Panel luôn hiển thị, không có nút đóng/mở lại.
- **Bắt đầu lại** đưa về slide đầu, xóa lựa chọn, câu hỏi đã sửa và kết quả; panel vẫn hiển thị và sẵn sàng chọn nội dung.
- **Đã hiểu · Tiếp tục / Tiếp tục bài học** chuyển slide 1 → 2 → 3, cập nhật tiến độ và tiêu đề; **Slide trước** quay lại, giữ ngữ cảnh ở slide đầu. Có thể tiếp tục từ slide đầu khi không dùng AI.
- **Hoàn thành bài học** ở slide 3 kết thúc lượt thử; **Xem lại slide cuối** mở lại slide 3; **Bắt đầu lại lượt này / Bắt đầu lại** đưa về slide 1 và xóa trạng thái AI.
- Người học đọc và thao tác tự mình; quan sát mà không giải thích hộ giao diện.

Đã kiểm tra cú pháp JavaScript, cấu trúc HTML, liên kết tĩnh và tính giống nhau của fixture / câu trả lời. Chưa xác minh giao diện và các thao tác chuột bằng trình duyệt; phiên công cụ hiện tại không có trình duyệt được kết nối.

## Chỉnh sửa mã nguồn

Nguồn dùng chung: `template.html`, `styles.css`, `app-c.js`. Sau khi sửa, tạo lại ba file tự chứa:

```powershell
python prototype/build-prototypes.py
```

Chạy lệnh từ thư mục Day 19. Không cần chạy bước build để mở các file đã tạo. Ưu tiên sửa nguồn dùng chung để giữ nhất quán giữa ba bản.
