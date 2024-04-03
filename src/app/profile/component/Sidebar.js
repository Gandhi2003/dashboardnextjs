import Aside  from "../component/Aside";
import items from "../component/data/sidebar.json";
export default function Sidebar() {
    return (
        <div>
            {items.map((item,index)=><Aside key={index} />)}
        </div>
    )
}