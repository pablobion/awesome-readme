import { useState } from "react";
import MDEditor, { commands, ICommand } from "@uiw/react-md-editor";

//styles
import tw from "tailwind-styled-components";

//custom
import quote from "./CustomToolbar/quote";
import table from "./CustomToolbar/table";

//scripts
import resize from "./scripts/moveAndResize";
import interact from "interactjs";

//ui
import { Button } from "@material-ui/core";

//icons
import { MdClose } from "react-icons/md";
import { VscChromeMinimize } from "react-icons/vsc";

function UidMdEditor() {
    const [value, setValue] = useState("**Hello world!!!**\n\n");
    const [height, setHeight] = useState(495);

    const [invisible, setInvisible] = useState(false);

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
                    setHeight(eventHeight);
                },
            },
        });

    function dragMoveListener(event) {
        var target = event.target;
        // var target = event.target.parentNode;

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

    const Container = tw.div`draggable w-10/12 bg-yellow-100 h-5/6 px-1 rounded-lg bg-opacity-25 backdrop-filter backdrop-blur-md shadow-2xl shadow-inner-2xl
    `;

    return (
        <div className={`draggable w-10/12 bg-yellow-100 h-5/6 px-1 rounded-lg bg-opacity-25 backdrop-filter backdrop-blur-md shadow-2xl shadow-inner-2xl ${invisible ? "invisible" : ""}`}>
            <div className="flex justify-end">
                <Button color="primary">
                    <VscChromeMinimize size={25} color="white" />
                </Button>
                <Button>
                    <MdClose size={25} color="white" />
                </Button>
            </div>

            <MDEditor
                class="h-full bg-white pb-2 rounded-xl"
                value={value}
                onChange={setValue}
                visiableDragbar={false}
                height={height}
                commands={[
                    // Custom Toolbars
                    commands.group([commands.title1, commands.title2, commands.title3, commands.title4, commands.title5, commands.title6], {
                        name: "title",
                        groupName: "title",
                        buttonProps: { "aria-label": "Insert title" },
                    }),
                    commands.bold,
                    commands.italic,
                    commands.strikethrough,
                    commands.link,
                    commands.image,
                    commands.code,
                    commands.divider,
                    commands.hr,
                    quote,
                    table,
                ]}
            />
        </div>
    );
}

export default UidMdEditor;
