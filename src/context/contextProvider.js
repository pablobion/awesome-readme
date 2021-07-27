import React, { createContext, useState, useContext, useEffect, useRef } from "react";

export const ConfigsContext = createContext();

export default function ConfigsProvider({ children }) {
    const [visibleModalMarkdownEditor, setVisibleModalMarkdownEditor] = useState(true);

    const OpenAndCloseEditor = () => setVisibleModalMarkdownEditor(!visibleModalMarkdownEditor);

    return <ConfigsContext.Provider value={{ visibleModalMarkdownEditor, setVisibleModalMarkdownEditor, OpenAndCloseEditor }}>{children}</ConfigsContext.Provider>;
}

export function useConfigs() {
    const context = useContext(ConfigsContext);
    if (!context) throw new Error("useCount must be used within a Provider");

    const { visibleModalMarkdownEditor, setVisibleModalMarkdownEditor, OpenAndCloseEditor } = context;

    return { visibleModalMarkdownEditor, setVisibleModalMarkdownEditor, OpenAndCloseEditor };
}
