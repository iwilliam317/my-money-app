const selectTab = tabID => {
    console.log(tabID)
    return ({
        type: 'SELECT_TAB',
        payload: tabID
    })
}

export { selectTab }