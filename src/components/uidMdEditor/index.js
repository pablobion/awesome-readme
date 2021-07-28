import { useState, useRef } from "react";
import MDEditor, { commands, ICommand } from "@uiw/react-md-editor";

//styles
import styled from "styled-components";

//custom
import quote from "./CustomToolbar/quote";
import table from "./CustomToolbar/table";

//scripts
import interact from "interactjs";

//ui
import { Button } from "@material-ui/core";

//icons
import { MdClose } from "react-icons/md";
import { VscChromeMinimize } from "react-icons/vsc";

//contents
import { useConfigs } from "../../context/contextProvider";

const Container = styled.div`
    width: 600px;
    height: 550px;
    padding: 0.5rem;
    backdrop-filter: blur(4px) saturate(100%);
    -webkit-backdrop-filter: blur(4px) saturate(100%);
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    box-shadow: 3px 5px 10px -7px black;
    margin-right: 2rem;
    position: absolute;
    left: 25%;
    top: 5%;

    #button-header {
        display: flex;
        justify-content: flex-end;
    }
`;

function UidMdEditor() {
    const [value, setValue] = useState("**Hello world!!!**\n\n");
    const [heightValue, setHeightValue] = useState(500);

    const { visibleModalMarkdownEditor, OpenAndCloseEditor } = useConfigs();

    interact(".draggable").draggable({
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: "parent",
                endOnly: true,
            }),
        ],
        autoScroll: true,

        listeners: {
            move: dragMoveListener,
        },
    });
    interact(".resizable").resizable({
        edges: { top: true, left: true, bottom: true, right: true },
        listeners: {
            move: function (event) {
                let { x, y } = event.target.dataset;
                if (event.rect.height < 200 || event.rect.width < 400) return false;

                x = (parseFloat(x) || 0) + event.deltaRect.left;
                y = (parseFloat(y) || 0) + event.deltaRect.top;

                Object.assign(event.target.style, {
                    width: `${event.rect.width}px`,
                    height: `${event.rect.height}px`,
                    transform: `translate(${x}px, ${y}px)`,
                });

                setHeightValue(event.rect.height - 50);

                Object.assign(event.target.dataset, { x, y });
            },
        },
    });

    function dragMoveListener(event) {
        var target = event.target.parentNode;

        var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
        var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

        target.style.transform = "translate(" + x + "px, " + y + "px)";

        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
    }

    window.dragMoveListener = dragMoveListener;

    return (
        <Container className="resizable" style={{ visibility: visibleModalMarkdownEditor ? "visible" : "hidden" }}>
            <div id="button-header" className="draggable">
                <Button color="primary">
                    <VscChromeMinimize size={25} color="white" onClick={OpenAndCloseEditor} />
                </Button>
                <Button>
                    <MdClose size={25} color="white" onClick={OpenAndCloseEditor} />
                </Button>
            </div>

            <MDEditor
                class="h-full bg-white pb-2 rounded-xl"
                value={value}
                onChange={setValue}
                visiableDragbar={false}
                height={heightValue}
                style={{ backgroundColor: "white", borderRadius: "1rem" }}
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
        </Container>
    );
}

export default UidMdEditor;
