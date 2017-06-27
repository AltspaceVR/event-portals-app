function param(p) {
    var matches = location.search.match(new RegExp('[?&]' + p + '=([^&]+)'));
    if (matches) { return decodeURIComponent(matches[1]); }
}

function main() {
    var eventId = param('eventId');
    var position = param('position');
    if (position) { position = position.replace(/[, ]+/, ' '); }
    var rotation = param('rotation');
    if (rotation) { rotation = rotation.replace(/[, ]+/, ' '); }
    var title = param('title');

    if (!eventId) { return; }

    var newPortal = document.createElement("a-entity");
    newPortal.setAttribute("n-portal", "targetEvent: " + eventId);
    if (position) { newPortal.setAttribute("position", position); }
    if (rotation) { newPortal.setAttribute("rotation", rotation); }

    if (title) {
        var eventTitle = document.createElement("a-entity");
        eventTitle.setAttribute("n-text", "text: " + title + "; fontSize: 2; width: 2;");
        eventTitle.setAttribute("position", "0 0.3 0");
        newPortal.appendChild(eventTitle);
    }

    document.body.querySelector('a-scene').appendChild(newPortal);
}

main();
