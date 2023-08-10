import React from "react";
import { Box, Button } from "devextreme-react";
import { Width } from "devextreme-react/chart";
import "devextreme/dist/css/dx.light.css";
import Avatar from "../components/Avatar";
import member from "../data/member";
import { Item } from "devextreme-react/box";

export default function Home() {
  const [ateam, setAteam] = React.useState();
  const [bteam, setBteam] = React.useState();
  const [cteam, setCteam] = React.useState();

  const shuffle = (array) => {
    for (let index = array.length - 1; index > 0; index--) {
      // 무작위 index 값을 만든다. (0 이상의 배열 길이 값)
      const randomPosition = Math.floor(Math.random() * (index + 1));

      // 임시로 원본 값을 저장하고, randomPosition을 사용해 배열 요소를 섞는다.
      const temporary = array[index];
      array[index] = array[randomPosition];
      array[randomPosition] = temporary;
    }
  };

  const handlerRndBtnOnClick2 = (e) => {
    try {
      const attendMember = member.filter((f) => f.isAttend === true);
      shuffle(attendMember);

      let aTeam = [];
      let bTeam = [];

      for (let i = 0; i < attendMember.length; i++) {
        if ((i + 1) % 2 === 0) bTeam.push(attendMember[i]);
        else aTeam.push(attendMember[i]);
      }

      console.log("aTeam", aTeam);
      console.log("bTeam", bTeam);

      setAteam(aTeam);
      setBteam(bTeam);
    } catch (err) {
      console.error(err);
    }
  };

  const handlerRndBtnOnClick3 = (e) => {
    try {
      const attendMember = member.filter((f) => f.isAttend === true);
      shuffle(attendMember);

      let aTeam = [];
      let bTeam = [];
      let cTeam = [];

      for (let i = 0; i < attendMember.length; i++) {
        if ((i + 1) % 3 === 0) cTeam.push(attendMember[i]);
        else if ((i + 1) % 2 === 0) bTeam.push(attendMember[i]);
        else aTeam.push(attendMember[i]);
      }

      console.log("aTeam", aTeam);
      console.log("bTeam", bTeam);
      console.log("cTeam", cTeam);

      setAteam(aTeam);
      setBteam(bTeam);
      setCteam(cTeam);
    } catch (err) {
      console.error(err);
    }
  };

  const handlerStartBtnOnClick = (e) => {
    try {
    } catch (err) {
      console.error(err);
    }
  };
  const handlerOnPart = (e) => {
    try {
      member.find((f) => f.name === e.name)["isAttend"] = e.isAttend;
    } catch (err) {
      console.error(err);
    }
  };
  const memberRender = (member) => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {member.map((m) => {
          return (
            <Avatar
              key={m.name}
              name={m.name}
              handlerOnAttend={handlerOnPart}
              isEditable={true}
            ></Avatar>
          );
        })}
      </div>
    );
  };
  const memberRenderNoEdit = (member) => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {member.map((m) => {
          return (
            <Avatar
              key={m.name}
              name={m.name}
              handlerOnAttend={handlerOnPart}
              className="grayscale_img_1"
              isEditable={false}
            ></Avatar>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <h1>월천 FC</h1>
      {memberRender(member)}
      <br />
      <Button
        className="rndBtn"
        text="랜덤 2팀 구성"
        onClick={handlerRndBtnOnClick2}
      ></Button>
      <Button
        className="rndBtn"
        text="랜덤 3팀 구성"
        onClick={handlerRndBtnOnClick3}
      ></Button>
      <br />
      <br />
      {ateam && <h3>A 팀</h3>}
      {ateam && memberRenderNoEdit(ateam)}
      {bteam && <h3>B 팀</h3>}
      {bteam && memberRenderNoEdit(bteam)}
      {cteam && <h3>C 팀</h3>}
      {cteam && memberRenderNoEdit(cteam)}

      <br />
    </>
  );
}
