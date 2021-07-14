import { useState } from "react";
import MDEditor, { commands, ICommand } from "@uiw/react-md-editor";

import quote from "./CustomToolbar/quote";
import table from "./CustomToolbar/table";

function UidMdEditor() {
    const [markdown, setMarkdown] = useState("");
    const [value, setValue] = useState("**Hello world!!!**");

    return (
        <>
            <MDEditor
                value={value}
                onChange={setValue}
                height={500}
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
        </>
    );
}

export default UidMdEditor;
