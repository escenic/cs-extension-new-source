var currentSource;
var currentPage;

var cs = require('content-studio');
var actions = require('actions');


// Store the current editor in a variable for when someone
// hits "ctrl+u"
cs.on('editor-active', function(editorcontrol) {
  currentPage = editorcontrol.uri;
});

var viewSourceAction = actions.createAction('View Source', 'shortcut U');
actions.addAction(viewSourceAction, 'tools');

viewSourceAction.on('action', function() {
  if (currentSource) {
    // remove the current "view source" tab to avoid 1000s of view
    // source pinned tabs...
    cs.removeTab(currentSource);
  }

  if (currentPage) {
    // When tabs are created with a URI, a web view is opened with it.
    cs.createTab(currentPage);
  }
  currentSource = currentPage;
});


