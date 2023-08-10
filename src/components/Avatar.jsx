import React, { useEffect } from "react";
import { Switch } from "devextreme-react";

export default function Avatar(props) {
  const { name, handlerOnAttend, isEditable, className } = props;
  const [switchValue, setSwichValue] = React.useState();
  const [imgClass, setImgClass] = React.useState("grayscale_img_3");

  useEffect(() => {
    if (className) setImgClass(className);
  }, []);
  const handlerSwitchOnValueChnaged = (e) => {
    try {
      setSwichValue(e.value);
      setImgClass(e.value ? "grayscale_img_1" : "grayscale_img_3");
      handlerOnAttend({
        name: name,
        isAttend: e.value,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const imgSrc = `./public/profile/${name}.png`;
  const handlerImgOnError = (e) => {
    try {
      e.target.src = "./public/profile/김덕배.png";
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div style={{ margin: "2px" }}>
      <img
        // src="https://i.pravatar.cc/50"
        src={imgSrc}
        onError={handlerImgOnError}
        style={{ borderRadius: "50px", width: "60px" }}
        className={imgClass}
      ></img>
      <div>{name}</div>
      <Switch
        visible={isEditable}
        defaultValue={false}
        switchedOffText={"불참"}
        switchedOnText={"참석"}
        onValueChanged={handlerSwitchOnValueChnaged}
      ></Switch>
    </div>
  );
}
