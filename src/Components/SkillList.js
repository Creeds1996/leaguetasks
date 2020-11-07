import "./SkillList.css";

const SkillList = (props) => {
  return (
    <ul className="SkillList">
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
