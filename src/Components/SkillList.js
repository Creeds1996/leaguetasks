import "./SkillList.css";

const SkillList = (props) => {
  return (
    <ul className="SkillList">
      <span style={{ fontWeight: "bold", fontSize: "105%" }}>
        Skill Requirements
      </span>
      {props.Skills.map((skill) => {
        return (
          <li className={`SkillList-Item ${skill.Name}`}>
            {skill.Level + " " + skill.Name}
          </li>
        );
      })}
    </ul>
  );
};

export default SkillList;
