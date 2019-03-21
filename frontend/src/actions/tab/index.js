const selectTab = tabID => {
    console.log(tabID)
    return ({
        type: 'SELECT_TAB',
        payload: tabID
    })
}

const showTabs = (...tabs) => {
    const tabsToShow = {}
    tabs.forEach(tab => tabsToShow[tab] = true)
    return ({
        type: 'SHOW_TABS',
        payload: tabsToShow
    })
}
export { selectTab, showTabs }