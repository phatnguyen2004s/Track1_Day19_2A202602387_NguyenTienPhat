// Nội dung dùng chung cho cả ba option (canned AI output). Giữ nguyên văn bản nhóm cung cấp,
// chỉ tách thành các đoạn để mỗi option hiển thị đúng đoạn liên quan.
window.DOUBLE_DIAMOND = {
  overview: {
    title: "Double Diamond",
    paras: [
      "Double Diamond là mô hình thiết kế giúp nhóm đi từ việc tìm hiểu nhu cầu thực tế của người dùng đến phát triển và kiểm chứng giải pháp. Mô hình gồm hai “viên kim cương”, đại diện cho hai mục tiêu chính: tìm đúng vấn đề và tìm đúng giải pháp."
    ]
  },
  thinking: {
    lead: "Trong mỗi viên kim cương, nhóm sử dụng hai cách tư duy:",
    items: [
      { term: "Divergence – Mở rộng: ", text: "Thu thập nhiều thông tin, góc nhìn hoặc phương án khác nhau." },
      { term: "Convergence – Thu hẹp: ", text: "Phân tích bằng chứng, so sánh và lựa chọn hướng phù hợp nhất." }
    ]
  },
  diamond1: {
    title: "Viên kim cương 1 – Tìm đúng vấn đề",
    items: [
      { term: "Discover – Khám phá: ", text: "Nhóm tìm hiểu trải nghiệm thực tế của người dùng thông qua phỏng vấn, quan sát hành vi, bối cảnh và các cách xử lý hiện tại. Mục tiêu là thu thập bằng chứng thay vì vội đưa ra giải pháp." },
      { term: "Define – Xác định: ", text: "Nhóm tổng hợp các bằng chứng đã thu thập, tìm pain pattern và lựa chọn vấn đề quan trọng cần giải quyết. Kết quả là một Hypothesis Problem rõ ràng về người dùng, tình huống, nhiệm vụ và khó khăn." }
    ]
  },
  diamond2: {
    title: "Viên kim cương 2 – Tìm đúng giải pháp",
    items: [
      { term: "Develop – Phát triển: ", text: "Nhóm tạo nhiều solution hypotheses khác nhau cho cùng một vấn đề. Các phương án cần khác nhau về cơ chế giải quyết, vai trò của người dùng và AI hoặc thời điểm hỗ trợ, thay vì chỉ khác màu sắc và giao diện." },
      { term: "Deliver – Kiểm chứng: ", text: "Nhóm đưa các prototype cho người dùng thử, quan sát hành vi và so sánh trade-off giữa các phương án. Kết quả thử nghiệm giúp nhóm xác định thay đổi tiếp theo và những giả định vẫn chưa được chứng minh." }
    ]
  },
  discover: {
    title: "Discover – Khám phá",
    paras: ["Nhóm tìm hiểu trải nghiệm thực tế của người dùng thông qua phỏng vấn, quan sát hành vi, bối cảnh và các cách xử lý hiện tại. Mục tiêu là thu thập bằng chứng thay vì vội đưa ra giải pháp."]
  },
  define: {
    title: "Define – Xác định",
    paras: ["Nhóm tổng hợp các bằng chứng đã thu thập, tìm pain pattern và lựa chọn vấn đề quan trọng cần giải quyết. Kết quả là một Hypothesis Problem rõ ràng về người dùng, tình huống, nhiệm vụ và khó khăn."]
  },
  develop: {
    title: "Develop – Phát triển",
    paras: ["Nhóm tạo nhiều solution hypotheses khác nhau cho cùng một vấn đề. Các phương án cần khác nhau về cơ chế giải quyết, vai trò của người dùng và AI hoặc thời điểm hỗ trợ, thay vì chỉ khác màu sắc và giao diện."]
  },
  deliver: {
    title: "Deliver – Kiểm chứng",
    paras: ["Nhóm đưa các prototype cho người dùng thử, quan sát hành vi và so sánh trade-off giữa các phương án. Kết quả thử nghiệm giúp nhóm xác định thay đổi tiếp theo và những giả định vẫn chưa được chứng minh."]
  },
  example: {
    title: "Ví dụ",
    paras: [
      "Nhóm quan sát thấy học viên thường phải chuyển tab, chụp màn hình hoặc ghi lại nội dung khi gặp phần chưa hiểu trong bài giảng (Discover). Nhóm xác định việc rời khỏi bài học làm gián đoạn luồng học và khiến kiến thức chưa hiểu tích tụ (Define).",
      "Sau đó, nhóm tạo ba cơ chế hỗ trợ AI: học viên yêu cầu thêm ví dụ, AI phát hiện việc dừng lâu và đề nghị hỗ trợ, hoặc học viên chọn trực tiếp phần chưa hiểu để yêu cầu giải thích (Develop). Cuối cùng, nhóm cho học viên thử cả ba phương án, quan sát khả năng hoàn thành nhiệm vụ và so sánh mức độ chủ động, chính xác và dễ kiểm soát của từng phương án (Deliver)."
    ]
  },
  keyIdea: {
    title: "Ý chính",
    paras: ["Double Diamond giúp nhóm tránh chọn giải pháp quá sớm. Nhóm cần mở rộng và thu hẹp để tìm đúng vấn đề trước, sau đó tiếp tục mở rộng và thu hẹp để tìm, thử nghiệm và cải thiện giải pháp phù hợp."]
  }
};
