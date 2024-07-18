var quill = new Quill('#editor-container', {
    modules: {
        toolbar: '#toolbar-container'
    },
    theme: 'snow'
});

// Add Text Button
document.getElementById('add-text').onclick = function() {
    quill.focus();
};

// Undo and Redo
document.getElementById('undo').onclick = function() {
    quill.history.undo();
};
document.getElementById('redo').onclick = function() {
    quill.history.redo();
};