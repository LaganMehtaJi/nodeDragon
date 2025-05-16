# 🐉 Node Dragon - Drag & Drop Server Automation

![Node Dragon Banner](https://example.com/path/to/banner-image.png)

> **Zero-DevOps Code Execution Platform**  
> Run, manage, and monitor backend scripts at scale with a visual interface

## 🌟 Features

### 🖥️ Core Functionality
- Drag & drop script execution interface
- Parallel processing across multiple servers
- Real-time execution monitoring
- Custom environment variables injection

### 🔒 Security
- JWT authentication with email OTP
- Process isolation using `child_process`
- File type whitelisting (.js, .py, .java)
- Resource usage limits

### 📊 Monitoring
- Execution history tracking
- Performance metrics (CPU, memory, runtime)
- WebSocket-based log streaming
- Error reporting and alerts

## 🛠️ Tech Stack

### Frontend
- React.js with TypeScript
- TailwindCSS + Framer Motion
- WebSocket for real-time updates
- React Query for data management

### Backend
- Node.js + Express
- MongoDB with Mongoose
- JWT authentication
- Nodemailer for OTP

### Infrastructure
- Firebase/Cloudinary for file storage
- GitHub Actions CI/CD
- Vercel/Netlify deployment
- Docker containerization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB 6.0+
- Cloudinary/Firebase account

### Installation
```bash
git clone https://github.com/your-username/node-dragon.git
cd node-dragon
npm install
cp .env.example .env
# Configure your environment variables
npm run dev
