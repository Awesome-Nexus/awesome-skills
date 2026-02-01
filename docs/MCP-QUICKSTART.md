# MCP Quick Start Guide

> Get up and running with Model Context Protocol in 5 minutes.

---

## What is MCP?

**Model Context Protocol** is an open protocol that enables AI assistants to:
- Access **tools** (functions to call)
- Read **resources** (contextual data)
- Use **prompts** (reusable templates)

Think of it as **USB-C for AI applications** - universal plug-and-play for AI capabilities.

---

## Prerequisites

- Claude Desktop installed (or other MCP client)
- Node.js 18+ (for npx servers)
- Or Python 3.10+ (for Python servers)

---

## ⚡ 5-Minute Quick Start

### Step 1: Install Claude Desktop
Download from [claude.ai/download](https://claude.ai/download)

### Step 2: Add Your First MCP Server

Create `~/Library/Application Support/Claude/claude_desktop_config.json` (Mac) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/yourname/Desktop"]
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "your-key-here"
      }
    }
  }
}
```

### Step 3: Restart Claude Desktop

Look for the 🔨 hammer icon - your tools are ready!

### Step 4: Try It Out

Ask Claude:
- "List files on my Desktop"
- "Search the web for MCP documentation"
- "Read the README from my project folder"

---

## 🛠️ Popular Server Combinations

### Developer Setup
```json
{
  "mcpServers": {
    "filesystem": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-filesystem", "."] },
    "github": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-github"], "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "token" }},
    "git": { "command": "uvx", "args": ["mcp-server-git"] },
    "postgres": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-postgres"], "env": { "DATABASE_URL": "postgresql://..." }}
  }
}
```

### Research Setup
```json
{
  "mcpServers": {
    "brave-search": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-brave-search"], "env": { "BRAVE_API_KEY": "key" }},
    "puppeteer": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-puppeteer"] }
  }
}
```

### Productivity Setup
```json
{
  "mcpServers": {
    "slack": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-slack"], "env": { "SLACK_TOKEN": "token" }},
    "notion": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-notion"], "env": { "NOTION_TOKEN": "token" }}
  }
}
```

---

## 📋 Configuration Reference

### MacOS Config Location
```
~/Library/Application Support/Claude/claude_desktop_config.json
```

### Windows Config Location
```
%APPDATA%\Claude\claude_desktop_config.json
```

### Linux Config Location
```
~/.config/Claude/claude_desktop_config.json
```

---

## 🔧 Troubleshooting

### "Command not found: npx"
```bash
# Install Node.js
brew install node  # Mac
# or
nvm install 20     # Any platform
```

### "Server not showing up"
1. Check JSON syntax is valid
2. Verify the server installed: `npx @modelcontextprotocol/server-name --help`
3. Restart Claude Desktop completely
4. Check logs: `~/Library/Logs/Claude/` (Mac)

### "Permission denied"
```bash
# Make sure npx has execute permissions
chmod +x $(which npx)
```

---

## 🎯 Next Steps

1. **[Build Your Own Server](../resources/links/MCP-SERVER-REGISTRY.md#building-your-own)**
2. **[Explore More Servers](../resources/links/MCP-SERVER-REGISTRY.md)**
3. **[Read Protocol Docs](https://modelcontextprotocol.io)**

---

## 💡 Pro Tips

- **Start simple**: Add one server at a time
- **Use Smithery**: `npx @smithery/cli install <server>` for unified installs
- **Local first**: Use filesystem server for local file operations
- **API keys**: Store in env vars, never in committed files
- **Security**: Only grant access paths you trust

---

*Happy MCP-ing! 🚀*
