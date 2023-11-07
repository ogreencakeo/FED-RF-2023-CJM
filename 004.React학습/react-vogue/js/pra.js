import FooterArea from "./components/footer_area";
import MainCategory from "./components/main_area";
import TopArea from "./components/top_area";

function MainComponent(){
    const params = new URLSearchParams(location.href);
    const catName = decodeURIComponent(params.get('cat'));
    const chgCat = (val) => {
        setNowCat(val);
    }
    const [nowCat, setNowCat] = React.useState(catName);
    return(
        <catContext.Provider value={{chgCat}}>
            <TopArea />
            <MainCategory category={nowCat} />
            <FooterArea />
        </catContext.Provider>
    );
}