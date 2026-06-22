<div align="center">

#  Security Policy

<img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" width="60" alt="Apple Logo" />

</div>

<br>

##  Supported Versions

| Version | Supported          |
|---------|--------------------|
| Latest  | ✅ Yes             |
| < Latest | ❌ No              |

Only the latest version of this project receives security updates.

<br>

---

##  Reporting a Vulnerability

If you discover a security vulnerability in this project, **please report it responsibly.**

### How to Report

1. **Do NOT open a public GitHub issue** for security vulnerabilities.
2. Instead, send an email to **[ntoampilp@gmail.com](mailto:ntoampilp@gmail.com)** with:
   - A description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### What to Expect

| Step | Timeline |
|------|----------|
|  Acknowledgement | Within **48 hours** |
|  Investigation | Within **1 week** |
|  Fix / Resolution | Within **2 weeks** (depending on severity) |

<br>

---

##  Security Measures

This project implements the following security practices:

### Headers & Configuration

- **Strict Content Security Policy** via Netlify headers
- **X-Frame-Options: DENY** — prevents clickjacking
- **X-Content-Type-Options: nosniff** — prevents MIME sniffing
- **Referrer-Policy** — controls referrer information
- **Permissions-Policy** — restricts browser features

### Build & Dependencies

- Dependencies are regularly updated via `npm audit`
- No server-side logic (fully static site) — **eliminates server-side attack vectors**
- No database, no API keys, no authentication — **minimal attack surface**

### Static Site Advantages

Since this is a **fully static Next.js export**:

- ✅ No server-side code execution
- ✅ No database connections to compromise
- ✅ No environment variables with secrets in production
- ✅ No user data collection or storage
- ✅ No authentication system to exploit

<br>

---

##  Scope

This security policy applies to:

- The **source code** in this repository
- The **deployed static site** on Netlify

This policy does **NOT** apply to:

- Apple Inc. or any Apple services
- Third-party dependencies (report those to their maintainers)
- The Netlify platform itself

<br>

---

##  Best Practices for Contributors

If you contribute to this project:

1. **Never commit secrets** — API keys, tokens, passwords
2. **Use environment variables** for any configuration that varies
3. **Keep dependencies updated** — run `npm audit` regularly
4. **Validate all inputs** — even in a static site, sanitize any user-facing content
5. **Follow OWASP guidelines** for web application security

<br>

---

##  Responsible Disclosure

We follow **responsible disclosure** principles:

- We will not take legal action against researchers who report vulnerabilities in good faith
- We will work with you to understand and resolve the issue promptly
- We will credit reporters (unless they prefer to remain anonymous)

<br>

---

<div align="center">

**Questions? Contact [ntoampilp@gmail.com](mailto:ntoampilp@gmail.com)**

</div>
