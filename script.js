var quill = new Quill('#editor-container', {
    modules: {
        toolbar: '#toolbar-container'
    },
    theme: 'snow'
});

document.getElementById('add-text').onclick = function() {
    quill.focus();
};

document.getElementById('undo').onclick = function() {
    quill.history.undo();
};
document.getElementById('redo').onclick = function() {
    quill.history.redo();
};