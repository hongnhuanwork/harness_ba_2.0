# Cấu trúc Thư mục Dự án (Project Directory Structure)

Tài liệu này mô tả chi tiết cấu trúc thư mục của dự án **HarnessAI BA (Business Analysis)**. Dự án được thiết kế để chuẩn hóa, quản lý và tự động hóa quy trình phân tích nghiệp vụ với sự trợ giúp của AI.

---

## 1. Sơ đồ Cấu trúc Tổng thể

```text
harnessBA_ver2.0/
│
├── .agents/                    # Cấu hình Agent và các quy trình/kỹ năng hỗ trợ BA AI
│   ├── rules/                  # Quy tắc nghiệp vụ & chỉ thị chất lượng cho Agent
│   ├── skills/                 # Các kỹ năng nghiệp vụ chuyên biệt (dưới dạng các folder con)
│   ├── workflows/              # Các quy trình tự động hóa nhiều bước (.yaml)
│   └── AGENT.md                # Vai trò, mục tiêu và nguyên tắc hoạt động của BA Agent
│
├── knowledge/                  # Cơ sở tri thức nghiệp vụ tham khảo
│   ├── domains/                # Tài liệu về các lĩnh vực nghiệp vụ cụ thể (placeholder)
│   ├── glossary/               # Bảng thuật ngữ nghiệp vụ (placeholder)
│   ├── library/                # Thư viện tài liệu (sách BABOK Guide v3 bản PDF & markdown)
│   └── templates/              # 20 biểu mẫu BA chuẩn hóa (BRD, FRD, SRS, Use Case, v.v.)
│
├── output/                     # Kết quả phân tích (Deliverables) theo từng Phase dự án
│   ├── phase-0-project-initiation # Khởi tạo & xác định Scope ban đầu
│   ├── phase-1-discovery       # Khảo sát, nghiên cứu domain, pain points
│   ├── phase-2-elicitation     # Thu thập yêu cầu chi tiết, user story, câu hỏi phỏng vấn
│   ├── phase-3-analysis        # Phân tích nghiệp vụ, gap analysis, business rules
│   ├── phase-4-design          # Thiết kế hệ thống, luồng dữ liệu, UI/UX, API
│   ├── phase-5-validation      # Kiểm thử nghiệp vụ, UAT checklist, review
│   ├── phase-6-delivery        # Bàn giao, release notes, hướng dẫn vận hành
│   └── README.md               # Giải thích chi tiết mục đích và nguyên tắc của output
│
├── portal/                     # Giao diện người dùng (Dashboard) để duyệt và hiển thị tài liệu
│   ├── assets/                 # Tài nguyên tĩnh (hình ảnh, icon...)
│   ├── config/                 # Cấu hình menu điều hướng và dữ liệu quét được
│   ├── css/                    # Định dạng giao diện (style.css)
│   ├── js/                     # Logic điều hướng, hiển thị, tìm kiếm, render markdown
│   ├── index.html              # Giao diện chính của Portal Dashboard
│   ├── README.md               # Giới thiệu portal
│   └── scan_portal.py          # Script quét dự án để cập nhật nội dung cho portal
│
├── project_resources/          # Quản lý tài nguyên và tri thức nghiệp vụ của BA Workspace
│   ├── 00-project-memory       # Single Source of Truth về quyết định, giả định, rủi ro...
│   ├── 01-pmo                  # Kế hoạch quản lý, scope, stakeholder
│   ├── 02-business             # Tài liệu yêu cầu nghiệp vụ
│   ├── 03-design               # Tài liệu thiết kế giải pháp & trải nghiệm
│   ├── 04-development          # Tài liệu kỹ thuật hỗ trợ phát triển
│   ├── 05-testing              # Tài liệu kiểm thử chất lượng
│   ├── 06-delivery             # Tài liệu bàn giao & vận hành
│   └── README.md               # Giới thiệu chi tiết cấu trúc BA Workspace
│
├── harrness_structure.md       # Cấu trúc thư mục của toàn bộ dự án (file này)
└── README.md                   # Giới thiệu tổng quan dự án (ở thư mục gốc)
```

---

## 2. Chi tiết từng Thư mục chính

### 📂 [`.agents/`](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/.agents)
Thư mục này chứa "bộ não" của các AI Agent tham gia vào dự án, giúp hướng dẫn AI hiểu đúng vai trò và tuân thủ các quy trình nghiệp vụ.
* **[AGENT.md](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/.agents/AGENT.md)**: Định nghĩa vai trò, nhiệm vụ, các nguyên tắc hoạt động cốt lõi của BA Agent (như Context First, Reuse Before Create, Traceability).
* **📂 [rules/](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/.agents/rules)**: Các tệp markdown định nghĩa quy tắc cụ thể cho Agent như [ba-rule.md](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/.agents/rules/ba-rule.md), [project-memory-rule.md](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/.agents/rules/project-memory-rule.md), [output-rule.md](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/.agents/rules/output-rule.md)...
* **📂 [skills/](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/.agents/skills)**: Các thư mục chứa kỹ năng chuyên biệt của Agent cho từng hoạt động BA (ví dụ: `discovery/`, `elicitation/`, `analysis/`, `prototype/`, `validation/`...).
* **📂 [workflows/](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/.agents/workflows)**: Các quy trình công việc dạng YAML định nghĩa các bước thực thi tự động (ví dụ: [initialize-project.yaml](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/.agents/workflows/initialize-project.yaml), [change-request.yaml](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/.agents/workflows/change-request.yaml)...).

---

### 📂 [`knowledge/`](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/knowledge)
Nơi lưu trữ các tri thức nền tảng làm tài liệu tham khảo cho BA và AI Agent trong quá trình làm việc.
* **📂 [library/](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/knowledge/library)**: Chứa tài liệu chuẩn ngành, ví dụ sách **BABOK® Guide v3** (dạng PDF và file [babok_raw.md](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/knowledge/library/babok_raw.md)) giúp Agent hiểu sâu về các kỹ thuật BA chuẩn quốc tế.
* **📂 [templates/](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/knowledge/templates)**: 20 biểu mẫu markdown chuẩn hóa giúp Agent tạo tài liệu nhanh chóng, đảm bảo tính nhất quán (ví dụ: [brd-template.md](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/knowledge/templates/brd-template.md), [srs-template.md](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/knowledge/templates/srs-template.md), [use-case-template.md](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/knowledge/templates/use-case-template.md), [user-story-template.md](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/knowledge/templates/user-story-template.md)...).
* **📂 domains/** & **glossary/**: Nơi lưu trữ tài liệu nghiệp vụ chuyên ngành và bảng tra cứu thuật ngữ của dự án (hiện tại chưa có file).

---

### 📂 [`output/`](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/output)
Chứa các kết quả đầu ra thực tế của dự án, được phân chia một cách logic theo các **Phase** trong vòng đời phân tích thiết kế:
* **phase-0-project-initiation**: Các tài liệu khởi tạo như danh sách stakeholder ban đầu, scope cơ bản.
* **phase-1-discovery**: Tài liệu khảo sát hiện trạng, các giả định ban đầu.
* **phase-2-elicitation**: Kết quả phỏng vấn, danh sách yêu cầu thô thu thập được.
* **phase-3-analysis**: Tài liệu phân tích chi tiết, gap analysis, quy tắc nghiệp vụ.
* **phase-4-design**: Thiết kế hệ thống, mô hình dữ liệu (Data model), đặc tả API, UI/UX prototype.
* **phase-5-validation**: Tài liệu kiểm thử, kịch bản UAT, bảng ma trận truy vết (Traceability Matrix).
* **phase-6-delivery**: Release notes, tài liệu hướng dẫn vận hành cho người dùng.
* **[README.md](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/output/README.md)**: Tài liệu hướng dẫn nguyên tắc tổ chức thư mục đầu ra và giải thích các phase.

---

### 📂 [`portal/`](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/portal)
Ứng dụng Web tĩnh (Single Page Application - SPA) chạy trực tiếp trên trình duyệt, giúp người dùng và các bên liên quan dễ dàng duyệt, tìm kiếm và xem các tài liệu Markdown trong dự án một cách trực quan.
* **[index.html](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/portal/index.html)**: Trang chủ và cũng là entrypoint của hệ thống.
* **📂 [js/](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/portal/js)**: Các file Javascript xử lý chức năng chính:
  * [app.js](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/portal/js/app.js): Khởi tạo portal.
  * [dashboard.js](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/portal/js/dashboard.js): Logic hiển thị thông tin dashboard tổng quan.
  * [markdown-loader.js](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/portal/js/markdown-loader.js): Tải và render file Markdown sang HTML đẹp mắt.
  * [navigation.js](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/portal/js/navigation.js): Quản lý menu và trạng thái điều hướng.
  * [router.js](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/portal/js/router.js): Xử lý định tuyến trang (SPA).
  * [search.js](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/portal/js/search.js): Cho phép tìm kiếm nhanh các tài liệu.
* **📂 [config/](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/portal/config)**: Chứa các cấu hình hiển thị, đáng chú ý nhất là [content-map.json](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/portal/config/content-map.json) (được cập nhật tự động nhờ script python quét dự án).
* **[scan_portal.py](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/portal/scan_portal.py)**: Script Python quét toàn bộ thư mục `output/`, `project_resources/` và `knowledge/` để tự động xây dựng cây thư mục tài liệu dưới dạng JSON cung cấp cho Portal.

---

### 📂 [`project_resources/`](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/project_resources)
Là không gian làm việc chính (BA Workspace) để lưu trữ thông tin, tài nguyên nghiệp vụ phục vụ việc thực hiện dự án. Khác với `output/` lưu trữ kết quả bàn giao theo phase, `project_resources/` lưu trữ thông tin có tính cập nhật liên tục:
* **📂 [00-project-memory/](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/project_resources/00-project-memory)**: Tri thức nền cốt lõi như các giả định ([assumptions.md](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/project_resources/00-project-memory/assumptions.md)), quyết định thiết kế/kiến trúc ([decisions.md](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/project_resources/00-project-memory/decisions.md)), bài học kinh nghiệm ([lessons-learned.md](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/project_resources/00-project-memory/lessons-learned.md)), rủi ro ([risks.md](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/project_resources/00-project-memory/risks.md)).
* **📂 [01-pmo/](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/project_resources/01-pmo)**: Kế hoạch quản lý, scope định nghĩa ([scope-definition.md](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/project_resources/01-pmo/scope-definition.md)), stakeholder register ([stakeholder-register.md](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/project_resources/01-pmo/stakeholder-register.md)), thông tin dự án chung ([project-profile.md](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/project_resources/01-pmo/project-profile.md)).
* **📂 02-business** đến **06-delivery**: Các thư mục chức năng phục vụ BA lưu trữ tài liệu làm việc hàng ngày của từng phân mục (hiện tại đang để trống để BA/AI điền dần theo tiến trình dự án).
* **[README.md](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/project_resources/README.md)**: Tài liệu hướng dẫn và giới thiệu chi tiết cấu trúc BA Workspace.

---

## 3. Luồng hoạt động của Hệ thống Tài liệu

1. **AI Agent / BA** nhận yêu cầu và làm việc trên thư mục **`project_resources/`** hoặc tạo sản phẩm bàn giao trong **`output/`** bằng cách áp dụng các quy chuẩn từ **`knowledge/templates/`** và quy trình từ **`.agents/`**.
2. Sau khi tài liệu Markdown được cập nhật hoặc tạo mới, chạy file **`portal/scan_portal.py`** để cập nhật lại cấu trúc cây thư mục tài liệu vào **`portal/config/content-map.json`**.
3. Người dùng mở **`portal/index.html`** trên trình duyệt để theo dõi tiến độ dự án, tìm kiếm tài liệu và đọc các kết quả phân tích nghiệp vụ trực quan, thân thiện.
