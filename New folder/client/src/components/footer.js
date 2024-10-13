export function Footer(){
    const a="orange";
    return(
        <>
        <footer>
            <p>&copy;{new Date().getFullYear()}Your website</p>
        </footer>,
        <ul>
            <li>{a.toUpperCase()}</li>
        </ul>
        </>
    );
}