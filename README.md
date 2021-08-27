# Open App

A tiny service for open apps' URIs with URL.

# Usage

Give a query parameter named `app` which opens `app`://.

# API

| Query parameter        | Desciption                                                                                                                           | Default value      | Example                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------- |
| `app`                  | Required parameter. Open `app`:// if possible.                                                                                       | null               | https://abdullah-v.github.io/open-app/?app=vscode                                                       |
| `timeout`              | If `redirectAfterTimeout` given, redirect to `redirectAfterTimeout` after `timeout` milliseconds. Else close window after `timeout`. | 10000 (10 seconds) | https://abdullah-v.github.io/open-app/?app=vscode&timeout=5000                                          |
| `redirectAfterTimeout` | Redirect to `redirectAfterTimeout` after `timeout` milliseconds.                                                                     | null               | https://abdullah-v.github.io/open-app/?app=vscode&timeout=5000&redirectAfterTimeout=https://example.com |
