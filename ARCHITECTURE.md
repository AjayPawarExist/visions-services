# System Architecture

## 📊 Complete Admin Panel Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              USER INTERACTIONS                               │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                    ┌─────────────────┼─────────────────┐
                    │                 │                 │
                    ▼                 ▼                 ▼
            ┌───────────┐     ┌──────────┐     ┌──────────────┐
            │  Contact  │     │   Lead   │     │    Quote     │
            │   Form    │     │   Form   │     │ Request Form │
            │  (Public) │     │ (Public) │     │   (Public)   │
            └───────────┘     └──────────┘     └──────────────┘
                    │                 │                 │
                    └─────────────────┼─────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                       AZURE STATIC WEB APPS (Frontend)                       │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │ Next.js 14 Application                                              │    │
│  │ - Server-Side Rendering (SSR)                                       │    │
│  │ - Static Site Generation (SSG)                                      │    │
│  │ - React 18 Components                                               │    │
│  │ - Framer Motion Animations                                          │    │
│  │ - Tailwind CSS Styling                                              │    │
│  │ - Dark Mode Support                                                 │    │
│  └────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  URL: https://red-grass-0a2c21e0f.3.azurestaticapps.net                    │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                            HTTPS (REST API Calls)
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                      AZURE FUNCTIONS (Backend API)                           │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │ Node.js 18 Runtime                                                  │    │
│  │ TypeScript                                                          │    │
│  │ Consumption Plan (Serverless)                                       │    │
│  │                                                                      │    │
│  │ Public Endpoints (No Auth Required):                                │    │
│  │ ├─ POST /api/contact          - Submit contact form                │    │
│  │ ├─ POST /api/lead             - Submit lead form                   │    │
│  │ └─ POST /api/quote            - Submit quote request               │    │
│  │                                                                      │    │
│  │ Protected Endpoints (JWT Required):                                 │    │
│  │ ├─ POST /api/admin/login      - Admin authentication               │    │
│  │ ├─ GET  /api/admin/contacts   - Fetch contacts (paginated)         │    │
│  │ ├─ GET  /api/admin/leads      - Fetch leads (filtered)             │    │
│  │ ├─ GET  /api/admin/quotes     - Fetch quotes (filtered)            │    │
│  │ └─ PATCH /api/admin/status    - Update submission status           │    │
│  │                                                                      │    │
│  │ Security Features:                                                  │    │
│  │ ├─ JWT Authentication (24h expiration)                             │    │
│  │ ├─ Bcrypt Password Hashing                                         │    │
│  │ ├─ Input Validation (validator package)                            │    │
│  │ ├─ CORS Protection                                                 │    │
│  │ └─ SQL Injection Prevention                                        │    │
│  └────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  URL: https://techvision-api.azurewebsites.net/api                          │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                        SSL/TLS Encrypted Connection
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│              AZURE DATABASE FOR POSTGRESQL (Flexible Server)                 │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │ PostgreSQL 14                                                       │    │
│  │ Burstable B1ms (1 vCore, 2GB RAM)                                  │    │
│  │ 32 GB Storage                                                       │    │
│  │ Automated Backups                                                   │    │
│  │                                                                      │    │
│  │ Database: techvision                                                │    │
│  │                                                                      │    │
│  │ Tables:                                                             │    │
│  │ ┌────────────────────────────────────────────────────────────┐    │    │
│  │ │ contacts                                                    │    │    │
│  │ │ - id, name, email, phone, message, status                  │    │    │
│  │ │ - ip_address, user_agent, created_at                       │    │    │
│  │ │ Status: new, in_progress, resolved                         │    │    │
│  │ └────────────────────────────────────────────────────────────┘    │    │
│  │ ┌────────────────────────────────────────────────────────────┐    │    │
│  │ │ leads                                                       │    │    │
│  │ │ - id, name, email, phone, company, budget                  │    │    │
│  │ │ - requirement, priority, status, created_at                │    │    │
│  │ │ Priority: low, medium, high, critical                      │    │    │
│  │ │ Status: new, contacted, qualified, converted, lost         │    │    │
│  │ └────────────────────────────────────────────────────────────┘    │    │
│  │ ┌────────────────────────────────────────────────────────────┐    │    │
│  │ │ quote_requests                                              │    │    │
│  │ │ - id, name, email, phone, company, website_url             │    │    │
│  │ │ - service_type, project_description, budget_range          │    │    │
│  │ │ - timeline, preferred_contact, source, status              │    │    │
│  │ │ Source: google_ads, direct                                 │    │    │
│  │ │ Status: new, reviewing, quoted, accepted, rejected         │    │    │
│  │ └────────────────────────────────────────────────────────────┘    │    │
│  │ ┌────────────────────────────────────────────────────────────┐    │    │
│  │ │ admin_users                                                 │    │    │
│  │ │ - id, username, password (hashed), full_name, role         │    │    │
│  │ │ - created_at, last_login                                   │    │    │
│  │ └────────────────────────────────────────────────────────────┘    │    │
│  │ ┌────────────────────────────────────────────────────────────┐    │    │
│  │ │ admin_sessions                                              │    │    │
│  │ │ - id, admin_user_id, token, ip_address, user_agent         │    │    │
│  │ │ - expires_at, created_at                                   │    │    │
│  │ └────────────────────────────────────────────────────────────┘    │    │
│  │                                                                      │    │
│  │ Views (For Statistics):                                              │    │
│  │ ├─ contact_statistics                                               │    │
│  │ ├─ lead_statistics                                                  │    │
│  │ └─ quote_statistics                                                 │    │
│  │                                                                      │    │
│  │ Indexes (For Performance):                                           │    │
│  │ ├─ idx_contacts_email                                               │    │
│  │ ├─ idx_contacts_created_at                                          │    │
│  │ ├─ idx_contacts_status                                              │    │
│  │ ├─ idx_leads_priority                                               │    │
│  │ └─ idx_quotes_source                                                │    │
│  └────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  Connection: SSL/TLS Required                                               │
└─────────────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────────┐
│                            ADMIN PANEL FLOW                                  │
└─────────────────────────────────────────────────────────────────────────────┘

    ┌──────────────┐
    │ Admin User   │
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │ Login Page   │ ──────────┐
    │ /admin/login │           │
    └──────┬───────┘           │
           │                   │ POST /api/admin/login
           │ Submits           │ { username, password }
           │                   │
           ▼                   ▼
    ┌──────────────────────────────┐
    │ Backend validates credentials │
    │ - Checks username exists      │
    │ - Verifies bcrypt hash        │
    │ - Generates JWT token (24h)   │
    │ - Creates session record      │
    └──────────────┬───────────────┘
                   │
                   │ Returns JWT token
                   │ Stores in localStorage
                   │
                   ▼
    ┌──────────────────────────┐
    │ Dashboard Page           │
    │ /admin/dashboard         │
    │                          │
    │ Tabs:                    │
    │ ├─ Overview (Statistics) │
    │ ├─ Contacts (Table)      │
    │ ├─ Leads (Table)         │
    │ └─ Quotes (Table)        │
    └──────────────────────────┘
                   │
                   │ All requests include:
                   │ Authorization: Bearer <JWT>
                   │
        ┌──────────┼──────────┬──────────┐
        │          │          │          │
        ▼          ▼          ▼          ▼
    ┌─────┐  ┌─────┐  ┌─────┐  ┌──────┐
    │ GET │  │ GET │  │ GET │  │PATCH │
    │Cont.│  │Lead │  │Quote│  │Status│
    └─────┘  └─────┘  └─────┘  └──────┘
        │          │          │          │
        └──────────┴──────────┴──────────┘
                   │
        Fetches data with pagination,
        filtering, and statistics
```

## 🔄 Data Flow Examples

### Example 1: Contact Form Submission
```
User fills contact form
        │
        ▼
Frontend validates input
        │
        ▼
POST /api/contact
{
  name: "John Doe"
  email: "john@example.com"
  phone: "+1234567890"
  message: "I need help"
}
        │
        ▼
Backend validates:
- Name length (min 2)
- Email format
- Phone format
- Message length (max 5000)
        │
        ▼
INSERT INTO contacts
(name, email, phone, message, status, ip_address, user_agent)
VALUES (...)
        │
        ▼
Return success response
        │
        ▼
Frontend shows success message
```

### Example 2: Admin Viewing Contacts
```
Admin clicks "Contacts" tab
        │
        ▼
Frontend checks JWT token in localStorage
        │
        ▼
GET /api/admin/contacts?page=1&limit=10&status=new
Headers: { Authorization: Bearer <JWT> }
        │
        ▼
Backend verifies JWT:
- Check signature
- Check expiration
- Extract user ID
        │
        ▼
Query database:
SELECT * FROM contacts
WHERE status = 'new'
ORDER BY created_at DESC
LIMIT 10 OFFSET 0
        │
        ▼
Fetch statistics:
SELECT * FROM contact_statistics
        │
        ▼
Return paginated data + stats
        │
        ▼
Frontend renders table with:
- Contact info
- Status badges
- Action buttons
```

### Example 3: Status Update
```
Admin changes status dropdown
        │
        ▼
PATCH /api/admin/status
{
  table: "contacts"
  id: 123
  status: "in_progress"
}
Headers: { Authorization: Bearer <JWT> }
        │
        ▼
Backend validates:
- JWT token valid
- Table name in whitelist
- Status value valid for table
        │
        ▼
UPDATE contacts
SET status = 'in_progress',
    updated_at = NOW()
WHERE id = 123
        │
        ▼
Return updated record
        │
        ▼
Frontend re-fetches contacts list
        │
        ▼
Table updates with new status
```

## 🔐 Security Layers

```
┌─────────────────────────────────────────────────────────────────┐
│ Layer 1: HTTPS/TLS                                               │
│ - All traffic encrypted                                          │
│ - SSL certificates from Azure                                    │
└─────────────────────────────────────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ Layer 2: CORS Protection                                         │
│ - Only allowed origins can make requests                         │
│ - Configured in environment variables                            │
└─────────────────────────────────────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ Layer 3: Input Validation                                        │
│ - Server-side validation for all inputs                          │
│ - Email, phone, URL format checking                              │
│ - Length limits enforced                                         │
└─────────────────────────────────────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ Layer 4: JWT Authentication                                      │
│ - Required for all admin endpoints                               │
│ - 24-hour expiration                                             │
│ - Signed with secret key                                         │
└─────────────────────────────────────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ Layer 5: Password Hashing                                        │
│ - Bcrypt with 10 rounds                                          │
│ - No plaintext passwords in database                             │
└─────────────────────────────────────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ Layer 6: SQL Injection Prevention                                │
│ - Parameterized queries only                                     │
│ - No string concatenation in SQL                                 │
└─────────────────────────────────────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ Layer 7: Database Encryption                                     │
│ - SSL/TLS required for connections                               │
│ - Data encrypted at rest                                         │
└─────────────────────────────────────────────────────────────────┘
```

## 📊 Cost Breakdown

```
Monthly Cost Estimate (Moderate Usage):

┌────────────────────────────────────────────────────────────┐
│ Azure Static Web Apps (Free Tier)                          │
│ - 100 GB bandwidth                                         │
│ - Unlimited sites                                          │
│ - Custom domains                                           │
│ Cost: $0                                                   │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ Azure Functions (Consumption Plan)                         │
│ - ~3,000 executions/month                                  │
│ - 512 MB memory                                            │
│ - 100ms avg execution time                                 │
│ Cost: $0 (within 1M free tier)                             │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ Azure PostgreSQL Flexible Server (Burstable B1ms)          │
│ - 1 vCore, 2 GB RAM                                        │
│ - 32 GB storage                                            │
│ - Automated backups (7 days)                               │
│ Cost: $15-20/month                                         │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ TOTAL MONTHLY COST: $15-20                                 │
└────────────────────────────────────────────────────────────┘

Scale Up Costs (if needed):
- PostgreSQL B2s (2 vCore, 4GB): ~$30-35/month
- Functions with higher usage: ~$10-20/month
- Static Web Apps Standard: $9/month (100GB → 1TB bandwidth)
```

## 🚀 Deployment Process

```
Developer Workstation
        │
        │ 1. Write code
        │ 2. Test locally
        │
        ▼
┌───────────────┐
│  Git Commit   │
│  Git Push     │
└───────┬───────┘
        │
        ▼
┌───────────────────────────────────┐
│  GitHub Repository                │
│  - Source code                    │
│  - GitHub Actions workflows       │
└───────────┬───────────────────────┘
            │
            │ Triggers CI/CD
            │
    ┌───────┴────────┬──────────────┐
    │                │              │
    ▼                ▼              ▼
Backend          Frontend      Database
(Manual)        (Automatic)   (One-time)
    │                │              │
    ▼                ▼              ▼
func azure      GitHub         psql
functionapp     Actions        script
publish         deploys        execution
                                    │
    │                │              │
    └────────────────┴──────────────┘
                     │
                     ▼
┌────────────────────────────────────────┐
│  Live Production Environment           │
│                                        │
│  ✓ Frontend: Azure Static Web Apps     │
│  ✓ Backend: Azure Functions            │
│  ✓ Database: Azure PostgreSQL          │
│                                        │
│  URL: https://red-grass-...net         │
└────────────────────────────────────────┘
```

## 🎯 Performance Optimization

```
Frontend Optimizations:
├─ Next.js Static Generation (SSG)
├─ Image optimization (Next/Image)
├─ Code splitting (automatic)
├─ Lazy loading components
└─ CDN distribution (Azure)

Backend Optimizations:
├─ Connection pooling (pg Pool)
├─ Prepared statements
├─ Indexed database queries
├─ Cold start optimization
└─ Serverless architecture

Database Optimizations:
├─ Indexes on frequently queried columns
├─ Statistics views (pre-computed)
├─ Connection pooling
├─ Query optimization
└─ Automated maintenance
```

---

**Architecture Version:** 1.0
**Last Updated:** January 2024
**Status:** Production Ready ✅
