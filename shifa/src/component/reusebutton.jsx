export function ReuseButton ({func, text = "Click", style = {}}){

    return (
        <button type="submit" style={style} onClick={func} className="reuseBtn">{text}</button>
    )
}

