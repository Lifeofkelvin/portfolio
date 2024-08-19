function SkillList({src, skill}) {
  return (
    <span>
       <img src={src} alt="Checkmark con" />
       <p>{skill}</p>
    </span>
  )
}

export default SkillList
