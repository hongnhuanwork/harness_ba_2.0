project_resources — BA Workspace Structure Overview
1. Mục đích

Thư mục project_resources được thiết kế như một hệ thống quản lý tài nguyên nghiệp vụ (BA Knowledge & Delivery Framework), phục vụ cho việc:

Tổ chức toàn bộ vòng đời phân tích nghiệp vụ
Chuẩn hóa tài liệu theo từng domain function
Tách biệt rõ ràng giữa các nhóm công việc BA / PM / DEV / QA
Hỗ trợ AI/Agent đọc hiểu và sinh tài liệu tự động
2. Cấu trúc tổng thể
project_resources/
│
├── 00-project-memory
├── 01-pmo
├── 02-business
├── 03-design
├── 04-development
├── 05-testing
├── 06-delivery
└── README.md
3. Giải thích từng module
📌 00-project-memory
Lưu trữ toàn bộ tri thức nền của dự án
Bao gồm:
Business context
Assumptions
Decisions log (ADR)
Constraints & rules
Đóng vai trò như “single source of truth” cho AI và BA
📌 01-pmo (Project Management Office)
Quản lý tiến độ và kế hoạch
Bao gồm:
Project plan
Milestones
Risk register
Scope definition
Stakeholder mapping
📌 02-business
Toàn bộ tài liệu nghiệp vụ
Bao gồm:
BRD (Business Requirement Document)
Use case
User story
Business rules
Process flow (AS-IS / TO-BE)
📌 03-design
Thiết kế giải pháp & trải nghiệm
Bao gồm:
System design
UI/UX wireframe
Data model
API design
Architecture diagrams
📌 04-development
Tài liệu kỹ thuật phục vụ triển khai
Bao gồm:
Technical specification
API implementation notes
Integration guide
Coding standards (if applicable)
📌 05-testing
Đảm bảo chất lượng hệ thống
Bao gồm:
Test plan
Test cases
Test scenarios
UAT checklist
Bug report templates
📌 06-delivery
Giai đoạn bàn giao & vận hành
Bao gồm:
Release notes
Deployment guide
User manual
Training materials
Post-deployment checklist
4. Nguyên tắc tổ chức
Mỗi folder đại diện cho một phase hoặc một domain chức năng
Tài liệu phải tách biệt theo mục đích sử dụng
Không trộn business logic với technical logic
Ưu tiên cấu trúc để AI có thể đọc hiểu và generate tự động
5. README.md (Project Resources)

File README này đóng vai trò:

Bản đồ hệ thống tài liệu dự án
Entry point cho người mới hoặc AI agent
Giải thích cách các module liên kết với nhau