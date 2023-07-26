import './index.css'

export default function Header(){
    return(<>
        <div className="nav-container">
            <div className="nav-sub-ct">
                <div className="nav-sub-ct-left">
                    <img src="https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-spoon-and-fork-icon-isolated-png-image_1726569.jpg" />
                    <h2>Food's Restaurant</h2>
                </div>
                {window.location.pathname == "/menu" ? <div className="nav-sub-ct-right">
                    <span>{0}</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/60/60992.png" />
                </div> : <div></div>}
            </div>
        </div>
    
    </>)
}