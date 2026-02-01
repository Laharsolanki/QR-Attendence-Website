# ImIn Attendance System 需求文档

## 1. 项目概述

### 1.1 应用名称
ImIn Attendance System

### 1.2 应用描述
一个基于前端的考勤管理系统，支持学生、教师和管理员三种角色，提供登录认证、考勤管理、数据分析和用户信息管理功能。

### 1.3 技术框架
- 前端框架：Bootstrap 5 (HTML/CSS/JS)
- 图表库：Chart.js
- 配色方案：白色 (#FFFFFF) 和皇家蓝 (#0056b3)

---

## 2. 功能模块

### 2.1 首页 (路由: `/`)

#### 2.1.1 页面布局
- 创建一个英雄区域，包含三个大型可点击的 Bootstrap 卡片：**Student**、**Faculty**、**Admin**
- 每个卡片包含专业图标和Login/Enter"按钮

#### 2.1.2 交互逻辑
- 点击 Student 卡片：跳转至 `/login/student`
- 点击 Faculty 卡片：跳转至 `/login/faculty`
- 点击 Admin 卡片：跳转至 `/login/admin`

---

### 2.2 登录页面

#### 2.2.1 学生登录页 (路由: `/login/student`)
- 输入字段：
  - Enrollment Number（学号）
  - Password（密码）
- 登录按钮
- 登录成功后跳转至学生仪表板

#### 2.2.2 教师登录页 (路由: `/login/faculty`)
- 输入字段：
  - Faculty Number（教师编号）
  - Password（密码）
- 登录按钮
- 登录成功后跳转至教师仪表板

#### 2.2.3 管理员登录页 (路由: `/login/admin`)
- 输入字段：
  - Admin Number（管理员编号）
  - Password（密码）
- 登录按钮
- 登录成功后跳转至管理员仪表板

---

### 2.3 学生仪表板 (路由: `/student`)

#### 2.3.1 个人信息卡片
- 显示用户基本信息：
  - Name（姓名）
  - Enrollment Number（学号）
  - Semester（学期）

#### 2.3.2 考勤记录表格
- 显示科目列表及对应的出勤率百分比
- 表格列：Subject（科目）、Attendance Percentage（出勤率）

#### 2.3.3 移动端限制
- 当屏幕宽度大于 768px 时：
  - 禁用Mark Attendance"按钮
  - 显示警告信息：*"Mobile scanning required. Use the ImIn app."*

#### 2.3.4 个人资料页 (路由: `/student/profile`)
- 使用 Bootstrap 网格布局展示完整学生信息：
  - Name（姓名）：示例 Lahar Solanki
  - Enrollment Number（学号）
  - Mobile Number（手机号码）
  - Semester（学期）
  - Parent's Name（家长姓名）
  - College Name（学院名称）
  - Admission Year（入学年份）
  - Passing Year（毕业年份）
  - Email ID（邮箱地址）

---

### 2.4 教师仪表板 (路由: `/faculty`)

#### 2.4.1 页面头部
- 显示教师信息：
  - Faculty Name（教师姓名）
  - Faculty Number（教师编号）

#### 2.4.2 导航功能
提供以下导航按钮或侧边栏选项：

**2.4.2.1 查看课程表 (路由: `/faculty/timetable`)**
- 显示每周课程安排表
- 表格列：Day（星期）、Time（时间）、Subject（科目）

**2.4.2.2 考勤控制页 (路由: `/faculty/generate`)**
- **动态二维码生成**：
  - 提供Generate QR"按钮
  - 点击后显示占位符二维码图片
  - 显示 60 秒倒计时器

- **数据分析图表**：
  - Bar Chart（柱状图）：显示考勤趋势
  - Doughnut Chart（环形图）：显示出勤与缺勤比例

- **数据导出**：
  - 提供"Download CSV"按钮，用于下载班级考勤记录

---

### 2.5 管理员仪表板 (路由: `/admin`)

#### 2.5.1 注册管理区域
提供两个可切换的表单，使用侧边栏或标签页切换：

**2.5.1.1 学生注册表单（Form A）**
- 输入字段：
  - Name（姓名）
  - Enrollment Number（学号）
  - Email（邮箱）
  - Mobile Number（手机号码）
  - Parent's Name（家长姓名）
  - Semester（学期）
  - College Name（学院名称）
  - Admission Year（入学年份）
  - Passing Year（毕业年份）

**2.5.1.2 教师注册表单（Form B）**
- 输入字段：
  - Name（姓名）
  - Email（邮箱）
  - Department（部门）
  - Password（密码）

#### 2.5.2 日志查看
- 提供查看注册日志的功能区域

---

## 3. 设计规范

### 3.1 配色方案
- 主色：Royal Blue (#0056b3)
- 辅助色：White (#FFFFFF)

### 3.2 组件使用
- 使用 Bootstrap Cards 对个人资料信息进行分组展示，提升可读性
- 所有新页面保持统一的白色和皇家蓝主题

### 3.3 响应式设计
- 确保所有页面在不同设备上的良好显示效果
- 学生仪表板的移动端扫码功能需特殊处理（桌面端禁用）