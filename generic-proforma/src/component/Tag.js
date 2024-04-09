function Tag(props) {
    const { tagName, setCurTab } = props
    return <div onClick={e => setCurTab(tagName)} style={{height: "30px", border: "1px solid black", width: '100%'}} className="centerText">
        {tagName}
    </div>
}

export default Tag;