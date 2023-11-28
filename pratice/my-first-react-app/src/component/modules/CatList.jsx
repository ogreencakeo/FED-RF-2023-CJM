import "../../css/cat_list.css";
import { SwiperCat } from "../plugin/SwiperCat";
export function CatList() {
    return (
        <>
            <section className="cat-swbox">
                <h2 className="tit">WHO'S WHO: THE JUSTICE LEAGUE</h2>
                <SwiperCat />
            </section>
        </>
    );
}
