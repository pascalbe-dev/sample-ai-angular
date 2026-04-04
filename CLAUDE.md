# CLAUDE.md

## Setup

Bevor du mit der Arbeit in diesem Repository beginnst, stelle sicher, dass das Git-Submodul geklont wurde:

```bash
git submodule update --init --recursive
```

Das Submodul `.claude` enthält die gemeinsame Agent-Konfiguration und muss vorhanden sein, bevor du fortfährst.

## Submodul hinzufügen (nur für neue Repos)

Falls das Submodul in einem neuen Repository eingerichtet werden soll, verwende die HTTPS-URL (nicht SSH):

```bash
git submodule add https://github.com/pascalbe-dev/agent-config.git .claude
```
