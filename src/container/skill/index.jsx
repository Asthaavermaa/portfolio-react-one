import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageholder";
import "./style.scss";

const Skill = () => {
  return (
    <section id="Skill" className="Skill">
      <PageHeaderContent
        headerText="Skill"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default Skill;
