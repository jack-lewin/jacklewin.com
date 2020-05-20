Prefix
  - default:                  Ctrl + B
  - for `screen` commands:    Ctrl + A

# Session management

Create session
  - `tmux`
  - `tmux new -s orderweb`    # create a named session
  - `tmux new -d`             # create a detached session

Attach to session
  - `tmux attach`             # attach to last created session
  - `tmux a -t cwa`           # attach to named session

List sessions
  - `tmux ls`

Detach from session
  - `Ctrl+B  d`

Kill session
  - `tmux kill-session -t cwa`
  - `Ctrl+B  x`

Kill server (and all sessions)
  - `tmux kill-server`


# Window management

Split horizontally
  - `Ctrl+B "`

Split vertically
  - `Ctrl+B %`

Switch between panes
  - `Ctrl+B [arrow]`
  - `Ctrl+B  o`

Kill pane
  - `Ctrl+B  x`

