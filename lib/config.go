package lib

import (
	"github.com/Cthulhu-tech/yomran/lib/funcs"
	"github.com/Cthulhu-tech/yomran/lib/hooks"
	"github.com/guark/guark/app"
	"github.com/guark/plugins/clipboard"
	"github.com/guark/plugins/dialog"
	"github.com/guark/plugins/notify"
)

// Exposed functions to guark Javascript api.
var Funcs = app.Funcs{
	"createRoom": funcs.CreateRoom,
}

// App hooks.
var Hooks = app.Hooks{
	"mounted": hooks.Mounted,
}

// App plugins.
var Plugins = app.Plugins{
	"dialog":    &dialog.Plugin{},
	"notify":    &notify.Plugin{},
	"clipboard": &clipboard.Plugin{},
}
