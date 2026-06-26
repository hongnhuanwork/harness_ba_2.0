output — Project Lifecycle Output Structure
1. Mục đích

Thư mục output lưu trữ toàn bộ kết quả được sinh ra theo vòng đời phân tích & thiết kế hệ thống, phục vụ:

Truy vết tiến trình dự án
Lưu artifact theo từng phase
Hỗ trợ AI tái sử dụng kết quả phân tích
Là nguồn dữ liệu đầu ra cho portal UI
2. Cấu trúc tổng thể
output/
│
├── phase-0-project-initiation
├── phase-1-discovery
├── phase-2-elicitation
├── phase-3-analysis
├── phase-4-design
├── phase-5-validation
├── phase-6-delivery
└── README.md
3. Ý nghĩa từng phase
🔹 phase-0-project-initiation
Khởi tạo dự án
Xác định scope ban đầu
Stakeholder & mục tiêu
Business case sơ bộ
🔹 phase-1-discovery
Thu thập thông tin ban đầu
Research domain
Identify pain points
Initial assumptions
🔹 phase-2-elicitation
Thu thập yêu cầu chi tiết
Interview / workshop
User story gathering
Requirement extraction
🔹 phase-3-analysis
Phân tích nghiệp vụ
Refine requirements
Gap analysis (AS-IS vs TO-BE)
Business rules modeling
🔹 phase-4-design
Thiết kế giải pháp
System architecture
Data flow
UI/UX prototype
API design
🔹 phase-5-validation
Kiểm thử nghiệp vụ
Review requirement
UAT preparation
Traceability check
🔹 phase-6-delivery
Bàn giao hệ thống
Release package
Documentation finalization
Operational readiness
4. Nguyên tắc tổ chức output
Mỗi phase là một snapshot của tiến trình tư duy
Tài liệu phải có khả năng:
truy ngược (traceability)
tái sử dụng
AI parsing
Không overwrite dữ liệu cũ, ưu tiên versioning
5. README.md (Output)

File README này đóng vai trò:

Bản đồ tiến trình dự án (lifecycle map)
Giải thích logic phân phase
Entry point cho hệ thống AI đọc hiểu toàn bộ project flow