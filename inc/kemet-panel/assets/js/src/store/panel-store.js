const PanelContext = React.createContext({
    tabs: [],
})

export const PanelProvider = (props) => {
    const tabs = [];

    const tabsContext = {
        tabs,
    };
    return <PanelContext.Provider value={tabsContext}>
        {props.children}
    </PanelContext.Provider>
}

export default PanelContext