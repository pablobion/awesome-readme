import interact from "interactjs";

export default () => {
    // target elements with the "draggable" class
    interact(".draggable")
        .draggable({
            // enable inertial throwing
            inertia: true,
            // keep the element within the area of it's parent
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: "parent",
                    endOnly: true,
                }),
            ],
            // enable autoScroll
            autoScroll: true,

            listeners: {
                // call this function on every dragmove event
                move: dragMoveListener,

                // call this function on every dragend event
            },
        })
        .resizable({
            edges: { top: true, left: true, bottom: true, right: true },
            listeners: {
                move: function (event) {
                    Object.assign(event.target.style, {
                        width: `${event.rect.width}px`,
                        height: `${event.rect.height}px`,
                    });

                    const eventHeight = event.rect.height - 40;
                },
            },
        });

    function dragMoveListener(event) {
        var target = event.target.parentNode;
        console.log(event.target.parentNode);
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
        var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

        // translate the element
        target.style.transform = "translate(" + x + "px, " + y + "px)";

        // update the posiion attributes
        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
    }

    // this function is used later in the resizing and gesture demos
    window.dragMoveListener = dragMoveListener;
};
