import STIconLink from "../../UI/STIconLink";
import STIconLinkFA from "../../UI/STIconLinkFA";

const LeftConstColumn = () => {
    return (
        <div className="left-const-column left-panel__const-column left-panel__column">
          <div className="left-const-column__container">
            <div className="left-const-column__row">
              <STIconLink
                hrefLink="/profile"
                linkSecondaryClassName=""
                iconSecondaryClassName=""
                iconSrc="https://sun9-40.userapi.com/s/v1/ig2/NqbLxnVAHZEpEqY2ZCuYCCLyPp8JApSda8YSLfhnhyhw8_kGAd7xu7bTXdj_rUYHbL6zMYCqcKGyjU7vdsZj3RJ5.jpg?size=400x400&quality=95&crop=183,0,500,500&ava=1"
                iconAlt="profile icon"
              />
            </div>
            <div className="left-const-column__row">
              <STIconLinkFA
                hrefLink="/settings"
                iconSecondaryClassname="fa-solid fa-gear"
              />
            </div>
          </div>
        </div>
    );
}
 
export default LeftConstColumn;