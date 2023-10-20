const Skill = ({ heading, fills }) => {
  return (
    <table className="border w-56 hover:text-orange-100">
      <tbody>
        <tr>
          <th className="border text-xl p-0.5">{heading}</th>
        </tr>
        <tr>
          <td className="text-lg p-2">{fills.join(" ")}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Skill;
