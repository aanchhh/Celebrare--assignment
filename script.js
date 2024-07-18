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

let draggedText = '';
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

quill.root.addEventListener('mousedown', function(e) {
    const range = quill.getSelection();
    if (range && range.length > 0) {
        draggedText = quill.getText(range.index, range.length);
        quill.deleteText(range.index, range.length);

        const span = document.createElement('span');
        span.classList.add('draggable-text');
        span.innerText = draggedText;
        document.getElementById('editor-container').appendChild(span);

        span.style.left = e.clientX + 'px';
        span.style.top = e.clientY + 'px';

        isDragging = true;
        offsetX = e.offsetX;
        offsetY = e.offsetY;

        span.addEventListener('mousedown', function(e) {
            isDragging = true;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
        });
    }
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});

document.addEventListener('mousemove', function(e) {
    if (isDragging && draggedText) {
        const span = document.querySelector('.draggable-text');
        if (span) {
            span.style.left = (e.clientX - offsetX) + 'px';
            span.style.top = (e.clientY - offsetY) + 'px';
        }
    }
});
