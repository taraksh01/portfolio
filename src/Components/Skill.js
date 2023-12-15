const Skill = ({ heading, fills }) => {
  return (
    <table className="border w-48 hover:text-orange-400">
      <tbody>
        <tr>
          <th className="border text-lg p-0.5">{heading}</th>
        </tr>
        <tr>
          <td className="p-2">{fills?.join(" ")}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Skill;
